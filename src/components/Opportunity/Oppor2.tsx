"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface ThreeDCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  buttonText: string;
}

export function ThreeDCardDemo({
  title,
  description,
  imageSrc,
  link,
  buttonText,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var px-4 sm:px-0">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900 border-gray-800 hover:border-blue-700/50 w-full max-w-[400px] h-[500px] rounded-xl p-6 border transition-all duration-300">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-white line-clamp-1"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-gray-400 text-sm mt-3 h-[80px] overflow-hidden line-clamp-3"
        >
          {description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-5">
          <div className="h-[250px] w-full overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              height={700}
              width={700}
              className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <Link href={link}>
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white text-sm font-bold shadow-lg shadow-blue-600/20 transition-all duration-300"
            >
              {buttonText}
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
