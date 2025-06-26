import React from "react";
import {
  FileText,
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
    id: "business-plan",
    title: "Business Plan Generator",
    description:
      "Create a comprehensive business plan for your startup or existing business in minutes.",
    icon: <FileText className="h-7 w-7" />,
    color: "from-blue-600 to-blue-400",
    longDescription:
      "Generate a detailed business plan tailored to your industry, target market, and business model. Includes executive summary, market analysis, competitive landscape, financial projections, and more.",
    features: [
      "Executive Summary",
      "Market Analysis",
      "Competition Overview",
      "Sales & Marketing Strategy",
      "Financial Projections",
    ],
  },
  // Include all your other tool definitions here...
  "professional-emails": {
    // ...
  },
  // ...other tools...
  networking: {
    // ...
  },
};
