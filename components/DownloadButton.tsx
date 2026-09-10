"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

const EXPORT_WIDTH = 1638;
const EXPORT_HEIGHT = 2048;

export default function DownloadButton({ targetRef }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!targetRef.current) return;
    setLoading(true);
    try {
      // প্রথমবার render করে fonts/images fully paint হওয়া নিশ্চিত করা হচ্ছে
      await toPng(targetRef.current, { pixelRatio: 2, backgroundColor: "#ffffff" });
      const rawDataUrl = await toPng(targetRef.current, {
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const finalDataUrl = await fitToExactCanvas(rawDataUrl, EXPORT_WIDTH, EXPORT_HEIGHT);

      const link = document.createElement("a");
      link.download = "fb-before-after.png";
      link.href = finalDataUrl;
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

// captured PNG কে ঠিক targetW x targetH ক্যানভাসে বসায়,
// aspect ratio বজায় রেখে (contain), প্রয়োজনে সাদা মার্জিন যোগ করে —
// কখনো ছবি stretch বা crop হয় না।
function fitToExactCanvas(dataUrl: string, targetW: number, targetH: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas not supported"));
        return;
      }

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, targetW, targetH);

      const scale = Math.min(targetW / img.width, targetH / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const dx = (targetW - drawW) / 2;
      const dy = (targetH - drawH) / 2;

      ctx.drawImage(img, dx, dy, drawW, drawH);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
