import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ...(process.env.VERCEL_ENV === "preview"
          ? [{ key: "X-Robots-Tag", value: "noindex, follow" }]
          : []),
      ],
    }];
  },
  async redirects() {
    return [
      {
        source: "/work/moore-perfume",
        destination: "/work/moor-perfume",
        permanent: true,
      },
      {
        source: "/work/volohosky",
        destination: "/work/voloshky",
        permanent: true,
      },
      {
        source: "/work/love-lust-and-violence",
        destination: "/work/love-lust",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
