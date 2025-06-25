"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <h2 className="text-xl md:text-xl text-center mb-4 text-gray-400">
            Read what our users are sharing about their entrepreneurial
            journeys. Their experiences, questions, and insights are helping
            others grow their rural businesses across India. Share your story
            too!
          </h2>
          <div className="text-center">
            <motion.a
              href="/contact?type=feedback"
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
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-full overflow-hidden",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll"
          )}
        >
          {items.map((item) => (
            <li
              className="w-[400px] max-w-full relative rounded-2xl border border-gray-800 flex-shrink-0 px-8 py-6 md:w-[400px] h-[200px] bg-gray-900 hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] text-gray-300 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-white font-medium">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-blue-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
