import type { Metadata } from "next";
import WorkHeroSection from "@/components/work/WorkHeroSection";
import WorkProjectsSection from "@/components/work/WorkProjectsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "/work",
  "Selected Work",
  "A selection of projects exploring identity, art direction, digital experiences and visual storytelling from cultural organisations and independent brands to creative campaigns."
);

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <WorkHeroSection />
      <WorkProjectsSection />
    </main>
  );
}

