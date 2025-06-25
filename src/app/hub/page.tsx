"use client";

import React from "react";
import { ThreeDCardDemo } from "@/components/Opportunity/Oppor2";
import { BlurFade } from "@/components/ui/BlurFade";
import { motion } from "framer-motion";

const page = () => {
  const news = [
    {
      id: 1,
      title: "Startup Mahakumbh Event",
      description:
        "Recently held, this major event highlighted India's booming startup ecosystem, with Prime Minister Narendra Modi emphasizing India's transition to a job-creating economy. It showcased growth in areas like space tech, where over 50 startups have emerged. PM Modi also noted that Indian women lead over 45% of startups, showcasing increasing diversity in entrepreneurship​",
      imageSrc: "/hub/op/sm.png",
      link: "https://www.hindustantimes.com/india-news/startup-mahakumbh-event-today-live-updates-pm-narendra-modi-address-entrepreneurs-delhi-police-traffic-advisory-101710902765118.html",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Startup Bharat Summit and Awards",
      description:
        "Held in Bengaluru, the Startup Bharat Summit and Awards took place on May 4, 2024, in conjunction with National Startup Day. It provided a valuable platform for early-stage startups to pitch to investors, showcase their innovations, and connect with industry leaders through a Tech Playground, workshops, and networking sessions.",
      imageSrc: "/hub/op/bsa.png",
      link: "https://www.nationalstartupday.in/",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Startup Sphere",
      description:
        "Organized by the Institute of Chartered Accountants of India (ICAI), took place from June 27 to June 29, 2024. This event aimed to strengthen collaboration and innovation among Indian startups. It offered in-depth sessions on emerging technologies and investment strategies, attracting entrepreneurs, venture capitalists, and tech professionals from across the country.",
      imageSrc: "/hub/op/ss.png",
      link: "https://startupsphere.org/",
      buttonText: "Learn More",
    },
  ];
  const opportunities = [
    {
      id: 1,
      title: "10Times - Discover Events Across India",
      description:
        "10Times offers a comprehensive list of upcoming events, exhibitions, and conferences across various industries in India, including startup-focused gatherings. Check out local events, meet industry leaders, and explore sessions on emerging trends.",
      imageSrc: "/hub/10.png",
      link: "https://10times.com/india",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "ExpoTobi - Find Exhibitions & Conferences",
      description:
        "ExpoTobi aggregates exhibitions and trade shows happening in November in India, including startup-focused events. Ideal for entrepreneurs looking to gain visibility, access new markets, and learn from industry experts.",
      imageSrc: "/hub/expo.png",
      link: "https://expotobi.com/country/india/exhibitions/november",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Townscript - Book Your Spot at Startup Events",
      description:
        "Townscript is a platform to discover and book tickets for startup events, including pitch sessions, workshops, and mixers. With a focus on user-friendly booking, it's a go-to for finding paid and free events in your area.",
      imageSrc: "/hub/town.png",
      link: "https://www.townscript.com/in/india/startup",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="text-center md:pt-[150px] pt-[80px] pb-[120px] pl-[10px] pr-[10px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold text-white mb-2">Latest News</h1>
        <h2 className="text-xl text-gray-400 mb-8">(Updated Every Sunday)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.map((opportunity) => (
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

        <div className="mt-20 mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">
            Look for Opportunities Here
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
            <h3 className="text-xl text-center pt-[5px] text-gray-400 max-w-3xl mx-auto">
              Want to share any Opportunity or News with your Fellow
              Entrepreneurs? Feel free to do so here
            </h3>
            <div className="text-center mt-4">
              <motion.a
                href="https://forms.gle/1jhJp8zML8HnaYXr6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="mt-4 py-3 px-6 font-medium text-sm text-center text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 active:shadow-none rounded-lg shadow-lg shadow-blue-600/20">
                  Share
                </button>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
