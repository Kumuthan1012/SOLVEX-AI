import React, { useState } from "react";
import { PORTFOLIO_CONCEPTS, PortfolioConcept, buildWhatsAppUrl } from "../config/brand";
import {
  UtensilsCrossed,
  BriefcaseBusiness,
  Layers,
  Sparkles,
  LayoutDashboard,
  MessageSquareShare,
  X,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  Info,
} from "lucide-react";

export const PortfolioSection: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<PortfolioConcept | null>(null);

  const getConceptIcon = (type: PortfolioConcept["mockupType"]) => {
    switch (type) {
      case "restaurant":
        return UtensilsCrossed;
      case "consulting":
        return BriefcaseBusiness;
      case "catalogue":
        return Layers;
      case "campaign":
        return Sparkles;
      case "dashboard":
        return LayoutDashboard;
      case "inquiry":
        return MessageSquareShare;
      default:
        return Layers;
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#070d18] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            CONCEPT DEMONSTRATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ideas, Concepts, and Digital Possibilities.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore sample architectures and interactive concepts that demonstrate how we solve common challenges across businesses, workflows, and personal projects.
          </p>
        </div>

        {/* Clear honest note */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-3xl mx-auto mb-12 flex items-center justify-center gap-2 text-center">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-slate-200">Authenticity Note:</strong> The showcases below are functional illustrative concepts designed to demonstrate structure and capability, not fabricated client claims or fake testimonials.
          </span>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_CONCEPTS.map((concept) => {
            const Icon = getConceptIcon(concept.mockupType);
            return (
              <div
                key={concept.id}
                className="bg-[#0c1427] rounded-3xl border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Mockup Preview Visual Header */}
                  <div className="h-44 bg-slate-950 p-4 relative flex flex-col justify-between overflow-hidden border-b border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />

                    {/* Window Controls Decorator */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                        Sample Concept
                      </span>
                    </div>

                    {/* Miniature UI simulation */}
                    <div className="relative z-10 my-auto p-3 rounded-xl bg-slate-900/80 backdrop-blur-xs border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-white truncate">
                          {concept.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {concept.tagline}
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Penang Architecture</span>
                      <span className="text-cyan-400">Mobile Ready</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                        {concept.category}
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {concept.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2">
                        {concept.description}
                      </p>
                    </div>

                    {/* Sample Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {concept.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 list-none">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedConcept(concept)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Concept</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      `Hi SolveX AI! I saw the "${concept.title}" concept in your portfolio and would like to build something similar. Here is my situation:`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-400 border border-cyan-800/60 transition-colors"
                    title="Inquire about this concept on WhatsApp"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Concept Details Modal */}
      {selectedConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setSelectedConcept(null)}
          />
          <div className="relative bg-[#0c1427] text-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-800">
            {/* Modal Header */}
            <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {selectedConcept.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedConcept.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{selectedConcept.tagline}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedConcept(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Problem vs Solution Analysis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Challenge Addressed:
                  </span>
                  <p className="text-xs sm:text-sm text-amber-200/90">
                    {selectedConcept.sampleProblem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    Practical Solution Concept:
                  </span>
                  <p className="text-xs sm:text-sm text-cyan-200/90">
                    {selectedConcept.conceptSolution}
                  </p>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Concept Overview</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedConcept.description}
                </p>
              </div>

              {/* Key Features & Architecture */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Key Features Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedConcept.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-[11px] text-slate-400">
                This is an illustrative reference concept designed to show how requirements translate into working code and design. Genuine project implementations are customized to your specific branding, menu, or business process.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedConcept(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={buildWhatsAppUrl(
                  `Hi SolveX AI! I'm interested in building a solution similar to your "${selectedConcept.title}" concept. Let's discuss requirements:`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <span>Discuss On WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
