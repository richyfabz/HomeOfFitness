import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/Layout";
import { motion } from "framer-motion";
import { useMotionAwareVariants } from "./components/Motion";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const MembershipPage = lazy(() =>
  import("./pages/MembershipPage").then((module) => ({
    default: module.MembershipPage,
  })),
);
const ClassesPage = lazy(() =>
  import("./pages/ClassesPage").then((module) => ({
    default: module.ClassesPage,
  })),
);
const TrainersPage = lazy(() =>
  import("./pages/TrainersPage").then((module) => ({
    default: module.TrainersPage,
  })),
);
const FacilitiesPage = lazy(() =>
  import("./pages/FacilitiesPage").then((module) => ({
    default: module.FacilitiesPage,
  })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const ShopPage = lazy(() =>
  import("./pages/ShopPage").then((module) => ({ default: module.ShopPage })),
);
const ProductPage = lazy(() =>
  import("./pages/ProductPage").then((module) => ({
    default: module.ProductPage,
  })),
);
const CartPage = lazy(() =>
  import("./pages/CartPage").then((module) => ({ default: module.CartPage })),
);
const FAQPage = lazy(() =>
  import("./pages/FAQPage").then((module) => ({ default: module.FAQPage })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((module) => ({
    default: module.PrivacyPage,
  })),
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((module) => ({ default: module.TermsPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function AnimatedRoutes() {
  const location = useLocation();
  const { page } = useMotionAwareVariants();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={page.initial}
        animate={page.animate}
        exit={page.exit}
        transition={page.transition}
      >
        <Suspense fallback={<div className="site-main" aria-busy="true" />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <AnimatedRoutes />
      </SiteLayout>
    </BrowserRouter>
  );
}
