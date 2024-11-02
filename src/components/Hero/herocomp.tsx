import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

const HeroComp = () => {
  const products = [
    {
      title: "Business Education and Training",
      link: "/education",
      thumbnail: "/hero/edu.png",
    },
    {
      title: "Government Schemes and Financial Support",
      link: "/govt-support",
      thumbnail: "/hero/Govt.png",
    },
    {
      title: "Legal and Regulatory Guidance",
      link: "/legal",
      thumbnail: "/hero/legal.png",
    },
    {
      title: "Business Education and Training",
      link: "/education",
      thumbnail: "/hero/edu.png",
    },
    {
      title: "Market Research and Consumer Insights",
      link: "/research-insights",
      thumbnail: "/hero/mr.png",
    },
    {
      title: "Low-Cost Marketing Platforms",
      link: "/marketing",
      thumbnail: "/hero/marketing.png",
    },
    {
      title: "Mentorship and Networking Platforms",
      link: "/networking",
      thumbnail: "/hero/network.png",
    },
    {
      title: "Basic Financial and Accounting Tools",
      link: "/accounts",
      thumbnail: "/hero/accounts.png",
    },
  ];

  return (
    <div className="bg-black text-white">
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroComp;
