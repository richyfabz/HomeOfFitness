import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import {
  footerNavigationGroups,
  primaryNavigation,
  exploreNavigation,
  siteName,
  contactDetails,
} from "../data/siteData";
import { useMotionAwareVariants } from "./Motion";
import { useCart } from "../context/CartContext";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="site-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { reduceMotion } = useMotionAwareVariants();
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      trigger?.focus();
    };
  }, [open]);

  return (
    <motion.header
      className={`site-header ${solid ? "is-solid" : ""}`}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.32,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link className="site-header__brand" to="/" aria-label={siteName}>
        <span className="site-header__mark" aria-hidden="true">
          HF
        </span>
        <span className="site-header__wordmark">{siteName}</span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {primaryNavigation.slice(0, 3).map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `site-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <div
          className={`site-nav__dropdown ${exploreOpen ? "is-open" : ""}`}
          onMouseEnter={() => setExploreOpen(true)}
          onMouseLeave={() => setExploreOpen(false)}
          onFocusCapture={() => setExploreOpen(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setExploreOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="site-nav__link site-nav__summary"
            aria-haspopup="menu"
            aria-expanded={exploreOpen}
            onClick={() => setExploreOpen((current) => !current)}
          >
            Explore
          </button>
          <div className="site-nav__dropdown-panel" role="menu">
            {exploreNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `site-nav__dropdown-link ${isActive ? "is-active" : ""}`
                }
                role="menuitem"
                tabIndex={exploreOpen ? 0 : -1}
                onClick={() => setExploreOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        {primaryNavigation.slice(3).map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `site-nav__link ${isActive ? "is-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-header__actions">
        <Link className="site-header__cart" to="/cart">
          Cart <span aria-hidden="true">({itemCount})</span>
        </Link>
        <button
          ref={triggerRef}
          className="menu-toggle"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="mobile-menu"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <div className="mobile-menu__group">
              <p className="mobile-menu__eyebrow">Primary</p>
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mobile-menu__group">
              <p className="mobile-menu__eyebrow">Explore</p>
              {exploreNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `mobile-menu__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              Cart
            </NavLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__intro">
        <div className="site-footer__brand">
          <p className="eyebrow">Home of Fitness</p>
          <p>
            Premium black-and-white fitness branding with memberships, classes,
            trainers and commerce.
          </p>
        </div>
        <p className="site-footer__meta">
          Copyright 2026 Home of Fitness. All rights reserved.
        </p>
      </div>
      <div className="site-footer__links">
        {footerNavigationGroups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <ul>
            {contactDetails.email ? (
              <li>
                <a href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </li>
            ) : null}
            {contactDetails.responseNote ? (
              <li>{contactDetails.responseNote}</li>
            ) : null}
          </ul>
        </div>
      </div>
    </footer>
  );
}
