# Shop Recruitment - React E-commerce App

A modern React e-commerce application built with TypeScript, TanStack Query, and Tailwind CSS.

## 🚀 Features

- **Product Catalog**: Browse featured products and new arrivals
- **Search Functionality**: Real-time product search with debounced input
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript coverage
- **Data Fetching**: Efficient caching with TanStack Query
- **Code Quality**: ESLint + Prettier with pre-commit hooks

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Data Fetching**: TanStack Query v5, Axios
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier, Husky
- **API**: DummyJSON (configurable via environment variables)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd shop-recruitment
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)

   ```bash
   cp .env.example .env.local
   # Edit .env.local if you want to use a different API
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable UI components
│   ├── layout/         # Layout components
│   └── products/       # Product-related components
├── constants/          # Application constants
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🔌 API Configuration

The app uses [DummyJSON](https://dummyjson.com) as the default API. You can configure a different API by setting the `VITE_API_URL` environment variable:

```bash
# .env.local
VITE_API_URL=https://your-api-url.com
```

## 🎨 Styling

The project uses Tailwind CSS v4 with custom theme configuration:

- **Brand Colors**: Custom color palette defined in `src/index.css`
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Component Styling**: Utility-first CSS classes

## 🧪 Development

### Code Quality

- **ESLint**: Configured with TypeScript and React rules
- **Prettier**: Automatic code formatting
- **Husky**: Pre-commit hooks for linting and formatting

### TypeScript

- Strict mode enabled
- Custom type definitions for API responses
- Proper typing for all components and hooks

### State Management

- **TanStack Query**: For server state management
- **React Hooks**: For local component state
- **Custom Hooks**: Reusable logic (e.g., `useDebouncedValue`)

## 🚀 Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is private and proprietary.
