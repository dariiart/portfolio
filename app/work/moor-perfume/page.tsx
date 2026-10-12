import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import MoorPerfumeHeroSection from "@/components/project/MoorPerfumeHeroSection";
import MoorPerfumeGallerySection from "@/components/project/MoorPerfumeGallerySection";
import MoorPerfumeVideoSection from "@/components/project/MoorPerfumeVideoSection";
import MoorPerfumeScreenSection from "@/components/project/MoorPerfumeScreenSection";
import { getProjectJsonLd, pageMetadata } from "@/lib/seo";

const projectData = projects.find((p) => p.id === "moor-perfume");

export const metadata: Metadata = pageMetadata(
  "/work/moor-perfume",
  projectData ? `${projectData.title} — Visual Identity & Art Direction` : "Moor Perfume",
  projectData?.description,
  projectData?.image
);

export default function MoorPerfumePage() {
  const project = projects.find((p) => p.id === "moor-perfume");

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
      <MoorPerfumeHeroSection />
      <MoorPerfumeGallerySection />
      <MoorPerfumeVideoSection />
      <MoorPerfumeScreenSection />
      <section className="w-full bg-[#f8f7f5] px-6 sm:px-12 md:px-16 pb-16 sm:pb-24">
        <div className="max-w-7xl w-full mx-auto">
          <video
            src="/projects/moor-perfume/buy-moor-perfume.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Buy Moor Perfume"
            className="block w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

