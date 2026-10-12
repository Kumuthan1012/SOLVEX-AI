import React from "react";
import { BRAND, buildWhatsAppUrl, SPECIAL_REQUESTS } from "../config/brand";
import { MessageSquare, Phone, Package, Send, ArrowUpRight } from "lucide-react";

export const MobileBottomNav: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070d18]/95 backdrop-blur-md border-t border-slate-800/90 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
        {/* WhatsApp Direct Action (Prominent) */}
        <a
          href={buildWhatsAppUrl(BRAND.defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
          <span className="truncate">Chat WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </a>

        {/* Custom Supplies Quick Jump */}
        <button
          type="button"
          onClick={() => handleScrollTo("custom-supplies")}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 active:bg-slate-800 transition-colors"
          aria-label="View Custom Supplies"
        >
          <Package className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="text-[10px] font-semibold text-slate-300 truncate">Supplies</span>
        </button>

        {/* Contact Form Quick Jump */}
        <button
          type="button"
          onClick={() => handleScrollTo("contact")}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 active:bg-slate-800 transition-colors"
          aria-label="Jump to Contact Form"
        >
          <Send className="w-4 h-4 text-blue-400 mb-0.5" />
          <span className="text-[10px] font-semibold text-slate-300 truncate">Briefing</span>
        </button>
      </div>
    </div>
  );
};
