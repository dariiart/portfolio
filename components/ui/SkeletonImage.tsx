"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

export interface SkeletonImageProps extends ImageProps {
  wrapperClassName?: string;
  skeletonClassName?: string;
}

export default function SkeletonImage({
  className = "",
  wrapperClassName = "",
  skeletonClassName = "",
  alt,
  onLoad,
  onError,
  ...props
}: SkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Instantly mark loaded if image is already cached in browser memory
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      setShowSkeleton(false);
    }
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    // Remove skeleton from DOM after fade-out transition finishes
    setTimeout(() => {
      setShowSkeleton(false);
    }, 600);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    setShowSkeleton(false);
    onError?.(e);
  };

  const isFill = Boolean(props.fill);

  return (
    <div
      className={
        isFill
          ? `absolute inset-0 w-full h-full ${wrapperClassName}`
          : `relative w-full ${wrapperClassName}`
      }
    >
      {showSkeleton && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-10 skeleton-shimmer pointer-events-none transition-opacity duration-500 ease-out ${
            isLoaded ? "opacity-0" : "opacity-100"
          } ${skeletonClassName}`}
        />
      )}
      <Image
        ref={imgRef}
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
