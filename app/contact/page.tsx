import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactDetailsSection from "@/components/contact/ContactDetailsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact",
  "Get in touch with Dariia Chervoniak. Available for Art Direction, Brand Identity, Creative Strategy, Concept creation and Graphic Design."
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <h1 className="sr-only">Contact Dariia Chervoniak — Art Direction & Graphic Design</h1>
      <ContactHeroSection />
      <ContactDetailsSection />
    </main>
  );
}

