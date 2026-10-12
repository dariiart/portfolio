import type { Metadata } from "next";

export const SITE_URL = "https://dariiart.com";
export const SITE_NAME = "Dariiarts";
export const SITE_TITLE = "Dariiarts — Independent Art Director & Graphic Designer";
export const SITE_DESCRIPTION =
  "Portfolio of Dariia Chervoniak, independent Art Director and Graphic Designer based in the UK, specializing in concept-led identities, art direction, and digital experiences.";

export const isPreview = process.env.VERCEL_ENV === "preview";

export const pagePaths = [
  "/",
  "/about",
  "/work",
  "/contact",
  "/work/moor-perfume",
  "/work/voloshky",
  "/work/the-shadow",
  "/work/love-lust",
] as const;

export function pageMetadata(
  path: (typeof pagePaths)[number],
  title?: string,
  description = SITE_DESCRIPTION,
  customImageUrl?: string
): Metadata {
  const pageUrl = new URL(path, SITE_URL).href;
  const imageUrl = customImageUrl
    ? (customImageUrl.startsWith("http") ? customImageUrl : new URL(customImageUrl, SITE_URL).href)
    : `${SITE_URL}/opengraph-image`;

  const ogImage = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: title ? `${title} — ${SITE_NAME}` : SITE_TITLE,
  };

  return {
    title: title ? title : { absolute: SITE_TITLE },
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: SITE_NAME,
      url: pageUrl,
      title: title ? `${title} | ${SITE_NAME}` : SITE_TITLE,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${SITE_NAME}` : SITE_TITLE,
      description,
      images: [ogImage],
    },
  };
}

export function getPersonAndWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Dariia Chervoniak",
        url: SITE_URL,
        jobTitle: "Art Director & Graphic Designer",
        description: SITE_DESCRIPTION,
        sameAs: [
          "https://www.linkedin.com/in/dariia-chervoniak-720542299/",
          "https://www.instagram.com/dariia_chervoniak/?hl=en",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: ["Dariiart", "Dariia Chervoniak Portfolio"],
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}

export function getProjectJsonLd(project: {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    url: `${SITE_URL}/work/${project.id}`,
    image: project.image ? new URL(project.image, SITE_URL).href : `${SITE_URL}/opengraph-image`,
    author: {
      "@type": "Person",
      name: "Dariia Chervoniak",
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: "Dariia Chervoniak",
      url: SITE_URL,
    },
    genre: project.category,
    dateCreated: project.year,
  };
}
