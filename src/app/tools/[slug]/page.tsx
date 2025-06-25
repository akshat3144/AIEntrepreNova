"use client";

import React, { useEffect, useState } from "react";
import GeminiChat from "@/components/GeminiChat/chatcomponent";
import { BlurFade } from "@/components/ui/BlurFade";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  Mail,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Tool data with details for each tool - shared with the main tools page
export const TOOLS_DATA = {
  "business-plan": {
    id: "tool1",
    title: "Business Plan Generator",
    description:
      "Develop a comprehensive business plan tailored for your rural enterprise.",
    icon: <FileText className="h-7 w-7" />,
    color: "from-blue-600 to-blue-400",
    longDescription:
      "This tool helps you create a detailed business plan for your rural enterprise. It covers everything from executive summaries to financial projections, marketing strategies, and operational plans.",
    features: [
      "Executive Summary Generation",
      "Market Analysis Templates",
      "Financial Projection Tables",
      "Strategic Planning Guidance",
      "Implementation Roadmaps",
    ],
  },
  "professional-emails": {
    id: "tool2",
    title: "Write Professional Emails",
    description:
      "Craft clear and professional emails to communicate effectively with stakeholders.",
    icon: <Mail className="h-7 w-7" />,
    color: "from-green-600 to-green-400",
    longDescription:
      "Create professionally formatted emails for various business scenarios. This tool helps you maintain appropriate tone, structure and content for effective business communication.",
    features: [
      "Business Inquiry Templates",
      "Formal Response Formatting",
      "Partnership Proposal Structures",
      "Investor Communication Guides",
      "Client Follow-up Templates",
    ],
  },
  "marketing-strategy": {
    id: "tool3",
    title: "Marketing Strategy Advisor",
    description:
      "Create effective marketing strategies to promote your rural business and reach your target audience.",
    icon: <TrendingUp className="h-7 w-7" />,
    color: "from-purple-600 to-purple-400",
    longDescription:
      "Develop comprehensive marketing plans tailored to rural businesses. Get guidance on digital marketing, local promotion strategies, and building your brand effectively.",
    features: [
      "Target Audience Analysis",
      "Digital Marketing Plans",
      "Social Media Strategy Creation",
      "Local Marketing Techniques",
      "Budget Allocation Guidance",
    ],
  },
  "financial-planning": {
    id: "tool4",
    title: "Financial Planning Assistant",
    description:
      "Plan and manage your business finances with detailed financial projections and budgeting tools.",
    icon: <DollarSign className="h-7 w-7" />,
    color: "from-amber-600 to-amber-400",
    longDescription:
      "Get help creating detailed financial plans, cash flow projections, budget allocations, and funding strategies tailored to your rural business needs.",
    features: [
      "Cash Flow Projections",
      "Budget Planning Templates",
      "Expense Tracking Systems",
      "Financing Options Analysis",
      "Break-even Point Calculations",
    ],
  },
  "market-research": {
    id: "tool5",
    title: "Market Research Report Generator",
    description:
      "Generate insightful market research reports to understand your industry and make informed decisions.",
    icon: <BarChart3 className="h-7 w-7" />,
    color: "from-rose-600 to-rose-400",
    longDescription:
      "Create detailed market research reports to understand your industry landscape, competition, and target market. Make informed decisions based on data-driven insights.",
    features: [
      "Competitor Analysis",
      "SWOT Report Generation",
      "Target Market Profiling",
      "Industry Trend Analysis",
      "Consumer Behavior Insights",
    ],
  },
};

export default function ToolPage({ params }: { params: { slug: string } }) {
  const [toolData, setToolData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the tool data based on the slug
    const data = TOOLS_DATA[params.slug as keyof typeof TOOLS_DATA];
    if (data) {
      setToolData(data);
    }
    setIsLoading(false);
  }, [params.slug]);

  // If tool doesn't exist, show 404
  if (!isLoading && !toolData) {
    notFound();
  }

  if (isLoading) {
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
