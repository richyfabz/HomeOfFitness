import type { Product } from "../types";

export const productCategories = [
  "All",
  "Apparel",
  "Accessories",
  "Training Essentials",
] as const;

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Name" },
] as const;

export const productSizes = ["XS", "S", "M", "L", "XL"] as const;

export const products: Product[] = [
  {
    id: "atlas-tee",
    slug: "atlas-training-tee",
    name: "Atlas Training Tee",
    description:
      "A sample training tee with a structured fit and a clean brand mark.",
    category: "Apparel",
    price: 18000,
    compareAtPrice: 22000,
    currency: "NGN",
    imageKeys: ["fitnessInspoWebp", "commitToBeFit", "darkGym"],
    sizes: ["S", "M", "L", "XL"],
    colours: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "Off-white", hex: "#f0f0f0" },
    ],
    stock: 12,
    featured: true,
    tags: ["tee", "training", "apparel"],
    material: "Cotton blend",
    careInstructions: [
      "Wash cool",
      "Do not tumble dry",
      "Turn inside out before washing",
    ],
    pricingStatus: "sample",
  },
  {
    id: "forge-leggings",
    slug: "forge-leggings",
    name: "Forge Leggings",
    description:
      "High-rise sample leggings with a matte finish and a performance-led silhouette.",
    category: "Apparel",
    price: 26000,
    compareAtPrice: 31000,
    currency: "NGN",
    imageKeys: ["sport", "bacak", "gymAesthetic"],
    sizes: ["S", "M", "L"],
    colours: [
      { name: "Black", hex: "#111111" },
      { name: "Ash", hex: "#c9c9c9" },
    ],
    stock: 8,
    featured: true,
    tags: ["leggings", "training", "apparel"],
    material: "Compression blend",
    careInstructions: ["Wash cold", "Dry flat", "Avoid bleach"],
    pricingStatus: "sample",
  },
  {
    id: "pulse-bottle",
    slug: "pulse-bottle",
    name: "Pulse Bottle",
    description:
      "A simple reusable bottle for studio, floor and commuting use.",
    category: "Accessories",
    price: 9500,
    currency: "NGN",
    imageKeys: ["joy", "gymEquipmentStory", "consistency"],
    stock: 20,
    featured: false,
    tags: ["bottle", "hydration", "accessory"],
    material: "BPA-free plastic",
    careInstructions: ["Hand wash recommended"],
    pricingStatus: "sample",
  },
  {
    id: "carryall-bag",
    slug: "carryall-bag",
    name: "Carryall Bag",
    description:
      "A sample gym bag with space for training gear, shoes and daily essentials.",
    category: "Accessories",
    price: 24000,
    compareAtPrice: 28000,
    currency: "NGN",
    imageKeys: ["prodicum", "downloadWebp", "downloadFourWebp"],
    stock: 4,
    featured: false,
    tags: ["bag", "travel", "accessory"],
    material: "Heavy-duty canvas",
    careInstructions: ["Spot clean only"],
    pricingStatus: "sample",
  },
  {
    id: "lift-towel",
    slug: "lift-towel",
    name: "Lift Towel",
    description:
      "A compact towel for training sessions, warm-ups and machine work.",
    category: "Training Essentials",
    price: 6500,
    currency: "NGN",
    imageKeys: ["downloadSixWebp", "downloadThreeWebp", "sport"],
    stock: 18,
    featured: false,
    tags: ["towel", "recovery", "essentials"],
    material: "Microfibre",
    careInstructions: ["Machine wash cold", "Air dry"],
    pricingStatus: "sample",
  },
  {
    id: "focus-crop",
    slug: "focus-crop-top",
    name: "Focus Crop Top",
    description:
      "A sample training crop top with a secure fit and minimal branding.",
    category: "Apparel",
    price: 15000,
    currency: "NGN",
    imageKeys: ["fitnessInspoWebp", "fitnessInspoOneWebp", "commitToBeFit"],
    sizes: ["S", "M", "L"],
    colours: [
      { name: "Black", hex: "#101010" },
      { name: "Stone", hex: "#d4d4d4" },
    ],
    stock: 6,
    featured: false,
    tags: ["top", "training", "apparel"],
    material: "Stretch knit",
    careInstructions: ["Wash cool", "Do not iron directly on print"],
    pricingStatus: "sample",
  },
  {
    id: "recovery-cap",
    slug: "recovery-cap",
    name: "Recovery Cap",
    description:
      "A lightweight cap for travel, outdoor training and recovery days.",
    category: "Accessories",
    price: 12000,
    currency: "NGN",
    imageKeys: ["e7", "instagram", "consistency"],
    stock: 10,
    featured: false,
    tags: ["cap", "travel", "accessory"],
    material: "Cotton twill",
    careInstructions: ["Hand wash gently"],
    pricingStatus: "sample",
  },
  {
    id: "home-bundle",
    slug: "home-training-bundle",
    name: "Home Training Bundle",
    description:
      "A sample bundle pairing core apparel and accessories for the catalogue experience.",
    category: "Training Essentials",
    price: 42000,
    compareAtPrice: 50000,
    currency: "NGN",
    imageKeys: ["tevoLift", "darkGym", "groupWorkout"],
    stock: 2,
    featured: true,
    tags: ["bundle", "training", "essentials"],
    material: "Mixed materials",
    careInstructions: ["Follow care labels on each included item"],
    pricingStatus: "sample",
  },
];

export function getRelatedProducts(product: Product) {
  return products
    .filter((candidate) => candidate.id !== product.id)
    .sort((left, right) => {
      const leftScore =
        Number(left.category === product.category) +
        Number(left.tags?.some((tag) => product.tags?.includes(tag)));
      const rightScore =
        Number(right.category === product.category) +
        Number(right.tags?.some((tag) => product.tags?.includes(tag)));
      return rightScore - leftScore;
    })
    .slice(0, 3);
}
