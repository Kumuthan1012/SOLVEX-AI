import React, { useState } from "react";
import { BRAND, buildWhatsAppUrl } from "../config/brand";
import {
  MessageSquare,
  ArrowRight,
  Store,
  FileSpreadsheet,
  UserCheck,
  CheckCircle2,
  ArrowUpRight,
  Search,
  Sliders,
  Check,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<"business" | "employee" | "individual">("business");

  const scenarios = {
    business: {
      type: "Business Challenge",
      icon: Store,
      input: "“We have great products in Penang, but our website is outdated, menus tear easily, and customer WhatsApp orders get scattered.”",
      investigation: "Analyze customer ordering habits, identify low-friction mobile menu structure, design QR table cards.",
      practicalOutcome: [
        "Lightweight mobile-first digital catalogue",
        "Direct WhatsApp ordering with prefilled item names",
        "Clear Google Business & social link alignment",
      ],
      timeframe: "Typically 5–10 days",
      whatsappQuery: "Hi SolveX AI! I run a business and want to modernize our website and customer enquiry process.",
    },
    employee: {
      type: "Workplace Task Bottleneck",
      icon: FileSpreadsheet,
      input: "“Every Friday, 3 hours are wasted manually copy-pasting numbers from three branch sheets into a weekly management summary.”",
      investigation: "Review data structure, implement automated cross-sheet aggregation, build error-checking validation rules.",
      practicalOutcome: [
        "Automated consolidation formula template",
        "Built-in error checking highlights missing entries",
        "Weekly reporting time reduced from ~180m to ~15m",
      ],
      timeframe: "Typically 3–7 days",
      whatsappQuery: "Hi SolveX AI! Our team has repetitive spreadsheet / reporting bottlenecks we want to streamline.",
    },
    individual: {
      type: "Personal Project or Idea",
      icon: UserCheck,
      input: "“I want to showcase my interior design projects and share a digital business card, but I don't know where to start or host it.”",
      investigation: "Curate project media, structure clean 1-page visual portfolio, create QR digital contact card.",
      practicalOutcome: [
        "Fast, personal visual portfolio website",
        "Sharable digital card link for WhatsApp bio",
        "Direct client enquiry intake form",
      ],
      timeframe: "Typically 3–5 days",
      whatsappQuery: "Hi SolveX AI! I have a personal project / portfolio idea I'd like to bring to life.",
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070d18] text-white">
      {/* Ambient electric glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Message & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/70 border border-cyan-800/70 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{BRAND.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-tight text-white leading-[1.12]">
              Tell Us the Problem. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Let's Find a Way Forward.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg font-medium text-slate-300 leading-relaxed max-w-2xl">
              From business challenges and workplace bottlenecks to personal projects and digital ideas, SolveX AI helps you explore practical solutions using modern technology, creative craft, and AI.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              You don't need technical jargon before contacting us. Tell us what is taking too much time, causing avoidable errors, or what you wish existed. We explore realistic options and find a sensible way forward.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Discuss Your Challenge</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm sm:text-base transition-colors"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Supporting statement */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                <span className="text-white font-semibold">For businesses.</span>{" "}
                <span className="text-white font-semibold">For companies & employees.</span>{" "}
                <span className="text-white font-semibold">For individuals.</span>{" "}
                Every challenge deserves to be understood.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Problem-to-Solution Pathfinder */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1324] rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Card Header & Scenario Selector */}
              <div className="p-4 bg-slate-950/80 text-white flex items-center justify-between border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                    How We Approach Problems
                  </span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono">Interactive Demo</span>
              </div>

              {/* Segmented controls */}
              <div className="p-2 bg-slate-900/70 border-b border-slate-800 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveScenario("business")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                    activeScenario === "business"
                      ? "bg-blue-600 text-white shadow-xs font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Business
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario("employee")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                    activeScenario === "employee"
                      ? "bg-blue-600 text-white shadow-xs font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Workplace
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScenario("individual")}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                    activeScenario === "individual"
                      ? "bg-blue-600 text-white shadow-xs font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Individual
                </button>
              </div>

              {/* Interactive Pathfinder Body */}
              <div className="p-5 space-y-4">
                {/* Step 1: The Raw Problem */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Search className="w-3.5 h-3.5" />
                      1. You Explain What's Happening:
                    </span>
                    <span className="text-[11px] text-slate-500">In your words</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs sm:text-sm text-amber-200/90 italic">
                    {current.input}
                  </div>
                </div>

                {/* Step 2: What SolveX AI Does */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    2. We Investigate & Evaluate:
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300">
                    {current.investigation}
                  </div>
                </div>

                {/* Step 3: Practical Way Forward */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      3. Practical Deliverables:
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{current.timeframe}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                    {current.practicalOutcome.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button linked to this exact scenario */}
                <a
                  href={buildWhatsAppUrl(current.whatsappQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs transition-colors group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                  <span>Discuss A Similar Challenge On WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <p className="text-[11px] text-center text-slate-500">
                  Illustrative scenario. Every solution is custom-fitted to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
