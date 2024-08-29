"use client";

import JournalForm from "@/components/fragments/JournalForm";
import { TextGenerate } from "@/components/fragments/TextGenerate";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="dark px-64 py-40">
      <HeroSection />
      <TextGenerate />
    </main>
  );
}

function HeroSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        <div className="mb-4">
          <Highlight className="text-black dark:text-white">
            Write, analyze, and understand
          </Highlight>{" "}
          your emotions effortlessly. Discover insights that matter.
        </div>
        <div className="px-16 mb-4">
          <p className="text-slate-600 dark:text-slate-400 text-2xl font-normal">
            Turn Your Daily Journaling into a Powerful Tool for Understanding
            Yourself with Easy Emotion Analysis and Helpful Insights.
          </p>
        </div>
        <JournalForm height="140px" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
