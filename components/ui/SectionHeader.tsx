import React from "react";

interface SectionHeaderProps {
  code: string;
  title: string;
  subtitle: string;
  rightSlot?: React.ReactNode;
}

export function SectionHeader({
  code,
  title,
  subtitle,
  rightSlot,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 border-b border-hairline pb-7 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-[1px] bg-accent"
          />
          <span>{code}</span>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
          {subtitle}
        </p>
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
}
