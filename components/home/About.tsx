"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Reveal } from "../ui/Reveal";

interface About {
  about: {
    title: string;
    sub: string;
    content: string;
    image: string;
  } | undefined;
}

export default function AboutDetailedExperienceSection({ about }: About) {
  return (
    <section
      id="about-details"
      className="bg-white text-[#101828] py-16 sm:py-20 md:py-24 relative"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT - Content */}
          <Reveal>
            <div className="text-left">
              <SectionEyebrow className="mb-3">
                {about?.title}
              </SectionEyebrow>

              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none">
                <span
                  className="text-[#023077] [&_strong]:font-normal [&_strong]:text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: about?.sub || "",
                  }}
                />
              </h2>

              <div
                className="mt-6 space-y-5 text-md sm:text-lg text-gray-900 leading-relaxed font-normal"
                dangerouslySetInnerHTML={{
                  __html: about?.content || "",
                }}
              />
            </div>
          </Reveal>

          {/* RIGHT - Image */}
          <Reveal delay={0.2}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
              <Image
                src={about?.image || ""}
                alt="United Engineering Agencies Facility"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}