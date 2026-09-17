"use client";

import React from "react";
import { Send } from "lucide-react";

interface FloatingEnquireBarProps {
  productName: string;
}

export default function FloatingEnquireBar({ productName }:FloatingEnquireBarProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-[85%] max-w-3xl bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-xl shadow-2xl py-3 px-4 sm:px-6 transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* Left Side: Product Name */}
        <div className="flex items-center gap-2.5 overflow-hidden pl-1 sm:pl-2">
          <h4 className="font-bebas text-lg sm:text-2xl text-[#101828] truncate leading-none">
            {productName}
          </h4>
        </div>

        {/* Right Side: Enquire Now CTA button */}
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-[#FEDD13] hover:bg-[#e5c70e] active:scale-[0.98] text-[#023077] font-bold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
        >
          <span>Enquire Now</span>
          <Send className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
