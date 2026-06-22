"use client";

import { useState } from "react";
import { ALL_SERVICES } from "@/lib/services-data";

type Props = {
  initialCount?: number;
  showToggle?: boolean;
};

export function ServicesGrid({ initialCount = 6, showToggle = true }: Props) {
  const [showAll, setShowAll] = useState(!showToggle);
  const visible = showAll || !showToggle ? ALL_SERVICES : ALL_SERVICES.slice(0, initialCount);
  const hasMore = ALL_SERVICES.length > initialCount;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <div
            key={s.title}
            className={`rounded-2xl p-6 border-2 hover:shadow-xl transition-shadow ${s.gradient}`}
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-3 text-lg font-bold text-slate-900">{s.title}</h3>
            <p className="text-sm font-medium text-slate-600">{s.titleHi}</p>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{s.desc}</p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">{s.descHi}</p>
          </div>
        ))}
      </div>

      {showToggle && hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-base font-semibold hover:bg-brand-dark shadow-lg transition"
          >
            {showAll ? (
              <>
                Show Less
                <span className="text-xs">कम दिखाएं</span>
              </>
            ) : (
              <>
                See All Services ({ALL_SERVICES.length})
                <span className="text-xs">सभी देखें</span>
              </>
            )}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
