import { HoverEffect } from "../ui/card-hover-effect";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}

const CardHoverEffectDemo: React.FC<CardHoverEffectProps> = ({items}) => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} className="text-start"/>
    </div>
  );
}

export default CardHoverEffectDemo;
