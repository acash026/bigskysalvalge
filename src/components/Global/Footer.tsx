"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";
import { siteConfig } from "@/lib/site-config";
import { PARTS } from "@/data/parts";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredParts = PARTS.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA banner */}
      <div className="bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-blue-950">Need a Part Fast?</h3>
            <p className="text-blue-900/80 text-sm sm:text-base">Get a free, no-obligation quote in minutes.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="shrink-0 bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo/big-sky-salvage-logo-dark-bg.png"
                alt="Big Sky Salvage Logo"
                width={168}
                height={56}
                className="w-42 h-14 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-1">{siteConfig.parentTagline}</p>
            <p className="text-gray-400 mb-4">{siteConfig.chainTagline}</p>
            <p className="text-gray-400 mb-4">
              Your trusted partner for high-quality used auto parts. We provide
              OEM-grade components with the best deals in the market.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={handleLinkClick} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" onClick={handleLinkClick} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/used-auto-parts" onClick={handleLinkClick} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Used Auto Parts
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Parts Categories */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Parts Categories</h3>
            <ul className="space-y-2">
              {featuredParts.map((part) => (
                <li key={part.slug}>
                  <Link
                    href={`/used-auto-parts/${part.slug}`}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {part.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Toll Free:{" "}
                <a href={siteConfig.phoneHref} className="hover:text-yellow-400 transition-colors duration-200">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-gray-400">
                Alt:{" "}
                <a href={siteConfig.altPhoneHref} className="hover:text-yellow-400 transition-colors duration-200">
                  {siteConfig.altPhone}
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <a href={`mailto:${siteConfig.publicEmail}`} className="hover:text-yellow-400 transition-colors duration-200">
                  {siteConfig.publicEmail}
                </a>
              </li>
              <li className="text-gray-400">
                Address:{" "}
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Big Sky Salvage. All rights reserved.
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};

export default Footer;
