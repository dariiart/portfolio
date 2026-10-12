import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutVideoSection from "@/components/about/AboutVideoSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About",
  "About Dariia Chervoniak — independent Art Director and Graphic Designer based in the UK, shaping concept-led visual identities and digital experiences."
);

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutVideoSection />
    </main>
  );
}

