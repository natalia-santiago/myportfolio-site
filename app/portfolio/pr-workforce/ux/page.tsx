"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaSearchPlus, FaGlobe, FaGithub } from "react-icons/fa";

type ComparisonSectionProps = {
  title: string;
  takeaway: string;
  description: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

function ComparisonSection({
  title,
  takeaway,
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

            <p className="ux-comparison-takeaway">{takeaway}</p>

            <p className="portfolio-project-description ux-comparison-description">
              {description}
            </p>
          </div>

          <div className="ux-comparison-grid">
            <div className="ux-comparison-column">
              <p className="ux-comparison-label ux-comparison-label-client">
                Client Version
              </p>

              <p className="ux-comparison-subtitle">
                Final site developed with the client
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
                UX &amp; SEO Exploration
              </p>

              <p className="ux-comparison-subtitle ux-comparison-subtitle-improved">
                Improved hierarchy, clarity, and search visibility
              </p>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX and SEO exploration`}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap ux-comparison-image-wrap-improved">
                  <span className="ux-improved-badge">Improved</span>

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
          <h1 className="portfolio-title">UX &amp; SEO Exploration</h1>

          <p className="portfolio-intro ux-intro">
            This UX and SEO exploration presents an alternative direction for the
            P&amp;R Workforce website, focused on improving how quickly users
            understand the service and what action to take. The goal was not to
            change the business, but to present the same staffing offer with
            more clarity for both employers and job seekers.
          </p>

          <p className="portfolio-intro ux-intro">
            By refining hierarchy, restructuring key sections, and introducing
            more intentional navigation and calls to action, this exploration
            shows how the same content can become easier to scan, more action
            focused, and better aligned with how users search for staffing
            solutions in North Carolina.
          </p>

          <a href="/portfolio" className="portfolio-project-ux-button">
            Back to Portfolio
          </a>
        </section>

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card">
            <p className="portfolio-project-eyebrow">
              Client Project • UX &amp; SEO Exploration
            </p>

            <h2 className="portfolio-project-title">P&amp;R Workforce</h2>

            <p className="portfolio-project-description">
              This project reimagines the P&amp;R Workforce website with a
              stronger focus on clarity, usability, and conversion. The
              exploration prioritizes faster decision making, clearer service
              discovery, and stronger local SEO structure so users can more
              quickly understand whether they are hiring or looking for work and
              what to do next.
            </p>

            <div className="portfolio-project-links">
              <a
                href="https://prworkforce-ux-concept.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View P&R Workforce UX and SEO exploration live website"
              >
                <FaGlobe />
              </a>

              <a
                href="https://github.com/natalia-santiago/prworkforce-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View P&R Workforce UX and SEO exploration GitHub repository"
              >
                <FaGithub />
              </a>
            </div>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Clearer value proposition and faster user decision."
          description="The client version includes valuable information, but the core offer takes longer to understand. The exploration brings the staffing focus forward with a clearer headline, stronger section order, and earlier trust building content for employers and job seekers."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Stronger first impression with clearer next steps."
          description="The client version requires more reading before users understand what to do next. The exploration shifts the hero toward immediate clarity with a stronger headline, more concise supporting copy, and clearer actions."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Better service discovery and stronger site structure."
          description="The client version gives access to core pages, but it does not fully support service discovery or site structure for search. The exploration adds services and service areas directly into navigation, improving discoverability, internal linking, and local SEO coverage."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Cleaner scanning and clearer service entry points."
          description="The client version presents services as a dense list, which makes scanning harder and gives users less direction. The exploration restructures the section into a clearer card based layout that improves readability, interaction, and service level discoverability."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX and SEO exploration"
        />

        <ComparisonSection
          title="Industries Section"
          takeaway="Clearer grouping and easier content processing."
          description="The client version includes useful content, but the section is less structured for quick understanding. The exploration improves grouping, spacing, and hierarchy so users can process the information faster and more clearly."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Page"
          takeaway="Clearer conversion path for both user intents."
          description="The client version works, but it provides less guidance on what users should submit or how different inquiries are supported. The exploration introduces clearer supporting content, better hierarchy, and stronger separation between employer and job seeker needs."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          takeaway="More visible call to action at the right moment."
          description="The client version includes the prompt, but it blends more into the page. The exploration increases contrast and emphasis so the section stands out more clearly and encourages action more directly."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Primary actions come forward sooner on mobile."
          description="The client version places company description and service tags before the most important actions, which makes the experience feel heavier. The exploration brings key actions forward with larger full width buttons and a more focused mobile hierarchy."
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Mobile client version"
          afterAlt="Mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section ux-reflection-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration highlights how small but intentional changes to
              hierarchy, structure, and content prioritization can meaningfully
              improve how a website performs. Rather than adding new features,
              the focus was on making existing content easier to understand,
              easier to navigate, and more aligned with user intent.
            </p>

            <div className="ux-reflection-outcomes">
              <div className="ux-reflection-outcome">Clearer user paths</div>
              <div className="ux-reflection-outcome">
                Stronger SEO structure
              </div>
              <div className="ux-reflection-outcome">
                More action focused experience
              </div>
            </div>

            <p className="portfolio-project-description">
              While the client version reflects real world collaboration and
              business priorities, this alternative approach shows how a more
              structured and user focused presentation can lead to clearer
              decision making, stronger engagement, and a more effective website
              overall.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}