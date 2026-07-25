import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  productCategories,
  products,
  sortOptions,
  productSizes,
} from "../data/commerceData";
import { imageManifest } from "../data/imageManifest";
import { MotionSection } from "../components/Motion";
import { PageHero, SectionHeading, EmptyState } from "../components/Shared";
import { Field, SelectInput, TextInput } from "../components/Forms";
import { ProductCard } from "../components/Commerce";
import { useDocumentMeta } from "../components/Seo";
import { formatNaira } from "../lib/money";

type SortValue = (typeof sortOptions)[number]["value"];

export function ShopPage() {
  useDocumentMeta(
    "Shop | Home of Fitness",
    "Browse the Home of Fitness sample shop with search, filtering, sorting and product discovery.",
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof productCategories)[number]>("All");
  const [size, setSize] = useState<(typeof productSizes)[number] | "All">(
    "All",
  );
  const [sort, setSort] = useState<SortValue>("featured");

  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    let next = products.filter((product) => {
      const matchesSearch =
        !search ||
        [
          product.name,
          product.description,
          product.category,
          ...(product.tags ?? []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesSize =
        size === "All" || !product.sizes || product.sizes.includes(size);
      return matchesSearch && matchesCategory && matchesSize;
    });

    if (sort === "price-asc") {
      next = [...next].sort((left, right) => left.price - right.price);
    } else if (sort === "price-desc") {
      next = [...next].sort((left, right) => right.price - left.price);
    } else if (sort === "name") {
      next = [...next].sort((left, right) =>
        left.name.localeCompare(right.name),
      );
    } else {
      next = [...next].sort(
        (left, right) => Number(right.featured) - Number(left.featured),
      );
    }

    return next;
  }, [category, query, size, sort]);

  return (
    <div className="page-stack">
      <PageHero
        eyebrow="Shop"
        title="A sample catalogue with real shopping behaviour"
        description="Search, filter, sort and open products with a cart that persists across refreshes."
        primary={{ label: "Browse products", href: "#product-list" }}
        secondary={{ label: "Open the cart", href: "/cart" }}
        image={imageManifest.tevoLift}
        imageAlt="Lift collection apparel image"
        note="All prices are sample figures and are clearly labelled in the product detail flow."
      />

      <MotionSection className="section">
        <SectionHeading
          eyebrow="Catalogue"
          title="Find the right item quickly"
          description="The controls are designed for speed on mobile and at desktop widths."
        />
        <div className="filters">
          <Field label="Search">
            <TextInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search apparel or accessories"
            />
          </Field>
          <Field label="Category">
            <SelectInput
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as typeof category)
              }
            >
              {productCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Size">
            <SelectInput
              value={size}
              onChange={(event) => setSize(event.target.value as typeof size)}
            >
              <option value="All">All</option>
              {productSizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectInput>
          </Field>
          <Field label="Sort">
            <SelectInput
              value={sort}
              onChange={(event) => setSort(event.target.value as SortValue)}
            >
              {sortOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </SelectInput>
          </Field>
        </div>
        <p className="catalogue-meta">
          Showing {visibleProducts.length} of {products.length} products. From{" "}
          {formatNaira(Math.min(...products.map((item) => item.price)))} upward.
        </p>
      </MotionSection>

      <MotionSection className="section" id="product-list">
        <div className="card-grid card-grid--four">
          {visibleProducts.length ? (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <EmptyState
              title="No products match this search"
              description="Try removing one filter or search term."
              action={{ label: "Reset filters", href: "/shop" }}
            />
          )}
        </div>
      </MotionSection>

      <MotionSection className="section">
        <div className="cta-band">
          <p>
            The shop is transparent about sample pricing and stock levels so the
            experience stays honest.
          </p>
          <Link className="button button--ghost" to="/cart">
            Review cart
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
