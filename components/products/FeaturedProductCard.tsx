import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { Reveal } from "../ui/Reveal";

interface FeaturedProductCardProps {
  product:{
        title:string,
        id:string,
        slug:string,
        content:string,
         image: string;
        feature:string[],
  };
}

export default function FeaturedProductCard({ product } : FeaturedProductCardProps) {
  return (
    <Reveal direction="up" className="w-full">
      <div className="group relative flex flex-col md:flex-row w-full bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#023077]/40 transition-all duration-300">
        {/* Background Low-Opacity Gear Aligned to Bottom Right */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none text-[#023077]/[0.05] group-hover:text-[#023077]/[0.09] transition-all duration-500 transform group-hover:rotate-45 group-hover:scale-110 z-0">
          <Settings className="w-48 h-48" strokeWidth={1.2} />
        </div>

        {/* 60% Image on Left for Desktop */}
        <div className="relative w-full md:w-[60%] min-h-[280px] sm:min-h-[360px] md:min-h-[420px] overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* 40% Details on Right */}
        <div className="relative z-10 flex flex-col justify-between w-full md:w-[40%] p-6 sm:p-8 lg:p-10 bg-transparent">
          <div>
            <span className="inline-block text-xs font-bold text-[#023077] tracking-wider uppercase mb-2">
              Featured Service Solution
            </span>

            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#101828] group-hover:text-[#023077] transition-colors mb-3 leading-none">
              {product.title}
            </h3>

            <div className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6" dangerouslySetInnerHTML={{__html:product.content}} />

            {/* Specs / Highlights list */}
            {product.feature && (
              <div className="mb-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {product.feature.map((spec, index) => (
                    <li key={index} className="flex items-center text-sm font-medium text-gray-700 gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FEDD13] shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <a
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#FEDD13] hover:bg-[#e5c70e] text-[#023077] font-bold rounded-lg transition-colors duration-200 text-sm shadow-xs group-hover:shadow-md"
            >
              View Product Details
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
