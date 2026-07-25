import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, beforeEach } from "vitest";
import { CartProvider, useCart } from "./CartContext";

function Harness() {
  const { items, itemCount, addItem, updateQuantity } = useCart();
  const [variant] = useState({
    productId: "atlas-tee",
    size: "M",
    colour: "Black",
  });

  return (
    <div>
      <p>count:{itemCount}</p>
      <p>items:{items.length}</p>
      <button
        type="button"
        onClick={() =>
          addItem({
            productId: variant.productId,
            quantity: 1,
            size: variant.size,
            colour: variant.colour,
          })
        }
      >
        add
      </button>
      <button
        type="button"
        onClick={() => updateQuantity("atlas-tee", 12, "M", "Black")}
      >
        set high
      </button>
    </div>
  );
}

describe("CartContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persists items and caps quantity", async () => {
    const user = userEvent.setup();
    const { unmount } = render(
      <CartProvider>
        <Harness />
      </CartProvider>,
    );

    await user.click(screen.getByRole("button", { name: "add" }));
    await user.click(screen.getByRole("button", { name: "add" }));
    expect(screen.getByText("count:2")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "set high" }));
    expect(screen.getByText("count:9")).toBeInTheDocument();

    unmount();

    render(
      <CartProvider>
        <Harness />
      </CartProvider>,
    );

    expect(screen.getByText("count:9")).toBeInTheDocument();
    expect(screen.getByText("items:1")).toBeInTheDocument();
  });
});
