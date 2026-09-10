import Image from "next/image";
import ReactionBadge from "./ReactionBadge";
import { CardStats, CardVariant } from "@/lib/types";

type Props = {
  variant: CardVariant;
  profileName: string;
  profileImage: string | null;
  time: string;
  caption: string;
  mainImage: string | null;
  stats: CardStats;
};

export default function FacebookPostCard({
  variant,
  profileName,
  profileImage,
  time,
  caption,
  mainImage,
  stats,
}: Props) {
  const isLeft = variant === "left";

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
      {/* Header */}
      <div className="flex items-start justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2.5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={profileImage || "/default-avatar.svg"}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>

          {isLeft ? (
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#050505]">{profileName}</p>
              <div className="flex items-center gap-1 text-[13px] text-[#65676B]">
                <span className="rounded-md border-2 border-red-600 px-1.5 py-0.5 font-medium text-[#050505]">
                  AI content
                </span>
                <span>·</span>
                <span>{time}</span>
                <span>·</span>
                <GlobeIcon />
              </div>
            </div>
          ) : (
            <div className="rounded-md border-2 border-green-600 px-2 py-1 leading-tight">
              <p className="text-[15px] font-semibold text-[#050505]">{profileName}</p>
              <div className="flex items-center gap-1 text-[13px] text-[#65676B]">
                <span>{time}</span>
                <span>·</span>
                <GlobeIcon />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isLeft ? <CrossMark /> : <CheckMark />}
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-[#65676B]">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-2">
        <p className="whitespace-pre-wrap break-words text-[15px] leading-snug text-[#050505]">
          {caption}
        </p>
      </div>

      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        {mainImage ? (
          <Image src={mainImage} alt="post" fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No image uploaded
          </div>
        )}
      </div>

      {/* Reaction summary */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1.5 text-[13px] text-[#65676B]">
        <div className="flex items-center gap-1.5">
          <ReactionBadge />
          <span>{stats.likes}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{stats.comments} Comments</span>
          <span>{stats.shares} Shares</span>
        </div>
      </div>

      <div className="mx-4 border-t border-[#E4E6EB]" />

      {/* Action buttons */}
      <div className="flex items-center justify-around px-2 py-1">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-[15px] font-semibold text-[#65676B] hover:bg-gray-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#65676B]">
            <path d="M2 21h4V9H2v12zm19-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L12.17 1 6.59 6.59C6.22 6.95 6 7.45 6 8v11c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
          </svg>
          Like
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-[15px] font-semibold text-[#65676B] hover:bg-gray-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#65676B]">
            <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.73 1.44 5.17 3.7 6.78-.12.98-.5 2.3-1.32 3.72 0 0 2.27-.27 4.47-1.9.98.28 2.03.42 3.15.42 5.52 0 10-3.94 10-8.8S17.52 2 12 2z" />
          </svg>
          Comment
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-[15px] font-semibold text-[#65676B] hover:bg-gray-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[#65676B] stroke-2">
            <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 fill-[#65676B]">
      <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.47 6.47 0 011.06-3.56c.36.5.94 1.1 1.67 1.34.03.57.2 1.02.5 1.34-.3.28-.5.68-.5 1.13 0 .62.37 1.13.9 1.36-.1.28-.16.6-.16.94 0 .8.34 1.5.87 1.98A6.5 6.5 0 011.5 8zm6.5 6.47a6.49 6.49 0 01-2.23-.4c.4-.4.66-.98.66-1.62 0-.58-.22-1.06-.55-1.42.4-.24.68-.66.68-1.16 0-.5-.28-.92-.68-1.16.2-.24.34-.56.34-.94 0-.66-.42-1.16-1-1.4.5-.3.94-.76 1.16-1.34A6.48 6.48 0 018 1.5c.9 0 1.75.2 2.5.55-.34.4-.56.9-.56 1.45 0 .5.2.95.5 1.28-.5.2-.86.66-.86 1.22 0 .5.3.9.7 1.14-.44.3-.72.8-.72 1.36 0 .6.32 1.12.8 1.4-.14.4-.22.84-.22 1.3 0 .34.04.66.12.97a6.5 6.5 0 01-1.26.3z" />
    </svg>
  );
}

function CrossMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-red-600 stroke-[3]">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-green-600 stroke-[3]">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
