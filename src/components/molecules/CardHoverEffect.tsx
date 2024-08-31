import { HoverEffect } from "../ui/card-hover-effect";

interface CardHoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}

const CardHoverEffect: React.FC<CardHoverEffectProps> = ({items}) => {
  return (
    <div className="mx-auto">
      <HoverEffect items={items} className="text-start"/>
    </div>
  );
}

export default CardHoverEffect;
