"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryItem {
  id: string;
  name: string;
  image: string;
  date: string;
}

interface ProductResponse {
  gal: GalleryItem[];
}

export default function GalleryGrid ({ gal }: ProductResponse){
  const ITEMS_PER_LOAD = 12;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const visibleImages = gal.slice(0, visibleCount);
  const hasMore = visibleCount < gal.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <div>
      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {visibleImages.map((item, idx) => (
          <Reveal
            key={item.id}
            delay={(idx % ITEMS_PER_LOAD) * 0.04}
            direction="up"
            className="h-full"
          >
            <div
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gray-100 rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#023077]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full shadow-md text-[#023077] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="pt-3 flex flex-col">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                  {item.date || ""}
                </span>

                <h3 className="font-sans font-semibold text-base sm:text-md text-[#101828] group-hover:text-[#023077] transition-colors leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={handleLoadMore}
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#023077] text-white font-semibold text-sm hover:bg-[#011f4f] transition-all duration-300 cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full h-[85vh] flex items-center justify-center"
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.name}
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      )}
    </div>
  );
};

