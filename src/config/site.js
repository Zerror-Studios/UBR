export const siteConfig = {
  name: "UBR x DISRPTVE",
  description:
    "A venture builder for India, combining capital, operating advisory, brand strategy, talent, and audience access for profitable scale.",
  url: "https://www.ubrdisrptve.com",
  locale: "en_IN",
  language: "en-IN",
  ogImage: "/og.png",
  keywords: [
    "UBR",
    "DISRPTVE",
    "ubrdisrptve",
    "ubr disrptve",
    "ubr disruptive",
    "ubrdisruptive",
    "venture builder India",
    "consumer brand advisory",
    "capital advisory",
    "brand strategy",
    "celebrity co-ownership",
    "fundraising advisory",
  ],
  contact: {
    phone: "",
    email: "binoy@ubrcapital.com",
    emails: [
      "binoy@ubrcapital.com",
      "ashish@disrptve.com",
      "kaushik@disrptve.com",
    ],
  },
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
  },
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
};

export const siteRoutes = [
  {
    path: "/",
    label: "Home",
    title: "UBR x DISRPTVE | Venture Builder for Consumer Brands in India",
    description: siteConfig.description,
    priority: 1,
  },
  {
    path: "/approach",
    label: "Approach",
    title: "Our Approach | Venture Building Framework for Consumer Brands",
    description:
      "An operating system for profitable scale: five convictions, five phases, and five pillars for venture building in India's complex market.",
    priority: 0.9,
  },
  {
    path: "/work",
    label: "Work",
    title: "Portfolio & Case Studies | UBR x DISRPTVE",
    description:
      "Brands backed with capital, celebrity, strategic advisory, and full-stack engagements built to compound.",
    priority: 0.9,
  },
  {
    path: "/work/peep-triptii-dimri",
    label: "Peep x Triptii Dimri",
    title: "Peep x Triptii Dimri Case Study | Celebrity-Led Brand Growth",
    description:
      "Capital and celebrity, timed to give the round visible runway and fund the campaign that followed.",
    priority: 0.7,
  },
  {
    path: "/work/kaai",
    label: "KAAI",
    title: "KAAI Case Study | Brand & Celebrity Partnership",
    description:
      "Performance, energy and aspiration, fused into a single signing that gives the brand both scale and depth.",
    priority: 0.7,
  },
  {
    path: "/work/house-of-trudys-athiya-shetty",
    label: "House of Trudy's x Athiya Shetty",
    title: "House of Trudy's x Athiya Shetty Case Study | Strategic Brand Building",
    description:
      "Quiet luxury mapped to a strategic anchor for product, retail and narrative.",
    priority: 0.7,
  },
  {
    path: "/work/sports-stadium",
    label: "Sports Stadium",
    title: "Sports Stadium Case Study | Full-Stack Venture Building",
    description:
      "A full-stack engagement: capital first, then the ongoing work to make sure that capital compounds.",
    priority: 0.7,
  },
  {
    path: "/team",
    label: "Team",
    title: "Leadership Team | UBR x DISRPTVE",
    description:
      "Three operators across UBR and DISRPTVE combining disciplined capital, operator discipline, audience ownership, and brand-building.",
    priority: 0.8,
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact UBR x DISRPTVE | Fundraising, Advisory & Brand Partnerships",
    description:
      "Tell us what you are building, raising, or backing. Founders, talent, investors, and retailers are welcome.",
    priority: 0.7,
  },
];
