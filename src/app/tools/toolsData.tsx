import React from "react";
import {
  FileText,
  Mail,
  TrendingUp,
  DollarSign,
  BarChart3,
  BookOpen,
  PenTool,
  FileCheck,
  Users,
} from "lucide-react";

// Define the ToolData type
export type ToolData = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  longDescription: string;
  features: string[];
};

// Export the TOOLS_DATA
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
  "business-pitch": {
    id: "tool6",
    title: "Business Pitch Writer",
    description:
      "Craft compelling business pitches and elevator speeches for investors and partners.",
    icon: <BookOpen className="h-7 w-7" />,
    color: "from-teal-600 to-teal-400",
    longDescription:
      "Create powerful written pitches that clearly communicate your business value proposition, market opportunity, and growth potential. Perfect for preparing investor meetings or funding applications.",
    features: [
      "Elevator Pitch Generation",
      "Value Proposition Statements",
      "Business Model Descriptions",
      "Competitive Advantage Summaries",
      "Growth Strategy Narratives",
    ],
  },
  "content-creation": {
    id: "tool7",
    title: "Content Creator",
    description:
      "Generate engaging content for your business website, social media, and promotional materials.",
    icon: <PenTool className="h-7 w-7" />,
    color: "from-indigo-600 to-indigo-400",
    longDescription:
      "Create compelling content tailored for your rural business across various platforms. From website copy to social media posts, product descriptions, and promotional materials.",
    features: [
      "Website Copy Generation",
      "Social Media Post Creation",
      "Product Description Writing",
      "Blog Article Development",
      "Newsletter Content Drafting",
    ],
  },
  "grant-application": {
    id: "tool8",
    title: "Grant Application Assistant",
    description:
      "Get help preparing effective grant applications for rural business funding opportunities.",
    icon: <FileCheck className="h-7 w-7" />,
    color: "from-orange-600 to-orange-400",
    longDescription:
      "Streamline your grant application process with tailored assistance for rural business funding opportunities. Develop compelling proposals, project descriptions, and budget justifications.",
    features: [
      "Proposal Writing Templates",
      "Project Description Frameworks",
      "Budget Justification Tools",
      "Impact Statement Generation",
      "Application Review Assistance",
    ],
  },
  "business-networking": {
    id: "tool9",
    title: "Networking Script Generator",
    description:
      "Create personalized networking scripts for events, meetings, and cold outreach to grow your business network.",
    icon: <Users className="h-7 w-7" />,
    color: "from-pink-600 to-pink-400",
    longDescription:
      "Develop effective networking scripts tailored for different situations to help you connect with potential partners, clients, suppliers, and mentors in a confident and professional manner.",
    features: [
      "Elevator Pitch Creation",
      "Industry Event Conversation Starters",
      "Cold Outreach Message Templates",
      "Follow-up Communication Scripts",
      "Partnership Discussion Frameworks",
    ],
  },
};
