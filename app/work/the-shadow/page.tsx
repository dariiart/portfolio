import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import TheShadowHeroSection from "@/components/project/TheShadowHeroSection";
import TheShadowBannerSection from "@/components/project/TheShadowBannerSection";
import TheShadowStorySection from "@/components/project/TheShadowStorySection";
import TheShadowVisualGridSection from "@/components/project/TheShadowVisualGridSection";
import TheShadowMeetSection from "@/components/project/TheShadowMeetSection";
import TheShadowPostersSection from "@/components/project/TheShadowPostersSection";
import TheShadowProcessSection from "@/components/project/TheShadowProcessSection";
import { getProjectJsonLd, pageMetadata } from "@/lib/seo";

const projectData = projects.find((p) => p.id === "the-shadow");

export const metadata: Metadata = pageMetadata(
  "/work/the-shadow",
  projectData ? `${projectData.title} — Film Concept & Visual Storytelling` : "The Shadow",
  projectData?.description,
  projectData?.image
);

export default function TheShadowPage() {
  const project = projects.find((p) => p.id === "the-shadow");

  if (!project) {
    notFound();
  }

  const jsonLd = getProjectJsonLd(project);

  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TheShadowHeroSection />
      <TheShadowBannerSection />
      <TheShadowStorySection />
      <TheShadowVisualGridSection />
      <TheShadowMeetSection />
      <TheShadowPostersSection />
      <TheShadowProcessSection />
    </main>
  );
}

