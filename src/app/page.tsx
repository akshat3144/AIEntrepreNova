import React from "react";
import HeroComp from "@/components/Hero/herocomp";
import { VortexDemoSecond } from "@/components/Hero/herovortex";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-1";
import { BlurFade } from "@/components/ui/BlurFade";
import { TestimonialSectionAudience } from "@/components/Testimonials/Audience";
import A2 from "@/components/Testimonials/A2";
import LampDemo from "@/components/ui/lamp";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <BlurFade delay={0.25 * 2} inView>
          <HeroComp></HeroComp>
        </BlurFade>
      </div>
      <div className="block md:hidden">
        <LampDemo></LampDemo>
      </div>
      <BlurFade delay={0.25 * 2} inView>
        <FeaturesSectionDemo></FeaturesSectionDemo>
      </BlurFade>
      {/* <TestimonialSectionAudience></TestimonialSectionAudience> */}
      <div className="pb-[120px]">
        <BlurFade delay={0.25 * 2} inView>
          <A2></A2>
        </BlurFade>
      </div>
    </>
  );
};

export default page;
