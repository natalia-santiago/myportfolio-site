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
                UX Exploration
              </p>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX exploration`}
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
            This UX exploration presents an alternative approach to the P&amp;R
            Workforce website.
          </p>

          <p className="portfolio-intro">
            It focuses on how thoughtful adjustments to layout, hierarchy, and
            spacing can improve clarity and usability while working within the
            same content and business goals.
          </p>

          <p className="portfolio-subtle-note">
            The client version reflects the final website developed in
            collaboration with the client. This exploration presents an
            alternative UX direction.
          </p>

          <a href="/portfolio" className="portfolio-project-ux-button">
            Back to Portfolio
          </a>
        </section>

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card">
            <p className="portfolio-project-eyebrow">
              Client Project • UX Exploration
            </p>

            <h2 className="portfolio-project-title">
              P&amp;R Workforce UX Exploration
            </h2>

            <p className="portfolio-project-description">
              This project was originally developed in collaboration with a
              client, where the final version reflects their preferences and
              business decisions. This exploration presents an alternative
              UX-driven approach that shows how thoughtful refinements to
              layout, hierarchy, and spacing can improve clarity and usability
              while maintaining the same core content.
            </p>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          description="Focuses on improving how information is introduced and prioritized, allowing users to more quickly understand the company’s services while keeping the same overall message."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX exploration"
        />

        <ComparisonSection
          title="Hero Section"
          description="Explores clearer messaging and stronger emphasis on the primary call to action, helping users immediately understand the value offered and the next step."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX exploration"
        />

        <ComparisonSection
          title="Navigation"
          description="Introduces a more structured approach, making it easier for users to scan options quickly and understand where to go next."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX exploration"
        />

        <ComparisonSection
          title="Services Section"
          description="Improves grouping and spacing so the service offerings are easier to scan and more visually organized without changing the core content."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX exploration"
        />

        <ComparisonSection
          title="Industries Section"
          description="Refines readability and content grouping, helping users better process the information and move through the section more easily."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX exploration"
        />

        <ComparisonSection
          title="Contact Section"
          description="Refines structure and form hierarchy to support a smoother and more intuitive experience when users are ready to reach out."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          description="Places more emphasis on the call to action, helping guide users toward the next step with clearer visual direction."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          description="Explores improved spacing, readability, and responsiveness, creating a more refined experience while preserving the same content and message."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Mobile client version"
          afterAlt="Mobile UX exploration"
        />

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration demonstrates how UX decisions such as hierarchy,
              spacing, and content organization can influence clarity and
              usability.
            </p>

            <p className="portfolio-project-description">
              While the client version reflects real collaboration and client
              priorities, this alternative approach shows how thoughtful
              refinements can shape the overall user experience.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}