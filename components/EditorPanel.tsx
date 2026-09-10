"use client";

import { useTemplate } from "@/lib/TemplateContext";
import ImageUploader from "./ImageUploader";
import EngagementControls from "./EngagementControls";

export default function EditorPanel() {
  const { template, setField, setCardStat, resetTemplate } = useTemplate();

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
      <h2 className="text-lg font-bold text-gray-800">Editor</h2>

      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">Profile Name</label>
        <input
          type="text"
          value={template.profileName}
          onChange={(e) => setField("profileName", e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-fbblue focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">Time</label>
        <input
          type="text"
          value={template.time}
          onChange={(e) => setField("time", e.target.value)}
          placeholder="e.g. 2h"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-fbblue focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">Post Caption</label>
        <textarea
          value={template.caption}
          onChange={(e) => setField("caption", e.target.value)}
          rows={3}
          className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-fbblue focus:outline-none"
        />
      </div>

      <ImageUploader
        label="Upload Image (used in both cards)"
        value={template.mainImage}
        onChange={(dataUrl) => setField("mainImage", dataUrl)}
      />

      <ImageUploader
        label="Profile Picture (optional)"
        value={template.profileImage}
        onChange={(dataUrl) => setField("profileImage", dataUrl)}
        round
      />

      <EngagementControls
        title="Left Card Engagement"
        stats={template.left}
        onChange={(field, value) => setCardStat("left", field, value)}
      />

      <EngagementControls
        title="Right Card Engagement"
        stats={template.right}
        onChange={(field, value) => setCardStat("right", field, value)}
      />

      <button
        onClick={resetTemplate}
        className="mt-2 w-full rounded-md border border-gray-300 bg-gray-50 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
      >
        Reset
      </button>
    </div>
  );
}
