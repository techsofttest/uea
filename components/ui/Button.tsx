"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "yellow" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "dark",
  size = "md",
  className = "",
  fullWidth = false,
}) => {
  // Simple sizing & padding with minimum rounded corners (rounded-md)
  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs sm:text-sm gap-2 rounded-md",
    md: "px-4.5 py-2.5 sm:px-5 sm:py-2.5 text-sm sm:text-base gap-2.5 rounded-md",
    lg: "px-6 py-3.5 text-base sm:text-lg gap-3 rounded-md",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4 sm:w-4.5 sm:h-4.5",
    lg: "w-5 h-5",
  };

  // Color Variants
  const variantClasses = {
    // Primary Yellow (#FEDD13)
    yellow: {
      button: "bg-[#FEDD13] hover:bg-[#eecf10] text-[#023077] border border-[#e5c70f] shadow-2xs",
      arrow: "text-[#023077]",
    },
    // Dark Navy (#023077)
    dark: {
      button: "bg-[#023077] hover:bg-[#0c1c33] text-white border border-[#023077] shadow-2xs",
      arrow: "text-[#FEDD13]",
    },
    // Glass Outline
    outline: {
      button: "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs shadow-2xs",
      arrow: "text-white",
    },
  };

  const currentVariant = variantClasses[variant] || variantClasses.dark;
  const currentSize = sizeClasses[size] || sizeClasses.md;
  const currentIconSize = iconSizes[size] || iconSizes.md;

  const baseClasses = `group inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 cursor-pointer active:scale-[0.98] ${fullWidth ? "w-full flex" : ""
    } ${currentSize} ${currentVariant.button} ${className}`;

  const contentNode = (
    <>
      <span>{children}</span>
      <ArrowRight
        className={`${currentIconSize} shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${currentVariant.arrow}`}
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {contentNode}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} type="button">
      {contentNode}
    </button>
  );
};
