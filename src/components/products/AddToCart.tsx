"use client";

import React from "react";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useCartService from "@/lib/hooks/useCartStore";

export default function AddToCart({ product }: { product: OrderItem }) {
  //   const router = useRouter();

  const { items, increaseItem } = useCartService();
  const [existing, setExisting] = useState<OrderItem | undefined>();
  useEffect(() => {
    setExisting(items.find((x) => x.id === product.id));
  }, [items, product]);

  const addToCartHandler = () => {
    increaseItem(product);
  };

  return existing ? (
    <div>
      <button className="btn " type="button">
        {" "}
        -{" "}
      </button>
      <span className=" px-2">{existing.quantity}</span>
      <button
        className="btn "
        type="button"
        onClick={() => increaseItem(existing)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary w-full"
      type="button"
      onClick={addToCartHandler}
    >
      {" "}
      AddToCart{" "}
    </button>
  );
}
