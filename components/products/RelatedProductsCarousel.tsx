"use client";

import React, { useState } from "react";
import  ProductCard  from "@/components/home/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface RelatedProductsCarouselProps {
  products:{
    title: string;
    slug: string;
    image: string;
    content:string;
  }[];
}

export default function RelatedProductsCarousel ({products,}:RelatedProductsCarouselProps)  {
  // Filter out current product
  const relatedProducts = products;
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4; // Show 4 items on desktop
  const maxIndex = Math.max(0, relatedProducts.length - visibleCount);

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (relatedProducts.length === 0) return null;

  return (
    <div className="w-full">
      {/* Carousel Navigation Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-[#023077] uppercase tracking-wider block mb-1">
            RELATED SOLUTIONS
          </span>
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#101828]">
            Explore More Products
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            aria-label="Previous Products"
            className={`p-2.5 rounded-full border transition-all ${
              startIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-[#101828] hover:bg-[#023077] hover:text-white hover:border-[#023077] cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex >= maxIndex}
            aria-label="Next Products"
            className={`p-2.5 rounded-full border transition-all ${
              startIndex >= maxIndex
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-[#101828] hover:bg-[#023077] hover:text-white hover:border-[#023077] cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden py-2">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
          }}
        >
          {relatedProducts.map((product, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0"
            >
              <Reveal delay={idx * 0.05} direction="up" className="h-full">
                <ProductCard product={product} index={idx} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
