"use client";

import React, { useEffect, useState } from "react";
import GeminiChat from "@/components/GeminiChat/chatcomponent";
import { BlurFade } from "@/components/ui/BlurFade";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TOOLS_DATA, ToolData } from "../toolsData";

export default function ToolPage({ params }: { params: { slug: string } }) {
  const [toolData, setToolData] = useState<ToolData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the tool data based on the slug
    const data = TOOLS_DATA[params.slug as keyof typeof TOOLS_DATA];
    if (data) {
      setToolData(data as ToolData);
    }
    setIsLoading(false);
  }, [params.slug]);

  // If tool doesn't exist, show 404
  if (!isLoading && !toolData) {
    notFound();
  }

  if (isLoading || !toolData) {
    return (
      <div className="pt-[150px] pb-[120px] min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-[150px] pb-[120px] min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          href="/tools"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Tools</span>
        </Link>

        <BlurFade delay={0.25} inView>
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${toolData.color} mr-4 flex items-center justify-center`}
                >
                  {toolData.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {toolData.title}
                  </h1>
                  <p className="text-gray-300">{toolData.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium text-white mb-3">
                  About this tool
                </h2>
                <p className="text-gray-300 mb-6">{toolData.longDescription}</p>

                <h3 className="text-lg font-medium text-white mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {toolData.features.map((feature: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${toolData.color} mr-2`}
                      ></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 h-full">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Try it now
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Enter your request below and our AI will generate a
                    customized response for your business needs.
                  </p>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 shadow-xl">
                    <GeminiChat toolType={toolData.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
