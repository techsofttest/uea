import React from "react";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import  ProductCard  from "./ProductCard";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export default function ProductsIntro  ({product}:{product:any[]}) {
  return (
    <section id="products" className="bg-white py-16 md:py-16 border-b border-[#E9EDF2]">
      <Container>
        {/* Section Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <SectionEyebrow className="mb-3">OUR PRODUCTS</SectionEyebrow>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#101828] tracking-wide leading-none">
                Engineered for Industry.
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <Button href="/products" variant="dark" size="md">
                View All Products
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Product Cards Grid Directly Inside ProductsIntro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {product.map((product, idx) => (
            <Reveal key={idx} delay={idx * 0.05} direction="up" className="h-full">
              <ProductCard product={product} index={idx} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
