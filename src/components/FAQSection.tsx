import React, { useState } from "react";
import { FAQ_LIST, FaqItem } from "../config/brand";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#090f1d] text-white border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            COMMON INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers about our approach, pricing, capabilities, and boundaries.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQ questions..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#0c1427] border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0c1427] rounded-2xl border border-slate-800 hover:border-cyan-500/30 shadow-md overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-[#0c1427] rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-400">
              No questions found matching "{searchQuery}". Feel free to message us directly on WhatsApp!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
