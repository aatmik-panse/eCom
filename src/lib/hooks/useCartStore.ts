import { create } from "zustand";
import { round2 } from "../utils/utils";
import { OrderItem } from "../models/OrderModel";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};
const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>(() => initialState);

export default function useCartService() {
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    cartStore();
  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    increaseItem: (item: OrderItem) => {
      const existing = items.find((x) => x.id === item.id);
      const newItems = existing
        ? items.map((x) =>
            x.id === item.id
              ? { ...existing, quantity: existing.quantity + 1 }
              : x
          )
        : [...items, { ...item, quantity: 1 }];
      const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
        calculateCart(newItems);
      cartStore.setState({
        items: newItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
    },
  };
}

const calculateCart = (items: OrderItem[]) => {
  const itemsPrice = round2(
    items.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const taxPrice = round2(itemsPrice * 0.18);
  const shippingPrice = itemsPrice > 500 ? 0 : 50;
  const totalPrice = round2(itemsPrice + taxPrice + shippingPrice);
  return { itemsPrice, taxPrice, shippingPrice, totalPrice };
};
