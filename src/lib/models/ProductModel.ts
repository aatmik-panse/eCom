import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true },
    banner: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;

export type Product = {
  _id?: string;
  slug: string;
  name: string;
  description?: string;
  price?: number;
  image: string;
  banner?: string;
  category?: string;
  countInStock: number;
  rating?: number;
  numReviews?: number;
  brand?: string;
  colors?: string[];
  sizes?: string[];
};
