"use client";

import React from "react";
import { TestimonialSectionMemebers } from "@/components/Testimonials/Members";
import { BlurFade } from "@/components/ui/BlurFade";
import { motion } from "framer-motion";
import { Users, MessageSquare, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

// Define interface for community feature
interface CommunityFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const CommunityPage = () => {
  return (
    <div className="pt-[150px] pb-[120px] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <BlurFade delay={0.25} inView>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl text-center font-bold text-white mb-4">
              Our Community
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Connect with entrepreneurs across India who are building
              successful businesses with limited resources.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </BlurFade>

        {/* Existing testimonials section wrapped in styling that matches the tools page */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl blur-3xl -z-10" />
          <TestimonialSectionMemebers />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }: { feature: CommunityFeature }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full"
    >
      <Card className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col hover:border-gray-700 transition-all duration-200 hover:shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-black/20 transition-all duration-500"></div>
        <div
          className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 w-fit relative z-10`}
        >
          {feature.icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-white relative z-10">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm flex-grow relative z-10">
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
};

const communityFeatures: CommunityFeature[] = [
  {
    title: "Connect with Peers",
    description:
      "Network with other entrepreneurs who understand your challenges and can offer practical advice based on experience.",
    icon: <Users className="h-5 w-5 text-white" />,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Share Your Journey",
    description:
      "Document your entrepreneurial story and inspire others while gaining visibility for your business within our community.",
    icon: <MessageSquare className="h-5 w-5 text-white" />,
    color: "from-purple-600 to-purple-400",
  },
  {
    title: "Give & Receive Support",
    description:
      "Access a supportive environment where you can ask questions, receive encouragement, and celebrate wins together.",
    icon: <Heart className="h-5 w-5 text-white" />,
    color: "from-emerald-600 to-emerald-400",
  },
];

export default CommunityPage;
