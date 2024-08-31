"use client";

import FeatureSection from "@/components/organisms/FeatureSection";
import HeroSection from "@/components/organisms/HeroSection";

export default function Home() {
  return (
    <main className="dark container py-32 lg:py-40">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
