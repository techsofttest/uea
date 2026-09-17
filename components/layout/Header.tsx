"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu, ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
interface ProductCategory {
  id?: number | string;
  slug: string;
  name: string;
}

interface HeaderProps {
  filled?: boolean;
  product?: ProductCategory[];
}

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header ({filled: filledProp = false, product = [],}:HeaderProps)  {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 const pathname = usePathname();

  const isProductDetail =pathname.startsWith("/products/") && pathname !== "/products";
  const filled = filledProp || isProductDetail;


  const isSolid = filled || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-3.5 transition-all duration-300 ${
          isSolid
            ? "bg-white border-b border-[#E5E7EB] shadow-xs"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-3 group">
            <div className="flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={isSolid ? "/logo/logo4.png" : "/logo/logo-wt4.png"}
                alt="UNITED ENGINEERING AGENCIES"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => {
              /* ================= PRODUCTS ================= */
              if (link.label === "Products") {
                return (
                  <div
                    key={link.label}
                    className="relative group py-2"
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-semibold transition-colors flex items-center gap-1 group/link ${
                        isSolid
                          ? "text-[#101828] hover:text-[#023077]"
                          : "text-white hover:text-white/80"
                      }`}
                    >
                      <span>{link.label}</span>

                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />

                      <span
                        className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover/link:w-full ${
                          isSolid ? "bg-[#023077]" : "bg-white"
                        }`}
                      />
                    </Link>

                    {/* Products Dropdown */}
                    <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="flex flex-col gap-0.5 max-h-[360px] overflow-y-auto custom-scrollbar">
                        {product.map((prod) => (
                          <Link
                            key={prod.id ?? prod.slug}
                            href={`/products/${prod.slug}`}
                            className="px-3 py-2 rounded-xl text-xs font-semibold text-[#101828] hover:bg-blue-50/60 hover:text-[#023077] transition-colors flex items-center justify-between"
                          >
                            <span className="truncate">
                              {prod.name}
                            </span>

                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0 text-[#023077]" />
                          </Link>
                        ))}
                      </div>

                      {/* View All */}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/products"
                          className="px-3 py-2 rounded-xl text-xs font-bold text-[#023077] bg-gray-50 hover:bg-[#FEDD13] transition-colors flex items-center justify-between"
                        >
                          <span>View All Products</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ================= OTHER LINKS ================= */
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors py-1 group ${
                    isSolid
                      ? "text-[#101828] hover:text-[#023077]"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      isSolid ? "bg-[#023077]" : "bg-white"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* CTA - desktop only */}
            <div className="hidden xl:block">
              <Button
                href="/contact#contact-form-section"
                variant="yellow"
                size="sm"
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1 transition-colors ${
                isScrolled
                  ? "text-[#101828] hover:text-black"
                  : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#023077] flex flex-col justify-between p-6 sm:p-8 pt-24 lg:hidden animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => {
              /* Products */
              if (link.label === "Products") {
                return (
                  <div
                    key={link.label}
                    className="border-b border-white/20 pb-3"
                  >
                    <div className="flex items-center justify-between text-2xl font-normal text-white">
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>

                      <button
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className="p-2 text-white/80 hover:text-white"
                        aria-label="Toggle products"
                      >
                        <ChevronDown
                          className={`w-6 h-6 transition-transform ${
                            mobileProductsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Products */}
                    {mobileProductsOpen && (
                      <div className="mt-3 pl-4 flex flex-col gap-3.5 border-l-2 border-[#FEDD13] my-2">
                        {product.map((prod) => (
                          <Link
                            key={prod.id ?? prod.slug}
                            href={`/products/${prod.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base text-white/90 hover:text-white font-medium flex items-center justify-between"
                          >
                            <span>{prod.name}</span>

                            <ArrowRight className="w-4 h-4 text-[#FEDD13]" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              /* Other links */
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-normal text-white hover:text-white/80 transition-colors flex items-center justify-between border-b border-white/20 pb-4"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="flex flex-col gap-4 pt-6">
            <Link
              href="/contact#contact-form-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#FEDD13] text-[#023077] font-bold text-center py-4 rounded-full text-sm uppercase tracking-wider"
            >
              Contact Our Team
            </Link>

            <p className="text-white text-sm text-center font-medium">
              © UNITED ENGINEERING AGENCIES
            </p>
          </div>
        </div>
      )}
    </>
  );
};