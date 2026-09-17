import { Metadata } from "next";
import React from "react";
import { InnerHeroBanner } from "@/components/layout/InnerHeroBanner";
import { ContactDetailsSection } from "@/components/contact/ContactDetailsSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

import { SITE_CONFIG } from "@/data/siteData";

interface Metric {
  title: number;
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
    sub: string;
    image:string;
  };
  product: {
    name: string;
  }[];
  cont: {
    title: string;
    sub: string;
    content: string;
    image: string;
    detail:Metric[];
  }| undefined;
    contact: {
    address: string;
    map: string;
    phone: number;
    email: string;
    email2: string;
    email3: string;
    email4: string;
  };
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/contact`, {
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


export default async function ContactPage() {
      let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-[#101828] selection:bg-[#FEDD13] selection:text-[#023077]">

      <InnerHeroBanner
        eyebrow={data?.hero.title ||""}
        title={data?.hero.sub ||""}
          bgImage={data?.hero.image}
      />

      <ContactDetailsSection contact={data?.contact} cont={data?.cont} />

      <section className="w-full h-[450px] sm:h-[500px] relative bg-gray-100 border-y border-gray-200">
        <iframe
          src={data?.contact.map}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="United Engineering Agencies Unity Plaza Location"
          className="w-full h-full"
        />
      </section>

      <ContactFormSection product={data?.product ?? []} />

    </main>
  );
}
