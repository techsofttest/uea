import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { SITE_CONFIG, PRODUCT_CATEGORIES, PARTNER_LOGOS } from "@/data/siteData";
interface ProductResponse {
  contact: {
    address: string;
    map: string;
    phone: number;
    email: string;
    email2: string;
    email3: string;
    email4: string;
  };  cta: {
    content: string;
    title: string;
  };
  product:{
    name: string;
    slug: string;
    id: string;
  }[];
}
export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Products", href: "/products" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];
export default function Footer  ({product,contact,cta}:ProductResponse)  {
  return (
    <footer className="bg-white text-[#101828] pt-14 sm:pt-18 pb-12 border-t border-[#E5E7EB]">
      <Container>
        {/* Main Footer Columns (Optimized Column Spans & Tighter Gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 pb-12 border-b border-[#E5E7EB]">
          {/* Column 1: Brand & Bio (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between pr-0 lg:pr-2">
            <div>
              <Link href="/" className="inline-block mb-3">
                {/* Native img tag for 100% pixel-perfect uncompressed rendering */}
                <img
                  src="/logo/logo4.png"
                  alt="UNITED ENGINEERING AGENCIES"
                  className="h-16 sm:h-20 w-auto object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </Link>
              <div className="text-sm text-gray-700 font-semibold leading-relaxed mb-4" dangerouslySetInnerHTML={{__html:cta.content}} />
            </div>
            <div>
              <Button href="/about" variant="yellow" size="sm">
                About Our Company
              </Button>
            </div>
          </div>

          {/* Column 2: Page Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#101828] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-700 font-semibold">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#023077] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#101828] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-700 font-semibold">
              {product.slice(0, 9).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="hover:text-[#023077] transition-colors line-clamp-1">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                  <Link href="/products" className="hover:text-[#023077] transition-colors line-clamp-1">
                    View All Products
                  </Link>
                </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emails (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#101828] mb-4">
              Contact & Emails
            </h4>

            <div className="space-y-2 text-sm text-gray-800 font-semibold mb-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#023077] shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-[#023077] transition-colors text-xs sm:text-sm">
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Email Directory */}
            <div className="space-y-1.5 pt-2 border-t border-gray-100">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Emails</p>
        
                <div key={contact.email} className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#023077] shrink-0" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-[#023077] transition-colors text-xs font-semibold text-gray-800 break-all"
                  >
                    {contact.email}
                  </a>
                </div>
                 <div key={contact.email2} className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#023077] shrink-0" />
                  <a
                    href={`mailto:${contact.email2}`}
                    className="hover:text-[#023077] transition-colors text-xs font-semibold text-gray-800 break-all"
                  >
                    {contact.email2}
                  </a>
                </div>
                 <div key={contact.email3} className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#023077] shrink-0" />
                  <a
                    href={`mailto:${contact.email3}`}
                    className="hover:text-[#023077] transition-colors text-xs font-semibold text-gray-800 break-all"
                  >
                    {contact.email3}
                  </a>
                </div>
                 <div key={contact.email4} className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#023077] shrink-0" />
                  <a
                    href={`mailto:${contact.email4}`}
                    className="hover:text-[#023077] transition-colors text-xs font-semibold text-gray-800 break-all"
                  >
                    {contact.email4}
                  </a>
                </div>

            </div>
          </div>

          {/* Column 5: Location Map (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#101828] mb-4">
              Location Map
            </h4>
            <div className="w-full h-24 rounded-xl overflow-hidden border border-gray-200 shadow-2xs relative mb-2">
              <iframe
                src={contact.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="United Engineering Agencies Unity Plaza Location"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-start gap-1.5 text-xs text-gray-800 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#023077] shrink-0 mt-0.5" />
              <span dangerouslySetInnerHTML={{__html:contact.address}}/>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-600 font-semibold gap-4">
          <p>© {new Date().getFullYear()} UNITED ENGINEERING AGENCIES. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 font-semibold">
            <span>
              Web Designed By{" "}
              <a
                href="https://www.techsoftweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023077] hover:text-[#023077]/80 font-bold underline underline-offset-4 transition-colors"
              >
                Techsoft
              </a>
            </span>
            <a href="#" className="hover:text-[#023077] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#023077] transition-colors">Terms of Business</a>
            <a href="#" className="hover:text-[#023077] transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
