import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    content: string;
    image: string;
  };
  index: number;
}

export default function SupplierCard({ supplier, index }: SupplierCardProps) {
  return (
    <div className="group relative flex flex-col h-full bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#023077]/40 transition-all duration-300">
      {/* 1. LOGO CONTAINER ON TOP */}
      <div className="relative w-full h-52 sm:h-60 bg-gray-50 flex items-center justify-center p-8 border-b border-gray-100 group-hover:bg-blue-50/20 transition-colors overflow-hidden shrink-0">
        {/* Background Geometric & Gear Shapes */}
        <div className="absolute -bottom-10 -left-10 text-[#023077]/[0.05] group-hover:text-[#023077]/[0.08] transition-all duration-700 pointer-events-none transform group-hover:rotate-45 group-hover:scale-110">
          <Settings className="w-48 h-48" strokeWidth={1} />
        </div>

        {/* Ambient Radial Soft Shape */}
        <div className="absolute w-36 h-36 rounded-full bg-[#023077]/[0.04] blur-2xl pointer-events-none" />

        {/* Decorative Corner Tech Dots */}
        <div className="absolute top-4 right-4 grid grid-cols-3 gap-1.5 opacity-20 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#023077]" />
          ))}
        </div>

        {/* Logo Image */}
        <div className="relative z-10 w-full max-w-[220px] h-28 sm:h-32">
          <Image
            src={supplier.image}
            alt={supplier.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. CONTENT CONTAINER BELOW */}
      <div className="flex flex-col flex-1 p-6 sm:p-8 bg-white justify-between">
        <div>
          <SectionEyebrow className="mb-2">EXCLUSIVE PRINCIPAL</SectionEyebrow>
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#101828] group-hover:text-[#023077] transition-colors mb-3 leading-tight">
            {supplier.name}
          </h3>

          <div className="text-sm text-gray-600 font-normal leading-relaxed" dangerouslySetInnerHTML={{__html:supplier.content}} />
        </div>
      </div>
    </div>
  );
};
