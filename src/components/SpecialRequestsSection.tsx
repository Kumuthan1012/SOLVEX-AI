import React, { useState } from "react";
import { SPECIAL_REQUESTS, buildWhatsAppUrl } from "../config/brand";
import {
  CreditCard,
  Shirt,
  FileImage,
  Tag,
  Gift,
  Palette,
  PackageSearch,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export const SpecialRequestsSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return CreditCard;
      case 1:
        return Shirt;
      case 2:
        return FileImage;
      case 3:
        return Tag;
      case 4:
        return Gift;
      case 5:
        return Palette;
      case 6:
        return PackageSearch;
      default:
        return Layers;
    }
  };

  const handleServiceClick = (title: string) => {
    setSelectedService(title);
    const msg = `Hi SolveX AI! I'd like to enquire about custom business supplies for: ${title}. Here's what we need:`;
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="custom-supplies"
      className="py-24 md:py-32 bg-[#080e1d] text-white relative border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{SPECIAL_REQUESTS.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {SPECIAL_REQUESTS.sectionHeading} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {SPECIAL_REQUESTS.supportingHeadline}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {SPECIAL_REQUESTS.description}
          </p>
        </div>

        {/* Potential Services Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>CUSTOM DESIGN & PHYSICAL MERCHANDISE</span>
            </div>
            <span className="text-xs text-cyan-400 font-medium hidden sm:block">
              Tap any item to inquire directly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SPECIAL_REQUESTS.potentialServices.map((item, idx) => {
              const IconComp = getServiceIcon(idx);
              const isLarge = idx === 6; // last card spans 2 columns on lg screens if desired

              return (
                <div
                  key={idx}
                  onClick={() => handleServiceClick(item.title)}
                  className={`p-6 rounded-3xl bg-[#0c1427] border border-slate-800 hover:border-cyan-500/50 hover:bg-[#0e1830] transition-all cursor-pointer flex flex-col justify-between group shadow-lg ${
                    isLarge ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                    <span>Enquire About This</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Step Process & Quotation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1324] border border-slate-800 shadow-2xl relative overflow-hidden mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              SIMPLE 5-STEP COORDINATION
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              How Custom Orders Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              From requirement intake to quality verification and doorstep delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {SPECIAL_REQUESTS.howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-base font-black text-cyan-400">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-white mt-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing & CTA Row */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Transparent Quotation Model
              </span>
              <p className="text-xs sm:text-sm text-slate-300">
                {SPECIAL_REQUESTS.pricingDescription}
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(SPECIAL_REQUESTS.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/10 shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{SPECIAL_REQUESTS.ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Required Special Request Service Disclaimer */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-300">Important Sourcing Policy: </strong>
            {SPECIAL_REQUESTS.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
};
