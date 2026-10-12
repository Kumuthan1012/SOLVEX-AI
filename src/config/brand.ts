export const BRAND = {
  name: "SolveX AI",
  location: "Penang, Malaysia",
  tagline: "Your Problem. Our Mission. A Better Solution.",
  alternativeHeadline: "Tell Us the Problem. Let's Find a Way Forward.",
  eyebrow: "DIGITAL SOLUTIONS · PROBLEM SOLVING · CONTINUOUS IMPROVEMENT",
  mission:
    "SolveX AI exists to help businesses, companies, employees, professionals, and individuals overcome challenges through practical thinking, modern technology, AI tools, creative solutions, and continuous improvement.",
  philosophy:
    "We may not have every answer immediately, but we will make a genuine effort to find a practical way forward.",
  pricingPhilosophy:
    "Prices can be discussed later — everything is negotiable. Let's solve the issue and move on together.",
  phoneDisplay: "+60 16-510 1410",
  whatsappNumber: "60165101410",
  whatsappBaseUrl: "https://wa.me/60165101410",
  defaultWhatsAppMessage:
    "Hi SolveX AI! I'd like to discuss a problem or idea and explore possible solutions. Here's what I'm facing:",
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BRAND.defaultWhatsAppMessage;
  return `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export interface TargetAudience {
  id: "business" | "company" | "individual";
  title: string;
  badge: string;
  headline: string;
  description: string;
  examples: string[];
  ctaText: string;
  whatsappMessage: string;
  confidentialityNote?: string;
}

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: "business",
    title: "Businesses",
    badge: "For Business Owners & Leaders",
    headline: "Make Your Business Work Better.",
    description:
      "Whether you want to attract more customers, strengthen your online presence, reduce repetitive tasks, improve your workflows, or explore new digital opportunities, let's identify a solution that fits your business.",
    examples: [
      "Website development & redesigns",
      "Marketing materials & promotional graphics",
      "Lead generation support & enquiry forms",
      "Digital catalogues & QR-linked menus",
      "Workflow improvements & task automation",
      "Customer enquiry organisation & follow-ups",
    ],
    ctaText: "Improve My Business",
    whatsappMessage:
      "Hi SolveX AI! I run a business and would like to explore practical digital solutions for our challenges. Here's what we need help with:",
  },
  {
    id: "company",
    title: "Companies & Employees",
    badge: "For Teams, Managers & Staff",
    headline: "Make Work Easier and More Efficient.",
    description:
      "Are you spending too much time on manual work, repetitive reports, spreadsheets, documentation, or operational problems? Tell us about the challenge, and we'll explore ways to reduce errors, simplify processes, and improve productivity.",
    examples: [
      "Excel & spreadsheet macro/formula upgrades",
      "Automated reporting tools & summary views",
      "Data tracking systems & internal trackers",
      "Documentation & standardized workflows",
      "Simple team dashboards & intake forms",
      "AI-assisted productivity tools & research",
    ],
    ctaText: "Improve My Workflow",
    whatsappMessage:
      "Hi SolveX AI! Our team / workplace is dealing with repetitive manual tasks and workflow bottlenecks. We'd like to explore practical improvements:",
    confidentialityNote:
      "Workplace improvement ideas should respect company policies, information security, and authorization. Please never share confidential company data, passwords, trade secrets, or restricted records.",
  },
  {
    id: "individual",
    title: "Individuals",
    badge: "For Creators, Freelancers & Students",
    headline: "Bring Your Ideas to Life.",
    description:
      "Have an idea, a personal challenge, or a project you want to build? Whether you need a website, creative visuals, a digital tool, or help exploring an unfamiliar technology, let's discuss your options.",
    examples: [
      "Personal portfolio & CV presentation websites",
      "Digital business cards & contact pages",
      "AI-assisted visual graphics & creative concepts",
      "Personal productivity tools & simple forms",
      "Digital product concepts & prototypes",
      "Research into suitable tools, apps & tech",
    ],
    ctaText: "Explore My Idea",
    whatsappMessage:
      "Hi SolveX AI! I have a personal project / idea and would love help exploring practical ways to bring it to life:",
  },
];

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  scopePoints: string[];
  whatsappPrompt: string;
  isCustomHighlight?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    category: "Web & Digital Presence",
    title: "Website Design and Development",
    shortDescription:
      "Fast, responsive, modern websites built to showcase your business or personal brand with clear navigation and mobile optimisation.",
    scopePoints: [
      "Business & corporate websites",
      "High-converting landing pages",
      "Personal portfolio & CV websites",
      "Product & service presentation pages",
      "Website redesigns & modernization",
      "Digital catalogues & QR-linked sites",
      "Mobile-first responsive architecture",
      "Website maintenance & content updates",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I'd like to discuss building or improving a website. Here are my requirements:",
  },
  {
    id: "ai-creative",
    category: "Creative & Media",
    title: "AI-Powered Creative Services",
    shortDescription:
      "High-impact visuals, marketing graphics, and creative assets produced using cutting-edge AI image tools and practical design craft.",
    scopePoints: [
      "Custom AI-generated marketing imagery",
      "Product visuals & stylized mockup scenes",
      "Advertising graphics & promotional posters",
      "Social media creatives & story banners",
      "Visual concept mockups for new ideas",
      "Marketing copy assistance & text refinement",
      "Brand asset consistency & file delivery",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I'm interested in AI-powered creative visuals and marketing graphics. Here is what I need:",
  },
  {
    id: "digital-marketing-leads",
    category: "Growth & Visibility",
    title: "Digital Marketing and Lead Generation",
    shortDescription:
      "Practical systems and promotional assets to help people discover your offerings, submit inquiries, and get organized follow-ups.",
    scopePoints: [
      "Promotional campaigns & content angles",
      "Marketing campaign concepts & creative packs",
      "High-clarity lead capture forms & landing pages",
      "Customer enquiry organization systems",
      "Lead tracking sheets & intake pipelines",
      "Follow-up workflow & message templates",
      "Local Penang presence optimization guidance",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I want to improve customer enquiry management and lead capture. Here is my current situation:",
  },
  {
    id: "business-automation",
    category: "Automation & Tools",
    title: "Business Automation and Digital Tools",
    shortDescription:
      "Eliminate repetitive manual tasks by connecting data, designing smart spreadsheets, and creating simple internal software tools.",
    scopePoints: [
      "Repetitive task & data entry automation",
      "Advanced spreadsheet & Excel formula upgrades",
      "Structured digital forms & validation",
      "Data tracking sheets & live summary cards",
      "Basic reporting dashboards & metrics views",
      "AI-assisted workflow enhancements",
      "Information organization & file structures",
      "Simple custom web utilities & calculators",
    ],
    whatsappPrompt:
      "Hi SolveX AI! We have repetitive tasks and data entry bottlenecks. Here is what we're looking to automate:",
  },
  {
    id: "workplace-operations",
    category: "Workplace & Operations",
    title: "Workplace and Operational Improvement",
    shortDescription:
      "Targeted interventions to reduce recurring errors, untangle manual processes, and improve everyday operational visibility.",
    scopePoints: [
      "Manual process review & bottleneck identification",
      "Error reduction & data validation checklists",
      "Operational & shift activity trackers",
      "Inventory tracking concepts & log sheets",
      "Reporting workflow improvements & templates",
      "Documentation standardization & SOPs",
      "Team productivity tools & quick guides",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I'd like to explore ways to streamline our workplace operations and reduce errors. Here's the challenge:",
  },
  {
    id: "whatsapp-communication",
    category: "Customer Communication",
    title: "WhatsApp and Customer Communication",
    shortDescription:
      "Turn WhatsApp into an organised customer communication channel with smart greeting setups, prefilled enquiry links, and fast replies.",
    scopePoints: [
      "WhatsApp Business profile configuration",
      "Automated greeting & away message structures",
      "Categorised quick replies & FAQ shortcuts",
      "Customer enquiry intake workflows",
      "Exploration of chatbot integrations & limits",
      "Click-to-chat QR codes & web link buttons",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I need help optimizing our WhatsApp customer communication and quick reply workflows:",
  },
  {
    id: "digital-catalogues",
    category: "Sales & Presentations",
    title: "Digital Catalogues and Business Materials",
    shortDescription:
      "Present your products, food menus, or service packages cleanly on mobile screens without requiring heavy physical printing.",
    scopePoints: [
      "Interactive digital menus for cafes & restaurants",
      "Product catalogues with pricing & photos",
      "QR code-linked materials for tables & counters",
      "Digital brochures & company profiles (PDF/Web)",
      "Business presentation slides & pitch decks",
      "Easy-to-update catalogue structures",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I'd like to develop a digital catalogue or QR-linked menu. Here are the details:",
  },
  {
    id: "maintenance-support",
    category: "Care & Updates",
    title: "Ongoing Maintenance and Support",
    shortDescription:
      "Reliable assistance for keeping your digital assets updated, bug-free, and running smoothly without hiring full-time staff.",
    scopePoints: [
      "Regular website & content updates",
      "Image replacements & promotion banners",
      "Basic functionality checks & broken link fixes",
      "Minor design & copy tweaks",
      "Agreed technical support & troubleshooting",
      "Monthly maintenance retainers & ad-hoc slots",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I need ongoing maintenance or updates for our existing website / digital assets:",
  },
  {
    id: "custom-problem-solving",
    category: "Custom Problem Solving",
    title: "Custom Problem-Solving Projects",
    shortDescription:
      "Have a unique challenge that doesn't fit standard boxes? We review your requirements, investigate available tools, and explore a tailored way forward.",
    scopePoints: [
      "Have a problem that doesn't fit standard categories?",
      "Detailed assessment of unique requirements",
      "Independent research into suitable modern tools",
      "Feasibility review: building, adapting, or sourcing",
      "Honest guidance if third-party specialists are better",
      "Pragmatic prototyping & progressive testing",
    ],
    whatsappPrompt:
      "Hi SolveX AI! I have a unique problem that doesn't fit standard categories. Here is the context:",
    isCustomHighlight: true,
  },
];

export interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "LISTEN",
    subtitle: "Understand the human context",
    description:
      "We begin by asking thoughtful questions to understand the real problem, the people affected, the existing process, and the desired outcome.",
    detail:
      "No technical jargon and no premature sales pitches. We want to know where the pain is and what a good outcome looks like to you.",
  },
  {
    step: "02",
    title: "INVESTIGATE",
    subtitle: "Research root causes & tools",
    description:
      "We research possible causes, available software, modern AI tools, low-code utilities, and practical approaches that could address the challenge.",
    detail:
      "We don't force one hammer onto every nail. We look across modern technologies to see what actually fits.",
  },
  {
    step: "03",
    title: "EVALUATE",
    subtitle: "Compare feasibility & trade-offs",
    description:
      "We compare available options based on feasibility, cost, time, complexity, operational risks, and potential practical benefits.",
    detail:
      "We openly assess what is realistic versus what is impractical, ensuring expectations are grounded from day one.",
  },
  {
    step: "04",
    title: "PROPOSE",
    subtitle: "Clear roadmap, pricing & limits",
    description:
      "We explain the recommended approach, expected deliverables, known limitations, estimated costs, and project timeline.",
    detail:
      "Everything is documented clearly before any commitment. You know what will be built, how much it costs, and what to expect.",
  },
  {
    step: "05",
    title: "IMPLEMENT & IMPROVE",
    subtitle: "Execute, test & refine",
    description:
      "After your approval, we implement the agreed solution, run realistic testing, gather feedback, and identify continuous improvements.",
    detail:
      "If the original problem cannot be eliminated completely, we explore whether its frequency, impact, cost, or error rate can be substantially reduced.",
  },
];

export interface ImprovementGoal {
  title: string;
  description: string;
  iconName: string;
}

export const IMPROVEMENT_GOALS: ImprovementGoal[] = [
  {
    title: "Reduce repetitive manual work",
    description:
      "Free up valuable hours spent copying data between files, formatting tables, or manually assembling reports.",
    iconName: "Clock",
  },
  {
    title: "Minimise avoidable errors",
    description:
      "Introduce structured input formats, validation safeguards, and clean checklists to cut down costly mistakes.",
    iconName: "ShieldCheck",
  },
  {
    title: "Improve process visibility",
    description:
      "Make task progress, inventory counts, or client enquiries instantly visible so team members aren't working blind.",
    iconName: "Eye",
  },
  {
    title: "Organise information effectively",
    description:
      "Replace scattered WhatsApp chats and disjointed folders with centralized directories and easy-to-find records.",
    iconName: "Layers",
  },
  {
    title: "Capture and manage customer enquiries",
    description:
      "Ensure customer queries don't get lost through well-designed forms, clear WhatsApp links, and organized follow-ups.",
    iconName: "Users",
  },
];

export interface PricingItem {
  service: string;
  priceDisplay: string;
  note: string;
  badge?: string;
  description: string;
  idealFor: string;
}

export const PRICING_ITEMS: PricingItem[] = [
  {
    service: "Business Website",
    priceDisplay: "From RM800",
    note: "Indicative · 100% Negotiable",
    badge: "Most Requested",
    description:
      "Clean, modern, responsive website highlighting your services, location, photos, and direct WhatsApp contact channels. Pricing can be discussed and phased to your budget.",
    idealFor: "SMEs, local shops, professional practices, service firms",
  },
  {
    service: "Digital Menu or Catalogue",
    priceDisplay: "From RM200",
    note: "Indicative · 100% Negotiable",
    badge: "Budget Friendly",
    description:
      "Mobile-optimized digital menu or product catalogue with QR code access for physical tables, counters, or online sharing. Flexible setup based on your item count.",
    idealFor: "Cafes, restaurants, bakeries, boutique product sellers",
  },
  {
    service: "Social Media Content Support",
    priceDisplay: "From RM300 / mo",
    note: "Indicative · Flexible Arrangement",
    description:
      "Curated visual graphics, promotional posters, and copy frameworks generated to maintain consistent social visibility. Month-by-month, easily adjusted.",
    idealFor: "Businesses wanting regular professional visuals without an agency fee",
  },
  {
    service: "Website Maintenance & Updates",
    priceDisplay: "Custom Quotation",
    note: "Negotiable · Scoped to Needs",
    description:
      "Periodic content changes, banner updates, speed tuning, and sanity checks to keep your web presence fresh and functional.",
    idealFor: "Existing website owners needing dependable technical hands",
  },
  {
    service: "Workflow & Digital Tool Projects",
    priceDisplay: "Quoted After Assessment",
    note: "Fully Negotiable & Tailored",
    description:
      "Custom spreadsheet revamps, automated forms, operational tracking logs, and internal team utilities tailored to your flow. Let's solve the bottleneck first.",
    idealFor: "Departments, managers, and teams drowning in manual Excel tasks",
  },
  {
    service: "Custom AI & Automation Projects",
    priceDisplay: "Quoted After Feasibility",
    note: "Exploratory & Negotiable",
    description:
      "Specialized AI integrations, automated enquiry pipelines, document extractors, or custom workflow engines. Phased exploration to match your comfort level.",
    idealFor: "Organizations exploring technology-enabled transformation",
  },
];

export interface PortfolioConcept {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  sampleProblem: string;
  conceptSolution: string;
  highlights: string[];
  mockupType: "restaurant" | "consulting" | "catalogue" | "campaign" | "dashboard" | "inquiry";
}

export const PORTFOLIO_CONCEPTS: PortfolioConcept[] = [
  {
    id: "restaurant-showcase",
    title: "Penang Heritage Cafe & Bistro",
    category: "Restaurant Website Concept",
    tagline: "Mobile-first dining experience with instant WhatsApp reservations",
    description:
      "An illustrative concept for a Penang culinary venue featuring interactive digital menu filtering, ambiance photography, location map guide, and one-tap WhatsApp table booking.",
    sampleProblem:
      "Diners struggled to see current menu pricing, were calling during peak kitchen rush, and printed menus frequently tore.",
    conceptSolution:
      "Created a fast, lightweight mobile menu with dietary filter tags and a 1-click WhatsApp reservation message containing table size and date.",
    highlights: [
      "Instant mobile load (< 1.2s)",
      "Categorized food & drink tabs",
      "QR-code table stand integration",
      "Direct WhatsApp reservation prefill",
    ],
    mockupType: "restaurant",
  },
  {
    id: "consulting-firm",
    title: "Straits Advisory & Corporate Services",
    category: "Professional Services Website Concept",
    tagline: "Trustworthy corporate positioning for advisory practices",
    description:
      "An illustrative concept for an accounting, corporate secretarial, or legal advisory firm emphasizing credentials, structured service tiers, and qualification forms.",
    sampleProblem:
      "Prospective business clients couldn't gauge the firm's specific expertise, and inbound inquiries lacked vital company background.",
    conceptSolution:
      "Built a crisp, executive website with structured service breakdowns and a multi-step enquiry form capturing company size and service required.",
    highlights: [
      "Executive dark navy & slate palette",
      "Structured service scope breakdowns",
      "Client qualification enquiry intake",
      "Verified contact details & Penang office map",
    ],
    mockupType: "consulting",
  },
  {
    id: "digital-catalogue",
    title: "Artisan Woodcraft & Furniture Catalogue",
    category: "Digital Product Catalogue Concept",
    tagline: "High-definition product viewer without expensive e-commerce overhead",
    description:
      "An illustrative concept for a boutique furniture and decor maker, showcasing bespoke items with high-res galleries, dimensions, and instant WhatsApp inquiry per item.",
    sampleProblem:
      "Full e-commerce setup was too expensive to maintain since pieces were made to order with custom wood finishes.",
    conceptSolution:
      "Developed a clean digital catalogue where each product card has an 'Enquire about this Piece' button that pre-fills WhatsApp with the exact SKU.",
    highlights: [
      "Category tabs (Dining, Living, Custom)",
      "Detailed dimension & material specs",
      "No expensive payment gateway fees",
      "WhatsApp SKU message linking",
    ],
    mockupType: "catalogue",
  },
  {
    id: "promotional-campaign",
    title: "Mid-Year Renovation & Lighting Promo",
    category: "Sample Promotional Campaign Concept",
    tagline: "Harmonized social media creatives and landing page angle",
    description:
      "An illustrative concept illustrating how AI-generated promotional graphics combine with persuasive copy frameworks to drive interest for a seasonal promotion.",
    sampleProblem:
      "Inconsistent DIY graphics across Facebook and Instagram resulted in low customer trust and scattered comment enquiries.",
    conceptSolution:
      "Produced a cohesive visual package with high-clarity promotional posters, square social tiles, and a unified link-in-bio landing page.",
    highlights: [
      "Consistent typography and brand colors",
      "AI-crafted conceptual backgrounds",
      "Clear promotional value proposition",
      "Frictionless WhatsApp consultation button",
    ],
    mockupType: "campaign",
  },
  {
    id: "operational-dashboard",
    title: "Daily Workshop Production & Order Tracker",
    category: "Operational Dashboard Concept",
    tagline: "Simple browser dashboard replacing error-prone whiteboards",
    description:
      "An illustrative concept for a small manufacturing or repair workshop to track job card statuses, assigned technicians, pending parts, and completion dates.",
    sampleProblem:
      "Job status was tracked on a physical whiteboard that got wiped, causing customer delivery delays and missed follow-ups.",
    conceptSolution:
      "Built a lightweight internal web board where technicians tap job cards to update status (Pending, In Progress, Ready, Collected).",
    highlights: [
      "Real-time visual status columns",
      "Urgent jobs flagged in amber/red",
      "Zero complicated software licensing",
      "Runs on any workshop phone or tablet",
    ],
    mockupType: "dashboard",
  },
  {
    id: "enquiry-dispatcher",
    title: "Automated Customer Enquiry Triage",
    category: "Enquiry Management Workflow Concept",
    tagline: "Structured lead capture with instant team WhatsApp notification",
    description:
      "An illustrative concept showing how customer web requests are formatted, categorized by urgency, and forwarded to the right staff member.",
    sampleProblem:
      "Website contacts arrived as disorganized emails that sat unanswered for 48 hours, losing warm prospects to competitors.",
    conceptSolution:
      "Designed a clean questionnaire that automatically structures customer inputs and formats an instant WhatsApp alert directly to the on-duty sales rep.",
    highlights: [
      "Mandatory requirement questions",
      "Automatic categorization by urgency",
      "Instant WhatsApp dispatch to staff",
      "Reduced response time from 48h to minutes",
    ],
    mockupType: "inquiry",
  },
];

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Problem-First Thinking",
    description:
      "We begin by understanding your challenge in depth rather than pitching pre-packaged packages that might not fit your reality.",
    iconName: "Compass",
  },
  {
    title: "Flexible Solutions",
    description:
      "We explore different approaches instead of forcing one service on everyone. If a simple form or spreadsheet works better than custom software, we say so.",
    iconName: "Sliders",
  },
  {
    title: "Practical Technology",
    description:
      "We consider tools based on their actual suitability, stability, and cost-effectiveness—not simply because they are trendy or labeled AI.",
    iconName: "Cpu",
  },
  {
    title: "Transparent Communication",
    description:
      "We discuss project scope, realistic costs, known limitations, and expected delivery timelines clearly before any work begins.",
    iconName: "MessageSquare",
  },
  {
    title: "Continuous Learning",
    description:
      "When a challenge is unfamiliar, we honestly investigate available tools and industry approaches before committing, or point you in the right direction.",
    iconName: "BookOpen",
  },
  {
    title: "Long-Term Support",
    description:
      "Where appropriate, we can discuss ongoing maintenance, minor updates, and future enhancements as your business evolves.",
    iconName: "LifeBuoy",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Pricing" | "Technical";
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: "What problems can SolveX AI help with?",
    category: "General",
    answer:
      "We help with a wide spectrum of digital and operational challenges across three groups: Businesses (modern websites, digital menus/catalogues, promotional materials, lead capture systems, workflow automation), Workplace Teams & Employees (spreadsheet improvements, reporting tools, manual data tracking, process bottlenecks, internal dashboards), and Individuals (personal portfolio websites, CV presentation, digital business cards, creative graphics, testing technical ideas). We also evaluate unique custom problems that don't fit into conventional categories.",
  },
  {
    question: "Do I need to know which solution I need?",
    category: "Process",
    answer:
      "Not at all. You don't need to know the technical terms, what tools exist, or whether you need an AI tool, a website, or an Excel template. Simply describe what is going wrong, what is taking too much time, or what you wish you could do. We take the time to investigate the possibilities, evaluate practical options, and propose a sensible way forward.",
  },
  {
    question: "Can company employees approach SolveX AI?",
    category: "General",
    answer:
      "Yes, absolutely. Employees, supervisors, and team leaders frequently face frustrating manual tasks—like spending half a day copy-pasting numbers across spreadsheets or compiling weekly reports. We can help explore productivity tools, macros, or simple internal trackers. However, we strictly emphasize that workplace improvement ideas must respect your employer's policies, IT guidelines, and authorization. Please never share proprietary company secrets, customer records, or confidential data.",
  },
  {
    question: "What if my problem is outside your current services?",
    category: "Process",
    answer:
      "We will tell you honestly. We do not pretend to know everything. If an issue falls outside our capabilities, expertise, or licensing scope, we will clearly state so and, where appropriate, help research alternative tools, platforms, or reputable specialists who might be better equipped to assist you.",
  },
  {
    question: "Can you help reduce errors if a problem cannot be eliminated?",
    category: "Technical",
    answer:
      "Yes. Real-world challenges rarely have magic one-click cures. When a problem cannot be 100% eliminated due to external constraints, legacy systems, or regulations, our goal shifts to minimizing its impact: reducing the frequency of errors, adding input validation, cutting down hours spent, improving visibility, and helping your team take the next practical step forward.",
  },
  {
    question: "Can you help my business attract more customers?",
    category: "General",
    answer:
      "We can help explore and build the foundational digital systems that support customer acquisition: high-quality websites, clear promotional graphics, mobile digital catalogues, enquiry forms, and organized follow-up workflows. However, we never make false promises or guarantee specific sales figures, rankings, or lead numbers. Business growth depends on product quality, market demand, pricing, and execution.",
  },
  {
    question: "How much do your services cost?",
    category: "Pricing",
    answer:
      "Prices can always be discussed later — everything is negotiable. Our priority is to understand your challenge, solve the issue, and move on together. To give you a helpful baseline, indicative starting prices include: Business websites from RM800, Digital menus/catalogues from RM200, and Social media visual support from RM300/month. However, we are happy to tailor the scope to whatever budget or timeline works for you. Let's discuss your issue first without any financial pressure.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    category: "Process",
    answer:
      "Yes. Once a website or tool is implemented, you can engage us for ongoing support, periodic content updates, image replacements, and basic health checks. We offer flexible maintenance arrangements depending on your update frequency.",
  },
  {
    question: "How do projects begin?",
    category: "Process",
    answer:
      "It begins with a simple conversation. Reach out via WhatsApp or our contact form and explain what you are facing. We review the request, ask clarifying questions, and investigate options. We don't demand upfront pricing commitments — we explore the solution first, discuss a flexible budget that suits you, and move forward together only when you feel completely comfortable.",
  },
  {
    question: "Is there a guarantee that the solution will work?",
    category: "General",
    answer:
      "We do not make blanket guarantees because real-world outcomes depend on many variables—including customer adoption, data quality, third-party software changes, and operating conditions. What we do guarantee is our genuine, disciplined effort: honest assessment, rigorous testing before delivery, realistic expectations, and continuous improvement if adjustments are required.",
  },
];

export const SPECIAL_REQUESTS = {
  badge: "SPECIAL REQUESTS — CUSTOM DESIGN & BUSINESS SUPPLIES",
  sectionHeading: "Need Something Custom? Let's Arrange It.",
  supportingHeadline: "From Digital Designs to Physical Products.",
  description:
    "SolveX AI can help businesses, companies, employees, and individuals explore customised design, printing, merchandise, and business supply requirements. Whether you need business cards, company shirts, uniforms, flyers, brochures, stickers, packaging, banners, promotional gifts, or another customised item, tell us what you need. We can help develop the design, identify suitable suppliers, compare available options, and coordinate production where feasible.",
  potentialServices: [
    {
      title: "Business Cards & Stationery",
      desc: "Premium finishes, matte/gloss lamination, letterheads & envelopes",
      tag: "Corporate Essentials",
    },
    {
      title: "Company Shirts, Uniforms & Caps",
      desc: "Custom T-shirts, embroidered polo shirts, work uniforms & staff caps",
      tag: "Apparel & Workwear",
    },
    {
      title: "Flyers, Brochures, Banners & Signage",
      desc: "Event flyers, trifold brochures, roll-up banners, bunting & outdoor signs",
      tag: "Print & Marketing",
    },
    {
      title: "Stickers, Labels & Packaging",
      desc: "Custom die-cut stickers, waterproof product labels & box packaging",
      tag: "Branding & Retail",
    },
    {
      title: "Promotional Gifts & Merchandise",
      desc: "Branded pens, thermal tumblers, tote bags, umbrellas & corporate gifts",
      tag: "Merchandise",
    },
    {
      title: "Graphic Design & Print-Ready Artwork",
      desc: "Vector logo preparation, high-res prepress layout & color proofing",
      tag: "Creative Prep",
    },
    {
      title: "Other Custom Products & Supplies",
      desc: "Unique items, customized hardware tools, name badges & specialty supplies",
      tag: "Custom Sourcing",
    },
  ],
  howItWorksSteps: [
    {
      step: "01",
      title: "Tell Us What You Need",
      desc: "Share the specific product, design idea, or merchandise item you have in mind.",
    },
    {
      step: "02",
      title: "Share Specs & Timeline",
      desc: "Provide your target quantity, specifications, preferred budget, and delivery deadline.",
    },
    {
      step: "03",
      title: "Explore Suppliers & Options",
      desc: "We research suitable design formats and identify dependable production suppliers.",
    },
    {
      step: "04",
      title: "Clear Quotation Approval",
      desc: "We provide an itemized quotation outlining production costs, delivery, and timeline.",
    },
    {
      step: "05",
      title: "Arranged Production & Delivery",
      desc: "Once approved, we coordinate the agreed design artwork, supplier sourcing, and manufacturing.",
    },
  ],
  pricingDescription:
    "Quotation based on product specifications, quantity, design requirements, supplier costs, and delivery.",
  ctaText: "Request a Custom Item",
  whatsappMessage:
    "Hi SolveX AI! I'd like to enquire about a custom design or business supply. Here's what I need:",
  disclaimer:
    "Special-request service: Products are not held in permanent stock or manufactured directly in-house by SolveX AI. We confirm supplier availability, production timelines, costs, and feasibility before accepting an order.",
};
