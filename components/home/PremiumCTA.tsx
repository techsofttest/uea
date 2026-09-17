import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Container } from "../layout/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export default function PremiumCTA ({cta}:{cta:any}) {
  return (
    <section id="contact" className="relative h-[90vh] pt-20 sm:pt-28 pb-8 text-white overflow-hidden bg-black flex flex-col justify-between min-h-[480px]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={cta?.image || "/hero/h4.webp"}
          alt={cta?.title ||"Engineering Facility Background"}
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top & Centered Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.18em] text-white/80 uppercase block mb-3">
             {cta?.title}
            </span>
            <div className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none mb-6 [&_strong]:font-normal [&_strong]:text-white" dangerouslySetInnerHTML={{__html:cta?.content}} />
          </Reveal>

          {/* Action Button */}
          <Reveal delay={0.15}>
            <div>
              <Button href="/contact#contact-form-section" variant="outline" size="md" className="bg-white text-[#07111F] hover:bg-gray-100 border-white hover:border-white shadow-md">
                Contact Our Team
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Bottom Social Media & Contact Circular Icon Buttons */}
        <Reveal delay={0.25}>
          <div className="flex items-center justify-center gap-4 pt-6 mt-12 border-t border-white/15 w-full">
            <a
              href={cta?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-sm group"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href={cta?.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-sm group"
            >
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href={`mailto:${cta?.email}`}
              aria-label="Email Us"
              className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-sm group"
            >
              <Mail className="w-5 h-5 text-black" />
            </a>

            <a
              href={`tel:${cta?.phone}`}
              aria-label="Call Us"
              className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-sm group"
            >
              <Phone className="w-5 h-5 text-black" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
