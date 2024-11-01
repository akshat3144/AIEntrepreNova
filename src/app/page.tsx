import React from "react";
import HeroComp from "@/components/Hero/herocomp";
import { VortexDemoSecond } from "@/components/Hero/herovortex";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { BlurFade } from "@/components/ui/BlurFade";

const page = () => {
  return (
    <>
      <HeroComp></HeroComp>
      {/* <VortexDemoSecond></VortexDemoSecond> */}
      <BlurFade delay={0.25 * 2} inView>
        <FeaturesSectionDemo></FeaturesSectionDemo>
      </BlurFade>
      {/* <BentoGridThirdDemo></BentoGridThirdDemo> */}
      {/* <Footer></Footer> */}
    </>
  );
};

export default page;
