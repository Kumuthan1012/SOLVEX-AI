/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SpecialRequestsSection } from "./components/SpecialRequestsSection";
import { WhoWeHelp } from "./components/WhoWeHelp";
import { ServicesSection } from "./components/ServicesSection";
import { HowToWorkWithUs } from "./components/HowToWorkWithUs";
import { OurApproach } from "./components/OurApproach";
import { ProblemReduction } from "./components/ProblemReduction";
import { GrowthLeadsSection } from "./components/GrowthLeadsSection";
import { PricingSection } from "./components/PricingSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { MobileBottomNav } from "./components/MobileBottomNav";

export default function App() {
  const [selectedAudience, setSelectedAudience] = useState<"business" | "company" | "individual">("business");

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 pb-16 md:pb-0">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 6: Hero Section */}
        <Hero />

        {/* Featured Special Request Spotlight: Custom Design & Business Supplies */}
        <SpecialRequestsSection />

        {/* Section 7: Who We Help (Businesses, Companies & Employees, Individuals) */}
        <WhoWeHelp onSelectAudience={(aud) => setSelectedAudience(aud)} />

        {/* Section 8: Services (All 9 Categories & Custom Inquiries) */}
        <ServicesSection />

        {/* Section 15: How to Work With Us (4-Step Simple Process) */}
        <HowToWorkWithUs />

        {/* Section 9: Our Unique Approach (5-Step Disciplined Methodology) */}
        <OurApproach />

        {/* Section 10: Problem Reduction & Continuous Improvement */}
        <ProblemReduction />

        {/* Section 11: Finding Customers & Generating Leads */}
        <GrowthLeadsSection />

        {/* Section 12: Flexible Pricing & Indicative Starting Rates */}
        <PricingSection />

        {/* Section 13: Portfolio Concepts & Demonstrations */}
        <PortfolioSection />

        {/* Section 14: Why Choose SolveX AI (Core Principles) */}
        <WhyChooseUs />

        {/* Section 16: Contact Section & Structured Problem Briefing */}
        <ContactSection initialAudience={selectedAudience} />

        {/* Section 17: FAQ (All 10 Questions with Honest Answers) */}
        <FAQSection />
      </main>

      {/* Section 18: Footer */}
      <Footer />

      {/* Quick WhatsApp Floating Contact Trigger for Desktop/Tablet */}
      <WhatsAppFloatingButton />

      {/* Persistent Bottom Action Dock for Mobile Devices */}
      <MobileBottomNav />
    </div>
  );
}
