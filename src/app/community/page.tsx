import { TestimonialSectionAudience } from "@/components/Testimonials/Audience";
import { TestimonialSectionMemebers } from "@/components/Testimonials/Members";
import React from "react";

const page = () => {
  return (
    <div className="pb-[120px]">
      <TestimonialSectionMemebers></TestimonialSectionMemebers>
      <TestimonialSectionAudience></TestimonialSectionAudience>
    </div>
  );
};

export default page;
