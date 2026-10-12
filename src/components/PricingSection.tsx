import React, { useState } from "react";
import { PRICING_ITEMS, buildWhatsAppUrl, BRAND } from "../config/brand";
import {
  ArrowUpRight,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Sparkles,
  Zap,
  Tag,
  Coins,
  CheckCircle2,
  SlidersHorizontal,
  Scale,
  MessageSquare,
} from "lucide-react";

export const PricingSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const processSteps = [
    {
      num: "01",
      title: "Tell Us the Issue",
      desc: "Share your challenge in plain words. No technical terms or upfront payments needed.",
    },
    {
      num: "02",
      title: "Explore Feasibility",
      desc: "We investigate practical tools and explain the available options honestly.",
    },
    {
      num: "03",
      title: "Discuss & Negotiate Price",
      desc: "Prices can be discussed further. Everything is negotiable to fit what makes sense for you.",
    },
    {
      num: "04",
      title: "Solve & Move Forward",
      desc: "We execute the agreed solution, test it thoroughly, and help your work succeed.",
    },
  ];

  const singleColumnServices = [
    {
      id: "business-website",
      service: "Business & Corporate Website",
      category: "Digital Presence",
      indicativePrice: "From RM800",
      priceNote: "Indicative · 100% Negotiable",
      badge: "Most Requested",
      quickSummary:
        "Clean, responsive website showcasing your business, services, Penang location, and direct WhatsApp contact channels.",
      deliverables: [
        "Multi-section mobile-optimized website design",
        "Clear service menus, business details & contact actions",
        "Direct WhatsApp click-to-chat integration",
        "Flexible phasing: start simple and expand as you grow",
      ],
      negotiationTip:
        "Have a smaller budget? We can start with a streamlined 1-page landing site and scale up later.",
      whatsappQuery:
        "Hi SolveX AI! I'd like to discuss a business website. The price can be discussed further and negotiated to fit our budget. Here is our situation:",
    },
    {
      id: "digital-menu",
      service: "Digital Menu or Product Catalogue",
      category: "F&B & Retail",
      indicativePrice: "From RM200",
      priceNote: "Indicative · 100% Negotiable",
      badge: "Budget Friendly",
      quickSummary:
        "Interactive mobile menu or product showcase with QR code access for restaurant tables, counters, or social bio sharing.",
      deliverables: [
        "Fast-loading mobile menu with dish/product categories",
        "Print-ready QR code assets for table stands or cards",
        "Instant WhatsApp ordering pre-filled with item names",
        "Simple updates whenever your pricing or dishes change",
      ],
      negotiationTip:
        "Price depends on your menu size. We can easily tailor the setup for small stalls up to full restaurants.",
      whatsappQuery:
        "Hi SolveX AI! I'd like to discuss a digital menu / catalogue. The pricing can be discussed further and kept reasonable. Let's look at our menu:",
    },
    {
      id: "creative-social",
      service: "Social Media & AI Creative Visuals",
      category: "Marketing & Media",
      indicativePrice: "From RM300 / mo",
      priceNote: "Indicative · Flexible Monthly",
      badge: "Popular",
      quickSummary:
        "High-clarity visual graphics, promotional posters, and copy frameworks generated to maintain consistent social presence.",
      deliverables: [
        "Curated visual flyers and announcement posters",
        "Custom promotional angles crafted for local customers",
        "Ready-to-post graphics for WhatsApp Status, Facebook & IG",
        "Flexible month-by-month arrangement without long contracts",
      ],
      negotiationTip:
        "Need only a one-time promo bundle? We can negotiate a one-off package instead of monthly.",
      whatsappQuery:
        "Hi SolveX AI! I want to explore promotional graphics and creative content. Let's discuss a reasonable budget together:",
    },
    {
      id: "workflow-tools",
      service: "Spreadsheet Revamp & Internal Tools",
      category: "Operations & Workflows",
      indicativePrice: "Quoted After Assessment",
      priceNote: "Strictly Reasonable & Tailored",
      badge: "High ROI",
      quickSummary:
        "Custom Excel upgrades, automated forms, operational tracking logs, and internal utilities tailored to remove daily bottlenecks.",
      deliverables: [
        "Automated consolidation formulas to cut manual hours",
        "Input validation to eliminate typo mistakes and mismatches",
        "Simple visual status dashboard for managers and teams",
        "Full staff walkthrough so your team uses it effortlessly",
      ],
      negotiationTip:
        "We prioritize the single most painful manual bottleneck first to keep costs minimal and value immediate.",
      whatsappQuery:
        "Hi SolveX AI! Our team has repetitive spreadsheet / data bottlenecks. Let's discuss the issue first and negotiate a fair price:",
    },
    {
      id: "custom-automation",
      service: "Custom AI & Automation Projects",
      category: "Technology Solutions",
      indicativePrice: "Feasibility Review First",
      priceNote: "Phased & 100% Negotiable",
      badge: "Custom Exploration",
      quickSummary:
        "Specialized AI integrations, automated enquiry pipelines, document extractors, or custom workflow engines.",
      deliverables: [
        "Initial feasibility analysis — we test if technology actually helps",
        "Step-by-step prototype before committing to full build",
        "Honest cost-benefit comparison so you never overpay",
        "Pragmatic, manageable rollout scoped to your comfort",
      ],
      negotiationTip:
        "We build a small proof-of-concept first so you only invest further when you see real results.",
      whatsappQuery:
        "Hi SolveX AI! I have an automation / AI project in mind. Let's check feasibility first and discuss reasonable pricing later:",
    },
    {
      id: "maintenance-support",
      service: "Website Maintenance & Ongoing Updates",
      category: "Care & Support",
      indicativePrice: "Custom Quotation",
      priceNote: "Transparent & Pay-as-Needed",
      badge: "Peace of Mind",
      quickSummary:
        "Periodic content changes, banner updates, speed tuning, and sanity checks to keep your digital assets running smoothly.",
      deliverables: [
        "Prompt updates whenever your prices, staff, or photos change",
        "Security checks and broken link monitoring",
        "Direct WhatsApp technical hotline for quick assistance",
        "Ad-hoc hourly or low monthly retainer options",
      ],
      negotiationTip:
        "Only need updates once every few months? We can charge per update rather than recurring monthly fees.",
      whatsappQuery:
        "Hi SolveX AI! I need maintenance or updates for our website. Let's discuss an affordable, flexible arrangement:",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 relative overflow-hidden bg-[#070d18] text-white"
    >
      {/* Decorative ambient tech glows */}
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow & Headline */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase">
            <Coins className="w-3.5 h-3.5 text-blue-400" />
            <span>TRANSPARENT & REASONABLE PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            All Prices Are Strictly Reasonable. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              The Process Can Be Discussed Further.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything is 100% negotiable. Let's solve the issue and move on together. We believe cost should never stand between you and a practical solution.
          </p>
        </div>

        {/* Big Magnetic Reassurance Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-slate-900/90 border border-blue-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Fair Price Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                "Let's Solve the Issue First — Money Is Always Negotiable."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are based right here in Penang to support local businesses, teams, and individuals. You will never face inflated agency fees, hidden charges, or rigid contracts. If your budget is tight, tell us — we will adapt the scope, phase the work, or negotiate an affordable rate that fits your reality.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={buildWhatsAppUrl(
                  "Hi SolveX AI! I want to discuss a problem with our business or workflow. The price can be discussed further and negotiated to be reasonable. Here's what's happening:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                <span>Discuss Problem & Price</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-center text-slate-400">
                ⚡ Direct chat on WhatsApp · Zero obligation
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process Bar: How We Discuss & Settle Everything */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              HOW WE WORK TOGETHER
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              4-Step Process: Discussed Further, Step by Step
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all relative group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-black text-cyan-400 group-hover:text-cyan-300">
                    {step.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                </div>
                <h4 className="font-bold text-sm text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SINGLE-COLUMN UNIFIED PRICING LIST */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              SERVICES & INDICATIVE RATES (ALL 100% NEGOTIABLE)
            </div>
            <div className="text-xs text-cyan-400 font-medium hidden sm:block">
              Click any item to view scope & negotiation flexibility
            </div>
          </div>

          {singleColumnServices.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? "bg-slate-900/90 border-blue-500/60 shadow-xl shadow-blue-500/5"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                {/* Main Row Bar (Clickable) */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                >
                  {/* Left: Info */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" />
                        <span>Negotiable</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.service}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {item.quickSummary}
                    </p>
                  </div>

                  {/* Right: Price & CTA Action */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800 w-full lg:w-auto">
                    <div className="text-left lg:text-right">
                      <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono">
                        {item.indicativePrice}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.priceNote}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={buildWhatsAppUrl(item.whatsappQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 min-h-[42px]"
                      >
                        <span>Discuss & Negotiate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(idx);
                        }}
                        className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer: Details, Scope & Negotiation Flexibility */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Deliverables */}
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Typical Deliverables Included:</span>
                        </div>
                        <ul className="space-y-1.5">
                          {item.deliverables.map((d, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-300"
                            >
                              <span className="text-blue-400 font-bold">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Negotiation & Flexibility Insight */}
                      <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/60 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                          <span>Negotiation & Budget Flexibility:</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.negotiationTip}
                        </p>
                        <div className="pt-2 text-[11px] text-cyan-200/80 font-medium">
                          🤝 We discuss the process further with you. If you have a specific target price, we make it work.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                      <span>
                        No hidden extras · Indicative pricing discussed and agreed before work starts
                      </span>
                      <a
                        href={buildWhatsAppUrl(item.whatsappQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                      >
                        <span>Chat about this on WhatsApp</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Closing Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-white">
            Have a custom problem or special situation?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Don't hesitate to reach out. Every challenge is unique, and our priority is finding a realistic solution that leaves both parties satisfied.
          </p>
          <div className="pt-1">
            <a
              href={buildWhatsAppUrl(
                "Hi SolveX AI! I have a challenge to discuss. Prices can be discussed further and kept reasonable. Let's talk:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Solve the Issue and Move on Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
