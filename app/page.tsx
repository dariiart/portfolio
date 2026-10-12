import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Dariia Chervoniak — Independent Art Director and Graphic Designer</h1>
      <HeroSection />
      <AboutSection />
      <SelectedWorkSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}


