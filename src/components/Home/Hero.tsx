"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, ArrowLeft, ArrowRight, Users, Package, TrendingDown } from "lucide-react";
import { AutoPartsForm, AutoPartsModalForm } from "./AutoPartsForm";
import { siteConfig } from "@/lib/site-config";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const imageSlides = Array.from(
    { length: 12 },
    (_, i) => `/assets/images/hero-slides/${i + 1}.jpg`
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
  }, [imageSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  }, [imageSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    imageSlides.forEach((src, index) => {
      const img = new window.Image();
      img.onerror = () => {
        setImageError((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trustStats = [
    { icon: Users, value: "15,000+", label: "Customers" },
    { icon: Package, value: "75,000+", label: "Parts in Stock" },
    { icon: TrendingDown, value: "65%", label: "Avg. Savings" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Mobile hero */}
      <div className="relative min-h-[80vh] lg:hidden overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/video/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end min-h-[80vh] px-4 pt-8 pb-6">
          <div className="max-w-sm mx-auto w-full text-white text-center">
            <p className="inline-block bg-yellow-400 text-blue-950 rounded-lg px-3 py-1 text-xs font-semibold mb-3">
              {siteConfig.parentTagline}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
              Get the Best
              <br />
              <span className="text-yellow-300">Used &amp; Refurbished Auto Parts</span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">
              Premium quality OEM parts at unbeatable prices. Thoroughly inspected and guaranteed.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-10 mb-10 lg:hidden relative z-10">
        <AutoPartsForm
          className="max-h-[70vh] overflow-y-auto w-full shadow-2xl border-t-4 border-yellow-400"
          showTitle
        />
      </div>

      {/* Desktop hero: solid brand panel + contained image, no full-bleed overlay */}
      <div className="hidden lg:block bg-primary dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="text-white">
              <p className="inline-flex items-center bg-yellow-400 text-blue-950 rounded-lg px-4 py-1.5 text-sm font-semibold mb-6">
                {siteConfig.parentTagline}
              </p>
              <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                Find Well-Inspected OEM Grade A Used Auto Parts With{" "}
                <span className="text-yellow-300">The Best Deals</span>
              </h1>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                {siteConfig.chainTagline}. Thoroughly inspected, warrantied, and shipped fast anywhere in the US.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-3.5 rounded-lg text-base font-bold transition-colors"
                >
                  Get a Free Quote
                </button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2.5">
                    <stat.icon className="w-5 h-5 text-yellow-300" />
                    <div>
                      <div className="font-bold leading-none">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contained image panel with its own carousel controls, form overlapping the bottom edge */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[5/4] border border-white/10">
                {imageSlides.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {imageError[index] && (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">🏎️</div>
                          <h3 className="text-2xl font-bold mb-2">Image Unavailable</h3>
                          <p className="text-gray-300 mb-4">Slide {index + 1} failed to load</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {imageSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? "bg-yellow-400 w-7" : "bg-white/50 hover:bg-white/75 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 -mt-14 mx-6 xl:mx-10">
                <AutoPartsForm
                  className="shadow-2xl border-t-4 border-yellow-400 max-h-[65vh] overflow-y-auto"
                  showTitle
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Hero;
