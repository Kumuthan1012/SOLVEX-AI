import React, { useState, useEffect } from "react";
import { BRAND, buildWhatsAppUrl } from "../config/brand";
import { MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

interface NavbarProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "custom-supplies",
        "who-we-help",
        "services",
        "how-it-works",
        "our-approach",
        "problem-reduction",
        "portfolio",
        "pricing",
        "faq",
        "contact",
      ];

      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Custom Supplies", href: "#custom-supplies", id: "custom-supplies" },
    { label: "Who We Help", href: "#who-we-help", id: "who-we-help" },
    { label: "Services", href: "#services", id: "services" },
    { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { label: "Our Approach", href: "#our-approach", id: "our-approach" },
    { label: "Pricing", href: "#pricing", id: "pricing" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070d18]/90 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/40 py-3"
            : "bg-[#070d18]/70 backdrop-blur-xs border-b border-slate-800/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0a0f1e] rounded-[10px] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l16 16" />
                    <path d="M4 20L20 4" />
                    <circle cx="12" cy="12" r="3" fill="#38bdf8" stroke="none" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    SolveX
                  </span>
                  <span className="font-bold text-[10px] uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 tracking-wider font-mono border border-cyan-800/60">
                    AI
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Penang, Malaysia</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-md transition-colors relative hover:text-white ${
                      isActive ? "text-cyan-400 font-semibold" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={buildWhatsAppUrl(
                  "Hi SolveX AI! I'd like to discuss a problem or idea and explore possible solutions."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 shadow-md shadow-cyan-500/15 transition-all hover:scale-[1.02] active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Let's Solve Your Problem</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={buildWhatsAppUrl(
                  "Hi SolveX AI! I'd like to discuss a problem or idea and explore possible solutions."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80"
                aria-label="WhatsApp SolveX AI"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#090e1c] border-l border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-slate-950 font-black">
                    SX
                  </div>
                  <div>
                    <span className="font-extrabold text-white">SolveX AI</span>
                    <span className="block text-[11px] text-slate-400">Penang, Malaysia</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={buildWhatsAppUrl(
                  "Hi SolveX AI! I'd like to discuss a problem or idea and explore possible solutions."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Solve Your Problem</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-cyan-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Honest Assessment First</span>
                </div>
                <p>We explore practical solutions with you without any sales pressure.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
