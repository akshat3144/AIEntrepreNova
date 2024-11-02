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
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ={50}
          className="text-lg font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <Image
            src={imageSrc}
            height={500}
            width={500}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <Link href={link}>
            <CardItem
              translateZ={20}
              className="px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {buttonText}
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
