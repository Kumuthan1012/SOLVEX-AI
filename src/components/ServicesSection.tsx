import React, { useState } from "react";
import { SERVICES, buildWhatsAppUrl, ServiceItem } from "../config/brand";
import {
  Globe,
  Sparkles,
  TrendingUp,
  Cog,
  ClipboardList,
  MessageCircle,
  BookOpen,
  Wrench,
  HelpCircle,
  ArrowUpRight,
  Check,
  Search,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "website-development":
        return Globe;
      case "ai-creative":
        return Sparkles;
      case "digital-marketing-leads":
        return TrendingUp;
      case "business-automation":
        return Cog;
      case "workplace-operations":
        return ClipboardList;
      case "whatsapp-communication":
        return MessageCircle;
      case "digital-catalogues":
        return BookOpen;
      case "maintenance-support":
        return Wrench;
      case "custom-problem-solving":
        return HelpCircle;
      default:
        return Cog;
    }
  };

  const filterCategories = [
    { id: "all", label: "All Services (9)" },
    { id: "web", label: "Websites & Presence" },
    { id: "creative", label: "AI & Creative" },
    { id: "automation", label: "Automation & Operations" },
    { id: "custom", label: "Custom Problem Solving" },
  ];

  const filteredServices = SERVICES.filter((item) => {
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "web" && (item.id === "website-development" || item.id === "digital-catalogues")) ||
      (selectedFilter === "creative" && item.id === "ai-creative") ||
      (selectedFilter === "automation" &&
        (item.id === "business-automation" ||
          item.id === "workplace-operations" ||
          item.id === "whatsapp-communication" ||
          item.id === "digital-marketing-leads" ||
          item.id === "maintenance-support")) ||
      (selectedFilter === "custom" && item.id === "custom-problem-solving");

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.scopePoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            SERVICES & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            One Partner. Multiple Ways to Move Forward.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We explore practical services and technologies based on your actual needs. You don't have to choose a technical solution before explaining your problem.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          {/* Functional Button Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedFilter === cat.id
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or tasks..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComp = getServiceIcon(service.id);
            const isHighlight = service.isCustomHighlight;

            return (
              <div
                key={service.id}
                className={`rounded-3xl transition-all flex flex-col justify-between p-6 sm:p-7 ${
                  isHighlight
                    ? "bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white border border-cyan-500/50 shadow-2xl md:col-span-2 lg:col-span-1"
                    : "bg-[#0c1427] border border-slate-800 hover:border-cyan-500/40 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="space-y-4">
                  {/* Category & Icon */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                        isHighlight
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                          : "bg-slate-900 text-cyan-400 border border-slate-700/80"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider ${
                        isHighlight ? "text-cyan-300" : "text-slate-400"
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Scope bullets */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-slate-400">
                      Scope & Capabilities:
                    </div>
                    <ul className="space-y-1.5">
                      {service.scopePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-4 border-t border-slate-800">
                  <a
                    href={buildWhatsAppUrl(service.whatsappPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                      isHighlight
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950"
                        : "bg-slate-800 hover:bg-blue-600 text-white"
                    }`}
                  >
                    <span>Discuss This</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest feasibility footnote */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 text-center max-w-3xl mx-auto">
          <strong className="text-slate-200">Scope Note:</strong> All services are subject to initial feasibility and agreed requirements. We don't make false promises on automatic leads or sales—we build dependable systems that serve your goals honestly.
        </div>
      </div>
    </section>
  );
};
