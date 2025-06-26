"use client";

import React, { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/BlurFade";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Search, BookOpen, PenTool } from "lucide-react";
import { TOOLS_DATA, ToolData } from "./toolsData";

// Define interface for tool data
interface Tool extends ToolData {
  slug: string;
}

// Convert the TOOLS_DATA object to an array for easier mapping
const TOOLS = Object.entries(TOOLS_DATA).map(([slug, data]) => ({
  ...data,
  slug,
})) as Tool[];

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Link href={`/tools/${tool.slug}`} className="h-full">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col hover:border-gray-700 transition-all duration-200 hover:shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-black/20 transition-all duration-500"></div>
          <div
            className={`p-3 rounded-lg bg-gradient-to-r ${tool.color} mb-4 w-fit`}
          >
            {tool.icon}
          </div>
          <h3 className="font-bold text-xl mb-2">{tool.title}</h3>
          <p className="text-gray-400 text-sm flex-grow">{tool.description}</p>
          <div className="flex items-center mt-4 text-sm">
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
              Try now
            </span>
            <ChevronRight className="w-4 h-4 ml-1 text-blue-400 group-hover:text-blue-300 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const FeatureBox = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className="p-6 bg-gray-900/60 rounded-xl border border-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-3 bg-blue-500/20 rounded-lg mb-4 w-fit">{icon}</div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const ToolsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Add this useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle filtering tools safely with mounted check
  const filteredTools = mounted
    ? TOOLS.filter(
        (tool) =>
          tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : TOOLS;

  return (
    <div className="pt-[150px] pb-[120px]">
      <div className="max-w-6xl mx-auto px-4">
        <BlurFade delay={0.25} inView>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl text-center font-bold text-white mb-4">
              AI-Powered Tools for Entrepreneurs
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Leverage our suite of specialized tools designed to help you grow
              and manage your business efficiently.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, i) => (
              <ToolCard key={i} tool={tool} />
            ))}
            {mounted && filteredTools.length === 0 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 p-10 text-center">
                <p className="text-gray-400">
                  No tools found matching your search.
                </p>
              </div>
            )}
          </div>
        </BlurFade>

        <BlurFade delay={0.45} inView>
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              How Our Tools Help You Succeed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureBox
                icon={<BookOpen className="h-5 w-5 text-blue-400" />}
                title="Knowledge & Guidance"
                description="Access expert-level business knowledge tailored for rural entrepreneurs, providing strategic guidance when you need it most."
              />
              <FeatureBox
                icon={<PenTool className="h-5 w-5 text-blue-400" />}
                title="Document Creation"
                description="Generate professional documents, reports, and plans that would normally require expensive consultants or hours of research."
              />
              <FeatureBox
                icon={<Search className="h-5 w-5 text-blue-400" />}
                title="Market Insights"
                description="Get data-driven market insights and competitive analysis to make informed decisions about your business strategy."
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default ToolsPage;
