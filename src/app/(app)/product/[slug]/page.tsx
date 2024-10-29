import AddToCart from "@/components/products/AddToCart";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";
import { convertDocToObj } from "@/lib/utils/utils";
// import { Rating } from "@/components/products/Rating";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }
  return (
    <>
      <div className="my-4">
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to products
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-6">
        <div className="md:col-span-2 max-w-md mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ul className="space-y-6">
            <li>
              <h1 className="text-2xl font-bold">{product.title}</h1>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">{product.rating?.rate}</span>
                <span className="text-gray-600">
                  ({product.rating?.count} reviews)
                </span>
              </div>
            </li>
            <li className="text-lg font-semibold">{product.brand}</li>
            <li>
              <div className="border-t border-gray-300 my-4"></div>
            </li>
            <li>
              <h2 className="text-lg font-semibold">Description:</h2>
              <p className="text-gray-700">{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0 p-4 rounded-lg">
            <div className="card-body">
              <div className="mb-4 flex justify-between text-lg">
                <div className="font-semibold">Price</div>
                <div className="text-green-600">${product.price}</div>
              </div>
              <div className="mb-4 flex justify-between text-lg">
                <div className="font-semibold">Status</div>
                <div
                  className={
                    product.countInStock > 0
                      ? "text-green-600"
                      : "text-green-600"
                  }
                >
                  {product.countInStock > 0 ? "In stock" : "In stock"}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: "",
                      size: "",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
