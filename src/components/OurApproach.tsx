import React from "react";
import { APPROACH_STEPS } from "../config/brand";
import { Headphones, Search, Scale, FileText, Wrench, ShieldAlert } from "lucide-react";

export const OurApproach: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case "01":
        return Headphones;
      case "02":
        return Search;
      case "03":
        return Scale;
      case "04":
        return FileText;
      case "05":
        return Wrench;
      default:
        return Headphones;
    }
  };

  return (
    <section id="our-approach" className="py-24 md:py-32 bg-[#070d18] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            OUR DISCIPLINED METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            We Don't Start by Selling. <br className="hidden sm:inline" />
            We Start by Understanding.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Technology is only valuable when it solves a real friction point. Here is our 5-step process for turning vague difficulties into concrete, workable solutions.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {APPROACH_STEPS.map((item) => {
            const Icon = getStepIcon(item.step);
            return (
              <div
                key={item.step}
                className="bg-[#0c1427] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-cyan-400 group-hover:text-cyan-300">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cyan-300/80 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Principle Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0b1324] border border-blue-500/30 max-w-4xl mx-auto space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-300 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                "If the original problem cannot be eliminated completely, we'll explore whether its frequency, impact, cost, or error rate can be reduced."
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We never promise reductions in errors or costs without factual analysis. Every outcome depends on problem complexity, available baseline information, and operational adherence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
