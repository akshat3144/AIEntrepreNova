import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "Pradhan Mantri Mudra Yojana",
      description:
        "Provides financial support for micro and small enterprises.",
      imageSrc: "/govt/pmmy.png",
      link: "https://www.mudra.org.in/",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Stand-Up India",
      description:
        "Helps SC/ST and women entrepreneurs with bank loans for greenfield projects.",
      imageSrc: "/govt/si.png",
      link: "https://www.standupmitra.in/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Startup India",
      description:
        "A government initiative offering guidance, funding, and incentives for startups.",
      imageSrc: "/edu/coursera.png",
      link: "https://www.coursera.org/",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">
          Government Schemes and Financial Support
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <ThreeDCardDemo
              key={opportunity.id}
              title={opportunity.title}
              description={opportunity.description}
              imageSrc={opportunity.imageSrc}
              link={opportunity.link}
              buttonText={opportunity.buttonText}
            />
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default page;
