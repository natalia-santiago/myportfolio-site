"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaSearchPlus, FaGlobe, FaGithub } from "react-icons/fa";

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
                    className="portfolio-project-image"
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
                    className="portfolio-project-image"
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
        {/* HERO */}
        <section className="portfolio-hero">
          <h1 className="portfolio-title">UX Exploration</h1>

          <p className="portfolio-intro">
            P&amp;R Workforce LLC. A production website developed in collaboration
            with the client, alongside an alternative UX direction exploring
            structure, clarity, and user flow.
          </p>

          <a href="/portfolio" className="portfolio-project-ux-button">
            Back to Portfolio
          </a>
        </section>

        {/* INTRO */}
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
                I designed and developed the official P&amp;R Workforce website as a
                production-ready client project, working closely with the client to
                align the design with their goals, preferences, and business needs.
                After launch, I explored an alternative UX direction using the same
                content and context to study how layout, spacing, and visual hierarchy
                can shape the overall user experience.
              </p>

              <div className="portfolio-project-links">
                <a
                  href="https://prworkforce-ux-concept.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle"
                  aria-label="UX concept live website"
                >
                  <FaGlobe />
                </a>

                <a
                  href="https://github.com/natalia-santiago/prworkforce-ux"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle"
                  aria-label="UX concept GitHub repository"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* SECTIONS */}

        <ComparisonSection
          title="Homepage"
          description="The UX concept explores a more structured layout and stronger visual hierarchy, guiding users more clearly through the page while maintaining the same content and intent."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Production homepage for P&R Workforce"
          afterAlt="UX concept homepage for P&R Workforce"
        />

        <ComparisonSection
          title="Hero Section"
          description="The updated hero focuses on clearer messaging and stronger emphasis on the primary call to action, with more breathing room to help users quickly understand the value offered."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Production hero section"
          afterAlt="UX concept hero section"
        />

        <ComparisonSection
          title="Navigation"
          description="This exploration introduces a more structured navigation approach, aiming to improve clarity and make it easier for users to understand where to go next."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Production navigation"
          afterAlt="UX concept navigation"
        />

        <ComparisonSection
          title="Services Section"
          description="The UX concept refines grouping and spacing, making the service offerings easier to scan and more visually organized without changing the core content."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Production services section"
          afterAlt="UX concept services section"
        />

        <ComparisonSection
          title="Industries Section"
          description="This version explores a clearer structure and improved visual rhythm, helping the information feel more digestible and easier to navigate."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Production industries section"
          afterAlt="UX concept industries section"
        />

        <ComparisonSection
          title="Contact Section"
          description="The UX concept focuses on improving clarity and form structure, supporting a smoother and more intuitive experience when users are ready to get in touch."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Production contact section"
          afterAlt="UX concept contact section"
        />

        <ComparisonSection
          title="Contact Prompt"
          description="This refinement explores stronger call-to-action visibility and clearer supporting layout, helping users better understand the next step."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Production contact prompt"
          afterAlt="UX concept contact prompt"
        />

        <ComparisonSection
          title="Mobile Experience"
          description="The mobile concept explores improved spacing, readability, and visual balance, creating a more refined responsive experience while preserving the same messaging."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Production mobile version"
          afterAlt="UX concept mobile version"
        />

        {/* REFLECTION */}
        <section className="portfolio-cta">
          <h2 className="portfolio-cta-title">Reflection</h2>

          <p className="portfolio-cta-text">
            This exploration highlights how layout, spacing, and hierarchy can
            significantly influence clarity and usability, even when working with
            the same content and overall business goals.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}