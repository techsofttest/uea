import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import  Footer  from "@/components/layout/Footer";
import  Header  from "@/components/layout/Header";
export const dynamic = "force-dynamic";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
interface ProductResponse {
  contact: {
    address: string;
    map: string;
    phone: number;
    email: string;
    email2: string;
    email3: string;
    email4: string;
  };
   cta: {
    content: string;
  title: string;
  };
  product:{
    name: string;
    slug: string;
    id: string;
  }[];
}

export async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/layout`, {
   cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}
export const metadata: Metadata = {
  title: "United Engineering Agencies | Petrochemical & Industrial Engineering Solutions",
  description:
    "United Engineering Agencies supplies high-grade industrial products and engineering solutions for petrochemical, refining, chemical, oil and gas industries across India.",
  openGraph: {
    title: "United Engineering Agencies | Petrochemical & Industrial Engineering Solutions",
    description:
      "Engineered solutions for steam systems, piping, heat exchangers, pumps, valves, and petrochemical process equipment.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "United Engineering Agencies Industrial Solutions",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
      let data: ProductResponse | null = null;
     data = await getSEO();
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${bebas.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#101828]">
        <Header product={data.product}/>

        {children}
        <Footer product={data.product}  contact={data.contact} cta={data.cta} />
      </body>
    </html>
  );
}
