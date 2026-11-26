import React from "react";

interface SpecCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  crosshairs?: boolean;
  as?: "div" | "article" | "section";
}

function CornerCrosshair({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const posClasses = {
    tl: "-top-[4px] -left-[4px]",
    tr: "-top-[4px] -right-[4px]",
    bl: "-bottom-[4px] -left-[4px]",
    br: "-bottom-[4px] -right-[4px]",
  }[position];

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${posClasses} z-10 h-[7px] w-[7px] select-none`}
    >
      <span
        className="absolute top-[3px] left-0 h-[1px] w-[7px]"
        style={{ backgroundColor: "var(--crosshair-color)" }}
      />
      <span
        className="absolute top-0 left-[3px] h-[7px] w-[1px]"
        style={{ backgroundColor: "var(--crosshair-color)" }}
      />
    </span>
  );
}

export function SpecCard({
  id,
  children,
  className = "",
  interactive = false,
  crosshairs = true,
  as: Component = "div",
}: SpecCardProps) {
  return (
    <Component
      id={id}
      className={`workbench-panel relative rounded-[2px] ${
        interactive ? "workbench-panel-interactive" : ""
      } ${className}`}
    >
      {crosshairs && (
        <>
          <CornerCrosshair position="tl" />
          <CornerCrosshair position="tr" />
          <CornerCrosshair position="bl" />
          <CornerCrosshair position="br" />
        </>
      )}
      {children}
    </Component>
  );
}
