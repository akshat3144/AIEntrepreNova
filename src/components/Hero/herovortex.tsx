import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          AI-EnterpreNova
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Want to do a startup ? You are at the right place.
        </p>
      </Vortex>
    </div>
  );
}
