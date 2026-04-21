"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  FlaskConical,
  Calculator,
  ScrollText,
  Globe,
  BookOpen,
  Monitor,
  Languages,
  Palette,
  Trophy,
  CheckCircle2,
  Clock,
  BookOpenCheck,
  MessageSquareHeart,
  Quote,
  Star,
} from "lucide-react";

// SVG for Twitter (X)
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

// SVG for Instagram
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

// Add specific classes to Tailwind
const NAV_LINKS = [
  "Info & Prices",
  "Online Tuition",
  "Register",
  "Gallery",
  "Vacancies",
];

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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-bg-white font-sans text-text-primary overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="w-full bg-primary text-white text-center py-2.5 text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 select-none">
        <span className="bg-accent-yellow text-primary px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-widest">
          Update
        </span>
        Now enrolling for September 2026 – Limited spaces available!
      </div>

      {/* --- NAVIGATION --- */}
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
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-accent-teal to-accent-yellow flex items-center justify-center font-heading font-extrabold text-white">
              TC
            </div>
            <span className="font-heading font-extrabold text-xl text-primary tracking-tight">
              The Tuition Club
            </span>
          </div>

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
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] font-medium text-primary relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
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
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
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

      <main className="pt-28">
        {/* --- SECTION 1: HERO --- */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-bg-white pb-20">
          {/* Animated Gradient Blob */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-accent-teal/20 to-accent-yellow/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
          />

          <div className="max-w-360 mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 lg:pt-0">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.div
                variants={fadeUpVariant}
                className="inline-flex items-center gap-2 bg-accent-teal rounded-full py-1.5 px-4 mb-8 shadow-sm"
              >
                <span className="text-sm font-semibold text-white tracking-wide uppercase">
                  🇬🇧 UK&apos;s Trusted Tuition Provider
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="font-heading font-extrabold text-[40px] leading-[1.1] lg:text-[64px] tracking-[-0.02em] text-primary mb-6"
              >
                Helping Every Child <br className="hidden lg:block" />
                Reach Their Full <br className="hidden lg:block" />
                <span className="text-accent-teal relative inline-block">
                  Potential.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-accent-yellow"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-[17px] leading-[1.75] text-text-secondary max-w-135 mb-10"
              >
                Expert tutors. Inspiring subjects. Real results. Join hundreds
                of families who trust The Tuition Club with their child&apos;s
                education.
              </motion.p>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent-teal text-white text-[16px] font-semibold hover:bg-accent-coral hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-teal/30 group">
                  Register Your Child
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-primary/10 text-primary text-[16px] font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300">
                  Explore Subjects
                </button>
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-3"
              >
                <div className="bg-bg-alt border border-primary/5 px-4 py-2 rounded-full text-[13px] font-medium text-primary">
                  500+ Students Enrolled
                </div>
                <div className="bg-bg-alt border border-primary/5 px-4 py-2 rounded-full text-[13px] font-medium text-primary">
                  9 Subjects Available
                </div>
                <div className="bg-bg-alt border border-primary/5 px-4 py-2 rounded-full text-[13px] font-medium text-primary">
                  Online & On-Site
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Area */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative lg:h-150 flex items-center justify-center p-8"
            >
              <div
                className="relative w-full aspect-4/5 max-w-120 rounded-[48px] border-8 border-white shadow-2xl overflow-hidden bg-bg-alt flex items-center justify-center"
                style={{
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent mix-blend-multiply z-10"></div>
              </div>

              {/* Floating Success Pill 1 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[15%] left-0 bg-white rounded-2xl shadow-xl flex items-center gap-3 p-3 z-20 border border-primary/5"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-bg-alt">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-primary">
                    A* in Maths!
                  </p>
                  <p className="text-[12px] text-text-secondary">
                    Sarah&apos;s Mum
                  </p>
                </div>
              </motion.div>

              {/* Floating Success Pill 2 */}
              <motion.div
                animate={{ y: [10, -15, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-[20%] right-0 bg-white rounded-2xl shadow-xl flex items-center gap-3 p-3 z-20 border border-primary/5"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-accent-teal/10 text-accent-teal">
                  <Trophy size={18} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-primary">
                    Top of the class
                  </p>
                  <p className="text-[12px] text-text-secondary">
                    Year 8 Science
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.23,26.54,153.22,51.81,228.3,56.44A80.59,80.59,0,0,0,321.39,56.44Z"
                className="fill-bg-alt"
              ></path>
            </svg>
          </div>
        </section>

        {/* --- SECTION 2: WHY TUITION CLUB (Bento Box Layout) --- */}
        <section className="bg-bg-alt py-24 relative">
          <div className="max-w-360 mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-semibold text-[28px] lg:text-[44px] text-primary inline-block relative cursor-default">
                Why Families Choose Us
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-accent-teal rounded-full"></span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto"
            >
              {/* Feature 1: Large Bento Span */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white rounded-4xl overflow-hidden shadow-sm border border-border-card md:col-span-2 lg:row-span-2 group relative"
              >
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent z-10 transition-opacity duration-300"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  // https://plus.unsplash.com/premium_photo-1726704057266-41edf6adae1b?q=80&w=1261&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                  src="https://plus.unsplash.com/premium_photo-1661963653272-02b2a35d8d64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Teacher"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-20 h-full flex flex-col justify-end p-8 lg:p-12 min-h-75 lg:min-h-full">
                  <div className="w-14 h-14 rounded-full bg-accent-teal text-white flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-[28px] text-white mb-2">
                    Expert Tutors
                  </h3>
                  <p className="text-white/80 text-[16px] leading-relaxed max-w-85">
                    Qualified, passionate teachers dedicated to uncovering and
                    nurturing each child&apos;s full academic potential.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Square */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-4xl shadow-sm border border-border-card pb-16 group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-coral/10"
              >
                <div className="w-14 h-14 rounded-full bg-accent-coral/10 text-accent-coral flex items-center justify-center mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="font-heading font-bold text-[24px] text-primary mb-3">
                  On-Site & Online
                </h3>
                <p className="text-[15px] text-text-secondary">
                  Flexible learning environments that fit seamlessly around your
                  family&apos;s busy schedule.
                </p>
                <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity -mr-4 -mb-4">
                  <Clock size={120} />
                </div>
              </motion.div>

              {/* Feature 3: Square */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-4xl shadow-sm border border-border-card pb-16 group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-lavender/10"
              >
                <div className="w-14 h-14 rounded-full bg-accent-lavender/10 text-accent-lavender flex items-center justify-center mb-6">
                  <MessageSquareHeart size={28} />
                </div>
                <h3 className="font-heading font-bold text-[24px] text-primary mb-3">
                  Ongoing Support
                </h3>
                <p className="text-[15px] text-text-secondary">
                  Regular progress reports and completely transparent
                  communication directly with parents.
                </p>
                <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity -mr-4 -mb-4">
                  <MessageSquareHeart size={120} />
                </div>
              </motion.div>

              {/* Feature 4: Wide Span Bottom */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-primary p-8 lg:p-10 rounded-4xl shadow-sm border border-primary/20 md:col-span-2 group relative overflow-hidden"
              >
                <div
                  className="absolute right-0 top-0 w-1/2 h-full opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, white 2px, transparent 2px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-accent-yellow text-primary flex items-center justify-center mb-6">
                    <BookOpenCheck size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-[28px] text-white mb-3">
                    9 Core Subjects
                  </h3>
                  <p className="text-white/70 text-[16px] max-w-100">
                    A comprehensive curriculum ranging from foundational Maths
                    and Science to Arabic and Sport.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: SUBJECTS --- */}
        <section id="subjects" className="py-24 bg-bg-white">
          <div className="max-w-360 mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <span className="text-xs font-mono font-bold text-accent-teal tracking-widest uppercase block mb-4">
                Our Subjects
              </span>
              <h2 className="font-heading font-semibold text-[28px] lg:text-[44px] text-primary">
                A Subject for Every Child&apos;s Passion.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Science",
                  slug: "science",
                  desc: "Physics, Chemistry, and Biology.",
                  color: "#FFD166",
                  icon: FlaskConical,
                },
                {
                  name: "Maths",
                  slug: "maths",
                  desc: "Building strong numerical foundations.",
                  color: "#06D6A0",
                  icon: Calculator,
                },
                {
                  name: "History",
                  slug: "history",
                  desc: "Discovering our past, understanding our future.",
                  color: "#FF6B6B",
                  icon: ScrollText,
                },
                {
                  name: "Geography",
                  slug: "geography",
                  desc: "Exploring the world and its environments.",
                  color: "#A78BFA",
                  icon: Globe,
                },
                {
                  name: "English",
                  slug: "english",
                  desc: "Mastering language, literature, and expression.",
                  color: "#2ABFBF",
                  icon: BookOpen,
                },
                {
                  name: "Computing",
                  slug: "computing",
                  desc: "Coding, logic, and digital literacy.",
                  color: "#1E2D5A",
                  icon: Monitor,
                },
                {
                  name: "Arabic",
                  slug: "arabic",
                  desc: "Language learning and calligraphy skills.",
                  color: "#FF9F43",
                  icon: Languages,
                },
                {
                  name: "Art",
                  slug: "art",
                  desc: "Unlocking creativity and expression.",
                  color: "#FF6EB4",
                  icon: Palette,
                },
                {
                  name: "Sport",
                  slug: "sport",
                  desc: "Physical education and teamwork.",
                  color: "#48CAE4",
                  icon: Trophy,
                },
              ].map((subject, i) => (
                <Link
                  key={i}
                  href={`/subjects/${subject.slug}`}
                  className="block"
                >
                  <motion.div
                    variants={fadeUpVariant}
                    className="bg-bg-card rounded-3xl p-8 relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer overflow-hidden border border-border-card"
                  >
                    {/* Hover pattern background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(#1E2D5A_1px,transparent_1px)] bg-size-[16px_16px]"></div>

                    <div
                      className="absolute top-0 left-0 w-full h-2 transition-all duration-300 group-hover:h-36 right-0"
                      style={{ backgroundColor: subject.color }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-10 mt-2">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white text-primary shadow-sm border border-black/5 group-hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                          <div
                            className="absolute right-0 top-0 w-full h-full opacity-20"
                            style={{ backgroundColor: subject.color }}
                          ></div>
                          <subject.icon size={26} className="relative z-10" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight size={16} className="text-primary" />
                        </div>
                      </div>
                      <h3 className="font-heading font-extrabold text-[26px] text-primary mb-2 group-hover:text-white transition-colors duration-300">
                        {subject.name}
                      </h3>
                      <p className="text-[15px] text-text-secondary group-hover:text-primary transition-colors duration-300 font-medium">
                        {subject.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="mt-16 flex flex-col md:flex-row gap-4 justify-center"
            >
              {["Subjects", "Info & Prices", "Register"].map((btn, i) => (
                <button
                  key={i}
                  className="w-full md:w-auto px-10 py-5 rounded-full bg-primary text-white font-semibold text-[16px] hover:bg-accent-teal transition-all duration-300 shadow-lg text-center"
                >
                  {btn}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 4: HOW IT WORKS --- */}
        <section className="bg-bg-alt py-24 border-y border-border-card">
          <div className="max-w-360 mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-20"
            >
              <h2 className="font-heading font-semibold text-[28px] lg:text-[44px] text-primary">
                Getting Started is Simple.
              </h2>
            </motion.div>

            <div className="relative">
              {/* Drawing Path Line (Duolingo Style) */}
              <div className="hidden lg:block absolute top-10 left-[15%] w-[70%] h-3 bg-white shadow-inner rounded-full overflow-hidden z-0">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-accent-yellow relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white/40 to-transparent"></div>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10"
              >
                {[
                  {
                    step: "1",
                    title: "Register",
                    desc: "Fill in our quick form online or on-site.",
                    color: "bg-accent-teal",
                    offset: "lg:-translate-y-8",
                  },
                  {
                    step: "2",
                    title: "Meet Your Tutor",
                    desc: "We match your child with the right teacher.",
                    color: "bg-accent-coral",
                    offset: "lg:translate-y-8",
                  },
                  {
                    step: "3",
                    title: "Start Learning",
                    desc: "Attend sessions, track progress, and watch them thrive.",
                    color: "bg-accent-lavender",
                    offset: "lg:-translate-y-4",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpVariant}
                    className={`flex flex-col items-center text-center relative group ${item.offset} transition-transform duration-500`}
                  >
                    <div className="w-24 h-24 bg-white rounded-[28px] rotate-3 flex items-center justify-center border-4 border-bg-alt shadow-xl text-primary mb-8 relative z-10 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-300 group-hover:shadow-2xl">
                      <div
                        className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center font-bold shadow-md border-2 border-white`}
                      >
                        {item.step}
                      </div>
                      <span className="font-heading font-extrabold text-[40px] text-primary/80">
                        0{item.step}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-[24px] text-primary mb-3 relative z-10 px-6 py-2 bg-white rounded-full shadow-[0_4px_0_rgba(30,45,90,0.05)] border border-primary/5">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-text-secondary max-w-65 relative z-10 mt-2 font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: REGISTRATION --- */}
        <section id="register" className="py-24 bg-bg-white">
          <div className="max-w-360 mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="font-heading font-semibold text-[32px] lg:text-[44px] text-primary mb-4">
                Ready to Join?
              </h2>
              <p className="text-[17px] text-text-secondary mb-10">
                Register your child today — on-site or online. It takes less
                than 5 minutes.
              </p>

              {/* Tabs */}
              <div className="flex p-1 bg-bg-card rounded-xl mb-8 border border-border-card">
                <button className="flex-1 py-3 text-center text-[15px] font-semibold bg-accent-teal text-white rounded-lg shadow-sm">
                  On-Site Registration
                </button>
                <button className="flex-1 py-3 text-center text-[15px] font-semibold text-text-secondary hover:text-primary">
                  Online Registration
                </button>
              </div>

              {/* Form */}
              <form className="space-y-6 bg-white relative">
                {/* Form Progress indicator (decorative) */}
                <div className="absolute -left-8 top-0 bottom-0 w-0.5 bg-bg-card hidden md:block">
                  <div className="w-full h-1/3 bg-accent-teal rounded-full shadow-[0_0_8px_rgba(42,191,191,0.5)]"></div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <label className="text-[13px] uppercase tracking-wider font-bold text-text-secondary group-focus-within:text-accent-teal transition-colors">
                      Parent&apos;s Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-card hover:bg-bg-alt focus:bg-white focus:outline-none focus:border-accent-teal/30 focus:shadow-[0_4px_20px_rgba(42,191,191,0.1)] transition-all font-sans text-[16px]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[13px] uppercase tracking-wider font-bold text-text-secondary group-focus-within:text-accent-teal transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-card hover:bg-bg-alt focus:bg-white focus:outline-none focus:border-accent-teal/30 focus:shadow-[0_4px_20px_rgba(42,191,191,0.1)] transition-all font-sans text-[16px]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <label className="text-[13px] uppercase tracking-wider font-bold text-text-secondary group-focus-within:text-accent-teal transition-colors">
                      Child&apos;s Age
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-card hover:bg-bg-alt focus:bg-white focus:outline-none focus:border-accent-teal/30 focus:shadow-[0_4px_20px_rgba(42,191,191,0.1)] transition-all font-sans text-[16px]"
                      placeholder="e.g. 10"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[13px] uppercase tracking-wider font-bold text-text-secondary group-focus-within:text-accent-teal transition-colors">
                      Primary Subject Interest
                    </label>
                    <div className="relative">
                      <select className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-card hover:bg-bg-alt focus:bg-white focus:outline-none focus:border-accent-teal/30 focus:shadow-[0_4px_20px_rgba(42,191,191,0.1)] transition-all font-sans appearance-none text-text-secondary text-[16px]">
                        <option>Select a subject</option>
                        <option>Maths</option>
                        <option>Science</option>
                        <option>English</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[13px] uppercase tracking-wider font-bold text-text-secondary group-focus-within:text-accent-teal transition-colors">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-transparent bg-bg-card hover:bg-bg-alt focus:bg-white focus:outline-none focus:border-accent-teal/30 focus:shadow-[0_4px_20px_rgba(42,191,191,0.1)] transition-all font-sans resize-none text-[16px]"
                    placeholder="Any specific needs or goals..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-linear-to-r from-accent-teal to-[#1EB5B5] text-white rounded-2xl font-extrabold text-[18px] hover:shadow-[0_8px_30px_rgba(42,191,191,0.4)] hover:-translate-y-1 transition-all duration-300 group mt-4 flex justify-center items-center gap-2"
                >
                  Submit Registration{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </button>
              </form>
            </motion.div>

            {/* Right: FAQ & Apply */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex flex-col gap-8"
            >
              {/* FAQ Card */}
              <div className="bg-primary rounded-4xl p-8 lg:p-10 shadow-2xl shadow-primary/20 text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <h3 className="font-heading font-bold text-[28px] mb-8 relative z-10">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 relative z-10">
                  {[
                    {
                      q: "What age groups do you teach?",
                      a: "We teach children from age 5 up to 16 (GCSE level), supporting them all the way through their crucial exams.",
                    },
                    {
                      q: "How are the classes structured?",
                      a: "Classes are kept incredibly small to ensure individual attention and are fully structured around the modern National Curriculum.",
                    },
                    {
                      q: "Do you offer sibling discounts?",
                      a: "Absolutely! We offer a 10% discount for every additional child enrolled to help support large families.",
                    },
                  ].map((faq, i) => (
                    <details
                      key={i}
                      className="group border-b border-light-bg/10 pb-4 last:border-0 last:pb-0 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="w-full text-left flex items-center justify-between font-semibold text-[16px] py-2 cursor-pointer hover:text-accent-yellow transition-colors list-none">
                        {faq.q}
                        <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-90 transition-transform duration-300">
                          <ChevronRight
                            size={18}
                            className="text-accent-teal group-open:text-accent-yellow transition-colors"
                          />
                        </span>
                      </summary>
                      <div className="pt-3 pb-2 text-[15px] text-white/70 leading-relaxed pl-4 border-l-2 border-accent-teal ml-2 mt-1">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Vacancies Card */}
              <div
                id="vacancies"
                className="bg-accent-coral rounded-4xl p-8 lg:p-10 shadow-2xl shadow-accent-coral/20 text-white relative overflow-hidden group transition-transform hover:-translate-y-2 duration-500"
              >
                <div className="absolute -right-10 -top-10 text-white/10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <BookOpen size={160} />
                </div>
                {/* Dotted overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, white 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full py-1.5 px-4 mb-6 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse shadow-[0_0_8px_#ffd166]"></span>
                    <span className="text-[11px] font-bold tracking-wide uppercase">
                      We&apos;re Hiring
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[32px] mb-3 leading-tight">
                    Want to Teach?
                  </h3>
                  <p className="text-white/90 text-[16px] mb-8 max-w-70 font-medium">
                    Join our team of passionate educators inspiring the next
                    generation.
                  </p>
                  <button className="px-8 py-4 bg-white text-accent-coral font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-primary/10 flex items-center gap-3 group/btn">
                    Apply Now
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 6: TESTIMONIALS --- */}
        <section className="bg-bg-alt py-24">
          <div className="max-w-360 mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-semibold text-[28px] lg:text-[44px] text-primary">
                What Parents Are Saying.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  quote:
                    "The difference in my child's confidence in Maths is unbelievable. The tutors are simply brilliant.",
                  name: "Sarah J.",
                  year: "Parent of Year 6 student",
                  image:
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
                },
                {
                  quote:
                    "A warm, welcoming environment. My son actually looks forward to his weekend Science classes!",
                  name: "Mohammed A.",
                  year: "Parent of Year 8 student",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                },
                {
                  quote:
                    "Highly structured and highly effective. They prepared my daughter perfectly for her GCSEs.",
                  name: "Emma T.",
                  year: "Parent of Year 11 student",
                  image:
                    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200&auto=format&fit=crop",
                },
              ].map((test, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="bg-white p-8 rounded-4xl shadow-sm border border-border-card relative hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/5 rounded-bl-[100px] pointer-events-none z-0"></div>
                  <Quote
                    size={40}
                    className="text-accent-teal/10 absolute top-8 right-8 group-hover:scale-110 group-hover:text-accent-teal/20 transition-all duration-500"
                  />

                  <div className="relative z-10 flex gap-1 text-accent-yellow mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="relative z-10 text-primary text-[17px] leading-[1.8] mb-10 font-medium">
                    &quot;{test.quote}&quot;
                  </p>

                  <div className="relative z-10 flex items-center gap-4 border-t border-border-card pt-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-bg-alt border-2 border-white shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[18px] text-primary">
                        {test.name}
                      </p>
                      <p className="text-[13px] font-medium text-text-secondary uppercase tracking-wide">
                        {test.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 7: CTA BANNER --- */}
        <section className="relative py-24 lg:py-32 overflow-hidden mx-6 lg:mx-12 mb-20 rounded-[48px] shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-primary z-0 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-accent-teal/40 via-primary to-accent-coral/20 blur-3xl opacity-60 mix-blend-screen -translate-y-1/4 translate-x-1/4"></div>

            {/* Dotted overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, white 2px, transparent 2px)",
                backgroundSize: "32px 32px",
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full py-2 px-6 mb-8 border border-white/20 shadow-xl"
            >
              <span className="text-[13px] font-bold tracking-widest uppercase">
                Start Your Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-extrabold text-[40px] lg:text-[64px] mb-8 leading-[1.05] tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-white/70"
            >
              Give Your Child the <br className="hidden md:block" /> Education
              They Deserve.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] lg:text-[20px] text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join The Tuition Club today and unlock their true potential.
              High-quality teaching, proven results, and a curriculum designed
              for success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-4 flex-col sm:flex-row items-center"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-accent-teal text-white rounded-full font-extrabold text-[18px] hover:bg-accent-coral transition-colors shadow-[0_8px_30px_rgba(42,191,191,0.3)] hover:-translate-y-1 duration-300 flex items-center justify-center gap-3 group">
                Register Now
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-[18px] hover:bg-white hover:text-primary transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-primary text-white pt-24 pb-8 relative overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-teal to-transparent opacity-50 shadow-[0_0_20px_rgba(42,191,191,0.8)]"></div>

        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-accent-teal to-accent-yellow flex items-center justify-center font-heading font-extrabold text-white text-sm">
                  TC
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">
                  The Tuition Club
                </span>
              </div>
              <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                Where every child thrives. The UK&apos;s most trusted
                supplemental education provider for ages 5–16.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-[18px] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-accent-teal transition-colors text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-[18px] mb-6">Subjects</h4>
              <ul className="grid grid-cols-2 gap-3">
                {SUBJECT_LINKS.map((subject) => (
                  <li key={subject.slug}>
                    <Link
                      href={`/subjects/${subject.slug}`}
                      className="text-white/60 hover:text-accent-yellow transition-colors text-[15px]"
                    >
                      {subject.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold text-[18px] mb-6">Contact</h4>
              <ul className="space-y-4 text-white/60 text-[15px]">
                <li>
                  123 Education Lane
                  <br />
                  London, LK1 2AB
                </li>
                <li>
                  <a
                    href="mailto:hello@tuitionclub.uk"
                    className="hover:text-white transition-colors"
                  >
                    hello@tuitionclub.uk
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0800123456"
                    className="hover:text-white transition-colors"
                  >
                    0800 123 456
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-[14px]">
              &copy; {new Date().getFullYear()} The Tuition Club. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-teal transition-colors text-white/60 hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-teal transition-colors text-white/60 hover:text-white"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
