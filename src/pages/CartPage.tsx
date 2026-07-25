import { Link } from "react-router-dom";
import { products } from "../data/commerceData";
import { MotionSection } from "../components/Motion";
import { EmptyState, SectionHeading } from "../components/Shared";
import { useCart } from "../context/CartContext";
import { useDocumentMeta } from "../components/Seo";
import { formatNaira } from "../lib/money";

export function CartPage() {
  useDocumentMeta(
    "Cart | Home of Fitness",
    "Review the Home of Fitness cart with persistent items, transparent totals and a truthful checkout hand-off.",
  );

  const { items, updateQuantity, removeItem, clearCart, itemCount } = useCart();

  const resolved = items.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return { item, product };
  });

  const subtotal = resolved.reduce(
    (sum, entry) => sum + (entry.product?.price ?? 0) * entry.item.quantity,
    0,
  );

  return (
    <div className="page-stack">
      <MotionSection className="section">
        <SectionHeading
          eyebrow="Cart"
          title="Persistent cart state"
          description="The cart keeps selected variants, quantities and totals without pretending payment has been completed."
        />
        {resolved.length ? (
          <div className="cart-layout">
            <div className="cart-list">
              {resolved.map(({ item, product }) => (
                <article
                  key={`${item.productId}-${item.size ?? "no-size"}-${item.colour ?? "no-colour"}`}
                  className="cart-line"
                >
                  <div>
                    <p className="eyebrow">
                      {product?.category || "Unavailable"}
                    </p>
                    <h2>{product?.name || "Product unavailable"}</h2>
                    <p>
                      {item.size ? `Size: ${item.size}` : "Size: not required"}{" "}
                      ·{" "}
                      {item.colour
                        ? `Colour: ${item.colour}`
                        : "Colour: not required"}
                    </p>
                    <p>
                      {product
                        ? formatNaira(product.price * item.quantity)
                        : "Unavailable"}
                    </p>
                  </div>
                  <div className="cart-line__controls">
                    <label className="field field--inline">
                      <span className="field__label">Qty</span>
                      <input
                        className="control"
                        type="number"
                        min={1}
                        max={9}
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(
                            item.productId,
                            Number(event.target.value),
                            item.size,
                            item.colour,
                          )
                        }
                      />
                    </label>
                    <button
                      className="button button--ghost"
                      type="button"
                      onClick={() =>
                        removeItem(item.productId, item.size, item.colour)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <p className="eyebrow">Summary</p>
              <h2>{formatNaira(subtotal)}</h2>
              <p>{itemCount} item(s) in the cart.</p>
              <p>
                Checkout is request-only for this build.{" "}
                <Link className="text-link" to="/contact">
                  Prepare an order enquiry
                </Link>
                .
              </p>
              <div className="cart-summary__actions">
                <Link className="button button--solid" to="/contact">
                  Prepare order request
                </Link>
                <button
                  className="button button--ghost"
                  type="button"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            </aside>
          </div>
        ) : (
          <EmptyState
            title="Your cart is empty"
            description="Add a sample product from the shop to test the persistent cart."
            action={{ label: "View the shop", href: "/shop" }}
          />
        )}
      </MotionSection>
    </div>
  );
}
