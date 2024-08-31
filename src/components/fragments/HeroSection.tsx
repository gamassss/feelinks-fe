import { Highlight } from "../ui/hero-highlight";
import JournalForm from "./JournalForm";
import { Inter_Tight } from "next/font/google";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const HeroSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex mb-16 xl:min-h-screen container">
      <div className="flex flex-col text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        <div className="mb-4">
          <Highlight
            className={`text-black dark:text-white ${inter_tight.className}`}
          >
            Write, analyze, and understand
          </Highlight>{" "}
          your emotions effortlessly with Simple AI Analysis.
        </div>
        <div className="md:px-16 mb-4">
          <p className="text-slate-600 dark:text-slate-400 text-base lg:text-2xl font-normal">
            Enhance your journaling journey with personalized emotion analysis
            from every entry. Reflect deeper, understand better.
          </p>
        </div>
        <JournalForm height="140px" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default HeroSection;
