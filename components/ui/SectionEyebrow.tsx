import React from "react";
import { Cog } from "lucide-react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  className = "",
  light = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase ${className}`}>
      <Cog
        strokeWidth={2.2}
        className={`w-4 sm:w-[18px] h-4 sm:h-[18px] animate-[spin_10s_linear_infinite] transform-gpu [backface-visibility:hidden] shrink-0 ${light ? "text-white/90" : "text-[#023077]"
          }`}
      />
      <span className={light ? "text-white" : "text-[#101828]"}>{children}</span>
    </div>
  );
};
