import React from "react";
import { buildWhatsAppUrl } from "../config/brand";
import {
  Layout,
  Palette,
  QrCode,
  FileCheck,
  RefreshCw,
  Search,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";

export const GrowthLeadsSection: React.FC = () => {
  const growthPillars = [
    {
      icon: Layout,
      title: "Professional Websites & Landing Pages",
      description: "Clean, responsive pages that introduce who you are, what you offer, and why people in Penang and beyond can trust your service.",
    },
    {
      icon: Palette,
      title: "Promotional Graphics & Visual Assets",
      description: "Eye-catching digital posters, product highlights, and social banners that communicate value clearly across chat and feeds.",
    },
    {
      icon: QrCode,
      title: "Digital Catalogues & Product Showcase",
      description: "Interactive mobile menus and item catalogues linked with QR codes for fast customer browsing without physical print delays.",
    },
    {
      icon: FileCheck,
      title: "Enquiry Forms & Lead Capture",
      description: "Frictionless intake questionnaires that collect customer requirements, specifications, and contact preferences directly.",
    },
    {
      icon: RefreshCw,
      title: "Customer Follow-Up Workflows",
      description: "Structured enquiry logging sheets and pre-written response templates so no potential client inquiry is ignored or lost.",
    },
    {
      icon: Search,
      title: "Research Into Digital Marketing Tools",
      description: "Unbiased investigation into appropriate local directories, messaging channels, and marketing platforms suited to your scale.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#070d18] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              GROWTH & VISIBILITY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Looking for More Customers? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Let's Explore Your Opportunities.
              </span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We help explore practical ways to improve your digital presence, make it easy for customers to discover your services, organise enquiries, and build dependable follow-up workflows.
            </p>

            {/* Distinction disclosure */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <ShieldAlert className="w-4 h-4 text-cyan-400" />
                <span>Our Clear Distinction on Lead Generation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We build the <strong>systems, assets, and workflows that enable</strong> customer discovery and enquiry capture. We <strong>do not guarantee</strong> an arbitrary volume of leads or sales, because conversions ultimately depend on market demand, pricing, competitor activity, and product excellence.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(
                  "Hi SolveX AI! I'm interested in discussing practical growth goals and ways to improve our digital customer enquiry workflow:"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-md shadow-blue-500/10"
              >
                <span>Discuss Growth Goals</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {growthPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-[#0c1427] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2.5 shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
