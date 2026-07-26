import type {
  Facility,
  FitnessClass,
  MembershipPlan,
  NavItem,
  SiteFaqGroup,
  Trainer,
} from "../types";

const env = import.meta.env as Record<string, string | undefined>;
const contactEmail = env["VITE_CONTACT_EMAIL"] ?? "hello@homeoffitness.ng";

export const siteName = "Home of Fitness";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Facilities", href: "/facilities" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "Classes", href: "/classes" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const exploreNavigation: NavItem[] = [
  { label: "Trainers", href: "/trainers" },
  { label: "Facilities", href: "/facilities" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNavigationGroups = [
  {
    title: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Trainers", href: "/trainers" },
      { label: "Facilities", href: "/facilities" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Membership and classes",
    items: [
      { label: "Membership", href: "/membership" },
      { label: "Classes", href: "/classes" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop and support",
    items: [
      { label: "Shop", href: "/shop" },
      { label: "Cart", href: "/cart" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    items: [{ label: "Contact", href: "/contact" }],
  },
];

export const contactDetails = {
  email: contactEmail,
  phone: "",
  whatsapp: "",
  instagram: "",
  address: "",
  responseNote: "Response timing will be confirmed by the client.",
};

export const brandPromise = {
  eyebrow: "Black and white / premium fitness",
  headline:
    "Disciplined training, editorial presentation and a direct path to joining.",
  summary:
    "Home of Fitness is built to feel composed and credible across memberships, classes, trainers and commerce. The language stays sharp, the motion stays controlled and the experience stays clear on mobile.",
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "foundation",
    name: "Foundation",
    description:
      "For newcomers who want a simple monthly entry point with essentials only.",
    price: null,
    billingPeriod: "Monthly",
    joiningFee: null,
    features: [
      "Gym floor access during standard hours",
      "Orientation support on first visit",
      "Access to the current class timetable",
      "Enquiry-led onboarding",
    ],
    exclusions: ["No final recurring billing has been configured yet"],
    availability: "enquiry-only",
    pricingStatus: "enquiry-only",
  },
  {
    id: "performance",
    name: "Performance",
    description:
      "A fuller membership for regular members who want more class and coaching access.",
    price: null,
    billingPeriod: "Monthly",
    joiningFee: null,
    featured: true,
    features: [
      "Gym floor access",
      "Selected classes included",
      "Priority booking enquiries",
      "Member support guidance",
    ],
    exclusions: [
      "Final inclusions and pricing are pending client confirmation",
    ],
    availability: "enquiry-only",
    pricingStatus: "enquiry-only",
  },
  {
    id: "elite",
    name: "Elite",
    description:
      "For members who want the most complete experience and a premium service tier.",
    price: null,
    billingPeriod: "Monthly",
    joiningFee: null,
    features: [
      "Gym floor access",
      "Class access with priority enquiry handling",
      "Support for personal training enquiries",
      "Priority store offers when confirmed",
    ],
    exclusions: ["Final pricing and bundle structure remain configurable"],
    availability: "coming-soon",
    pricingStatus: "enquiry-only",
  },
];

export const classes: FitnessClass[] = [
  {
    id: "power-sculpt",
    slug: "power-sculpt",
    name: "Power Sculpt",
    category: "Strength",
    description:
      "A controlled strength session that balances compound lifts, tempo work and clean coaching cues.",
    durationMinutes: 60,
    intensity: "high",
    level: "intermediate",
    trainerIds: ["ade", "nora"],
    imageKey: "circuitTraining",
    schedule: [
      { day: "Monday", time: "06:30", note: "Morning start" },
      { day: "Wednesday", time: "18:30", note: "After-work session" },
    ],
  },
  {
    id: "flow-mobility",
    slug: "flow-mobility",
    name: "Flow Mobility",
    category: "Recovery",
    description:
      "Mobility, breathing and movement quality for members who want better range and control.",
    durationMinutes: 45,
    intensity: "low",
    level: "all-levels",
    trainerIds: ["zainab"],
    imageKey: "joy",
  },
  {
    id: "condition-circle",
    slug: "condition-circle",
    name: "Condition Circle",
    category: "Conditioning",
    description:
      "A fast-paced circuit with clear intervals, scalable options and a high-output finish.",
    durationMinutes: 50,
    intensity: "high",
    level: "all-levels",
    trainerIds: ["ade", "emeka"],
    imageKey: "groupWorkout",
    schedule: [
      { day: "Tuesday", time: "07:00" },
      { day: "Thursday", time: "19:00" },
    ],
  },
  {
    id: "lift-lab",
    slug: "lift-lab",
    name: "Lift Lab",
    category: "Technique",
    description:
      "Technique-first coaching for beginners and returning members building confidence under load.",
    durationMinutes: 55,
    intensity: "moderate",
    level: "beginner",
    trainerIds: ["tomi"],
    imageKey: "watsonLegPress",
    schedule: [{ day: "Saturday", time: "09:00", note: "Small group format" }],
  },
  {
    id: "pulse-spin",
    slug: "pulse-spin",
    name: "Pulse Spin",
    category: "Cardio",
    description:
      "Bike-based conditioning with paced climbs, sprints and interval coaching.",
    durationMinutes: 45,
    intensity: "high",
    level: "all-levels",
    trainerIds: ["nora"],
    imageKey: "sport",
  },
  {
    id: "steady-core",
    slug: "steady-core",
    name: "Steady Core",
    category: "Core",
    description:
      "A focused core and trunk session designed to support stability and movement quality.",
    durationMinutes: 40,
    intensity: "moderate",
    level: "beginner",
    trainerIds: ["zainab"],
    imageKey: "fitnessInspoWebp",
  },
];

export const trainers: Trainer[] = [
  {
    id: "ade",
    slug: "ade",
    name: "Ade",
    role: "Strength Coach",
    specialities: [
      "Barbell technique",
      "Progression planning",
      "Small-group coaching",
    ],
    biography:
      "Ade leads strength sessions with a calm, exacting style and an emphasis on repeatable movement quality.",
    imageKey: "transformCoaching",
    certifications: ["Client-confirmed credentials pending"],
  },
  {
    id: "nora",
    slug: "nora",
    name: "Nora",
    role: "Conditioning Coach",
    specialities: ["Intervals", "Group energy", "Cardio programming"],
    biography:
      "Nora is focused on pacing, technique and keeping high-tempo classes accessible without losing intensity.",
    imageKey: "groupWorkout",
  },
  {
    id: "zainab",
    slug: "zainab",
    name: "Zainab",
    role: "Mobility Coach",
    specialities: ["Recovery", "Mobility flow", "Beginners"],
    biography:
      "Zainab brings a measured approach to recovery-focused training, helping members move with more confidence.",
    imageKey: "joy",
  },
  {
    id: "tomi",
    slug: "tomi",
    name: "Tomi",
    role: "Technique Coach",
    specialities: ["Foundations", "Machine setup", "Safe lifting"],
    biography:
      "Tomi works with first-time and returning members who want simple, clear coaching around form and setup.",
    imageKey: "watsonLegPressOne",
  },
  {
    id: "emeka",
    slug: "emeka",
    name: "Emeka",
    role: "Floor Coach",
    specialities: ["Gym-floor support", "Class pacing", "Form cues"],
    biography:
      "Emeka bridges the floor and the class timetable, giving members a dependable point of contact on busy days.",
    imageKey: "bacak",
  },
];

export const facilities: Facility[] = [
  {
    id: "strength-floor",
    title: "Strength floor",
    description:
      "Free weights, machines and plate-loaded work arranged for direct movement through the floor.",
    imageKey: "watsonLegPress",
  },
  {
    id: "conditioning",
    title: "Conditioning space",
    description:
      "A training area suited to intervals, circuits and everyday conditioning work.",
    imageKey: "circuitTraining",
  },
  {
    id: "recovery",
    title: "Recovery and mobility",
    description:
      "A calmer training zone for mobility, reset work and lower-intensity sessions.",
    imageKey: "joy",
  },
  {
    id: "fit-out",
    title: "Custom fit-out inspiration",
    description:
      "Equipment and space-planning references for a disciplined, premium gym atmosphere.",
    imageKey: "gymEquipmentStory",
  },
];

export const faqGroups: SiteFaqGroup[] = [
  {
    title: "Membership",
    items: [
      {
        question: "Are the membership prices final?",
        answer:
          "No. The current figures are sample placeholders pending client confirmation. The experience is designed so confirmed pricing can be dropped in without changing the layout.",
      },
      {
        question: "Can I enquire without paying online?",
        answer:
          "Yes. The membership flow is enquiry-first and does not pretend that a payment has been taken.",
      },
    ],
  },
  {
    title: "Classes",
    items: [
      {
        question: "Do classes show duration and intensity?",
        answer:
          "Yes. Every class card includes duration, level and intensity so users can scan quickly on mobile.",
      },
      {
        question: "Can I see who teaches each class?",
        answer:
          "Yes. Trainers are linked where that association is defined in the data model.",
      },
    ],
  },
  {
    title: "Shop",
    items: [
      {
        question: "Are product prices final?",
        answer:
          "The shop now uses current online reference prices sourced from public retail listings. They may change with retailer availability, delivery charges and stock movement.",
      },
      {
        question: "Does the cart persist after refresh?",
        answer:
          "Yes. Cart state is stored locally and is restored safely if the browser is refreshed.",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        question: "Will the form say my message has been sent?",
        answer:
          "No. The interface is transparent about the submission method and only presents a truthfully available hand-off.",
      },
    ],
  },
];

export const privacySections = [
  {
    heading: "Overview",
    body: "This client-review privacy page explains how enquiry data and shopping interactions are handled within the current front-end build.",
  },
  {
    heading: "Data handling",
    body: "Form inputs are only used to prepare an enquiry hand-off. No secrets are stored in the client and no payment success is simulated.",
  },
  {
    heading: "Client action required",
    body: "The final privacy policy should be replaced or approved by the business once the contact, booking and commerce integrations are confirmed.",
  },
];

export const termsSections = [
  {
    heading: "Preview status",
    body: "These terms are a client-review draft for a front-end build. They are not legal advice and are awaiting business approval.",
  },
  {
    heading: "Pricing and checkout",
    body: "Membership and product figures are sample values unless otherwise labelled. The site does not claim that payment has been completed.",
  },
  {
    heading: "Availability",
    body: "Classes, trainers, facilities and product stock are presented honestly based on the current data set and any future change should update the catalogue.",
  },
];

export const homeHighlights = [
  {
    title: "Memberships with a direct enquiry path",
    body: "Compare options quickly and move into a truthfully labelled enquiry flow.",
  },
  {
    title: "Classes that are easy to scan on mobile",
    body: "Each session shows duration, level, intensity and trainer association where confirmed.",
  },
  {
    title: "A shop that behaves like a real catalogue",
    body: "Search, filter, sort, choose variants and keep the cart across refreshes.",
  },
];

export const homeSections = [
  {
    title: "Membership",
    summary:
      "A compact comparison that helps visitors understand what is included without page clutter.",
    imageKey: "fitnessInspoWebp",
  },
  {
    title: "Classes",
    summary:
      "Editorial class cards, schedule hints and clear intensity labels.",
    imageKey: "groupWorkout",
  },
  {
    title: "Facilities",
    summary:
      "Weight room, conditioning space and recovery-led imagery with a controlled black-and-white mood.",
    imageKey: "gymAesthetic",
  },
  {
    title: "Shop",
    summary:
      "A sample product line built to validate the commerce journey before launch.",
    imageKey: "tevoLift",
  },
];
