import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="bg-black text-white pb-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Getting Started</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 md:gap-6 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <a
            key={feature.title}
            href={feature.link}
            className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 rounded-3xl overflow-hidden transform transition-transform hover:scale-105"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title:
      "How to build a Startup? | How to find a Co-founder & Hire Employees?",
    description:
      "Learn the steps to build a startup, find the right co-founder, and hire a strong team to bring your vision to life.",
    link: "https://www.youtube.com/watch?v=AUdi3xR-OnQ",
  },
  {
    title: "Startup India Learning Program (by Startup India)",
    description:
      "This program by the Government of India offers free learning modules on various aspects of entrepreneurship, including idea validation, funding, marketing, and compliance.",
    link: "https://www.startupindia.gov.in/",
  },
  {
    title: "Marketing Essentials",
    description:
      "Inbound marketing is a methodology to attract loyal customers to your business by aligning with your target audience's needs.",
    link: "https://www.hubspot.com/inbound-marketing",
  },
  {
    title: "Startup Stories",
    description:
      "Startup Stories shares inspiring stories of Indian and global entrepreneurs, case studies of successful startups, and insights on building businesses in India.",
    link: "https://www.youtube.com/@StartupStoriesTV",
  },
  {
    title: "BizTak",
    description:
      "BizTak covers news and updates on Indian startups, business trends, and entrepreneurial journeys. It’s ideal for staying updated on the Indian startup ecosystem.",
    link: "https://www.youtube.com/c/BizTak",
  },
  {
    title: "Y Combinator’s Startup School",
    description:
      "A free online program by Y Combinator that provides guidance on starting a company, featuring lessons from successful founders and investors.",
    link: "https://www.startupschool.org/",
  },
  {
    title: "LinkedIn Learning: Entrepreneurship Foundations",
    description:
      "A course designed to introduce entrepreneurs to startup basics, from ideation to business models, pitching, and understanding venture capital.",
    link: "https://www.linkedin.com/learning/entrepreneurship-foundations",
  },
  {
    title: "The Indian Dream",
    description:
      "This channel features interviews and case studies on unique Indian businesses, giving insights into growth strategies, funding, and sector-specific challenges in India.",
    link: "https://www.youtube.com/@IndianDreamProject",
  },
  {
    title: "StartupGyaan",
    description:
      "This channel focuses on the Indian startup ecosystem, providing news, case studies, and advice on building startups in India, including breakdowns of popular Indian startups.",
    link: "https://www.youtube.com/c/StartupGyaan",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p: [number, number][] = (pattern as [number, number][]) ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-800/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={-12}
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x?: number;
  y?: string | number;
  squares?: [number, number][];
}

export function GridPattern({ width, height, x, y, squares, ...props }: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
