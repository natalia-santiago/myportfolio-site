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
            {/* CLIENT VERSION */}
            <div className="ux-comparison-column">
              <p className="ux-comparison-label">Client Version</p>

              <button
                type="button"
                className="portfolio-project-image-button"
                onClick={() => setSelectedImage(before)}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap">
                  <img src={before} alt={beforeAlt} className="portfolio-project-image" />
                  <div className="portfolio-image-overlay">
                    <FaSearchPlus className="portfolio-zoom-icon" />
                  </div>
                </div>
              </button>
            </div>

            {/* UX VERSION */}
            <div className="ux-comparison-column">
              <p className="ux-comparison-label">UX Exploration</p>

              <button
                type="button"
                className="portfolio-project-image-button"
                onClick={() => setSelectedImage(after)}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap">
                  <img src={after} alt={afterAlt} className="portfolio-project-image" />
                  <div className="portfolio-image-overlay">
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
            This UX exploration presents an alternative approach to the P&amp;R Workforce website,
            focusing on how thoughtful adjustments to layout, hierarchy, and spacing can enhance
            clarity and usability—while working within the same content and business goals.
          </p>

          <p className="portfolio-subtle-note">
            The client version reflects the final website developed in collaboration with the client,
            while this exploration highlights an alternative UX direction.
          </p>

          <a href="/portfolio" className="portfolio-project-ux-button">
            Back to Portfolio
          </a>
        </section>

        {/* PROJECT INTRO */}
        <section className="portfolio-grid-section">
          <article className="portfolio-project-card">
            <p className="portfolio-project-eyebrow">
              Client Project · UX Exploration
            </p>

            <h2 className="portfolio-project-title">
              P&amp;R Workforce UX Exploration
            </h2>

            <p className="portfolio-project-description">
              This project was originally developed in collaboration with a client,
              where the final version reflects their preferences and business decisions.
              This exploration presents an alternative UX-driven approach, demonstrating
              how small refinements in layout, hierarchy, and spacing can improve clarity
              and usability while maintaining the same core content.
            </p>
          </article>
        </section>

        {/* SECTIONS */}

        <ComparisonSection
          title="Homepage"
          description="This exploration focuses on improving how information is introduced and prioritized, allowing users to more quickly understand the company’s services while maintaining the same core messaging."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX exploration"
        />

        <ComparisonSection
          title="Hero Section"
          description="The hero section explores clearer messaging and stronger emphasis on the primary call to action, helping users immediately understand the value offered and the next step."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX exploration"
        />

        <ComparisonSection
          title="Navigation"
          description="The navigation introduces a more structured approach, making it easier for users to scan options quickly and understand where to go next."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX exploration"
        />

        <ComparisonSection
          title="Services Section"
          description="This section explores improved grouping and spacing, making the service offerings easier to scan and more visually organized without changing the core content."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX exploration"
        />

        <ComparisonSection
          title="Industries Section"
          description="The layout adjustments focus on improving readability and content grouping, helping users better process the information and navigate between sections."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX exploration"
        />

        <ComparisonSection
          title="Contact Section"
          description="The contact experience explores clearer structure and form hierarchy, supporting a smoother and more intuitive interaction when users are ready to reach out."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          description="This refinement emphasizes a clearer call to action, helping guide users toward the next step with stronger visual direction."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          description="The mobile experience explores improved spacing, readability, and responsiveness, creating a more refined layout while preserving the same content and messaging."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Mobile client version"
          afterAlt="Mobile UX exploration"
        />

        {/* REFLECTION */}
        <section className="portfolio-grid-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration demonstrates how iterative UX decisions—such as hierarchy,
              spacing, and content organization—can significantly influence clarity and usability.
              While the production version reflects real-world collaboration and client priorities,
              this alternative approach highlights how small refinements can shape the overall user experience.
            </p>
          </article>
        </section>

      </main>

      <Footer />
    </div>
  );
}