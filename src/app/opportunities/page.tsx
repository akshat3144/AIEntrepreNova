import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";

const page = () => {
  const opportunities = [
    { id: 1, title: "Opportunity 1", description: "Description for opportunity 1", imageSrc: "/image.png", link: "/", buttonText: "Learn More" },
    { id: 2, title: "Opportunity 2", description: "Description for opportunity 2", imageSrc: "/image.png", link: "/2", buttonText: "Learn More" },
    { id: 1, title: "Opportunity 1", description: "Description for opportunity 1", imageSrc: "/image.png", link: "/", buttonText: "Learn More" },
    { id: 2, title: "Opportunity 2", description: "Description for opportunity 2", imageSrc: "/image.png", link: "/2", buttonText: "Learn More" },
    { id: 1, title: "Opportunity 1", description: "Description for opportunity 1", imageSrc: "/image.png", link: "/", buttonText: "Learn More" },
    { id: 2, title: "Opportunity 2", description: "Description for opportunity 2", imageSrc: "/image.png", link: "/2", buttonText: "Learn More" },
    { id: 1, title: "Opportunity 1", description: "Description for opportunity 1", imageSrc: "/image.png", link: "/", buttonText: "Learn More" },
    { id: 2, title: "Opportunity 2", description: "Description for opportunity 2", imageSrc: "/image.png", link: "/2", buttonText: "Learn More" },
  ];
  return (
    <div className="pt-[150px] pb-[120px] grid grid-cols-4">
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
  );
};

export default page;