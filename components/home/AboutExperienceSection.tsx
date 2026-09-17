"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
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
            // Smooth ease-out curve
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
export default function AboutExperienceSection({about}:About) {
  return (
    <>
      <section id="about" className="bg-[#023077] text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={about?.image||""}
            alt={about?.title || ""}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#023077] via-[#023077]/85 via-[#023077]/5 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow light className="mb-4">
                {about?.title}
              </SectionEyebrow>

              <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none mb-5">
                {about?.sub}<br />
              </h2>

              <div className="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-8 line-clamp-3" dangerouslySetInnerHTML={{__html:about?.content || ""}} />
            </Reveal>

            {/* Brand CTA Button */}
            <Reveal delay={0.2}>
              <Button href="/about" variant="yellow" size="md">
                Discover Our Capabilities
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Blue Background Statistics Banner */}
      <section className="bg-[#023077] text-white py-8 sm:py-12 border-t border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-0 md:divide-x divide-white/20">
           {about?.stat?.map((product, idx) => {
  const match = product.icon?.match(/^(\d+)(.*)$/);
  const number = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  return (
    <Reveal key={idx} delay={idx * 0.1}>
      <div className="flex flex-col items-center justify-center p-4 text-center group">
        
        <div className="h-14 sm:h-16 flex items-center justify-center">
          
          {product.title === "" ? (
            <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wider leading-none">
              <AnimatedCounter
                end={number}
                suffix={suffix}
                duration={800}
              />
            </span>
          ) : (
            <span className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide leading-tight text-center max-w-[140px] sm:max-w-none">
              {product.title}
            </span>
          )}

        </div>

        <p className="text-xs uppercase tracking-widest text-white/80 font-bold mt-1">
          {product.option}
        </p>

      </div>
    </Reveal>
  );
})}

           
          </div>
        </Container>
      </section>
    </>
  );
};
