"use client";

import { forwardRef } from "react";
import FacebookPostCard from "./FacebookPostCard";
import { TemplateState } from "@/lib/types";

type Props = {
  template: TemplateState;
};

const TemplatePreview = forwardRef<HTMLDivElement, Props>(({ template }, ref) => {
  return (
    <div ref={ref} className="bg-white p-8">
      <h1 className="mb-6 text-center text-2xl font-extrabold text-[#8B0000] sm:text-4xl">
        Remove AI Label Link in Bio/Comment
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FacebookPostCard
          variant="left"
          profileName={template.profileName}
          profileImage={template.profileImage}
          time={template.time}
          caption={template.caption}
          mainImage={template.mainImage}
          stats={template.left}
        />
        <FacebookPostCard
          variant="right"
          profileName={template.profileName}
          profileImage={template.profileImage}
          time={template.time}
          caption={template.caption}
          mainImage={template.mainImage}
          stats={template.right}
        />
      </div>
    </div>
  );
});

TemplatePreview.displayName = "TemplatePreview";

export default TemplatePreview;
