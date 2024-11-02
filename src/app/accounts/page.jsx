import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "Zoho Books",
      description:
        "Online accounting software with a free version for small businesses.",
      imageSrc: "/accounts/zoho.png",
      link: "https://www.zoho.com/in/books/",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Google Sheets",
      description:
        "A free, user-friendly tool to manage finances and track expenses.",
      imageSrc: "/accounts/sheets.png",
      link: "https://docs.google.com/spreadsheets/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Wave Accounting",
      description: "Free accounting software for small businesses.",
      imageSrc: "/accounts/wave.png",
      link: "https://www.waveapps.com/",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">
          Basic Financial and Accounting Tools
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
