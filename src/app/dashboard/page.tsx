'use client'

import TextArea from "@/components/atoms/TextArea";
import StarsIcon from "@/components/icons/stars";
import { Button } from "@/components/ui/button";
import { ChatBubbleIcon, UploadIcon } from "@radix-ui/react-icons";
import { Inter_Tight } from "next/font/google";
import { useState } from "react";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

function DashboardPage() {
  const [text, setText] = useState("");

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
      <form action="" onSubmit={handleSubmit}>
        <TextArea height="320px" placeholder="Write your thoughts here..."/>
        <div className="flex justify-between items-center mb-8">
          <div>
            <Button variant="outline">
              <UploadIcon className="mr-2 h-4 w-4" /> Upload
            </Button>
          </div>
          <div className="flex items-center gap-x-2">
            <Button variant="default">
              <StarsIcon className="mr-2 text-white" />
              Save and Analyze
            </Button>
            <Button variant="default" size="icon">
              <ChatBubbleIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>

      <p className="text-slate-800">
        No entries found. What stories will your first diary entry tell?
      </p>
    </div>
  );
}

export default DashboardPage;
