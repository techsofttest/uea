"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Phone,Mail,Send,CheckCircle2,User,Building2,MessageSquare,Tag,RefreshCw, } from "lucide-react";

export function ContactFormSection({product}:{product:any[]}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
    captcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
const loadCaptcha = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/send`
  );

  if (!response.ok) {
    throw new Error("Unable to load CAPTCHA.");
  }

  const data = await response.json();

  setCaptchaQuestion(data.question);
  setCaptchaToken(data.captcha_token);

  setFormData((prev) => ({
    ...prev,
    captcha: "",
  }));
};

  useEffect(() => {
    loadCaptcha().catch(() => setErrorMessage("Unable to load the CAPTCHA. Please refresh the page."));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          product_name: formData.subject,
          message: formData.message,
          captcha: formData.captcha,
          captcha_token: captchaToken,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "General Inquiry",
        message: "",
        captcha: "",
      });
      await loadCaptcha();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-form-section" className="relative bg-[#023077] text-white border-b border-[#023077] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">

        {/* Contact Form on the LEFT */}
        <div className="w-full lg:w-[58%] xl:w-[60%] py-14 sm:py-20 px-4 sm:px-6 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-12 flex flex-col justify-center">
          <Reveal>
            <SectionEyebrow light className="mb-3">SEND US A MESSAGE</SectionEyebrow>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none mb-3">
              Request a Product Quote & Consultation
            </h2>
            <p className="text-sm text-white/80 font-normal leading-relaxed mb-8">
              Fill out the form below to submit product specifications, request pricing, or schedule a technical discussion with our agency representatives.
            </p>
          </Reveal>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 animate-fadeIn text-[#101828]">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-emerald-900">Enquiry Submitted Successfully!</h4>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Thank you for contacting United Engineering Agencies. Our sales team will get back to you shortly.
                </p>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    inputMode="numeric"
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      setFormData((prev) => ({
                        ...prev,
                        phone: value,
                      }));
                    }}
                    placeholder="98765 43210"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Refinery / EPC Contractor Name"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Product / Requirement Category */}
            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                Requirement / Product Interest
              </label>
              <div className="relative">
                <Tag className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                >
                  <option value="General Inquiry">General Commercial Inquiry</option>
                  {product.map((prod ,idx) => (
                    <option key={idx} value={prod.name}>
                      {prod.name} 
                    </option>
                  ))}
                </select>
              </div>
            </div>

            

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                Message / Technical Specifications *
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project requirements, quantities, or technical specifications..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
                />
              </div>
            </div>
<div>
  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
    CAPTCHA *
  </label>

  <div className="flex flex-col sm:flex-row gap-3">
    {/* CAPTCHA Question */}
    <div className="flex items-center justify-between gap-4 bg-white rounded-xl border border-gray-100 px-4 py-3 min-h-[48px] sm:min-w-[220px]">
      <span className="text-sm font-bold text-[#023077] tracking-wide">
        {captchaQuestion || "Loading..."}
      </span>

      <button
        type="button"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            captcha: "",
          }));
          loadCaptcha();
        }}
        disabled={!captchaQuestion}
        aria-label="Refresh CAPTCHA"
        title="Refresh CAPTCHA"
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-[#023077] hover:bg-[#023077]/10 transition-all disabled:opacity-50 cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
    </div>

    {/* CAPTCHA Answer */}
    <input
      type="text"
      name="captcha"
      required
      value={formData.captcha}
      onChange={handleChange}
      placeholder="Enter the answer"
      autoComplete="off"
      className="flex-1 px-4 py-3 bg-white border border-gray-100 rounded-xl text-sm text-[#101828] placeholder:text-gray-400 focus:outline-none focus:border-[#FEDD13] focus:ring-1 focus:ring-[#FEDD13] transition-all"
    />
  </div>
</div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-[#FEDD13] hover:bg-[#e5c70e] text-[#023077] font-semibold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Enquiry...</span>
              ) : (
                <>
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side Image (Filled completely without top, bottom, or right padding/margin) */}
        <div className="w-full lg:w-[42%] xl:w-[40%] relative min-h-[380px] sm:min-h-[460px] lg:min-h-full group overflow-hidden shrink-0">
          <Image
            src="/contact-page/c2.png"
            alt="High Specification Heat Exchangers and Process Equipment"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
