import Link from "next/link";
import { notFound } from "next/navigation";

type SubjectRecord = {
  name: string;
  heroImage: string;
  intro: string[];
  syllabusIntro: string[];
  ctaLine?: string;
  resources?: string[];
  table?: Array<{
    topic: string;
    year1to2: string;
    year3to4: string;
  }>;
};

const SUBJECTS: Record<string, SubjectRecord> = {
  arabic: {
    name: "Arabic",
    heroImage:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Arabic is a wonderful language, spoken by millions of people around the world. Recent research has rated Arabic second to only Spanish, as the most important language for workers of the future. Our comprehensive program is designed to tutor the children and help them learn the language more fluently. We also aim to take them up to GCSE level and beyond, so they can read, speak and write this beautiful and poetic language.",
    ],
    syllabusIntro: [
      "Our Arabic framework is based on the Iqra' Arabic Reader series, which is a specially designed program for children whose first language is not Arabic. The course is made up of six levels, and the aim of the program is to teach children Arabic as a second language over an eight year period of study. There is a great emphasis on comprehension and vocabulary, as well as a wide range of grammar and syntax being covered in detail. Each level is made up of a textbook and a workbook. The workbooks have been designed to enhance and reinforce what students learn from the textbooks, as well as providing them with challenging and fun activities and exercises.",
      "See below for a preview of some of the levelled Iqra' Arabic Reader textbooks and workbooks:",
    ],
    resources: [
      "Iqra' Arabic Reader : Level 1 Textbook",
      "Iqra' Arabic Reader : Level 1 Workbook",
      "Iqra' Arabic Reader : Level 2 Textbook",
      "Iqra' Arabic Reader : Level 2 Workbook",
      "Iqra' Arabic Reader : Level 3 Textbook",
      "Iqra' Arabic Reader : Level 3 Workbook",
      "Iqra' Arabic Reader : Level 4 Textbook",
      "Iqra' Arabic Reader : Level 4 Workbook",
      "Iqra' Arabic Reader : Level 6 Textbook",
    ],
    ctaLine:
      "Interested? Register today for more information and see what we can do for you.",
  },
  computing: {
    name: "Computing",
    heroImage:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "What is computing? Is it knowing just how to switch a computer on? Send an Email and browse the web? We believe computing can be that much more for our kids. Computing can be creative and fun. Imagine if they were able to actually build that computer that they switch on? Or perhaps program it, and install software properly. Instead of just surfing the web, how about design the actual webpages themselves. Our computing tuition is designed to instil that creative and exploratory mindset, to help our students turn it from a dull subject into a fun and rewarding past time and more!",
    ],
    syllabusIntro: [
      "Our frameworks for KS1, 2 and 3 follow the How to Code series of books by Max Wainewright, which introduces the basic concepts of coding and programming to young students. Students are able to gain invaluable skills from this series, which covers web design, Scratch, Logo and Python.",
      "Within Book 1 students are taught how to use Scratch and Logo to draw on the screen, and keyboard control is introduced by the Scratch content. Other topics that are covered include giving the computer instructions and solving problems. Book 2 uses variables to keep score and conveys to students how to add sound effects, whilst also looking at loops in Scratch and Logo. The focus of book 3 is on making decisions on what a program should do, through the use of conditional statements (selection). Students are introduced to Python, which within its content includes randomisation, loops and graphics. Lastly, book 4 covers web design, in particular javascript and HTML.",
      "At the Tuition we aim to support home schooling parents in implementing the Two Year Key Stage 3 Project, which gives students the option to complete the three year syllabus over a two year period. However, the implementation of this two year scheme of work is dependant on a child's ability.",
    ],
    ctaLine:
      "Interested? Register today for more information and see what we can do for you.",
    table: [
      {
        topic: "1",
        year1to2: "Introduction on how to code",
        year3to4: "Loops",
      },
      {
        topic: "2",
        year1to2: "Learning how to code using LOGO",
        year3to4: "Patterns with loops",
      },
      {
        topic: "3",
        year1to2: "LOGO shapes",
        year3to4: "Using SCRATCH",
      },
      {
        topic: "4",
        year1to2: "Learning how to code using SCRATCH",
        year3to4: "Loops forever",
      },
      {
        topic: "5",
        year1to2: "Pen down",
        year3to4: "Using Repeat in SCRATCH",
      },
      {
        topic: "6",
        year1to2: "Press a key",
        year3to4: "Adding sound",
      },
      {
        topic: "7",
        year1to2: "Inputs and directions",
        year3to4: "Variables",
      },
      {
        topic: "8",
        year1to2: "Sketching with inputs",
        year3to4: "Counting Clicks",
      },
    ],
  },
};

const PLACEHOLDER_SUBJECTS: Record<string, SubjectRecord> = {
  art: {
    name: "Art",
    heroImage:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Our Art curriculum develops creativity, visual communication, and practical studio skills through drawing, color, composition, and mixed media exploration.",
    ],
    syllabusIntro: [
      "Students build strong foundations first, then move into themed projects with portfolio-ready outcomes.",
    ],
  },
  english: {
    name: "English",
    heroImage:
      "https://images.unsplash.com/photo-1455885666463-9b5bcc00d8ca?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "English lessons strengthen reading, writing, grammar, and confident communication for primary and secondary learners.",
    ],
    syllabusIntro: [
      "Each term blends comprehension, creative writing, and exam-style practice with focused feedback.",
    ],
  },
  geography: {
    name: "Geography",
    heroImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Geography connects physical landscapes, human environments, and global systems to help students understand the world around them.",
    ],
    syllabusIntro: [
      "Lessons include map skills, case studies, and problem-solving tasks aligned with curriculum goals.",
    ],
  },
  history: {
    name: "History",
    heroImage:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "History empowers students to investigate evidence, analyze change over time, and build informed perspectives on key events.",
    ],
    syllabusIntro: [
      "We combine narrative teaching, source analysis, and structured writing to improve both knowledge and exam outcomes.",
    ],
  },
  maths: {
    name: "Maths",
    heroImage:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Maths teaching focuses on fluency, confidence, and problem solving across arithmetic, algebra, geometry, and statistics.",
    ],
    syllabusIntro: [
      "Students practice core methods and then apply them in progressively challenging real-world and exam-style tasks.",
    ],
  },
  science: {
    name: "Science",
    heroImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Science lessons develop curiosity through practical reasoning in Biology, Chemistry, and Physics.",
    ],
    syllabusIntro: [
      "We reinforce key concepts with diagrams, investigations, and structured explanations that prepare students for assessments.",
    ],
  },
  sport: {
    name: "Sports",
    heroImage:
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "Sports sessions build fitness, teamwork, resilience, and confidence through structured activity and coaching.",
    ],
    syllabusIntro: [
      "Students improve technique and game awareness while developing healthy habits and positive discipline.",
    ],
  },
};

export function generateStaticParams() {
  return [
    "arabic",
    "computing",
    "art",
    "english",
    "geography",
    "history",
    "maths",
    "science",
    "sport",
  ].map((slug) => ({ slug }));
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = SUBJECTS[slug] || PLACEHOLDER_SUBJECTS[slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-white text-text-primary">
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 28, 59, 0.55), rgba(20, 28, 59, 0.55)), url('${content.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-360 mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-5 py-2 text-white/90 text-sm font-semibold mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Subjects</span>
          </div>
          <h1 className="font-heading text-white text-[44px] lg:text-[72px] font-extrabold tracking-tight leading-[1.05]">
            {content.name}
          </h1>
        </div>
      </section>

      <section className="py-18 lg:py-24">
        <div className="max-w-360 mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white border border-border-card rounded-4xl p-8 lg:p-10 shadow-sm">
              <h2 className="font-heading text-[40px] leading-none text-primary font-semibold mb-6">
                {content.name}
              </h2>
              <div className="space-y-5 text-[20px] leading-[1.7] text-text-secondary">
                {content.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border-card rounded-4xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-heading text-[40px] leading-none text-primary font-semibold mb-6">
                Syllabus
              </h3>
              <div className="space-y-6 text-[20px] leading-[1.7] text-text-secondary">
                {content.syllabusIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {content.ctaLine ? (
                <p className="mt-10 text-[20px] text-primary">
                  {content.ctaLine.split("Register today")[0]}
                  <Link
                    href="/#register"
                    className="text-accent-teal font-semibold hover:text-accent-coral transition-colors"
                  >
                    Register today
                  </Link>
                  {content.ctaLine.split("Register today")[1]}
                </p>
              ) : null}

              {content.table ? (
                <div className="mt-10 overflow-hidden rounded-3xl border border-primary/10">
                  <table className="w-full text-left text-[18px]">
                    <thead className="bg-[#0b9f69] text-white">
                      <tr>
                        <th className="px-5 py-4 font-bold">Topic</th>
                        <th className="px-5 py-4 font-bold">
                          5-7 (Year 1 & 2)
                        </th>
                        <th className="px-5 py-4 font-bold">
                          7-9 (Year 3 & 4)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.table.map((row, index) => (
                        <tr
                          key={`${row.topic}-${row.year1to2}`}
                          className={index % 2 === 0 ? "bg-bg-alt" : "bg-white"}
                        >
                          <td className="px-5 py-4 border-t border-primary/8 text-primary font-semibold">
                            {row.topic}
                          </td>
                          <td className="px-5 py-4 border-t border-primary/8 text-primary/85">
                            {row.year1to2}
                          </td>
                          <td className="px-5 py-4 border-t border-primary/8 text-primary/85">
                            {row.year3to4}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {content.resources ? (
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <ul className="lg:col-span-7 space-y-4 text-[20px]">
                    {content.resources.map((resource) => (
                      <li key={resource}>
                        <a
                          href="#"
                          className="text-accent-teal hover:text-accent-coral transition-colors"
                        >
                          {resource}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div
                      className="aspect-3/4 rounded-2xl border border-border-card shadow-md bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=700&auto=format&fit=crop')",
                      }}
                    />
                    <div
                      className="aspect-3/4 rounded-2xl border border-border-card shadow-md bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=700&auto=format&fit=crop')",
                      }}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-primary rounded-4xl p-8 text-white shadow-xl">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                Browse Subjects
              </p>
              <h4 className="font-heading text-2xl font-bold mb-6">
                Find another course
              </h4>
              <ul className="space-y-3">
                {[
                  ["Arabic", "arabic"],
                  ["Computing", "computing"],
                  ["Science", "science"],
                  ["Maths", "maths"],
                  ["English", "english"],
                  ["Geography", "geography"],
                  ["History", "history"],
                  ["Art", "art"],
                  ["Sports", "sport"],
                ].map(([label, route]) => (
                  <li key={route}>
                    <Link
                      href={`/subjects/${route}`}
                      className={`block rounded-2xl px-4 py-3 transition-colors ${
                        slug === route
                          ? "bg-white text-primary font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
