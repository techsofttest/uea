import { Metadata } from "next";
import  Hero  from "@/components/home/Hero";
import  ProductsIntro  from "@/components/home/ProductsIntro";
import  AboutExperienceSection  from "@/components/home/AboutExperienceSection";
import  MissionVision  from "@/components/home/MissionVision";
import  GlobalPartnersMarquee  from "@/components/home/GlobalPartnersMarquee";
import  WhyChooseUs from "@/components/home/WhyChooseUs";
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
  }[];
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
  product:{
    title: string;
    slug: string;
    image: string;
    content:string;
  }[];
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

  const res = await fetch(`${baseUrl}/index`, {
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

export default async function Home() {
  let data: ProductResponse | null = null;

  try {
    data = await getSEO();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans antialiased text-[#101828] selection:bg-[#FEDD13] selection:text-[#023077]">
      
      {/* Full-width Hero Section */}
      <Hero hero={data?.hero ?? []} />

      {/* Full-width Suppliers Marquee */}
      <div className="bg-[#023077]">
        <GlobalPartnersMarquee suppliers={data?.supply ?? []} />
      </div>

      {/* Boxed Content Sections Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 py-8 sm:py-10">
        {/* Products Intro */}
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs">
          <ProductsIntro product={data?.product ?? []} />
        </div>

        {/* About Experience Section */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xs">
          <AboutExperienceSection about={data?.about} />
        </div>

        {/* Mission & Vision */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xs">
          <MissionVision mission={data?.mission ?? ""} vission={data?.vission ?? ""} />
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xs">
          <WhyChooseUs why={data?.why} />
        </div>

        {/* Premium CTA */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xs">
          <PremiumCTA cta={data?.cta ?? ""} />
        </div>
      </div>

      {/* Full-width Footer */}

    </main>
  );
}
