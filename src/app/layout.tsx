import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { CLINIC } from "@/lib/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://babalifecare.vercel.app"),
  title: {
    default: `${CLINIC.name} | Trusted Multi-Specialty Clinic in Deoria`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "Baba Life Care Clinic in Salempur-Mairwa, Deoria offers expert multi-specialty care, in-clinic and video consultations, emergency services, and free Friday consultation.",
  keywords: [
    "clinic Deoria",
    "Baba Life Care Clinic",
    "Salempur Mairwa clinic",
    "video consultation doctor",
    "multi-specialty clinic UP",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: CLINIC.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
