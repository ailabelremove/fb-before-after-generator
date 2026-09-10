"use client";

import { CardStats } from "@/lib/types";

type Props = {
  title: string;
  stats: CardStats;
  onChange: (field: keyof CardStats, value: string) => void;
};

export default function EngagementControls({ title, stats, onChange }: Props) {
  return (
    <div className="rounded-lg border border-gray-200 p-3">
      <p className="mb-2 text-sm font-semibold text-gray-700">{title}</p>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="mb-1 block text-xs text-gray-500">Likes</label>
          <input
            type="text"
            value={stats.likes}
            onChange={(e) => onChange("likes", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-fbblue focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-500">Comments</label>
          <input
            type="text"
            value={stats.comments}
            onChange={(e) => onChange("comments", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-fbblue focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-500">Shares</label>
          <input
            type="text"
            value={stats.shares}
            onChange={(e) => onChange("shares", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-fbblue focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
