import React from "react";
import { TARGET_AUDIENCES, buildWhatsAppUrl } from "../config/brand";
import {
  Building2,
  Briefcase,
  User,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface WhoWeHelpProps {
  onSelectAudience?: (audienceId: "business" | "company" | "individual") => void;
}

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onSelectAudience }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case "business":
        return Building2;
      case "company":
        return Briefcase;
      case "individual":
        return User;
      default:
        return Building2;
    }
  };

  const handleAudienceClick = (audienceId: "business" | "company" | "individual") => {
    if (onSelectAudience) {
      onSelectAudience(audienceId);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="who-we-help" className="py-24 md:py-32 bg-[#090f1d] border-y border-slate-800/80 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            WHO WE HELP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Every Challenge Deserves to Be Understood
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you run a business in Penang, manage demanding workflows inside a company, or want to bring a personal idea to life, SolveX AI is ready to listen.
          </p>
        </div>

        {/* 3 Large Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARGET_AUDIENCES.map((audience) => {
            const IconComponent = getIcon(audience.id);
            return (
              <div
                key={audience.id}
                className="bg-[#0c1427] rounded-3xl border border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all flex flex-col justify-between p-6 sm:p-8 group relative overflow-hidden"
              >
                <div className="space-y-5">
                  {/* Header / Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                      {audience.title}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                      {audience.headline}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Examples list */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Typical Opportunities:
                    </div>
                    <ul className="space-y-2">
                      {audience.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Confidentiality Notice for Workplace & Company Employees */}
                  {audience.confidentialityNote && (
                    <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200/90 flex items-start gap-2 leading-relaxed">
                      <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block mb-0.5 text-amber-300">Confidentiality First:</strong>
                        {audience.confidentialityNote}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card CTAs */}
                <div className="pt-8 space-y-2 mt-auto">
                  <a
                    href={buildWhatsAppUrl(audience.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-blue-500/10"
                  >
                    <span>{audience.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleAudienceClick(audience.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <span>Use contact form instead</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
