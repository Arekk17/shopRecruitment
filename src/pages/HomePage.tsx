import ContentContainer from "../components/layout/ContentContainer";
import ProductList from "../components/products/ProductList";
import Section from "../components/products/Section";
import {
  useFeaturedProductsQuery,
  useNewArrivalsProductsQuery,
} from "../services/products";

interface HomePageProps {
  query?: string;
}

export default function HomePage({ query = "" }: HomePageProps) {
  const isSearching = query.trim().length > 0;

  const {
    data: featured,
    isLoading: loadingFeatured,
    isError: errorFeatured,
    refetch: refetchFeatured,
  } = useFeaturedProductsQuery({ limit: 10 });

  const {
    data: newArrivals,
    isLoading: loadingNew,
    isError: errorNew,
    refetch: refetchNew,
  } = useNewArrivalsProductsQuery({ limit: 10 });

  return (
    <ContentContainer>
      {isSearching ? (
        <ProductList title="Products – Search Results" q={query} />
      ) : (
        <div className="flex flex-col gap-8">
          <Section
            title="Featured Products"
            data={featured}
            isLoading={loadingFeatured}
            isError={errorFeatured}
            onRetry={refetchFeatured}
          />
          <Section
            title="New Arrivals"
            data={newArrivals}
            isLoading={loadingNew}
            isError={errorNew}
            onRetry={refetchNew}
          />
        </div>
      )}
    </ContentContainer>
  );
}
