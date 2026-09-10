"use client";

import { TemplateProvider, useTemplate } from "@/lib/TemplateContext";
import FacebookPostCard from "@/components/FacebookPostCard";
import EditorPanel from "@/components/EditorPanel";

function AppBody() {
  const { template } = useTemplate();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
        {/* Editor */}
        <div>
          <EditorPanel />
        </div>

        {/* Preview */}
        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 sm:p-8">
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
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <TemplateProvider>
      <AppBody />
    </TemplateProvider>
  );
}
