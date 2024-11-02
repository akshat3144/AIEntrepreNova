import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "Google Trends",
      description:
        "Explore popular searches and consumer interests in specific regions.",
      imageSrc: "/ri/trends.png",
      link: "https://trends.google.com/trends/",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "SurveyMonkey",
      description:
        "A popular tool for creating and distributing surveys to gather feedback directly from consumers. It’s user-friendly and offers templates for different types of market research.",
      imageSrc: "/ri/sm.png",
      link: "https://www.surveymonkey.com/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Indian Market Research Bureau (IMRB)",
      description:
        "IMRB is one of India’s leading market research agencies. While some reports are paid, the website provides valuable insights and news related to consumer behavior and market trends in India.",
      imageSrc: "/ri/imrb.png",
      link: "https://www.imrbint.com/site/about-us/overview",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">
          Market Research and Consumer Insights
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
