import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Reveal } from "../ui/Reveal";
import { HERO_IMAGES } from "@/data/siteData";

interface InnerHeroBannerProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  bgImage?: string;
}

export const InnerHeroBanner: React.FC<InnerHeroBannerProps> = ({
  eyebrow = "OUR PORTFOLIO",
  title,
  subtitle,
  bgImage = HERO_IMAGES.main,
}) => {
  return (
    <section className="relative w-full h-[45vh] md:h-[60vh] flex items-center justify-center bg-[#023077] overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={typeof title === "string" ? title : "Hero Banner"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023077]/95 via-[#023077]/80 to-[#023077]/95" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- DECORATIVE ENGINEERING SHAPES & ACCENTS --- */}
      {/* 1. Large Translucent Industrial Gear (Top Left) */}
      <div className="absolute -top-16 -left-16 text-white/[0.06] pointer-events-none z-0 animate-spin-slow">
        <Settings className="w-80 h-80 sm:w-96 sm:h-96" strokeWidth={0.8} />
      </div>

      {/* 2. Medium Translucent Gear Watermark (Bottom Right) */}
      <div className="absolute -bottom-20 -right-20 text-white/[0.05] pointer-events-none z-0">
        <Settings className="w-72 h-72 sm:w-96 sm:h-96" strokeWidth={0.8} />
      </div>

      {/* 3. Glowing Ambient Accent Orb (Center Left) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none z-0" />

      {/* 4. Diagonal Engineering Slash Lines (Right Side Background) */}
      <div className="absolute right-10 top-0 bottom-0 pointer-events-none z-0 hidden lg:flex gap-4 opacity-15">
        <div className="w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-12" />
        <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-12" />
      </div>

      {/* 5. Geometric Floating Corner Dots Accent */}
      <div className="absolute top-12 right-12 hidden md:grid grid-cols-3 gap-2 opacity-25 z-0 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      {/* Banner Content */}
      <Container className="relative z-10 text-center">
        {eyebrow && (
          <Reveal direction="down">
            <SectionEyebrow light className="mb-4 justify-center">
              {eyebrow}
            </SectionEyebrow>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-4 drop-shadow-md"dangerouslySetInnerHTML={{__html:title || ""}} />
        </Reveal>

        {subtitle && (
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 font-normal leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
};
