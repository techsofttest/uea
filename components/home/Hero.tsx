"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { HERO_IMAGES } from "@/data/siteData";

interface HeroProps{
   hero: {
    title: string;
    content: string;
    image:string;
  }[];
}
export default function Hero({ hero }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-start pt-12  sm:pt-24 md:pt-28 pb-16 bg-[#023077] overflow-hidden">
      {/* Background Image (Unchanged) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero[0]?.image || HERO_IMAGES.main}
          alt="Petrochemical Refinery at Sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtleZoom"
        />
      </div>

      {/* Left-Aligned Carousel Content */}
      <Container className="relative z-20 w-full">
        <div className="max-w-2xl text-left flex flex-col items-start min-h-[300px] pt-16 sm:pt-12 md:pt-8 lg:pt-0">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              {/* Headline */}
              <div className="font-bebas text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-white tracking-wide leading-[0.95] mb-5" dangerouslySetInnerHTML={{__html:hero[currentSlide].title}} />

    

              {/* Reduced Length Trust Description */}
              <div className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed mb-8 max-w-xl" dangerouslySetInnerHTML={{__html:hero[currentSlide].content}} />
              

            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button href="/products" variant="yellow" size="md">
              Explore Products
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Us
            </Button>
          </div>

          {/* Slide Pagination Dots (Below Buttons) */}
          <div className="flex items-center gap-2 pt-2">
            {hero.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === index ? "w-8 bg-[#FEDD13]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

