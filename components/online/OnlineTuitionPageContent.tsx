"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Globe,
  Headphones,
  Laptop,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const processSteps = [
  {
    title: "Book Your Session",
    description:
      "Choose a weekly plan and preferred times. We match your child with a specialist tutor.",
    icon: CalendarClock,
  },
  {
    title: "Join Live Lessons",
    description:
      "Students attend interactive sessions with whiteboard teaching, guided practice, and feedback.",
    icon: Video,
  },
  {
    title: "Track Progress",
    description:
      "Parents receive regular updates with clear goals, strengths, and next steps for growth.",
    icon: ShieldCheck,
  },
];

const learningTools = [
  {
    title: "Real-Time Classrooms",
    description:
      "Live video, collaborative whiteboards, and guided walkthroughs in every lesson.",
    icon: Laptop,
  },
  {
    title: "Instant Homework Help",
    description:
      "Fast support between lessons so students do not lose momentum on difficult topics.",
    icon: MessageSquare,
  },
  {
    title: "Focused Audio Support",
    description:
      "Noise-managed sessions and clear communication for better concentration and confidence.",
    icon: Headphones,
  },
  {
    title: "Global Access",
    description:
      "Learn from home, while traveling, or abroad with UK curriculum-aligned tutoring.",
    icon: Globe,
  },
];

const packages = [
  {
    name: "Starter",
    price: "GBP 59",
    detail: "Per week",
    highlights: ["2 live lessons", "Weekly progress note", "Homework check-in"],
    featured: false,
  },
  {
    name: "Momentum",
    price: "GBP 89",
    detail: "Per week",
    highlights: [
      "4 live lessons",
      "Parent update call",
      "Personalized revision plan",
    ],
    featured: true,
  },
  {
    name: "Exam Focus",
    price: "GBP 119",
    detail: "Per week",
    highlights: [
      "6 live lessons",
      "Mock paper feedback",
      "Priority tutor support",
    ],
    featured: false,
  },
];

export default function OnlineTuitionPageContent() {
  return (
    <div className="pt-32 bg-bg-white text-text-primary overflow-x-hidden">
      <section className="relative px-6 lg:px-10 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-104 h-104 bg-accent-teal/15 rounded-full blur-[110px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-xs tracking-widest uppercase font-semibold"
            >
              <Sparkles size={14} />
              Online Tuition
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-heading font-extrabold text-4xl md:text-6xl leading-[1.05] text-primary"
            >
              Structured Online Lessons.
              <span className="block text-accent-teal">
                Flexible For Families.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-text-secondary"
            >
              From KS1 foundations to GCSE preparation, our live online classes
              help students stay consistent, confident, and exam ready.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/info-and-prices"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-accent-teal text-white font-semibold hover:bg-accent-coral transition-colors"
              >
                View Pricing
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#register"
                className="inline-flex items-center rounded-full px-7 py-3.5 border-2 border-primary/20 text-primary font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Register Interest
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-4xl border border-primary/10 bg-white shadow-[0_25px_60px_rgba(30,45,90,0.16)] p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-primary/70 font-semibold">
              Weekly Snapshot
            </p>
            <div className="mt-5 space-y-4">
              {[
                "Monday: Maths live lesson (60 mins)",
                "Wednesday: English writing workshop (60 mins)",
                "Thursday: Science concept clinic (45 mins)",
                "Friday: Quiz review + parent summary",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-bg-alt border border-primary/10 px-4 py-3 flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent-teal shrink-0"
                  />
                  <p className="text-sm text-primary/90">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-5xl font-extrabold"
            >
              How Online Tuition Works
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-white/80 text-lg">
              A clear, parent-friendly process that keeps teaching quality high
              and student progress visible every week.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-7"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-accent-yellow">
                    <Icon size={23} />
                  </div>
                  <p className="mt-5 text-xs tracking-[0.2em] uppercase text-white/65">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-heading font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary leading-[1.1]">
                Built For Results,
                <span className="block text-accent-coral">
                  Not Just Screen Time.
                </span>
              </h2>
              <p className="mt-5 text-text-secondary text-lg leading-relaxed">
                Every online session is planned around outcomes. Students stay
                engaged with interactive teaching, and parents stay informed
                without chasing updates.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {learningTools.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-2xl bg-white border border-primary/10 p-6 shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 font-heading text-xl text-primary font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-5xl text-primary font-extrabold"
            >
              Choose A Learning Package
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Start with a plan that matches your child&apos;s pace, then scale
              up when assessment season or exams approach.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {packages.map((plan) => (
              <motion.article
                key={plan.name}
                variants={fadeUp}
                className={`rounded-3xl p-7 border transition-transform hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-primary text-white border-primary shadow-xl"
                    : "bg-bg-alt text-primary border-primary/10"
                }`}
              >
                <p
                  className={`text-sm uppercase tracking-[0.18em] ${
                    plan.featured ? "text-accent-yellow" : "text-primary/70"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="mt-4 text-4xl font-heading font-extrabold">
                  {plan.price}
                </p>
                <p
                  className={
                    plan.featured ? "text-white/75" : "text-primary/70"
                  }
                >
                  {plan.detail}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className={
                          plan.featured
                            ? "text-accent-yellow"
                            : "text-accent-teal"
                        }
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/info-and-prices"
                  className={`mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 font-semibold transition-colors ${
                    plan.featured
                      ? "bg-accent-yellow text-primary hover:bg-accent-yellow/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Compare Plans
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-linear-to-br from-primary to-[#223672] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight">
            Ready To Start Online Tuition This Week?
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Tell us your child&apos;s year group, goals, and preferred schedule.
            We will recommend the best plan and tutor fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/#register"
              className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-3.5 font-semibold hover:bg-accent-coral transition-colors"
            >
              Register Your Child
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/subjects/maths"
              className="inline-flex items-center rounded-full border border-white/35 px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Subjects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
