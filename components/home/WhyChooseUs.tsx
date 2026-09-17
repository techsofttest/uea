import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Globe, Headset } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Reveal } from "../ui/Reveal";
interface Why{
    why: {
    title: string;
    sub: string;
    content: string;
    detail: {
  title: string;
  icon: string;
  description: string;
}[];
  } | undefined;
}
const featureIcons = {
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  Globe: Globe,
  Headset: Headset,
};
export default function WhyChooseUs ({why}:Why) {

  return (
    <section id="why-us" className="bg-black text-white pt-20 sm:pt-28 pb-0 relative overflow-hidden">
      {/* Header inside container with title left and description right */}
      <Container className="relative z-10 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow light className="mb-4">
                {why?.title}
              </SectionEyebrow>
              <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none" dangerouslySetInnerHTML={{__html:why?.sub ?? ""}} />
            </Reveal>
          </div>

          <div className="max-w-md lg:pb-2">
            <Reveal delay={0.2}>
              <div className="text-sm sm:text-base text-white/70 font-normal leading-relaxed" dangerouslySetInnerHTML={{__html:why?.content ?? ""}} />
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Full-Bleed Edge-to-Edge Grid with barely visible divider lines */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.03]">
        {why?.detail.map((feature, idx) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons] || ShieldCheck;
          const gradients = [
            "from-[#023077]/40 via-[#07111F] to-[#023077]/10 group-hover:from-[#023077]/90 group-hover:via-[#07111F]/90 group-hover:to-[#0052cc]/40",
            "from-[#112238] via-[#07111F] to-[#023077]/30 group-hover:from-[#023077]/95 group-hover:via-[#091e3d] group-hover:to-[#FEDD13]/20",
            "from-[#091e3d] via-[#07111F] to-[#01255e]/40 group-hover:from-[#004bb5]/80 group-hover:via-[#07111F] group-hover:to-[#0088ff]/30",
            "from-[#0c182b] via-[#07111F] to-[#023077]/50 group-hover:from-[#023077]/90 group-hover:via-[#0b2447] group-hover:to-[#00c6ff]/30",
          ];

          return (
            <Reveal key={feature.title} delay={idx * 0.1}>
              <div className="group relative min-h-[280px] sm:min-h-[320px] bg-[#07111F] border-b lg:border-b-0 border-r border-white/[0.03] p-8 sm:p-10 flex flex-col justify-start transition-all duration-500 hover:border-white/10 cursor-pointer overflow-hidden">
                {/* Stylish Gradient Layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} transition-all duration-700 opacity-70 group-hover:opacity-100`}
                />
                
                {/* Subtle Radial Glow Effect on Hover */}
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#023077]/0 group-hover:bg-[#0066ff]/20 blur-3xl transition-all duration-700 pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 w-full flex flex-col justify-between h-full flex-1 pt-2">
                  {/* Icon & Title Single Row at Top */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                     <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description at Bottom */}
                  <p className="text-sm text-white/70 group-hover:text-white/95 leading-relaxed font-normal transition-colors mt-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
