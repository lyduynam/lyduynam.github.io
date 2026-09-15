"use client";
import { useState } from "react";
export default function SafeImage({ src, alt, fallback = "/images/project-fallback.svg", className = "", eager = false, width = 800, height = 500 }) {
  const [failedSource, setFailedSource] = useState(null);
  const currentSource = !src || failedSource === src ? fallback : src;
  return <img src={currentSource} alt={alt} className={className} width={width} height={height} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => { if (currentSource !== fallback) setFailedSource(src); }} />;
}
