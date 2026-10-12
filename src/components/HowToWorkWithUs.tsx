import React from "react";
import { buildWhatsAppUrl } from "../config/brand";
import { MessageSquare, Search, FileCheck, CheckCircle2, ArrowUpRight, ShieldCheck } from "lucide-react";

export const HowToWorkWithUs: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us What's Happening",
      desc: "Share your challenge, idea, or bottleneck in plain language. No technical jargon required.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "Investigate & Explore Options",
      desc: "We analyze feasibility, review modern tools, and identify practical approaches that fit your situation.",
      icon: Search,
    },
    {
      num: "03",
      title: "Agree on Scope & Transparent Terms",
      desc: "We discuss deliverables, timeline, and an affordable arrangement collaboratively before any commitment.",
      icon: FileCheck,
    },
    {
      num: "04",
      title: "Implement, Test & Refine",
      desc: "Upon your approval, we build and test the agreed solution, or help identify a suitable external specialist if outside our scope.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#090f1d] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            COLLABORATION PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How to Work With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A straightforward, pressure-free engagement designed to give you complete clarity before spending a single ringgit.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-[#0c1427] border border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between transition-all space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-black text-cyan-400">
                      Step {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero-Obligation Guarantee Box */}
        <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-800/50 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-200">
              <strong className="font-semibold block text-emerald-300">Zero Obligation to Buy:</strong>
              Contacting SolveX AI to discuss a challenge never obligates you to purchase any service. We are glad to explore possibilities openly.
            </div>
          </div>
          <a
            href={buildWhatsAppUrl("Hi SolveX AI! I'd like to initiate Step 1 and explore a challenge:")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-md"
          >
            <span>Start Step 01</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
