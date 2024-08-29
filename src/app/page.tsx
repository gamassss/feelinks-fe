"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="dark">
      <div className="min-h-screen h-full bg-black flex items-center">
        <HeroText />
      </div>
    </main>
  );
}

function HeroText() {
  return (
    <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
      <Highlight className="text-black dark:text-white">
        Write, analyze, and understand
      </Highlight>{" "}
      your emotions effortlessly. Discover insights that matter.
    </div>
  );
}
