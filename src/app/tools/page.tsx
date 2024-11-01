import { BentoGridThirdDemo } from "@/components/Grid/bengrid";
import React from "react";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  return (
    <div className="pt-[150px] pb-[120px]">
      <div className="text-center">
        <BlurFade delay={0.25 * 2} inView>
          <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-8">
            Some tools to help you
          </h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 2} inView>
        <BentoGridThirdDemo></BentoGridThirdDemo>
      </BlurFade>
    </div>
  );
};

export default page;
