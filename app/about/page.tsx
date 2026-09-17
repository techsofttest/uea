import React from "react";
import { Metadata } from "next";
import { InnerHeroBanner } from "@/components/layout/InnerHeroBanner";
import  AboutDetailedExperienceSection  from "@/components/home/AboutDetailedExperienceSection";
import  MissionVision  from "@/components/home/MissionVision";
import  WhyChooseUs  from "@/components/home/WhyChooseUs";
import  GlobalPartnersMarquee  from "@/components/home/GlobalPartnersMarquee";
import  PremiumCTA  from "@/components/home/PremiumCTA";

interface Metric {
  title: string;
  icon: string;
  option: string;
}

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  hero: {
    title: string;
    content: string;
    image:string;
  };
    supply: {
    id: string;
    name: string;
    image: string;
  }[];
  about: {
    title: string;
    sub: string;
    content: string;
    stat: Metric[];
    image: string;
  }| undefined;
 
  vission: {
    title: string;
    content: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
    image: string;
  };
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
 cta: {
    title: string;
    content: string;
    image: string;
    linkedin:string;
    youtube:string;
    email:string;
    phone:number;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/about`, {
     cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getSEO();

    return {
      title: data?.seo?.meta_title ?? "Home",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Home",
    };
  }
}


export default async function AboutPage() {
    let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans antialiased text-[#101828] selection:bg-[#FEDD13] selection:text-[#023077]">


      {/* Global Inner Hero Banner (60vh desktop height) */}
      <InnerHeroBanner
        eyebrow={data?.hero.title}
        title={data?.hero.content}
        bgImage={data?.hero.image}
      />

      {/* Full-width Suppliers Marquee */}
      <div className="bg-[#023077]">
        <GlobalPartnersMarquee suppliers={data?.supply ?? []}/>
      </div>

      {/* Main Content Sections (Without gaps) */}
      <AboutDetailedExperienceSection about={data?.about} />
      <MissionVision mission={data?.mission ?? ""} vission={data?.vission ?? ""}/>
      <WhyChooseUs why={data?.why}  />
      <PremiumCTA cta={data?.cta ?? ""}/>

    </main>
  );
}
