import CardHoverEffect from "../molecules/CardHoverEffect";

export const features = [
  {
    title: "High Precision Emotion Detection",
    description:
      "Feelinks AI leverages advanced NLP algorithms to detect and categorize emotions with high accuracy, ensuring reliable analysis of your text.",
    link: "#",
  },
  {
    title: "Tailored Emotional Insights",
    description:
      "Get personalized emotional insights based on your writing style. Feelinks AI adapts to your tone, offering deeper understanding and meaningful feedback.",
    link: "#",
  },
  {
    title: "Supports Multiple Languages",
    description:
      "Analyze emotions in the language you prefer. Feelinks AI handles multiple languages, making it accessible for a diverse range of users.",
    link: "#",
  },
  {
    title: "Instant Emotion Analysis",
    description:
      "Receive real-time emotional feedback as you write. Feelinks AI categorizes emotions instantly, helping you manage them as they arise.",
    link: "#",
  },
  {
    title: "Data Privacy and Security",
    description:
      "Your data is secure with us. Feelinks AI encrypts and stores your information safely, so you can express yourself with confidence.",
    link: "#",
  },
  {
    title: "Intuitive and Easy to Use",
    description:
      "Enjoy a user-friendly interface designed for everyone. Whether you're tech-savvy or not, Feelinks AI makes emotion analysis simple and accessible.",
    link: "#",
  },
];

const FeatureSection: React.FC = () => {
  return(
    <section className="mb-24 text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
      <h1 className="text-center">Our Features</h1>
      <CardHoverEffect items={features}/>
    </section>
  )
}


export default FeatureSection;