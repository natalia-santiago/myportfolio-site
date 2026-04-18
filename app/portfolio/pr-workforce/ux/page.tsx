"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaSearchPlus } from "react-icons/fa";

type ComparisonSectionProps = {
  title: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

function ComparisonSection({
  title,
  description,
  before,
  after,
  beforeAlt,
  afterAlt,
}: ComparisonSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="portfolio-grid-section ux-comparison-section">
        <article className="portfolio-project-card ux-comparison-card">
          <div className="ux-comparison-header">
            <h2 className="portfolio-project-title ux-comparison-title">
              {title}
            </h2>

            <p className="portfolio-project-description ux-comparison-description">
              {description}
            </p>
          </div>

          <div className="ux-comparison-grid">
            <div className="ux-comparison-column">
              <p className="ux-comparison-label">Production Version</p>

              <button
                type="button"
                className="portfolio-project-image-button"
                onClick={() => setSelectedImage(before)}
                aria-label={`Open ${title} production version`}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap">
                  <img
                    src={before}
                    alt={beforeAlt}
                    className="portfolio-project-image ux-comparison-image"
                  />
                  <div className="portfolio-image-overlay" aria-hidden="true">
                    <FaSearchPlus className="portfolio-zoom-icon" />
                  </div>
                </div>
              </button>
            </div>

            <div className="ux-comparison-column">
              <p className="ux-comparison-label">UX Concept</p>

              <button
                type="button"
                className="portfolio-project-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX concept`}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap">
                  <img
                    src={after}
                    alt={afterAlt}
                    className="portfolio-project-image ux-comparison-image"
                  />
                  <div className="portfolio-image-overlay" aria-hidden="true">
                    <FaSearchPlus className="portfolio-zoom-icon" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </article>
      </section>

      {selectedImage && (
        <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

export default function PRWorkforceUXPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio-page">
        <section className="portfolio-hero">
          <h1 className="portfolio-title">UX Exploration</h1>

          <p className="portfolio-intro">
            P&amp;R Workforce LLC — production website and an alternative UX
            direction focused on structure, clarity, and user flow.
          </p>
        </section>

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card">
            <div className="portfolio-project-copy">
              <p className="portfolio-project-eyebrow">
                Client Project + UX Exploration
              </p>

              <h2 className="portfolio-project-title">
                P&amp;R Workforce UX Exploration
              </h2>

              <p className="portfolio-project-description">
                I designed and developed the official P&amp;R Workforce website
                as a production-ready client project. After launch, I explored
                an alternative UX direction using the same business context and
                content goals to refine hierarchy, spacing, and overall browsing
                flow.
              </p>
            </div>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          description="The UX concept introduces a cleaner visual hierarchy, stronger section spacing, and a more guided first impression while keeping the same core business purpose and content."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Production homepage for P&R Workforce"
          afterAlt="UX concept homepage for P&R Workforce"
        />

        <ComparisonSection
          title="Hero Section"
          description="The updated hero focuses on clearer messaging, stronger call-to-action emphasis, and more breathing room so users can understand the offer faster."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Production hero section for P&R Workforce"
          afterAlt="UX concept hero section for P&R Workforce"
        />

        <ComparisonSection
          title="Navigation"
          description="The UX version explores a more structured and polished navigation experience, helping users move through the site with less friction and stronger visual guidance."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Production navigation for P&R Workforce"
          afterAlt="UX concept navigation for P&R Workforce"
        />

        <ComparisonSection
          title="Services Section"
          description="This version improves grouping, readability, and spacing so the service offering feels easier to scan and more visually organized."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Production services section for P&R Workforce"
          afterAlt="UX concept services section for P&R Workforce"
        />

        <ComparisonSection
          title="Industries Section"
          description="The UX concept gives this section stronger structure and better visual rhythm, making the information feel more digestible and intentional."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Production industries section for P&R Workforce"
          afterAlt="UX concept industries section for P&R Workforce"
        />

        <ComparisonSection
          title="Contact Section"
          description="The updated contact area improves clarity, hierarchy, and form presentation to support a more confident and conversion-focused experience."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Production contact section for P&R Workforce"
          afterAlt="UX concept contact section for P&R Workforce"
        />

        <ComparisonSection
          title="Contact Prompt"
          description="This refinement explores stronger CTA visibility and cleaner supporting layout, helping the user understand the next step more quickly."
          before="/images/contact-prompt-pr.png"
          after="/images/us-contact-prompt-pr.png"
          beforeAlt="Production contact prompt for P&R Workforce"
          afterAlt="UX concept contact prompt for P&R Workforce"
        />

        <ComparisonSection
          title="Mobile Experience"
          description="The mobile concept focuses on cleaner spacing, stronger readability, and a more refined responsive experience while preserving the same business message."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Production mobile homepage for P&R Workforce"
          afterAlt="UX concept mobile homepage for P&R Workforce"
        />

        <section className="portfolio-cta">
          <h2 className="portfolio-cta-title">Reflection</h2>

          <p className="portfolio-cta-text">
            This exploration helped me study how spacing, hierarchy, and
            structured comparison can improve clarity and usability without
            changing the site’s core purpose.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}