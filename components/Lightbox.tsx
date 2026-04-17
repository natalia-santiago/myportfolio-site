"use client";

import { useEffect } from "react";

export default function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="Expanded view" className="lightbox-image" />
    </div>
  );
}