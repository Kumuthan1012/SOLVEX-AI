import React from "react";
import { BRAND, buildWhatsAppUrl, SERVICES } from "../config/brand";
import { MessageSquare, MapPin, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Custom Supplies", href: "#custom-supplies" },
    { label: "Who We Help", href: "#who-we-help" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Approach", href: "#our-approach" },
    { label: "Pricing", href: "#pricing" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050811] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-slate-950 font-black shadow-md">
                SX
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                {BRAND.name}
              </span>
            </div>

            <p className="text-sm font-semibold text-cyan-400">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              SolveX AI helps businesses, companies, workplace teams, and individuals overcome challenges through practical thinking, modern technology, and continuous improvement. Based in Penang, Malaysia.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BRAND.location}</span>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact On WhatsApp ({BRAND.phoneDisplay})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Selected Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, "#services")}
                    className="hover:text-cyan-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  View all 9 service categories &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>Operating with transparency & honest feasibility in Penang, Malaysia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
