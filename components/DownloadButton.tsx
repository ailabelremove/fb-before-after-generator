"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

export default function DownloadButton({ targetRef }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!targetRef.current) return;
    setLoading(true);
    try {
      // render twice to ensure images/fonts are fully painted before capture
      await toPng(targetRef.current, { pixelRatio: 2, backgroundColor: "#ffffff" });
      const dataUrl = await toPng(targetRef.current, {
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = "fb-before-after.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
      alert("Failed to export image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="w-full rounded-md bg-fbblue py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-60"
    >
      {loading ? "Generating..." : "Download Image"}
    </button>
  );
}
