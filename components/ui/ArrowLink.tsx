import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  href,
  children,
  className = "",
  light = false,
}) => {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-medium transition-colors text-sm tracking-wide ${
        light
          ? "text-white hover:text-white/80"
          : "text-[#101828] hover:text-black font-semibold"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 text-[#FEDD13] transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};
