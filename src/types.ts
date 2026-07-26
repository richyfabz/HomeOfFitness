import type { ImageKey } from "./data/imageManifest";

export type NavItem = {
  label: string;
  href: string;
};

export type PricingStatus = "sample" | "enquiry-only" | "reference";

export type MembershipPlan = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  billingPeriod: string;
  joiningFee?: number | null;
  featured?: boolean;
  features: string[];
  exclusions?: string[];
  availability?: "available" | "enquiry-only" | "coming-soon";
  pricingStatus: PricingStatus;
};

export type ClassSession = {
  day: string;
  time: string;
  note?: string;
};

export type FitnessClass = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  durationMinutes: number;
  intensity: "low" | "moderate" | "high";
  level: "beginner" | "all-levels" | "intermediate" | "advanced";
  trainerIds: string[];
  imageKey: ImageKey;
  schedule?: ClassSession[];
};

export type Trainer = {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialities: string[];
  biography: string;
  imageKey: ImageKey;
  certifications?: string[];
  socialLinks?: {
    instagram?: string;
    x?: string;
  };
};

export type Facility = {
  id: string;
  title: string;
  description: string;
  imageKey: ImageKey;
};

export type ProductColour = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  currency: "NGN";
  imageKeys: ImageKey[];
  sizes?: string[];
  colours?: ProductColour[];
  stock: number;
  featured?: boolean;
  tags?: string[];
  material?: string;
  careInstructions?: string[];
  pricingStatus: PricingStatus;
  pricingSource?: string;
  pricingSourceUrl?: string;
  pricingNote?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteFaqGroup = {
  title: string;
  items: FaqItem[];
};

export type CartItem = {
  productId: string;
  quantity: number;
  size?: string;
  colour?: string;
};
