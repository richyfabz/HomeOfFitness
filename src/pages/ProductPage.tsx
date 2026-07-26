import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products, getRelatedProducts } from "../data/commerceData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { ProductBadges, ProductGallery } from "../components/Commerce";
import { EmptyState, SectionHeading } from "../components/Shared";
import { useCart } from "../context/CartContext";
import { useDocumentMeta } from "../components/Seo";
import { formatNaira } from "../lib/money";

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = useMemo(
    () => products.find((entry) => entry.slug === slug),
    [slug],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? "");
  const [selectedColour, setSelectedColour] = useState(
    product?.colours?.[0]?.name ?? "",
  );
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const isReferenceListing = product?.pricingStatus === "reference";

  useDocumentMeta(
    product
      ? `${product.name} | Home of Fitness`
      : "Product not found | Home of Fitness",
    product
      ? `${product.name} product page with gallery, variants and add to cart support.`
      : "The requested product could not be found.",
  );

  if (!product) {
    return (
      <div className="page-stack">
        <MotionSection className="section">
          <EmptyState
            title="Product not found"
            description="The product you requested is not available in the current catalogue."
            action={{ label: "Return to the shop", href: "/shop" }}
          />
        </MotionSection>
      </div>
    );
  }

  const currentProduct = product;
  const requiresSize = Boolean(product.sizes?.length);
  const requiresColour = Boolean(product.colours?.length);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (requiresSize && !selectedSize) {
      setMessage("Please select a size before adding the item.");
      return;
    }
    if (requiresColour && !selectedColour) {
      setMessage("Please select a colour before adding the item.");
      return;
    }

    addItem({
      productId: currentProduct.id,
      quantity,
      ...(selectedSize ? { size: selectedSize } : {}),
      ...(selectedColour ? { colour: selectedColour } : {}),
    });
    setMessage(`Added ${currentProduct.name} to cart.`);
    void navigate("/cart");
  }

  return (
    <div className="page-stack">
      <MotionSection className="section section--split">
        <ProductGallery
          product={product}
          selectedIndex={selectedIndex}
          onSelectIndex={setSelectedIndex}
        />
        <div className="product-detail">
          <ProductBadges product={product} />
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__lead">{product.description}</p>
          <div className="product-detail__price">
            <strong>{formatNaira(product.price)}</strong>
            {product.compareAtPrice ? (
              <span>{formatNaira(product.compareAtPrice)}</span>
            ) : null}
          </div>
          <p className="product-detail__note">
            {isReferenceListing
              ? "Current public online reference price. Stock and delivery availability can change with the retailer, so this stays browse-first and transparent."
              : "Sample catalogue item. Prices, stock and imagery can be replaced once the client confirms the final collection."}
          </p>
          <form className="product-form" onSubmit={handleSubmit}>
            {requiresSize ? (
              <label className="field">
                <span className="field__label">Size</span>
                <select
                  className="control"
                  value={selectedSize}
                  onChange={(event) => setSelectedSize(event.target.value)}
                >
                  <option value="">Choose a size</option>
                  {product.sizes?.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            {requiresColour ? (
              <label className="field">
                <span className="field__label">Colour</span>
                <select
                  className="control"
                  value={selectedColour}
                  onChange={(event) => setSelectedColour(event.target.value)}
                >
                  <option value="">Choose a colour</option>
                  {product.colours?.map((colour) => (
                    <option key={colour.name} value={colour.name}>
                      {colour.name}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            <label className="field">
              <span className="field__label">Quantity</span>
              <input
                className="control"
                type="number"
                min={1}
                max={9}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
            </label>

            <button className="button button--solid" type="submit">
              {isReferenceListing ? "Add reference item" : "Add to cart"}
            </button>
            <Link className="button button--ghost" to="/shop">
              Back to shop
            </Link>
          </form>
          {message ? (
            <p className="form-status form-status--success" role="status">
              {message}
            </p>
          ) : null}
          <div className="product-detail__meta">
            <p>
              <strong>Material:</strong> {product.material || "Pending"}
            </p>
            {isReferenceListing && product.pricingSource ? (
              <p>
                <strong>Reference:</strong> {product.pricingSource}
              </p>
            ) : null}
            <p>
              <strong>Care:</strong>{" "}
              {product.careInstructions?.join(" - ") || "Pending"}
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Related"
          title="Similar sample items"
          description="Related products are based on category and tag overlap rather than fabricated sales performance."
        />
        <div className="card-grid card-grid--three">
          {getRelatedProducts(product).map((related) => (
            <article key={related.id} className="mini-product">
              <Link to={`/shop/${related.slug}`}>
                <img
                  src={imageManifest[related.imageKeys[0] ?? "darkGym"]}
                  alt={related.name}
                />
                <div>
                  <p className="eyebrow">{related.category}</p>
                  <h3>{related.name}</h3>
                  <p>{formatNaira(related.price)}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
