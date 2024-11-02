import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "LinkedIn",
      description:
        "Connect with professionals and potential mentors across various industries.",
      imageSrc: "/network/link.png",
      link: "https://www.linkedin.com/",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Women Entrepreneurship Platform (WEP)",
      description:
        "A government initiative to support and mentor women entrepreneurs.",
      imageSrc: "/network/wep.png",
      link: "https://wep.gov.in/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "TiE Global",
      description:
        "A nonprofit focused on fostering entrepreneurship through mentorship, networking, and funding.",
      imageSrc: "/network/tie.png",
      link: "https://tie.org/",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">
          Mentorship and Networking Platforms
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
