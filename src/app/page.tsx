import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-2xl p-2 text-center">
      Home Page
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-rows-4">
        {data.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
