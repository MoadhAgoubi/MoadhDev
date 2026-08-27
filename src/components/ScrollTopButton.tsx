"use client";

export default function ScrollTopButton() {
  return (
    <button
      type="button"
      aria-label="Revenir en haut de la page"
      onClick={() => window.scrollTo({ top: 0 })}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-soft transition-colors hover:border-ink hover:text-ink"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
