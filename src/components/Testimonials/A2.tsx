import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { BlurFade } from "../ui/BlurFade";

const items = [
  {
    quote:
      "As a first-time entrepreneur, the guidance here has been invaluable. The platform is easy to navigate and full of insights.",
    name: "Neha Reddy",
    title: "Startup Founder",
  },
  {
    quote:
      "The guidance and resources on AIEntrepreNova have helped me grow my freelance business. It's a must-have tool for budding entrepreneurs!",
    name: "Anil Joshi",
    title: "Freelancer",
  },
  {
    quote:
      "The personalized advice feature is fantastic! It helped me refine my business strategy and connect with others in my field.",
    name: "Ravi Kumar",
    title: "Small Business Owner",
  },
  {
    quote:
      "A fantastic resource for anyone looking to grow their business. The platform is user-friendly and informative.",
    name: "Amit Sharma",
    title: "Freelancer",
  },
];

const A2 = () => {
  return (
    <div className="pt-[100px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
      <BlurFade delay={0.25} inView>
        <InfiniteMovingCards items={items} />
      </BlurFade>
    </div>
  );
};

export default A2;
