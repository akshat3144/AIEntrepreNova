import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title:
        "National Institute for Entrepreneurship and Small Business Development (NIESBUD)",
      description: "Offers training programs and workshops.",
      imageSrc: "/edu/nei.png",
      link: "https://www.niesbud.nic.in/",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Khan Academy",
      description:
        "Free courses on financial literacy, accounting, and general business skills.",
      imageSrc: "/edu/khan.png",
      link: "https://www.khanacademy.org/economics-finance-domain/core-finance",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Coursera",
      description:
        "Online courses from universities on entrepreneurship and business management, with financial aid options.",
      imageSrc: "/edu/coursera.png",
      link: "https://www.coursera.org/",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">Business Education and Training</h1>
        <div className="grid grid-cols-3">
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
