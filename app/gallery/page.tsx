import React from "react";
import { Metadata } from "next";
import { InnerHeroBanner } from "@/components/layout/InnerHeroBanner";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import  GalleryGrid  from "@/components/gallery/GalleryGrid";
import  PremiumCTA  from "@/components/home/PremiumCTA";

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
    gal: {
    id: string;
    name: string;
    image: string;
    date: string;
  }[];
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

  const res = await fetch(`${baseUrl}/gallery`, {
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

export default async function GalleryPage() {
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
     

      {/* Gallery Grid Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E9EDF2]">
        <Container>

          {/* Interactive Gallery Cards Grid */}
          <GalleryGrid gal={data?.gal ?? []} />
        </Container>
      </section>

      <PremiumCTA cta={data?.cta ?? ""} />

    </main>
  );
}
