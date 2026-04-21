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

export default function LittleHandsUXPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio-page">
        <section className="portfolio-hero">
          <h1 className="portfolio-title">UX &amp; SEO Exploration</h1>

          <p className="portfolio-intro ux-intro">
            This UX and SEO exploration presents an alternative direction for
            the Little Hands Mobile Soft Play website, focused on improving how
            quickly families understand the service, the areas served, and the
            next step to take. The goal was to keep the brand’s soft and elegant
            feel while making the website clearer, more actionable, and more
            search friendly.
          </p>

          <p className="portfolio-intro ux-intro">
            By refining section hierarchy, strengthening keyword targeting, and
            introducing more intentional navigation and calls to action, this
            exploration shows how the same business can be presented with
            stronger clarity, better local SEO alignment, and a smoother path to
            inquiry across desktop and mobile.
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

            <h2 className="portfolio-project-title">
              Little Hands Mobile Soft Play
            </h2>

            <p className="portfolio-project-description">
              This project reimagines the Little Hands Mobile Soft Play website
              with a stronger focus on messaging clarity, local SEO, and
              conversion flow. The exploration prioritizes clearer service
              discovery, more intentional content structure, and stronger
              location based relevance so parents can more quickly understand the
              offer, trust the brand, and take action.
            </p>

            <div className="portfolio-project-links">
            <a
                href="https://littlehands-ux-concept.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View Little Hands Mobile Soft Play UX and SEO exploration live website"
            >
                <FaGlobe />
            </a>

            <a
                href="https://github.com/natalia-santiago/littlehands-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View Little Hands Mobile Soft Play UX and SEO exploration GitHub repository"
            >
                <FaGithub />
            </a>
            </div>

          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Stronger messaging improves clarity, local SEO, and conversion focus."
          description="The UX and SEO version replaces generic headline text with location based, keyword focused messaging, making the value clearer while improving search visibility and intent alignment."
          before="/images/homepage-littlehands.jpeg"
          after="/images/ux-homepage-littlehands.jpeg"
          beforeAlt="Little Hands homepage client version"
          afterAlt="Little Hands homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Keyword-focused headline improves SEO and user intent clarity."
          description="The UX and SEO version adds location based keywords and clearer service wording, making the offer immediately understandable while improving search relevance."
          before="/images/hero-littlehands.png"
          after="/images/ux-hero-littlehands.png"
          beforeAlt="Little Hands hero section client version"
          afterAlt="Little Hands hero section UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Improved navigation supports SEO structure and conversion flow."
          description="The UX and SEO version adds a Service Areas link and a clearer primary CTA, helping users navigate more effectively while strengthening local SEO and conversion intent."
          before="/images/navigation-littlehands.png"
          after="/images/ux-navigation-littlehands.png"
          beforeAlt="Little Hands navigation client version"
          afterAlt="Little Hands navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Packages Section"
          takeaway="Clearer content hierarchy improves SEO and decision-making."
          description="The UX and SEO version adds keyword rich headings and structured copy, making packages easier to understand while improving search relevance and user guidance."
          before="/images/packages-littlehands.png"
          after="/images/ux-packages-littlehands.png"
          beforeAlt="Little Hands packages section client version"
          afterAlt="Little Hands packages section UX and SEO exploration"
        />

        <ComparisonSection
          title="Gallery Section"
          takeaway="Enhanced copy improves SEO and user engagement."
          description="The UX and SEO version adds keyword rich text and location context, making the gallery more discoverable while better guiding users through the content."
          before="/images/gallery-littlehands.png"
          after="/images/ux-gallery-littlehands.png"
          beforeAlt="Little Hands gallery section client version"
          afterAlt="Little Hands gallery section UX and SEO exploration"
        />

        <ComparisonSection
          title="Follow Section"
          takeaway="Keyword-rich content strengthens SEO and engagement."
          description="The UX and SEO version expands the copy with relevant keywords and context, improving search visibility while encouraging users to engage with the brand on social media."
          before="/images/follow-littlehands.png"
          after="/images/ux-follow-littlehands.png"
          beforeAlt="Little Hands follow section client version"
          afterAlt="Little Hands follow section UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Page"
          takeaway="Structured layout improves conversions and SEO clarity."
          description="The UX and SEO version organizes content into clear sections with keyword rich copy, improving form usability while strengthening local relevance and user trust."
          before="/images/contact-littlehands.jpeg"
          after="/images/ux-contact-littlehands.jpeg"
          beforeAlt="Little Hands contact page client version"
          afterAlt="Little Hands contact page UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Version"
          takeaway="Mobile layout improves clarity, SEO, and conversion flow."
          description="The UX and SEO version introduces keyword rich content and a stronger CTA structure, making the mobile experience clearer, more actionable, and better aligned with search intent."
          before="/images/littlehands2.jpeg"
          after="/images/ux-mobile-littlehands.jpeg"
          beforeAlt="Little Hands mobile client version"
          afterAlt="Little Hands mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section ux-reflection-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration shows how a visually soft and elegant brand can
              still become more effective through stronger structure, clearer
              messaging, and more intentional SEO decisions. Rather than changing
              the business itself, the focus was on presenting the same offer in
              a way that is easier to scan, easier to trust, and easier to act
              on.
            </p>

            <div className="ux-reflection-outcomes">
              <div className="ux-reflection-outcome">
                Clearer local SEO targeting
              </div>
              <div className="ux-reflection-outcome">
                Stronger conversion flow
              </div>
              <div className="ux-reflection-outcome">
                More intentional mobile UX
              </div>
            </div>

            <p className="portfolio-project-description">
              While the client version reflects real world collaboration and
              business preferences, this alternative direction demonstrates how
              stronger hierarchy, richer keyword context, and clearer calls to
              action can improve both discoverability and decision making across
              the full experience.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}