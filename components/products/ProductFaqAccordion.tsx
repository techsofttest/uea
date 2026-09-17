"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductFaqAccordionProps {
 faq:{question:string;
      answer:string
    }[];
}

export default function ProductFaqAccordion({ faq }:ProductFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200/80">
      {faq.map((faqItem, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} className="py-4">
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex items-center justify-between text-left py-1 group cursor-pointer"
            >
              <span className="text-base sm:text-lg font-semibold text-[#101828] group-hover:text-[#023077] transition-colors">
                {faqItem.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#023077] transition-transform duration-200 shrink-0 ml-4 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pt-3 pr-6 text-sm text-gray-600 leading-relaxed">
                {faqItem.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
