import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import LoveLustHeroSection from "@/components/project/LoveLustHeroSection";
import LoveLustGallerySection from "@/components/project/LoveLustGallerySection";
import { getProjectJsonLd, pageMetadata } from "@/lib/seo";

const projectData = projects.find((p) => p.id === "love-lust");

export const metadata: Metadata = pageMetadata(
  "/work/love-lust",
  projectData ? `${projectData.title} — Fine Art Exhibition Visual Direction` : "Love, Lust and Violence",
  projectData?.description,
  projectData?.image
);

export default function LoveLustPage() {
  const project = projects.find((p) => p.id === "love-lust");

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
      <LoveLustHeroSection />
      <LoveLustGallerySection />
    </main>
  );
}

