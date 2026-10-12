import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import VoloshkyHeroSection from "@/components/project/VoloshkyHeroSection";
import ProjectVideoSection from "@/components/project/ProjectVideoSection";
import ProjectDualImagesSection from "@/components/project/ProjectDualImagesSection";
import VoloshkyCultureMotionSection from "@/components/project/VoloshkyCultureMotionSection";
import ProjectScaledVideoSection from "@/components/project/ProjectScaledVideoSection";
import ProjectFlagPatternsSection from "@/components/project/ProjectFlagPatternsSection";
import ProjectCampaignMotionSection from "@/components/project/ProjectCampaignMotionSection";
import { getProjectJsonLd, pageMetadata } from "@/lib/seo";

const projectData = projects.find((p) => p.id === "voloshky");

export const metadata: Metadata = pageMetadata(
  "/work/voloshky",
  projectData ? `${projectData.title} — Brand Identity & Cultural Heritage` : "Voloshky",
  projectData?.description,
  projectData?.image
);

export default function VoloshkyPage() {
  const project = projects.find((p) => p.id === "voloshky");

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
      <VoloshkyHeroSection />
      <ProjectVideoSection project={project} />
      <ProjectDualImagesSection project={project} />
      <VoloshkyCultureMotionSection />
      <ProjectScaledVideoSection project={project} />
      <ProjectFlagPatternsSection />
      <ProjectCampaignMotionSection />
    </main>
  );
}

