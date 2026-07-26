import { useState } from "react";
import { Link } from "react-router-dom";
import type { MembershipPlan, Product } from "../types";
import { formatNaira, formatSamplePrice } from "../lib/money";
import { imageManifest } from "../data/imageManifest";
import { ImageFrame } from "./Shared";

export function MembershipCard({ plan }: { plan: MembershipPlan }) {
  const pricingLabel =
    plan.pricingStatus === "sample"
      ? "Sample pricing"
      : plan.pricingStatus === "reference"
        ? "Reference pricing"
        : "Enquire for current pricing";

  return (
    <article
      className={`membership-card ${plan.featured ? "is-featured" : ""}`}
    >
      <div className="membership-card__top">
        <div className="badge-row">
          <span className="badge">{plan.featured ? "Featured" : "Plan"}</span>
          <span className="badge">{pricingLabel}</span>
        </div>
        <h3>{plan.name}</h3>
        <p>{plan.description}</p>
      </div>
      <div className="membership-card__price">
        <strong>{formatSamplePrice(plan.price, "Enquire for current pricing")}</strong>
        <span>{plan.billingPeriod}</span>
      </div>
      <ul className="list list--tight">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {plan.exclusions?.length ? (
        <p className="membership-card__note">
          Note: {plan.exclusions.join(" ")}
        </p>
      ) : null}
      {plan.availability ? (
        <p className="membership-card__availability">
          Availability:{" "}
          {plan.availability === "coming-soon"
            ? "Coming soon"
            : plan.availability === "available"
              ? "Available"
              : "Enquiry only"}
        </p>
      ) : null}
      <Link className="button button--ghost" to="/contact">
        Enquire about membership
      </Link>
    </article>
  );
}

export function MembershipComparison({ plans }: { plans: MembershipPlan[] }) {
  const rows = [
    "Gym floor access",
    "Class access",
    "Orientation support",
    "Priority enquiry handling",
    "Joining fee",
  ];

  const planRows = plans.map((plan) => ({
    plan,
    values: rows.map((row) => {
      const rowKey = row.toLowerCase().split(" ")[0] ?? "";
      const hasFeature = plan.features.some((feature) =>
        feature.toLowerCase().includes(rowKey),
      );
      return row === "Joining fee"
        ? plan.joiningFee
          ? formatNaira(plan.joiningFee)
          : "Pending"
        : hasFeature
          ? "Included"
          : "Not listed";
    }),
  }));

  return (
    <div className="comparison-block">
      <p className="comparison__note">
        Desktop users can scan the full comparison table. Mobile users get
        stacked plan cards with the same information.
      </p>
      <div className="comparison-wrap">
        <table className="comparison">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row}>
                <th scope="row">{row}</th>
                {planRows.map(({ plan, values }) => (
                  <td key={`${plan.id}-${row}`}>{values[rowIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="comparison-mobile" aria-label="Membership comparison cards">
        {planRows.map(({ plan, values }) => (
          <article key={plan.id} className="comparison-mobile__card">
            <div className="membership-card__top">
              <div className="badge-row">
                <span className="badge">{plan.name}</span>
                <span className="badge">
                  {plan.featured ? "Featured" : "Plan"}
                </span>
              </div>
              <p>{plan.description}</p>
            </div>
            <dl className="comparison-mobile__list">
              {rows.map((row, rowIndex) => (
                <div key={`${plan.id}-${row}`} className="comparison-mobile__item">
                  <dt>{row}</dt>
                  <dd>{values[rowIndex]}</dd>
                </div>
              ))}
            </dl>
            <Link className="button button--ghost" to="/contact">
              Enquire about membership
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const image = product.imageKeys[0] ?? "darkGym";
  const [hovered, setHovered] = useState(false);
  const fallbackImage = imageManifest.bgImage2 ?? imageManifest.bgImage;
  const pricingLabel =
    product.pricingStatus === "sample"
      ? "Sample price"
      : product.pricingStatus === "reference"
        ? "Online reference price"
        : "Enquiry only";
  const stockLabel =
    product.pricingStatus === "reference"
      ? "Reference listing"
      : product.stock > 0
        ? `${product.stock} in sample stock`
        : "Out of stock";

  return (
    <article
      className={`product-card ${product.featured ? "is-featured" : ""}`}
    >
      <Link
        to={`/shop/${product.slug}`}
        className="product-card__media"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageFrame
          src={image}
          alt={`${product.name} product image`}
          fallbackSrc={fallbackImage}
          caption={
            product.pricingStatus === "sample"
              ? "Sample price pending client confirmation"
              : product.pricingStatus === "reference"
                ? "Online reference listing"
                : undefined
          }
        />
      </Link>
      <div className="product-card__body">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>
            <Link to={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__meta">
          <span className="badge badge--compact">{pricingLabel}</span>
          <strong>{formatNaira(product.price)}</strong>
          {product.compareAtPrice ? (
            <span className="product-card__compare">
              {formatNaira(product.compareAtPrice)}
            </span>
          ) : null}
        </div>
        <div className="product-card__footer">
          <span>{stockLabel}</span>
          <Link
            className={`text-link ${hovered ? "is-hovered" : ""}`}
            to={`/shop/${product.slug}`}
          >
            View product
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductGallery({
  product,
  selectedIndex,
  onSelectIndex,
}: {
  product: Product;
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
}) {
  const activeImage =
    product.imageKeys[selectedIndex] ?? product.imageKeys[0] ?? "darkGym";
  const fallbackImage = imageManifest.bgImage2 ?? imageManifest.bgImage;
  return (
    <div className="product-gallery">
      <figure className="product-gallery__stage">
        <ImageFrame
          src={activeImage}
          alt={`${product.name} product image ${selectedIndex + 1}`}
          fallbackSrc={fallbackImage}
          caption={
            product.pricingStatus === "sample"
              ? "Sample product image"
              : undefined
          }
          priority
        />
      </figure>
      <div
        className="product-gallery__thumbs"
        role="list"
        aria-label="Product images"
      >
        {product.imageKeys.map((image, index) => (
          <button
            key={image}
            className={`product-gallery__thumb ${index === selectedIndex ? "is-active" : ""}`}
            type="button"
            onClick={() => onSelectIndex(index)}
            aria-pressed={index === selectedIndex}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackImage;
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProductBadges({ product }: { product: Product }) {
  const pricingLabel =
    product.pricingStatus === "sample"
      ? "Sample price"
      : product.pricingStatus === "reference"
        ? "Online reference price"
        : "Enquiry only";
  return (
    <div className="badge-row">
      <span className="badge">{product.category}</span>
      <span className="badge">{pricingLabel}</span>
      {product.pricingStatus === "reference" ? (
        <span className="badge">Reference listing</span>
      ) : product.stock > 0 ? (
        <span className="badge">In sample stock</span>
      ) : (
        <span className="badge">Out of stock</span>
      )}
    </div>
  );
}
