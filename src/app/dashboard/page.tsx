"use client";

import TextArea from "@/components/atoms/TextArea";
import JournalForm from "@/components/fragments/JournalForm";
import StarsIcon from "@/components/icons/stars";
import { Button } from "@/components/ui/button";
import { ChatBubbleIcon, UploadIcon } from "@radix-ui/react-icons";
import { Inter_Tight } from "next/font/google";
import { useState } from "react";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

function DashboardPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`pl-10 pt-10`}>
      <header className={`${inter_tight.className} mb-12`}>
        <h1 className="text-4xl font-semibold mb-2">AI Emotion Analyzer</h1>
        <p className="text-lg text-slate-500 font-normal">
          Write, analyze, and gain emotional insights.
        </p>
      </header>
      <JournalForm handleSubmit={handleSubmit} />
      <p className="text-slate-800">
        No entries found. What stories will your first diary entry tell?
      </p>
    </div>
  );
}

export default DashboardPage;
