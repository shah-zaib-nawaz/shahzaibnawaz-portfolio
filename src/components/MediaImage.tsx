"use client";

import React, { useState, useRef, useEffect } from "react";

interface MediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function MediaImage({
  src,
  alt,
  className = "",
  priority = false,
  ...rest
}: MediaImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el) {
      if (el.complete && el.naturalWidth > 0) {
        setStatus("loaded");
      } else {
        setStatus("loading");
      }
    }
  }, [src]);

  return (
    <span className={`media-image ${status} ${className}`}>
      {status === "error" && (
        <span className="image-fallback">
          <span className="display">S.</span>
          <span>Preview unavailable</span>
        </span>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        {...rest}
      />
    </span>
  );
}
