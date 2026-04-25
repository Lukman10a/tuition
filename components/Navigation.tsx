"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const SUBJECT_LINKS = [
  { label: "Art", slug: "art" },
  { label: "Arabic", slug: "arabic" },
  { label: "Computing", slug: "computing" },
  { label: "English", slug: "english" },
  { label: "Geography", slug: "geography" },
  { label: "History", slug: "history" },
  { label: "Science", slug: "science" },
  { label: "Maths", slug: "maths" },
  { label: "Sports", slug: "sport" },
];

const NAV_LINKS = [
  { label: "Info & Prices", href: "/info-and-prices" },
  { label: "Online Tuition", href: "/online-tuition" },
  { label: "Register", href: "#register" },
  { label: "Gallery", href: "#gallery" },
  { label: "Vacancies", href: "#vacancies" },
];

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full bg-primary text-white text-center py-2.5 text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 select-none">
        <span className="bg-accent-yellow text-primary px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-widest">
          Update
        </span>
        Now enrolling for September 2026 – Limited spaces available!
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-360 z-50 transition-all duration-300 rounded-full border ${
          isScrolled
            ? "bg-bg-white/90 backdrop-blur-xl border-primary/10 shadow-[0_12px_35px_rgba(30,45,90,0.14)]"
            : "bg-bg-white/85 backdrop-blur-lg border-primary/10 shadow-[0_8px_22px_rgba(30,45,90,0.1)]"
        }`}
      >
        <div className="px-5 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-accent-teal to-accent-yellow flex items-center justify-center font-heading font-extrabold text-white">
              TT
            </div>
            <span className="font-heading font-extrabold text-xl text-primary tracking-tight">
              The Tuition
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="text-[15px] font-medium text-primary relative flex items-center gap-1 cursor-pointer">
                Subjects
                <ChevronDown
                  size={16}
                  className="text-primary/70 group-hover:rotate-180 transition-transform duration-300"
                />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-teal rounded-full"></span>
              </button>

              <div className="absolute left-0 top-full pt-5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <div className="w-64 rounded-3xl border border-primary/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(30,45,90,0.15)] p-4">
                  <ul className="space-y-1">
                    {SUBJECT_LINKS.map((subject) => (
                      <li key={subject.slug}>
                        <Link
                          href={`/subjects/${subject.slug}`}
                          className="block rounded-2xl px-4 py-2.5 text-[15px] font-medium text-primary/80 hover:text-primary hover:bg-bg-alt transition-all duration-200"
                        >
                          {subject.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 mr-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors"
              >
                <TwitterIcon size={14} />
              </a>
            </div>
            <button className="px-5 py-2.5 rounded-full border border-primary/20 text-primary text-[15px] font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Log In
            </button>
            <button className="px-6 py-2.5 rounded-full bg-accent-teal text-white text-[15px] font-semibold hover:bg-accent-coral hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-teal/30">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-bg-white pt-24 px-6 lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-heading font-bold text-primary">
              <details className="group">
                <summary className="list-none cursor-pointer flex items-center justify-between">
                  Subjects
                  <ChevronDown className="group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <ul className="mt-4 ml-2 space-y-3 text-lg font-semibold text-primary/80">
                  {SUBJECT_LINKS.map((subject) => (
                    <li key={subject.slug}>
                      <Link
                        href={`/subjects/${subject.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subject.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-semibold text-lg">
                Log In
              </button>
              <button className="w-full py-4 rounded-full bg-accent-teal text-white font-semibold text-lg shadow-lg shadow-accent-teal/30">
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
