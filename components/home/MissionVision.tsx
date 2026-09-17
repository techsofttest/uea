import React from "react";
import Image from "next/image";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export default function MissionVision({vission,mission}:{vission:any,mission:any}) {
  return (
    <section id="mission-vision" className="bg-[#023077] text-white overflow-hidden">
      {/* 1. OUR MISSION (Image Left, Content Right) */}
      {mission &&
      <div className="border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[90vh]">
          {/* Left: Image (flush top & bottom without margin/padding) */}
          <div className="relative h-72 sm:h-96 lg:h-auto w-full min-h-[380px] lg:min-h-[90vh]">
            <Image
              src={mission.image}
              alt={mission.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />

          </div>

          {/* Right: Content */}
          <div className="flex items-center p-8 sm:p-12 lg:p-16 lg:min-h-[90vh]">
            <div className="max-w-xl">
              <Reveal>
                <SectionEyebrow light className="mb-4">
                 {mission.title}
                </SectionEyebrow>
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-5">
                  {mission.sub}
                </h3>
                <div className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed mb-6" dangerouslySetInnerHTML={{__html:mission.content}} />
              </Reveal>
            </div>
          </div>
        </div>
      </div>}

      {vission &&
      <div className="border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] lg:min-h-[90vh]">
          {/* Left: Content */}
          <div className="flex items-center p-8 sm:p-12 lg:p-16 order-2 lg:order-1 lg:min-h-[90vh]">
            <div className="max-w-xl">
              <Reveal>
                <SectionEyebrow light className="mb-4">
                 {vission.title}
                </SectionEyebrow>
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-5">
                  {vission.sub}
                </h3>
                <div className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed mb-6" dangerouslySetInnerHTML={{__html:vission.content}} />
              </Reveal>
            </div>
          </div>

          {/* Right: Image (flush top & bottom without margin/padding) */}
          <div className="relative h-72 sm:h-96 lg:h-auto w-full min-h-[380px] lg:min-h-[90vh] order-1 lg:order-2">
            <Image
              src= {vission.image}
              alt= {vission.title}
              fill loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>}
    </section>
  );
};
