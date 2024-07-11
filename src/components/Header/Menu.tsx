"use client";

import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link href="/cart" className="btn  btn-ghost rounded-btn text-xl">
            Cart
            {mounted && items.length != 0 && (
              <div className=" badge badge-secondary">
                {items.reduce((a, b) => a + b.quantity, 0)}
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
