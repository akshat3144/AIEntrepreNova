import FAQ from "@/components/faq/faqcomp";
import { BlurFade } from "@/components/ui/BlurFade";
import React from "react";

const page = () => {
  return (
    <div className="pt-[70px]">
      <BlurFade delay={0.25 * 3} inView>
        <FAQ></FAQ>
      </BlurFade>
    </div>
  );
};

export default page;
