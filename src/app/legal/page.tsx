import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "Ministry of Corporate Affairs (MCA)",
      description:
        "Information on business registration and compliance in India.",
      imageSrc: "/legal/mca.png",
      link: "https://www.mca.gov.in/content/mca/global/en/home.html",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "MSME Registration",
      description:
        "Register your small business as an MSME (Micro, Small, and Medium Enterprise) to access various benefits.",
      imageSrc: "/legal/msme.png",
      link: "https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Startup India Hub",
      description: "Offers regulatory information and FAQs for startups.",
      imageSrc: "/legal/sui.png",
      link: "https://www.investindia.gov.in/startup-india-hub",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">Legal and Regulatory Guidance</h1>
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
