import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useDebouncedValue } from "./hooks/useDebouncedValue";

function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 400);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onSearch={setQuery} value={query} />
      <main className="flex flex-col items-center">
        <HomePage query={debouncedQuery} />
      </main>
    </div>
  );
}

export default App;
