// src/app/tools/tool1/page.tsx

import React from "react";
import GeminiChat from "@/components/GeminiChat/chatcomponent";
import { BlurFade } from "@/components/ui/BlurFade";

const Tool1Page = () => {
  return (
    <div className="text-center pt-[150px] pb-[120px]">
      <BlurFade delay={0.25 * 2} inView>
        <h1 className="text-3xl font-bold">Write Professional Mails</h1>
        <div className="min-h-screen bg-black pt-16 ">
          <GeminiChat toolType="tool2" />
        </div>
      </BlurFade>
    </div>
  );
};

export default Tool1Page;
