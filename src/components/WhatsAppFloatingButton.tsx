import React, { useState } from "react";
import { BRAND, buildWhatsAppUrl } from "../config/brand";
import { MessageSquare, X } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 text-white shadow-lg text-xs animate-fade-in border border-slate-700/80">
          <span>Need quick advice? Chat with us on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Chat with SolveX AI on WhatsApp"
        title="Chat on WhatsApp (+60165101410)"
      >
        <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
