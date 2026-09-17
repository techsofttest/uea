"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import ProductCard from "@/components/home/ProductCard";
import  FeaturedProductCard  from "./FeaturedProductCard";
import { Reveal } from "@/components/ui/Reveal";

export default function ProductListingSection({
  product,
  feature,
}: {
  product: any[];
  feature: any;
}) {
  const PRODUCTS_PER_LOAD = 6;

  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD);

  const visibleProducts = product.slice(0, visibleCount);

  const hasMore = visibleCount < product.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_LOAD);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E9EDF2]">
      <Container>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 lg:mb-12">

          {visibleProducts.map((item, idx) => (
            <Reveal
              key={item.id ?? item.slug ?? idx}
              delay={(idx % PRODUCTS_PER_LOAD) * 0.04}
              direction="up"
              className="h-full"
            >
              <ProductCard
                product={item}
                index={idx}
              />
            </Reveal>
          ))}

        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mb-10">
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-xl bg-[#FEDD13] text-[#01245c] text-sm font-semibold hover:bg-[#FEDD13] transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* Featured Product */}
        {feature && (
          <FeaturedProductCard product={feature} />
        )}

      </Container>
    </section>
  );
}