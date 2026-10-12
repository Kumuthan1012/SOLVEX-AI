import React from "react";
import { WHY_CHOOSE_US } from "../config/brand";
import {
  Compass,
  Sliders,
  Cpu,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return Compass;
      case "Sliders":
        return Sliders;
      case "Cpu":
        return Cpu;
      case "MessageSquare":
        return MessageSquare;
      case "BookOpen":
        return BookOpen;
      case "LifeBuoy":
        return LifeBuoy;
      default:
        return CheckCircle;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#090f1d] text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            OUR PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Why Partner With SolveX AI?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate with transparency, pragmatism, and a commitment to measurable improvement rather than marketing hype.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = getIcon(item.iconName);
            return (
              <div
                key={idx}
                className="bg-[#0c1427] border border-slate-800 rounded-3xl p-6 sm:p-7 hover:border-cyan-500/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] font-mono text-cyan-400/80">
                  Principle 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-300 font-medium italic">
            "We may not have every answer immediately, but we will make a genuine effort to find a practical way forward."
          </p>
        </div>
      </div>
    </section>
  );
};
