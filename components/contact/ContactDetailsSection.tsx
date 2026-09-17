import React from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactDetailsSection({ contact, cont }: { contact: any, cont: any }) {
  const getEmailName = (email: string) => {
    if (!email) return "";

    const username = email.split("@")[0];

    return username
      .replace(/[._-]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const getDetailTitle = (icon: string) => {
  return cont?.detail?.find((item: any) => item.icon === icon)?.title || "";
};
  return (
    <section id="contact-details" className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[560px]">

        {cont.image &&
        <div className="w-full lg:w-[42%] xl:w-[40%] relative min-h-[380px] sm:min-h-[460px] lg:min-h-full group overflow-hidden shrink-0">
          <Image
            src={cont.image || ""}
            alt={cont.title || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>}

        {/* Contact Details on the RIGHT */}
        <div className="w-full lg:w-[58%] xl:w-[60%] py-14 sm:py-20 px-4 sm:px-6 lg:pr-12 lg:pl-12 xl:pr-20 xl:pl-16 flex flex-col justify-center">
          <Reveal>
            <SectionEyebrow className="mb-3">{cont.title}</SectionEyebrow>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#101828] tracking-wide leading-none mb-6">
              {cont.sub}
            </h2>
          </Reveal>

          {/* Un-boxed Details Grid */}
          <div className="space-y-6">
            {/* Phone & Office Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#023077]/10 text-[#023077] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    {getDetailTitle("phone")}
                  </h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-base sm:text-lg font-semibold text-[#101828] hover:text-[#023077] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#023077]/10 text-[#023077] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                     {getDetailTitle("clock")}
                  </h4>
                  <p className="text-sm font-semibold text-[#101828]">
                    {contact.open}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-3.5 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#023077]/10 text-[#023077] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                         {getDetailTitle("map")}
                </h4>
                <div className="text-base sm:text-lg font-semibold text-[#101828]" dangerouslySetInnerHTML={{ __html: contact.address }} />
                <p className="text-xs text-gray-700 font-semibold mt-1">
                  United Engineering Agencies, Unity Plaza, Kochi, Kerala, India
                </p>
              </div>
            </div>

            {/* Email Directory */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#023077]" />
                       {getDetailTitle("email")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div key={contact.email} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-700">{getEmailName(contact.email)}</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-semibold text-[#101828] hover:text-[#023077] transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
                <div key={contact.email2} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-700">{getEmailName(contact.email2)}</span>
                  <a
                    href={`mailto:${contact.email2}`}
                    className="text-sm font-semibold text-[#101828] hover:text-[#023077] transition-colors break-all"
                  >
                    {contact.email2}
                  </a>
                </div>
                <div key={contact.email3} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-700">
                    {getEmailName(contact.email3)}
                  </span>

                  <a
                    href={`mailto:${contact.email3}`}
                    className="text-sm font-semibold text-[#101828] hover:text-[#023077] transition-colors break-all"
                  >
                    {contact.email3}
                  </a>
                </div>
                <div key={contact.email4} className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-700">{getEmailName(contact.email4)}</span>
                  <a
                    href={`mailto:${contact.email4}`}
                    className="text-sm font-semibold text-[#101828] hover:text-[#023077] transition-colors break-all"
                  >
                    {contact.email4}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
