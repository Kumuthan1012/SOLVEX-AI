import React, { useState } from "react";
import { IMPROVEMENT_GOALS } from "../config/brand";
import {
  Clock,
  ShieldCheck,
  Eye,
  Layers,
  Users,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const ProblemReduction: React.FC = () => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"before" | "after">("after");

  const getGoalIcon = (name: string) => {
    switch (name) {
      case "Clock":
        return Clock;
      case "ShieldCheck":
        return ShieldCheck;
      case "Eye":
        return Eye;
      case "Layers":
        return Layers;
      case "Users":
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="problem-reduction" className="py-24 md:py-32 bg-[#090f1d] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            CONTINUOUS IMPROVEMENT PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Even When a Problem Has No Perfect Solution, <br className="hidden sm:inline" />
            Progress Is Possible.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Some challenges cannot be removed entirely. But there may still be opportunities to reduce mistakes, save time, simplify work, improve consistency, or make better-informed decisions.
          </p>
        </div>

        {/* 5 Potential Improvement Goals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {IMPROVEMENT_GOALS.map((goal, idx) => {
            const IconComp = getGoalIcon(goal.iconName);
            return (
              <div
                key={idx}
                className="bg-[#0c1427] p-5 rounded-3xl border border-slate-800 hover:border-cyan-500/40 shadow-lg flex flex-col justify-between space-y-3 transition-all group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white leading-snug">
                    {goal.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-cyan-400/80">Goal 0{idx + 1}</div>
              </div>
            );
          })}
        </div>

        {/* Before and After Workflow Illustration */}
        <div className="bg-[#0b1324] rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Visual Workflow Comparison
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Sample Case: Handling Weekly Orders & Customer Inquiries
              </h3>
            </div>

            {/* Segmented button switch */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveWorkflowTab("before")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeWorkflowTab === "before"
                    ? "bg-amber-600 text-white shadow-xs font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Before (Manual Friction)
              </button>
              <button
                type="button"
                onClick={() => setActiveWorkflowTab("after")}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeWorkflowTab === "after"
                    ? "bg-cyan-500 text-slate-950 shadow-xs font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                After (Structured Flow)
              </button>
            </div>
          </div>

          {/* Workflow Content */}
          <div className="py-6">
            {activeWorkflowTab === "before" ? (
              <div className="space-y-4">
                <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-200 font-medium">
                  State: High manual drag, unstandardized inquiries, scattered follow-ups.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Step 1: Raw Inquiries</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Customers send unstructured text on personal chats. Vital details (quantities, dates, contact numbers) are routinely missing.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Step 2: Back-and-Forth</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Staff spend 15–20 minutes asking basic clarifying questions per lead. Delays cause prospective clients to wander elsewhere.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Step 3: Manual Entry</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Details are hand-typed into multiple spreadsheets. Typo errors cause wrong order fulfillment or mismatched dates.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Step 4: Lost Follow-ups</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      No status visibility. When a customer messages back 4 days later, nobody knows who handled the original inquiry.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded-xl text-xs text-cyan-200 font-medium">
                  State: Structured intake, guided WhatsApp prefill, clear tracking log.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-900/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Step 1: Guided Form</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Customer accesses a clean mobile link or QR code. Mandatory fields ensure requirements are captured completely on turn 1.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-900/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Step 2: WhatsApp Dispatch</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Enquiry formats into an organized WhatsApp message sent straight to the business team with a structured reference summary.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-900/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Step 3: Central Tracker</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      One shared spreadsheet or dashboard logs the lead. Validation ensures dates and values match correct formats automatically.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-900/50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Step 4: Status Accountability</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Team views status flags (New, Quoted, Confirmed). Follow-up time drops significantly and inquiries don't disappear.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimers */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span className="font-mono text-[11px] text-slate-500">
              *Illustrative concept — custom built for your team.
            </span>
            <span className="font-medium text-slate-300 text-center sm:text-right">
              "We focus on understanding the current situation, identifying realistic improvements, and helping you take the next practical step."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
