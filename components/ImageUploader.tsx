"use client";

import { fileToDataUrl } from "@/lib/fileToDataUrl";

type Props = {
  label: string;
  value: string | null;
  onChange: (dataUrl: string) => void;
  round?: boolean;
};

export default function ImageUploader({ label, value, onChange, round }: Props) {
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    onChange(dataUrl);
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">{label}</label>
      <div className="flex items-center gap-3">
        {value && (
          <img
            src={value}
            alt="preview"
            className={`h-12 w-12 object-cover ${round ? "rounded-full" : "rounded-md"} ring-1 ring-gray-300`}
          />
        )}
        <label className="flex-1 cursor-pointer rounded-md border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-center text-sm text-gray-500 hover:bg-gray-100">
          {value ? "Change image" : "Upload image"}
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
      </div>
    </div>
  );
}
