"use client";

import React, { useEffect, useState } from "react";
import { Mail,Send,RefreshCw, CheckCircle2} from "lucide-react";

interface ProductEnquiryFormProps {
  productName: string;
}
export default function ProductEnquiryForm({ productName }:ProductEnquiryFormProps) {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
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
      `${process.env.NEXT_PUBLIC_API_URL}/sendform`
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sendform`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            product_name:productName,
            company: formData.company,
            address: formData.address,
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
          address: "",
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
    <div id="contact-form" className="bg-[#023077] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <Mail className="w-64 h-64 text-white transform translate-x-12 translate-y-12" />
      </div>

      <div className="relative z-10">
        <span className="inline-block text-xs font-bold text-[#FEDD13] tracking-wider uppercase mb-2">
          GET IN TOUCH
        </span>
        <h6 className="font-bebas text-3xl sm:text-4xl text-white mb-3 leading-none">
          Request Technical Quotation for  <span className="text-[#FEDD13]">{productName}</span>
        </h6>
        <p className="text-sm text-white/80 max-w-lg mb-8 leading-relaxed">
          Reach out directly to our institutional sales team. We provide rapid technical specification review, drawings, and competitive commercial proposals.
        </p>
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
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Full Name <span className="text-[#FEDD13]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name} onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#FEDD13] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Company Email <span className="text-[#FEDD13]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email} onChange={handleChange}
                placeholder="Enter company email"
                className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#FEDD13] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Phone / WhatsApp Number
              </label>
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

            <div>
              <label className="block text-xs font-semibold text-white/90 mb-1.5">
                Company / Plant Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company} onChange={handleChange}
                placeholder="Enter company or plant name"
                className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#FEDD13] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/90 mb-1.5">
              Company / Plant Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address} onChange={handleChange}
              placeholder="Enter complete plant or office address"
              className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#FEDD13] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/90 mb-1.5">
              Enquiry Details / Technical Specifications
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message} onChange={handleChange}
              placeholder="Provide material grade, pressure ratings, dimensions, or specific requirements..."
              className="w-full px-4 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#FEDD13] focus:border-transparent transition-all resize-y"
            ></textarea>
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
    </div>
  );
};
