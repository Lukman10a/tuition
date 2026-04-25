import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tuition | Where Every Child Thrives",
  description:
    "UK's Trusted Tuition Provider. Expert tutors. Inspiring subjects. Real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg-white font-sans text-text-primary">
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
