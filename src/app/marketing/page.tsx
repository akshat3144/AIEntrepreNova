import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  const opportunities = [
    {
      id: 1,
      title: "Facebook Business",
      description: "Learn how to create and manage a business page for free.",
      imageSrc: "/marketing/face.png",
      link: "https://www.facebook.com/business",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "WhatsApp Business",
      description:
        "A free tool to connect with customers directly through WhatsApp.",
      imageSrc: "/marketing/whats.png",
      link: "https://business.whatsapp.com/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "YouTube Creator Academy",
      description:
        "Offers free lessons on creating and promoting video content.",
      imageSrc: "/marketing/yt.png",
      link: "https://www.youtube.com/channel/UCkRfArvrzheW2E7b6SVT7vQ",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">Low-Cost Marketing Platforms</h1>
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
