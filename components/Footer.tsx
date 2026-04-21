"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Custom SVG Icons for Social Media
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.5 7.14" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#fff" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
  </svg>
);

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Subjects", href: "#subjects" },
        { label: "Info & Prices", href: "/info-and-prices" },
        { label: "Online Tuition", href: "/online-tuition" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "On-Site Learning", href: "#on-site" },
        { label: "Online Classes", href: "/online-tuition" },
        { label: "GCSE Preparation", href: "/info-and-prices" },
        { label: "Group Sessions", href: "#group-sessions" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Vacancies", href: "#vacancies" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="px-4 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Brand */}
            <motion.div
              custom={0}
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-teal to-accent-yellow flex items-center justify-center font-heading font-extrabold">
                  TC
                </div>
                <span className="font-heading font-extrabold text-lg">
                  The Tuition Club
                </span>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                UK's trusted tuition provider offering expert tutoring across
                all subjects for students from primary through GCSE level.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-teal transition-colors flex items-center justify-center text-white"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-teal transition-colors flex items-center justify-center text-white"
                >
                  <TwitterIcon size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-teal transition-colors flex items-center justify-center text-white"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg mb-6 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-accent-teal transition-colors duration-300 group flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent-teal rounded-full group-hover:scale-150 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              custom={4}
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-lg mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-3 text-white/70 hover:text-accent-teal transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+44 (0) 161 XXXX XXXX</span>
                </a>
                <a
                  href="mailto:info@thetuitionclub.co.uk"
                  className="flex items-center gap-3 text-white/70 hover:text-accent-teal transition-colors"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@thetuitionclub.co.uk</span>
                </a>
                <a
                  href="#"
                  className="flex items-start gap-3 text-white/70 hover:text-accent-teal transition-colors"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <span>Manchester, UK</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="font-heading font-bold text-xl mb-3">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on new programs,
              workshops, and seasonal offers.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent-teal transition-colors"
              />
              <button className="px-6 py-3 rounded-lg bg-accent-teal text-primary font-semibold hover:bg-accent-teal/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-4 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>
              &copy; {currentYear} The Tuition Club. All rights reserved.
              Serving Manchester and online students globally.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-accent-teal transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-accent-teal transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-accent-teal transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
