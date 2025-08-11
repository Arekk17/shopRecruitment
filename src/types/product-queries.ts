import type { Product } from "./product";

export type SortOrder = "asc" | "desc";

export interface FetchProductsParams {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: SortOrder;
  select?: ReadonlyArray<keyof Product>;
}

export interface SearchProductsParams {
  q: string;
  limit?: number;
  skip?: number;
  select?: ReadonlyArray<keyof Product>;
}
