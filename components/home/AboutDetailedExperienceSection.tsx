"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Reveal } from "../ui/Reveal";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = "", duration = 1800 }) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};
interface Metric {
  title: string;
  icon: string;
  option: string;
}
interface About{
    about: {
    title: string;
    sub: string;
    content: string;
    stat: Metric[];
    image: string;
  }| undefined;
}
export default function AboutDetailedExperienceSection  ({about}:About) {
  return (
    <section id="about-details" className="bg-white text-[#101828] py-16 sm:py-20 md:py-24 relative">
      <Container>
        {/* 1. Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Reveal>
            <SectionEyebrow className="mb-3 justify-center">
             {about?.title}
            </SectionEyebrow>

            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none">
              <span className="text-[#023077] [&_strong]:font-normal [&_strong]:text-gray-700" dangerouslySetInnerHTML={{__html:about?.sub ||""}} />
              {/* <span className="font-normal text-gray-700">Trusted Partnerships.</span> */}
            </h2>
          </Reveal>
        </div>

        {/* 2. Text Content (Centered below Header) */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-md sm:text-lg text-gray-900 leading-relaxed font-normal"dangerouslySetInnerHTML={{__html:about?.content || ""}} />
          </Reveal>
        </div>

        {/* 3. Image with Boxed Statistics Overlay on Left */}
        <Reveal delay={0.2}>
          <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src={about?.image || ""}
              alt="United Engineering Agencies Facility"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Boxed Stats Content Overlay (Positioned on the Left inside Image) */}
            <div className="absolute top-6 left-6 right-6 lg:right-auto lg:top-8 lg:bottom-8 lg:left-8 lg:w-[480px] bg-[#023077]/95 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl flex flex-col justify-center text-white">
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-8 text-center border-b border-white/10 pb-4">
                Key Performance Metrics
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {about?.stat?.map((product, idx) => {
  const isCounter = product.title === "";

  if (isCounter) {
    const match = product.icon.match(/^(\d+)(.*)$/);
    const number = match ? Number(match[1]) : 0;
    const suffix = match ? match[2] : "";

    return (
      <div
        key={idx}
        className="flex flex-col items-center justify-center p-3 text-center group/stat"
      >
        <span className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none transition-colors duration-300 mb-3">
          <AnimatedCounter
            end={number}
            suffix={suffix}
            duration={800}
          />
        </span>

        <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80 font-semibold">
          {product.option}
        </p>
      </div>
    );
  }

  return (
    <div
      key={idx}
      className="flex flex-col items-center justify-center p-3 text-center group/stat"
    >
      <span className="font-sans font-semibold text-lg sm:text-xl text-white tracking-tight leading-tight transition-colors duration-300 mb-3">
        {product.title}
      </span>

      <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80 font-semibold">
        {product.option}
      </p>
    </div>
  );
})}

              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
