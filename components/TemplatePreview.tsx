"use client";

import { forwardRef } from "react";
import FacebookPostCard from "./FacebookPostCard";
import { TemplateState } from "@/lib/types";

type Props = {
  template: TemplateState;
};

const TemplatePreview = forwardRef<HTMLDivElement, Props>(({ template }, ref) => {
  return (
    <div
      ref={ref}
      style={{ width: 819 }}
      className="mx-auto flex flex-col bg-white px-8 py-8"
    >
      <h1 className="mb-6 text-center text-3xl font-extrabold leading-tight text-[#8B0000]">
        Remove AI Label Link in Bio/Comment
      </h1>
      <div className="flex flex-col gap-6">
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
