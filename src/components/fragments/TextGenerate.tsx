import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `"In the rush of daily life, journaling allows us to pause, reflect, and gain insight into our thoughts and feelings." — Dan Harris`;


export const TextGenerate: React.FC = () => {
  return <TextGenerateEffect words={words} className="text-center text-red-300" />;
};
