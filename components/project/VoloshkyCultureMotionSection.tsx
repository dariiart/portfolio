"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VoloshkyCultureMotionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f7f5] px-6 sm:px-12 md:px-16 py-6 sm:py-16 flex justify-center"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12">
        {/* Heading and Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[440px] text-left flex flex-col gap-2.5 sm:gap-3"
        >
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-semibold
           text-black tracking-tight leading-[1.1]">
            Culture in Motion.
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-black/90 leading-[1.3] tracking-tight">
            Experiencing another culture often inspires people to reconnect with the richness of their own.
          </p>
        </motion.div>

        {/* Voloshky Promo Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="w-full relative overflow-hidden bg-neutral-100 shadow-sm"
        >
          <video
            ref={videoRef}
            src="/images/Voloshky%20promo%20video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
