"use client";

import FeatureSection from "@/components/fragments/FeatureSection";
import HeroSection from "@/components/fragments/HeroSection";
import { TextGenerate } from "@/components/fragments/TextGenerate";

export default function Home() {
  return (
    <main className="dark px-64 py-40">
      <HeroSection />
      {/* <TextGenerate /> */}
      <FeatureSection />
    </main>
  );
}
