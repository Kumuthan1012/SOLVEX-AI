import React, { useState, useEffect } from "react";
import { BRAND, buildWhatsAppUrl } from "../config/brand";
import {
  MessageSquare,
  MapPin,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  ShieldAlert,
  Send,
  Building,
  Briefcase,
  User,
  Info,
} from "lucide-react";

interface ContactSectionProps {
  initialAudience?: "business" | "company" | "individual";
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialAudience = "business" }) => {
  const [name, setName] = useState("");
  const [customerType, setCustomerType] = useState<"business" | "company" | "individual">(
    initialAudience
  );
  const [orgName, setOrgName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [budgetRange, setBudgetRange] = useState("Open to discussion / Flexible");
  const [preferredOutcome, setPreferredOutcome] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialAudience) {
      setCustomerType(initialAudience);
    }
  }, [initialAudience]);

  const generateFormattedMessage = () => {
    let text = `Hi SolveX AI!\n\nI would like to discuss a problem / project with your team.\n\n`;
    text += `• Name: ${name.trim() || "[Not specified]"}\n`;
    text += `• Category: ${
      customerType === "business"
        ? "Business Owner / Enterprise"
        : customerType === "company"
        ? "Company Employee / Team"
        : "Individual / Personal Project"
    }\n`;

    if (orgName.trim()) {
      text += `• Organisation: ${orgName.trim()}\n`;
    }
    if (contactMethod.trim()) {
      text += `• Contact Info: ${contactMethod.trim()}\n`;
    }
    if (budgetRange.trim()) {
      text += `• Budget Preference: ${budgetRange}\n`;
    }
    if (preferredOutcome.trim()) {
      text += `• Desired Outcome: ${preferredOutcome.trim()}\n`;
    }

    text += `\n• What I am facing / want to build:\n${
      problemDescription.trim() ||
      "I'd like to schedule an initial consultation to explore possibilities."
    }`;

    return text;
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = generateFormattedMessage();
    const url = buildWhatsAppUrl(formatted);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopySummary = () => {
    const formatted = generateFormattedMessage();
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#070d18] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Whatever the Challenge, <br className="hidden sm:inline" />
            Let's Start With a Conversation.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            You don't need a formal proposal or technical terminology. Tell us what is happening, what you want to improve, or what you hope to create. We'll discuss realistic options together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct WhatsApp Contact & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1427] border border-blue-500/30 text-white shadow-2xl space-y-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">
                  Direct Response Line
                </span>
                <h3 className="text-2xl font-black tracking-tight">{BRAND.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fastest way to start: message us on WhatsApp. We answer questions directly with zero sales pressure.
                </p>
              </div>

              {/* Direct WhatsApp Big Button */}
              <div>
                <a
                  href={buildWhatsAppUrl(BRAND.defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-98"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Tell Us Your Problem</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Opens WhatsApp with our welcome inquiry prompt
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">
                      Operating Location
                    </span>
                    <span className="font-semibold text-white">{BRAND.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">
                      WhatsApp Line
                    </span>
                    <span className="font-semibold text-white">{BRAND.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Who Is Welcomed */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  We Welcome Enquiries From:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Business owners
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Company teams
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Employees & leads
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Freelancers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Entrepreneurs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Individual creators
                  </span>
                </div>
              </div>
            </div>

            {/* Workplace Policy Reminder */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-semibold">Confidentiality Notice:</strong> If discussing workplace or employer challenges, please ensure you do not disclose confidential company records, passwords, client names, or proprietary trade secrets.
              </div>
            </div>
          </div>

          {/* Right Column: Structured Problem Briefing Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c1427] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Structured Problem Briefing
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in what you know. This prepares your enquiry cleanly for WhatsApp dispatch or your clipboard.
                </p>
              </div>

              <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
                {/* Customer Type Segmented Buttons */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    I Am Contacting As:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCustomerType("business")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        customerType === "business"
                          ? "bg-blue-600 border-blue-500 text-white shadow-xs"
                          : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      <Building className="w-4 h-4" />
                      <span>Business</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomerType("company")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        customerType === "company"
                          ? "bg-blue-600 border-blue-500 text-white shadow-xs"
                          : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>Company Employee</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomerType("individual")}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                        customerType === "individual"
                          ? "bg-blue-600 border-blue-500 text-white shadow-xs"
                          : "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300"
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <span>Individual</span>
                    </button>
                  </div>
                </div>

                {/* Name & Org */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name <span className="text-slate-500">(or nickname)</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Tan"
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business or Organisation <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Penang Cafe / Department"
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Contact Method & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email or Phone <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                      placeholder="e.g. alex@example.com / WhatsApp"
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Budget Preference <span className="text-cyan-400 font-mono">(Flexible)</span>
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="Open to discussion / Flexible">
                        Open to discussion / Flexible (Focus on solution first)
                      </option>
                      <option value="Under RM500">Under RM500 (Basic menu or asset)</option>
                      <option value="RM500 - RM1,500">RM500 – RM1,500 (Website or tool)</option>
                      <option value="RM1,500 - RM3,500">RM1,500 – RM3,500 (Workflow / Dashboard)</option>
                      <option value="Above RM3,500">Above RM3,500 (Full project / custom system)</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    What is going wrong, taking too much time, or what do you want to create? *
                  </label>
                  <textarea
                    rows={4}
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="Describe your challenge in your own words. For example: 'We waste 3 hours every week compiling inventory' or 'We need a simple website with a WhatsApp ordering menu in Penang.'"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 resize-y"
                    required
                  />
                </div>

                {/* Preferred Outcome */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Outcome <span className="text-slate-500">(What does a good result look like?)</span>
                  </label>
                  <input
                    type="text"
                    value={preferredOutcome}
                    onChange={(e) => setPreferredOutcome(e.target.value)}
                    placeholder="e.g. Save 2 hours weekly, get more local enquiries, look professional online"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Privacy Model */}
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-[11px] text-slate-400 flex items-start gap-2">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent Privacy Model:</strong> This form formats your input into WhatsApp or your clipboard. We do not store your information on external databases.
                  </span>
                </div>

                {/* Submission Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp (+60165101410)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Summary"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
