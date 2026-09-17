import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Button } from "../ui/Button";

interface ProductItem{
    title: string;
    slug: string;
    image: string;
    content:string;
}

interface ProductCardProps {
  product: ProductItem;
  index: number;
}

export default function ProductCard({ product, index }:ProductCardProps) {
  const productUrl = `/products/${product.slug}`;

  return (
    <div className="group relative flex flex-col h-full bg-white border border-gray-200/90 rounded-xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#023077]/40 transition-all duration-300">
      {/* Background Low-Opacity Gear Aligned to Bottom Right */}
      <div className="absolute -bottom-6 -right-6 pointer-events-none text-[#023077]/[0.05] group-hover:text-[#023077]/[0.09] transition-all duration-500 transform group-hover:rotate-45 group-hover:scale-110 z-0">
        <Settings className="w-32 h-32" strokeWidth={1.2} />
      </div>

      {/* 1. IMAGE CONTAINER */}
      <Link href={productUrl} className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gray-100 block z-10">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle Dark Gradient Overlay at Bottom of Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
      </Link>

      {/* 2. CARD CONTENT */}
      <div className="relative flex flex-col flex-1 p-4 sm:p-5 justify-between z-10">
        <div className="flex flex-col flex-1 justify-start">
          {/* Title */}
          <h3 className="text-base sm:text-xl font-bold text-[#101828] group-hover:text-[#023077] transition-colors mb-1.5 leading-snug line-clamp-1">
            <Link href={productUrl}>{product.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed line-clamp-2 mb-3">
            {product.content}
          </p>
        </div>

        {/* 3. ENQUIRE BUTTON */}
        <div className="mt-auto pt-1 flex gap-2">
          <Button href={productUrl} variant="yellow" size="sm" fullWidth>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
