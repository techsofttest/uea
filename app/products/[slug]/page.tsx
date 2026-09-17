import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import  RelatedProductsCarousel  from "@/components/products/RelatedProductsCarousel";
import  ProductFaqAccordion  from "@/components/products/ProductFaqAccordion";
import  ProductEnquiryForm  from "@/components/products/ProductEnquiryForm";
import  FloatingEnquireBar  from "@/components/products/FloatingEnquireBar";
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  pro:{
    title:string;
    id:string;
    slug:string;
    description:string;
    image:string;
    specs:string[];
    keyFeatures:string[];
    overview:string;
    heading:string;
    faq:{question:string;
      answer:string
    }[];
  };
  product:{
    title: string;
    slug: string;
    image: string;
    content:string;
  }[];

}
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
async function getSEO(slug:string): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/product/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;

    const data = await getSEO(slug);

    return {
      title: data?.seo?.meta_title ?? data?.pro?.title ?? "Product",
      description: data?.seo?.meta_desc ?? "",
      keywords: data?.seo?.meta_key ?? "",
    };
  } catch (error) {
    return {
      title: "Product",
    };
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
 const { slug } = await params;

  const data = await getSEO(slug);

  if (!data.product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans antialiased text-[#101828] selection:bg-[#FEDD13] selection:text-[#023077]">

      {/* Spacing below fixed header */}
      <div className="pt-24 lg:pt-24 pb-2 bg-white border-b border-gray-100">
        <Container>
          {/* Breadcrumb Header */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto py-1">
            <Link href="/" className="hover:text-[#023077] transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
            <Link href="/products" className="hover:text-[#023077] transition-colors shrink-0">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="text-[#023077] font-semibold truncate shrink-0">
              {data.pro.title}
            </span>
          </nav>
        </Container>
      </div>

      {/* Main Content Area */}
      <section className="pb-10 lg:pb-16 pt-6 lg:pt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Sticky Product Image & Quick Info (5 Cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="pb-6 border-b border-gray-200/80">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6 border border-gray-200/60 shadow-xs">
                  <Image
                    src={data.pro.image}
                    alt={data.pro.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>

                <h1 className="font-bebas text-3xl sm:text-4xl text-[#101828] mb-3 leading-none">
                  {data.pro.title}
                </h1>

                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed"dangerouslySetInnerHTML={{__html:data.pro.description}} />
              </div>
            </div>

            {/* RIGHT COLUMN: Product Details, Overview, Features, FAQ (7 Cols) */}
            <div className="lg:col-span-7 space-y-10 lg:space-y-12">
              {/* Product Overview */}
              <Reveal direction="up">
                <div className="border-b border-gray-200/80 pb-10">
                  
                  <h2 className="text-xs font-bold text-[#023077] tracking-wider uppercase mb-2">
                    PRODUCT OVERVIEW
                  </h2>
                   {data.pro.heading &&
                  <h3 className="font-bebas text-3xl sm:text-4xl text-[#101828] mb-4">
                   {data.pro.heading}
                  </h3>}{data.pro.overview &&
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {data.pro.overview }
                  </p>
                  }

                  {/* Specifications Badge Pill Grid */}
                  {data.pro.specs && data.pro.specs.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2.5">
                      {data.pro.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50/70 text-[#023077] border border-blue-100"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Key Features */}
              {data.pro.keyFeatures  && data.pro.keyFeatures.length > 0&& (
                <Reveal direction="up" delay={0.1}>
                  <div className="border-b border-gray-200/80 pb-10">
                    <h2 className="text-xs font-bold text-[#023077] tracking-wider uppercase mb-2">
                      TECHNICAL CAPABILITIES
                    </h2>
                    <h3 className="font-bebas text-3xl sm:text-4xl text-[#101828] mb-6">
                      Key Features & Engineering Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.pro.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 py-2">
                          <CheckCircle2 className="w-5 h-5 text-[#023077] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700 font-medium leading-normal">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* FAQ Section */}
              {data.pro.faq && data.pro.faq.length > 0 && (
                <Reveal direction="up" delay={0.15}>
                  <div className="border-b border-gray-200/80 pb-10">
                    <h2 className="text-xs font-bold text-[#023077] tracking-wider uppercase mb-2">
                      FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <h3 className="font-bebas text-3xl sm:text-4xl text-[#101828] mb-6">
                      Got Questions?
                    </h3>

                    <ProductFaqAccordion faq={data.pro.faq } />
                  </div>
                </Reveal>
              )}

              {/* Enquire Now CTA Box */}
              <Reveal direction="up" delay={0.2}>
                <ProductEnquiryForm productName={data.pro.title} />
              </Reveal>
            </div>
          </div>

          {/* BOTTOM SECTION: Related Products Carousel */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <RelatedProductsCarousel  products={data.product} />
          </div>
        </Container>
      </section>

      {/* Floating Enquire Now Sticky Bottom Bar */}
      <FloatingEnquireBar productName={data.pro.title} />

    </main>
  );
}
