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
              <p className="ux-comparison-label ux-comparison-label-client">
                Client Version
              </p>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(before)}
                aria-label={`Open ${title} client version`}
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
              <p className="ux-comparison-label ux-comparison-label-ux">
                UX + SEO Exploration
              </p>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX and SEO exploration`}
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
          <h1 className="portfolio-title">UX & SEO Exploration</h1>

          <p className="portfolio-intro ux-intro">
            This UX and SEO exploration presents an alternative approach to the
            P&amp;R Workforce website, focusing on how layout, hierarchy,
            structure, and content organization can improve both usability and
            search visibility while working within the same business goals.
          </p>

          <p className="portfolio-intro ux-intro">
            The client version reflects the final website developed in
            collaboration with the client, while this exploration demonstrates
            how UX and SEO refinements can enhance clarity, accessibility, and
            overall performance.
          </p>

          <a href="/portfolio" className="portfolio-project-ux-button">
            Back to Portfolio
          </a>
        </section>

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card">
            <p className="portfolio-project-eyebrow">
              Client Project • UX & SEO Exploration
            </p>

            <h2 className="portfolio-project-title">
              P&amp;R Workforce UX & SEO Exploration
            </h2>

            <p className="portfolio-project-description">
              This project was originally developed in collaboration with a
              client, where the final version reflects their preferences and
              business decisions. This exploration presents an alternative
              UX and SEO-driven approach that shows how refinements to layout,
              hierarchy, and content structure can improve clarity,
              usability, and search visibility while maintaining the same core
              content.
            </p>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          description="Focuses on improving how information is introduced, structured, and prioritized, helping users quickly understand services while also supporting clearer SEO signals."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          description="Explores clearer messaging, stronger keyword alignment, and improved call-to-action visibility to support both user understanding and search relevance."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          description="Introduces a more structured approach that improves usability while also supporting better internal linking and crawlability."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          description="Improves grouping, spacing, and keyword clarity so services are easier to scan and better optimized for search visibility."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX and SEO exploration"
        />

        <ComparisonSection
          title="Industries Section"
          description="Refines readability and structure while improving how content can be interpreted by search engines and users."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Section"
          description="Refines structure and form hierarchy to improve conversion flow while maintaining clear and accessible content."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          description="Strengthens call-to-action visibility and placement to better guide users toward conversion."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          description="Explores improved spacing, readability, and responsiveness while maintaining content clarity across devices."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Mobile client version"
          afterAlt="Mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration demonstrates how UX and SEO decisions such as
              hierarchy, structure, and content organization can influence both
              usability and visibility.
            </p>

            <p className="portfolio-project-description">
              While the client version reflects real collaboration and client
              priorities, this alternative approach shows how thoughtful UX and
              SEO refinements can shape a clearer and more effective user
              experience.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}