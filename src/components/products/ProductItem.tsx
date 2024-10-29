import { Product } from "@/lib/models/ProductModel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="group border-gray-100/30  flex w-full max-w-md flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl"
        href={`/product/${product.slug}`}
      >
        <Image
          className="w-full h-fit object-cover"
          src={product.image}
          alt="product image"
          width={100}
          height={100}
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-white">{product.title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-white">
              ${product.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
