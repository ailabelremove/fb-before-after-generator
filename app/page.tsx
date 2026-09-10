"use client";

import { useRef } from "react";
import { TemplateProvider, useTemplate } from "@/lib/TemplateContext";
import EditorPanel from "@/components/EditorPanel";
import TemplatePreview from "@/components/TemplatePreview";
import DownloadButton from "@/components/DownloadButton";

function AppBody() {
  const { template } = useTemplate();
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
        {/* Editor */}
        <div className="flex flex-col gap-4">
          <EditorPanel />
          <DownloadButton targetRef={previewRef} />
        </div>

        {/* Preview */}
        <div className="overflow-auto rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-200">
          <TemplatePreview ref={previewRef} template={template} />
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
