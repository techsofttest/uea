"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";

interface Supplier {
  id: string;
  name: string;
  image: string;
}

export default function GlobalPartnersMarquee  ({
  suppliers = [],
}: {
  suppliers?: Supplier[];
}){

  if (!suppliers.length) return null;

  const marqueeSuppliers = [...suppliers, ...suppliers];

  return (
    <section
      id="suppliers"
      className="bg-[#023077] py-8 border-y border-white/10 overflow-hidden"
    >
      <Container className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Label */}
        <div className="shrink-0 text-center md:text-left">
          <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-tight max-w-[200px]">
            Our Trusted Suppliers & Manufacturers
          </p>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">

          <div
            className="flex w-max items-center gap-12 sm:gap-20 animate-marquee">

            {marqueeSuppliers.map((partner, index) => {

              const marqueeLogo = partner.image.replace(
                "/suppliers-logo/",
                "/suppliers/"
              );

              return (
                <div
                  key={`${partner.id}-${index}`}
                  className="inline-flex shrink-0 items-center justify-center w-[120px] sm:w-[160px] cursor-pointer group"
                >
                  <div className="relative h-9 sm:h-11 w-28 sm:w-36 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">

                    <Image
                      src={marqueeLogo}
                      alt={partner.name}
                      fill
                      sizes="160px"
                      className="object-contain grayscale brightness-0 invert opacity-75 group-hover:opacity-100 transition-all duration-300"
                    />

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </Container>
    </section>
  );
};