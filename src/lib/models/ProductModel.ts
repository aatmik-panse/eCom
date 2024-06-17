export type Product = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  image: string;
  banner?: string;
  category?: string;
  countInStock?: number;
  rating?: number;
  numReviews?: number;
  brand?: string;
  colors?: string[];
  sizes?: string[];
};
