import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "../types";
import { readJson, writeJson } from "../lib/storage";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  announcement: string;
  addItem: (item: CartItem) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    size?: string,
    colour?: string,
  ) => void;
  removeItem: (productId: string, size?: string, colour?: string) => void;
  clearCart: () => void;
  clearAnnouncement: () => void;
  resolveQuantity: (product: Product) => number;
};

const CART_STORAGE_KEY = "home-of-fitness-cart";

const CartContext = createContext<CartContextValue | null>(null);

function sameVariant(left: CartItem, right: CartItem) {
  return (
    left.productId === right.productId &&
    left.size === right.size &&
    left.colour === right.colour
  );
}

function clampQuantity(value: number) {
  if (!Number.isFinite(value)) {
    return 1;
  }
  return Math.min(9, Math.max(1, Math.round(value)));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    readJson<CartItem[]>(CART_STORAGE_KEY, []),
  );
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    writeJson(CART_STORAGE_KEY, items);
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      announcement,
      addItem: (item) => {
        setItems((current) => {
          const quantity = clampQuantity(item.quantity);
          const nextItem: CartItem = {
            productId: item.productId,
            quantity,
            ...(item.size ? { size: item.size } : {}),
            ...(item.colour ? { colour: item.colour } : {}),
          };
          const existingIndex = current.findIndex((entry) =>
            sameVariant(entry, nextItem),
          );

          if (existingIndex === -1) {
            setAnnouncement("Item added to cart.");
            return [...current, nextItem];
          }

          const next = current.slice();
          const existing = next[existingIndex];
          if (!existing) {
            return current;
          }
          next[existingIndex] = {
            ...existing,
            quantity: clampQuantity(existing.quantity + quantity),
          };
          setAnnouncement("Cart quantity updated.");
          return next;
        });
      },
      updateQuantity: (productId, quantity, size, colour) => {
        setItems((current) => {
          const next = current
            .map((entry) =>
              entry.productId === productId &&
              entry.size === size &&
              entry.colour === colour
                ? { ...entry, quantity: clampQuantity(quantity) }
                : entry,
            )
            .filter((entry) => entry.quantity > 0);
          setAnnouncement("Cart quantity updated.");
          return next;
        });
      },
      removeItem: (productId, size, colour) => {
        setItems((current) => {
          const next = current.filter(
            (entry) =>
              !(
                entry.productId === productId &&
                entry.size === size &&
                entry.colour === colour
              ),
          );
          setAnnouncement("Item removed from cart.");
          return next;
        });
      },
      clearCart: () => {
        setItems([]);
        setAnnouncement("Cart cleared.");
      },
      clearAnnouncement: () => setAnnouncement(""),
      resolveQuantity: (product) =>
        items
          .filter((entry) => entry.productId === product.id)
          .reduce((sum, entry) => sum + entry.quantity, 0),
    };
  }, [announcement, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
