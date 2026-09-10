"use client";

import { TemplateProvider, useTemplate } from "@/lib/TemplateContext";
import FacebookPostCard from "@/components/FacebookPostCard";

function PreviewOnly() {
  const { template } = useTemplate();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-extrabold text-[#8B0000] sm:text-4xl">
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
}

export default function Home() {
  return (
    <TemplateProvider>
      <PreviewOnly />
    </TemplateProvider>
  );
}
