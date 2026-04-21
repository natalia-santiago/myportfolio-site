"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaSearchPlus } from "react-icons/fa";

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
                UX + SEO Exploration
              </p>

              <p className="ux-comparison-subtitle ux-comparison-subtitle-improved">
                Improved hierarchy, trust, and local search visibility
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

export default function XtremeConcreteUXPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio-page">
        <section className="portfolio-hero">
          <h1 className="portfolio-title">UX &amp; SEO Exploration</h1>

          <p className="portfolio-intro ux-intro">
            This UX and SEO exploration presents an alternative approach to the
            Xtreme Concrete Cutting &amp; Demolition website, showing how
            stronger layout decisions, clearer hierarchy, and more intentional
            content structure can improve usability, trust, and local search
            visibility while supporting the same business goals.
          </p>

          <p className="portfolio-intro ux-intro">
            The client version reflects the final website developed in
            collaboration with the client, while this exploration shows how
            targeted UX and SEO refinements can create a clearer, more effective
            experience without changing the company&apos;s core services.
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
              Xtreme Concrete Cutting &amp; Demolition UX &amp; SEO Exploration
            </h2>

            <p className="portfolio-project-description">
              This project was originally developed in collaboration with a
              client, where the final version reflects their preferences and
              business decisions. This exploration presents an alternative UX
              and SEO driven approach that shows how refinements to layout,
              hierarchy, service presentation, internal linking, and local
              content structure can improve clarity, usability, and search
              visibility while maintaining the same concrete cutting and
              demolition service offering.
            </p>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Improves first impression, trust, and service clarity from the first screen."
          description="In the client version, important business information competes for attention early, which can make the core offer less immediate. The UX and SEO exploration simplifies the hierarchy, clarifies what the company does, and structures the homepage more intentionally so users can understand the business faster while search engines can more easily interpret the page focus."
          before="/images/homepage-xtreme.jpeg"
          after="/images/ux-homepage-xtreme.jpeg"
          beforeAlt="Xtreme homepage client version"
          afterAlt="Xtreme homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Makes the company’s offer clearer and the next action easier to identify."
          description="The client version introduces the business, but the main value proposition and call to action are less direct. The UX and SEO exploration strengthens the headline, improves supporting copy, and gives the primary action more emphasis so visitors understand the service immediately while the hero aligns more clearly with relevant service based search intent."
          before="/images/hero-xtreme.png"
          after="/images/ux-hero-xtreme.png"
          beforeAlt="Xtreme hero client version"
          afterAlt="Xtreme hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Creates a clearer path through the site and supports stronger discoverability."
          description="The client version includes the essential links, but the structure is less supportive of fast scanning and service discovery. The UX and SEO exploration organizes navigation more clearly, helping users move through the website more confidently while improving internal linking and making site content easier to crawl."
          before="/images/navigation-xtreme.png"
          after="/images/ux-navigation-xtreme.png"
          beforeAlt="Xtreme navigation client version"
          afterAlt="Xtreme navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="About Section"
          takeaway="Builds trust faster by making the company message easier to understand."
          description="The client version includes business information, but the message is less structured for quick scanning. The UX and SEO exploration improves hierarchy, spacing, and readability so visitors can understand the company more easily while the section does a better job reinforcing professionalism and credibility."
          before="/images/about-xtreme.png"
          after="/images/ux-about-xtreme.png"
          beforeAlt="Xtreme about section client version"
          afterAlt="Xtreme about section UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Makes services easier to scan and strengthens service specific SEO clarity."
          description="In the client version, the available services are present, but the section feels denser and less structured for quick understanding. The UX and SEO exploration improves grouping, spacing, and hierarchy so users can scan concrete cutting and demolition services more easily while the page supports clearer keyword targeting for individual services."
          before="/images/services-xtreme.png"
          after="/images/ux-services-xtreme.png"
          beforeAlt="Xtreme services client version"
          afterAlt="Xtreme services UX and SEO exploration"
        />

        <ComparisonSection
          title="Equipment Section"
          takeaway="Adds more structure and makes capabilities easier to understand."
          description="The client version presents equipment information, but the section is less refined in hierarchy and visual flow. The UX and SEO exploration organizes the content more clearly so visitors can understand the company’s capabilities faster while the page communicates specialization more effectively."
          before="/images/equipment-xtreme.png"
          after="/images/ux-equipment-xtreme.png"
          beforeAlt="Xtreme equipment section client version"
          afterAlt="Xtreme equipment section UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Section"
          takeaway="Creates a smoother conversion path with clearer hierarchy and better flow."
          description="The client version includes the necessary contact elements, but the section is less guided visually. The UX and SEO exploration restructures the contact area with clearer form hierarchy, stronger supporting context, and more intentional grouping so visitors can move toward contacting the business more smoothly."
          before="/images/contact-xtreme.jpeg"
          after="/images/ux-contact-xtreme.jpeg"
          beforeAlt="Xtreme contact client version"
          afterAlt="Xtreme contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Creates a more comfortable and polished experience on smaller screens."
          description="The client version works on mobile, but some areas feel tighter and less refined in rhythm and spacing. The UX and SEO exploration improves spacing, readability, tap target comfort, and section flow so the mobile experience feels more polished and easier to use while preserving the same business message."
          before="/images/xtreme-portfolio1.png"
          after="/images/ux-mobile-xtreme.jpeg"
          beforeAlt="Xtreme mobile client version"
          afterAlt="Xtreme mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section ux-reflection-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration shows how thoughtful changes to hierarchy,
              service presentation, content structure, and conversion flow can
              improve both user understanding and search visibility.
            </p>

            <div className="ux-reflection-outcomes">
              <div className="ux-reflection-outcome">Clearer user journey</div>
              <div className="ux-reflection-outcome">
                Stronger content structure for SEO
              </div>
              <div className="ux-reflection-outcome">
                Higher conversion potential
              </div>
            </div>

            <p className="portfolio-project-description">
              While the client version reflects real collaboration and client
              priorities, this alternative approach shows how targeted UX and
              SEO refinements can create a clearer experience, stronger search
              visibility, and a more effective website overall.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}