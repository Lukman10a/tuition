"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  Camera,
  FlaskConical,
  Globe,
  Landmark,
  Lightbulb,
  Megaphone,
  MonitorPlay,
  Palette,
  Rocket,
  Users,
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

const projectItems = [
  {
    title: "Smart Weather Station",
    level: "Year 8 Computing + Science",
    summary:
      "Students built a sensor dashboard to track temperature and humidity, then presented trends with clear data storytelling.",
    icon: FlaskConical,
    accent: "bg-accent-teal/12 text-accent-teal",
  },
  {
    title: "Mini Business Market",
    level: "Year 7 Maths + English",
    summary:
      "Learners created product ideas, costed materials, and pitched their products with persuasive writing and public speaking.",
    icon: Lightbulb,
    accent: "bg-accent-yellow/20 text-primary",
  },
  {
    title: "Global Culture Podcast",
    level: "History + Geography",
    summary:
      "Teams researched major world regions and published short podcast episodes to compare traditions, geography, and historical events.",
    icon: Globe,
    accent: "bg-accent-coral/15 text-accent-coral",
  },
  {
    title: "Creative Futures Wall",
    level: "Art + Career Skills",
    summary:
      "A collaborative visual project where students designed pieces around future careers and the skills needed to get there.",
    icon: Palette,
    accent: "bg-accent-lavender/18 text-accent-lavender",
  },
];

const affairsItems = [
  {
    title: "Parent Progress Evenings",
    date: "Every Half Term",
    detail:
      "Structured meetings to review progress reports, discuss goals, and align home support with class priorities.",
    icon: Users,
  },
  {
    title: "Assessment Preparation Week",
    date: "Monthly",
    detail:
      "Focused revision strategy sessions, timed practice, and exam-technique coaching across core subjects.",
    icon: BookOpenCheck,
  },
  {
    title: "School Community Announcements",
    date: "Weekly Bulletin",
    detail:
      "Key updates on timetables, workshop dates, enrolment windows, and program changes for families.",
    icon: Megaphone,
  },
  {
    title: "Achievement Awards",
    date: "End Of Term",
    detail:
      "Celebrating effort, growth, attendance, and outstanding project outcomes in a student recognition event.",
    icon: Award,
  },
];

const onlineProjectItems = [
  {
    title: "Live Revision Dashboard",
    subtitle: "Built by Year 9 Computing Students",
    description:
      "Students designed a revision tracker with color-coded topics, due dates, and progress analytics for weekly goals.",
    image: "/showcase/online-project-dashboard.svg",
    icon: MonitorPlay,
  },
  {
    title: "Remote Robotics Control Board",
    subtitle: "Built by KS3 STEM Club",
    description:
      "A web-based control panel prototype that simulated movement commands, safety checks, and project logs.",
    image: "/showcase/online-project-robotics.svg",
    icon: Rocket,
  },
];

export default function ShowcasePageContent() {
  return (
    <div className="pt-32 bg-bg-white text-text-primary overflow-x-hidden">
      <section className="relative pb-20 px-6 lg:px-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-110 h-110 bg-accent-teal/14 rounded-full blur-[120px]" />
          <div className="absolute -bottom-8 -left-8 w-90 h-90 bg-accent-yellow/25 rounded-full blur-[105px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs tracking-[0.15em] uppercase font-semibold text-white"
            >
              <Camera size={14} />
              Student Showcase
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-heading font-extrabold text-4xl md:text-6xl leading-[1.05] text-primary"
            >
              Work They Build.
              <span className="block text-accent-teal">
                Moments That Matter.
              </span>
              <span className="block">No Stock Cliches.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl"
            >
              A clean visual record of student engagement, online innovation,
              and important school affairs, designed to show growth without
              displaying student faces.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#student-projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-3.5 text-white font-semibold hover:bg-accent-coral transition-colors"
              >
                View Student Work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#online-projects"
                className="inline-flex items-center rounded-full border-2 border-primary/20 px-7 py-3.5 text-primary font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
              >
                See Online Projects
              </Link>
            </motion.div>
          </div>

          <motion.aside
            variants={fadeUp}
            className="rounded-4xl border border-primary/10 bg-white shadow-[0_28px_64px_rgba(30,45,90,0.16)] p-5 md:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2 rounded-3xl overflow-hidden border border-primary/10">
                <Image
                  src="/showcase/hero-collaboration.svg"
                  alt="Illustration of students collaborating around digital project work without visible faces"
                  width={1200}
                  height={760}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-primary/10">
                <Image
                  src="/showcase/hero-online-lab.svg"
                  alt="Illustration of students participating in online lab activities without visible faces"
                  width={1200}
                  height={760}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-3xl bg-bg-alt border border-primary/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-primary/65 font-semibold">
                  This Term Highlights
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    "18 student-led project presentations",
                    "4 parent engagement events completed",
                    "92% homework consistency across core classes",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Landmark
                        size={16}
                        className="text-accent-teal mt-0.5 shrink-0"
                      />
                      <p className="text-sm text-primary/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Face-safe visuals only",
                "Updated weekly by staff",
                "Project-first storytelling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-bg-alt border border-primary/10 px-4 py-3"
                >
                  <Landmark
                    size={18}
                    className="text-accent-teal mt-0.5 shrink-0"
                  />
                  <p className="text-sm text-primary/90">{item}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </section>

      <section id="student-projects" className="py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-3xl md:text-5xl text-primary"
            >
              Projects Built By Students
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-text-secondary"
            >
              A sample of cross-subject projects where students combine
              curiosity, academic skills, and confident communication.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projectItems.map((project) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-primary/10 bg-white p-7 hover:-translate-y-1 transition-transform shadow-sm"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.accent}`}
                  >
                    <Icon size={23} />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-primary/65 font-semibold">
                    {project.level}
                  </p>
                  <h3 className="mt-2 text-2xl font-heading font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {project.summary}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="online-projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-extrabold text-3xl md:text-5xl text-primary"
            >
              Online Projects Built By Students
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-text-secondary"
            >
              These projects were designed and tested in remote sessions,
              combining coding, planning, and clear communication.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {onlineProjectItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-primary/10 bg-bg-alt overflow-hidden shadow-sm"
                >
                  <div className="border-b border-primary/10">
                    <Image
                      src={item.image}
                      alt={`Illustration for ${item.title} project without student faces`}
                      width={1000}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-white border border-primary/10 flex items-center justify-center text-accent-teal">
                      <Icon size={22} />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-primary/65 font-semibold">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-heading font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
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
              className="font-heading font-extrabold text-3xl md:text-5xl"
            >
              Important School Affairs
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-white/80 text-lg">
              Key academic and community events that keep families informed and
              students supported.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={stagger}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {affairsItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/20 bg-white/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/14 flex items-center justify-center text-accent-yellow shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                        {item.date}
                      </p>
                      <h3 className="mt-1 text-2xl font-heading font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-white/80 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 lg:px-10 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-teal/10 text-accent-teal px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold">
            <CalendarDays size={14} />
            Upcoming Showcase Week
          </div>
          <h2 className="mt-5 font-heading text-3xl md:text-5xl font-extrabold text-primary leading-tight">
            Want Your Child Featured In The Next Showcase?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Enrol now and give your child opportunities to present projects,
            build confidence, and be recognized for progress.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/info-and-prices"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-white font-semibold hover:bg-primary/92 transition-colors"
            >
              View Enrollment Options
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/subjects/science"
              className="inline-flex items-center rounded-full border-2 border-primary/20 px-7 py-3.5 text-primary font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
            >
              Browse Subjects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
