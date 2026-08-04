/**
 * The three highlighted cases shown as full-width blocks above the marquee.
 * The remaining cases live in `cases.ts` and are rendered as compact cards.
 */

export type FeaturedStat = {
  /** Small label above the value, e.g. a store name. */
  label?: string;
  /** Blue headline value. */
  value: string;
  /** Small grey text sitting on the value's baseline. */
  unit?: string;
  /** Supporting line under the value. */
  caption?: string;
  /** `lg` is the 24px headline, `sm` the 18px multi-line variant. */
  size?: "lg" | "sm";
};

export type FeaturedCase = {
  title: string;
  /** Lead paragraph; line breaks are preserved. */
  intro: string;
  /** Numbered execution steps, rendered as "1. …", "2. …". */
  steps: string[];
  image: string;
  imageAlt: string;
  /** Each row lays its stats out side by side. */
  rows: FeaturedStat[][];
  /**
   * On mobile the stats move into their own card. By default all stats share
   * one card; with this flag each column gets its own, which is how the
   * per-store stats are grouped in the design.
   */
  splitStatsByColumn?: boolean;
};

export const featuredCases: FeaturedCase[] = [
  {
    title: "Calorie Deficit Tracker",
    intro:
      "Benchmark true CPI and build real unit economics, then scale profitable installs in one of ASA's most expensive verticals.",
    steps: [
      "Keyword Research: 600+ seed keywords, 650+ negatives excluded.",
      "Campaign Setup: Search Results, Exact Match, built as SKAG.",
      "Clustering: 10 keyword clusters across the vertical.",
      "Creative Testing: Custom Product Pages, icon and screenshot tests.",
      "Bidding Strategy: “bid the floor,” scale only on proven conversion.",
      "Attribution: AppsFlyer setup and unit-economics reviews with product team.",
      "Optimization: cut underperformers, scale top converters, relaunch.",
    ],
    image: "/cases/featured-calorie.png",
    imageAlt: "Calorie Deficit Tracker: Srama App Store listing",
    rows: [
      [
        {
          value: "65%",
          unit: "lower CPI",
          caption: "scaled from an aggressive floor bid.",
        },
        {
          value: "“Bid the floor”",
          caption: "start low, scale only on proven conversion.",
        },
      ],
      [
        {
          value: "Full-Funnel Support:",
          caption:
            "AppsFlyer attribution, ASA account setup, SDK integration guidance.",
        },
      ],
    ],
  },
  {
    title: "Route Planner",
    intro: "Complete text metadata preparation for dual-platform app launch.",
    steps: [
      "Niche & Competitor Research: Full audit of the market landscape and key players.",
      "Multi-Geo Semantic Core: Developed search clusters for US, CA, and UK.",
      "Keyword Clustering: Grouped semantic data for targeted optimization.",
      "Text ASO: Prepared metadata for both App Store & Google Play.",
    ],
    image: "/cases/featured-route-planner.png",
    imageAlt: "RouteXL Route Planner store listing",
    splitStatsByColumn: true,
    rows: [
      [
        {
          label: "Google Play",
          value: "#1 Rank",
          caption: "for “Route Planner”\n(no external promo)",
        },
        {
          label: "App Store",
          value: "#2 Rank",
          caption: "for “Route Planner”\n(no external promo)",
        },
      ],
      [
        {
          label: "Keyword indexing:",
          value: "+139 (US)\n+54 (UK)\n+53 (CA)",
          size: "sm",
        },
        {
          label: "Keyword indexing:",
          value: "+466 (US)\n+367 (UK)\n+109 (CA)",
          size: "sm",
        },
      ],
    ],
  },
  {
    title: "Baby sleep sounds and white noise for kids",
    intro:
      "Pre-launch Text ASO: Metadata optimization for day-one indexing.\nRapid Ranking: Reached Top positions for niche kids' keywords immediately after launch.",
    steps: [
      "Pre-release ASO: Niche analysis and semantic core development for the Baby Sleep Sounds category.",
      "US & UK Localization: Metadata optimization tailored to regional search behavior.",
      "Post-Launch Boost: Leveraged client-side traffic data to identify and promote high-conversion keywords to Top rankings.",
    ],
    image: "/cases/featured-calm-baby-sleep.png",
    imageAlt: "Calm Baby Sleep App Store listing",
    rows: [
      [
        { value: "+240%", caption: "increase in App Store impressions." },
        { value: "+115%", caption: "growth in search driven installs." },
      ],
      [
        {
          value: "TOP #1-10 RANKINGS",
          caption:
            'Achieved for 40+ target keywords, including "baby sleep" head terms.',
        },
      ],
    ],
  },
];
