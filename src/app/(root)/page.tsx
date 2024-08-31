"use client";

import FeatureSection from "@/components/fragments/FeatureSection";
import HeroSection from "@/components/fragments/HeroSection";

export default function Home() {
  return (
    <main className="dark container py-32 lg:py-40">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
