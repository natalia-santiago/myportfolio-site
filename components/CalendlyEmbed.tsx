"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    const initCalendly = () => {
      const container = document.getElementById("calendly-embed");

      if (!container || !window.Calendly) return;

      container.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/natalia-santiago-dev/30min?background_color=ffd6d6&text_color=2e6417&primary_color=ff5050",
        parentElement: container,
      });
    };

    if (existingScript) {
      initCalendly();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;

    document.body.appendChild(script);
  }, []);

  return <div id="calendly-embed" className="calendly-embed" />;
}