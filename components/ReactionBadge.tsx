export default function ReactionBadge() {
  return (
    <div className="flex items-center -space-x-1">
      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#1877F2] ring-2 ring-white z-10">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
          <path d="M2 21h4V9H2v12zm19-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L12.17 1 6.59 6.59C6.22 6.95 6 7.45 6 8v11c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      </span>
      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F33E58] ring-2 ring-white">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
          <path d="M12 21s-6.7-4.35-9.3-8.2C1.1 10.6 1.6 7.2 4.4 5.6c2.2-1.3 4.6-.7 6.1 1 .5.6 1 1.3 1.5 2 .5-.7 1-1.4 1.5-2 1.5-1.7 3.9-2.3 6.1-1 2.8 1.6 3.3 5 1.7 7.2C18.7 16.65 12 21 12 21z" />
        </svg>
      </span>
    </div>
  );
}
