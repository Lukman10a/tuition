"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  BookOpen,
  Users,
  Award,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function InfoAndPricesPage() {
  const [expandedGCSE, setExpandedGCSE] = useState(false);
  const [selectedTab, setSelectedTab] = useState<
    "primary" | "secondary" | "gcse"
  >("primary");

  const pricingData = {
    primary: [
      {
        subject: "Maths",
        times: 3,
        ks1ks2: "£16.50",
        ks3: "£19.50",
        gcse: "£21",
      },
      {
        subject: "English",
        times: 3,
        ks1ks2: "£16.50",
        ks3: "£19.50",
        gcse: "£21",
      },
      {
        subject: "Arabic",
        times: 2,
        ks1ks2: "£16.50",
        ks3: "£19.50",
        gcse: "£18",
      },
      {
        subject: "Science",
        times: 2,
        ks1ks2: "£16",
        ks3: "£16",
        gcse: "£21 (3x/week)",
      },
      { subject: "Computing", times: 1, ks1ks2: "£9", ks3: "£10", gcse: "N/A" },
      { subject: "Geography", times: 1, ks1ks2: "£9", ks3: "£10", gcse: "N/A" },
      { subject: "History", times: 1, ks1ks2: "£9", ks3: "£10", gcse: "N/A" },
      { subject: "Art", times: 1, ks1ks2: "£9", ks3: "£10", gcse: "N/A" },
      { subject: "Sport", times: 1, ks1ks2: "£9", ks3: "£10", gcse: "N/A" },
      {
        subject: "All Subjects (including all books)",
        times: 15,
        ks1ks2: "£56 *",
        ks3: "£66 *",
        gcse: "£68 *",
        highlight: true,
      },
    ],
    gcse: [
      { subject: "Maths", times: 2, price: "£15" },
      { subject: "English", times: 2, price: "£15" },
      { subject: "Arabic", times: 2, price: "£15" },
      { subject: "Dual Award Science", times: 2, price: "£18" },
      { subject: "Psychology", times: 1, price: "£15" },
      {
        subject: "All Subjects + Study Session",
        times: "15 Periods",
        price: "£64 *",
        highlight: true,
      },
    ],
  };

  const features = [
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Classes from 9am to 4pm, tailored to your schedule",
      color: "from-accent-teal",
    },
    {
      icon: BookOpen,
      title: "Expert Tutoring",
      description: "Professional tutors across all key subjects",
      color: "from-accent-coral",
    },
    {
      icon: Users,
      title: "Flexible Classes",
      description: "1-to-1 private lessons or small group sessions",
      color: "from-accent-yellow",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Supporting students from KS1 through GCSE",
      color: "from-accent-lavender",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-text-primary">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="relative pt-40 pb-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-lavender/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary mb-6 leading-tight">
              Information & <span className="text-accent-teal">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The Tuition Club covers a comprehensive array of subjects with
              flexible timings to suit your needs. We offer affordable rates for
              families seeking quality home learning support.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="p-6 rounded-2xl bg-white border border-primary/10 hover:border-accent-teal/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} to-accent-teal/50 flex items-center justify-center text-white mb-4`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* On Site Information */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-teal/10 text-accent-teal font-semibold text-sm mb-4">
              On Site Services
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
              On-Site Learning Experience
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
              Our physical learning center provides a dedicated,
              distraction-free environment where students can focus on their
              studies with expert tutors, access to comprehensive resources, and
              the opportunity to learn alongside peers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Flexible Scheduling",
                description:
                  "Classes run throughout the day from 9am until 4pm, with private lessons available for 30 or 60 minutes.",
                icon: "🕐",
              },
              {
                title: "Personalized Learning",
                description:
                  "Choose between 1-to-1 private lessons or small group sessions tailored to your child's pace and style.",
                icon: "👥",
              },
              {
                title: "Group Classes",
                description:
                  "50-minute group sessions with up to 5 subjects taught per day during our opening hours.",
                icon: "📚",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-bg-alt to-bg-card border border-primary/10 hover:border-accent-teal/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-teal/10 text-accent-teal font-semibold text-sm mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
              Pricing Plans
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-lg text-text-secondary max-w-2xl">
                Our flexible pricing varies based on the number of subjects and
                classes. There is a £10 registration fee per child.{" "}
                <strong>Prices include all books needed</strong> for the full
                subject week.
              </p>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => setSelectedTab("primary")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedTab === "primary"
                      ? "bg-accent-teal text-white shadow-lg"
                      : "bg-white text-primary border border-primary/20 hover:border-accent-teal"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Primary
                </motion.button>
                <motion.button
                  onClick={() => setSelectedTab("gcse")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedTab === "gcse"
                      ? "bg-accent-teal text-white shadow-lg"
                      : "bg-white text-primary border border-primary/20 hover:border-accent-teal"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GCSE
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-primary/10 bg-white shadow-lg"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-primary/80 text-white">
                  <th className="px-6 py-4 text-left font-heading font-bold">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-center font-heading font-bold">
                    Times Per Week
                  </th>
                  {selectedTab === "primary" && (
                    <>
                      <th className="px-6 py-4 text-center font-heading font-bold">
                        KS1 & KS2
                      </th>
                      <th className="px-6 py-4 text-center font-heading font-bold">
                        KS3
                      </th>
                      <th className="px-6 py-4 text-center font-heading font-bold">
                        GCSE
                      </th>
                    </>
                  )}
                  {selectedTab === "gcse" && (
                    <th className="px-6 py-4 text-center font-heading font-bold">
                      Price
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {(selectedTab === "primary"
                  ? pricingData.primary
                  : pricingData.gcse
                ).map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`border-t border-primary/10 hover:bg-bg-alt transition-colors ${
                      row.highlight ? "bg-accent-teal/5" : ""
                    }`}
                  >
                    <td
                      className={`px-6 py-4 font-semibold ${
                        row.highlight
                          ? "text-primary font-heading font-extrabold"
                          : "text-text-secondary"
                      }`}
                    >
                      {row.subject}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.highlight
                          ? "text-primary font-heading font-extrabold"
                          : "text-text-secondary"
                      }`}
                    >
                      {row.times}
                    </td>
                    {selectedTab === "primary" && (
                      <>
                        <td
                          className={`px-6 py-4 text-center font-semibold ${
                            row.highlight
                              ? "text-primary font-heading font-extrabold"
                              : "text-accent-teal"
                          }`}
                        >
                          {row.ks1ks2}
                        </td>
                        <td
                          className={`px-6 py-4 text-center font-semibold ${
                            row.highlight
                              ? "text-primary font-heading font-extrabold"
                              : "text-accent-teal"
                          }`}
                        >
                          {row.ks3}
                        </td>
                        <td
                          className={`px-6 py-4 text-center font-semibold ${
                            row.highlight
                              ? "text-primary font-heading font-extrabold"
                              : "text-accent-teal"
                          }`}
                        >
                          {row.gcse}
                        </td>
                      </>
                    )}
                    {selectedTab === "gcse" && (
                      <td
                        className={`px-6 py-4 text-center font-semibold ${
                          row.highlight
                            ? "text-primary font-heading font-extrabold"
                            : "text-accent-teal"
                        }`}
                      >
                        {(row as any).price}
                      </td>
                    )}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-text-secondary italic"
          >
            * Price includes all books needed
          </motion.p>
        </div>
      </motion.section>

      {/* Discounts Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-coral/10 text-accent-coral font-semibold text-sm mb-4">
              Save More
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
              Special Discounts Available
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Multi-Subject Discount",
                description:
                  "Get 20% off when you choose two or more subjects for your child.",
                example:
                  "Maths & English (3x/week each) = £30 - 20% = £24 per week (saving £6)",
                color: "accent-coral",
              },
              {
                title: "Flexible Payment Options",
                description:
                  "We offer various payment plans to suit your budget and circumstances.",
                example: "Contact us for personalized payment arrangements.",
                color: "accent-teal",
              },
              {
                title: "Sibling Discounts",
                description:
                  "Additional discounts available for families with multiple children enrolled.",
                example:
                  "Ask about our family package rates when registering siblings.",
                color: "accent-yellow",
              },
            ].map((discount, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className={`p-8 rounded-2xl bg-gradient-to-r from-${discount.color}/10 to-transparent border border-${discount.color}/30 hover:border-${discount.color}/60 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${discount.color} text-white flex items-center justify-center flex-shrink-0 text-xl font-bold`}
                  >
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-heading font-bold text-primary mb-2`}
                    >
                      {discount.title}
                    </h3>
                    <p className="text-text-secondary mb-3">
                      {discount.description}
                    </p>
                    <p className={`font-semibold text-${discount.color}`}>
                      {discount.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Online Tuition Features */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Looking for Online?
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Not in Manchester but still want support? We offer private and
              group online classes too. See information below.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                title: "Full Time Classes Online",
                description:
                  "Comprehensive online learning programs that cover all key subjects with interactive live lessons.",
                icon: "💻",
              },
              {
                title: "Easy Access Across Devices",
                description:
                  "Access lessons on any device with our intuitive, simple-to-use platform and apps.",
                icon: "📱",
              },
              {
                title: "Complete Support System",
                description:
                  "Multiple subjects, live lessons, personalized support, and homework guidance included.",
                icon: "🎓",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/online-tuition"
              className="inline-block px-8 py-4 rounded-full bg-accent-teal text-primary font-heading font-bold hover:bg-accent-teal/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Learn More About Online Classes →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Join hundreds of families who trust The Tuition Club for their
              learning needs. Register now to secure your place!
            </p>
            <Link
              href="#register"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent-teal to-accent-teal/80 text-white font-heading font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Register Today
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
