import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMotionAwareVariants } from "./Motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  imageAlt,
  note,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: string;
  imageAlt: string;
  note?: string;
  fallbackImage?: string;
}) {
  const { reduceMotion } = useMotionAwareVariants();
  const heroImage = image;
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero__description">{description}</p>
        <div className="hero__actions">
          <Link className="button button--solid" to={primary.href}>
            {primary.label}
          </Link>
          <Link className="button button--ghost" to={secondary.href}>
            {secondary.label}
          </Link>
        </div>
        {note ? <p className="hero__note">{note}</p> : null}
      </div>
      <motion.div
        className="hero__media"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src={heroImage}
          alt={imageAlt}
          className="hero__image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
    </section>
  );
}

export function ImageFrame({
  src,
  alt,
  caption,
  priority = false,
  fallbackSrc,
}: {
  src: string;
  alt: string;
  caption?: string | undefined;
  priority?: boolean;
  fallbackSrc?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setUsedFallback(false);
  }, [src]);

  return (
    <figure className="image-frame">
      <img
        src={currentSrc}
        alt={alt}
        className="image-frame__image"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onError={() => {
          if (fallbackSrc && !usedFallback) {
            setUsedFallback(true);
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function StatStrip({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="stat-strip">
      {items.map((item) => (
        <div className="stat-strip__item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function EyebrowLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link className="eyebrow-link" to={href}>
      {children}
    </Link>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? (
        <Link className="button button--solid" to={action.href}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
