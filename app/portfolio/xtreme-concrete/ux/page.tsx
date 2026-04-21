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
            This case study explores a redesigned UX and SEO approach 
            for Xtreme Concrete Cutting & Demolition, focused on improving 
            clarity, strengthening local search visibility, and creating a 
            more direct path from first impression to conversion.
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
              Xtreme Concrete Cutting &amp; Demolition
            </h2>

            <p className="portfolio-project-description">
              This UX and SEO exploration reimagines the Xtreme Concrete 
              Cutting & Demolition website with a stronger focus on content 
              hierarchy, service clarity, and local search relevance. The 
              goal was to create a more structured experience that clearly 
              communicates services, reinforces trust, and guides users more 
              efficiently toward taking action.
            </p>

            <div className="portfolio-project-links">
              <a
                href="https://xtreme-ux-concept.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View Xtreme UX and SEO exploration live website"
              >
                <FaGlobe />
              </a>

              <a
                href="https://github.com/natalia-santiago/xtreme-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View Xtreme UX and SEO exploration GitHub repository"
              >
                <FaGithub />
              </a>
            </div>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Clear, location-based messaging improves clarity and search relevance."
          description="The client version uses a broad headline that lacks clear service and location context. The UX and SEO version introduces a keyword-focused headline that immediately communicates what the business does and where it operates, improving both user understanding and SEO performance."
          before="/images/homepage-xtreme.jpeg"
          after="/images/ux-homepage-xtreme.jpeg"
          beforeAlt="Xtreme homepage client version"
          afterAlt="Xtreme homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Stronger first impression through clear, service-focused messaging."
          description="The client version uses a generic headline that does not clearly define the service. The UX and SEO version introduces a direct, keyword-focused headline with supporting trust signals, improving clarity, credibility, and immediate user understanding."
          before="/images/hero-xtreme.png"
          after="/images/ux-hero-xtreme.png"
          beforeAlt="Xtreme hero client version"
          afterAlt="Xtreme hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Improved navigation clarity strengthens usability and internal linking."
          description="The client version uses a minimal navigation structure with limited page access. The UX and SEO version introduces clearer navigation, adds a dedicated contact page, and improves internal linking, making it easier for users and search engines to explore the site."
          before="/images/navigation-xtreme.png"
          after="/images/ux-navigation-xtreme.png"
          beforeAlt="Xtreme navigation client version"
          afterAlt="Xtreme navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="About Section"
          takeaway="Location-focused content improves relevance and local SEO visibility."
          description="The client version provides general business information without strong location targeting. The UX and SEO version introduces location-specific content and service areas, improving clarity for users and strengthening local search relevance."
          before="/images/about-xtreme.png"
          after="/images/ux-about-xtreme.png"
          beforeAlt="Xtreme about section client version"
          afterAlt="Xtreme about section UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Clearer service hierarchy improves scannability and search relevance."
          description="The client version presents services with limited structure and context. The UX and SEO version introduces a clearer heading, improved hierarchy, and more descriptive content, making it easier for users to scan and helping search engines better understand each service."
          before="/images/services-xtreme.png"
          after="/images/ux-services-xtreme.png"
          beforeAlt="Xtreme services client version"
          afterAlt="Xtreme services UX and SEO exploration"
        />

        <ComparisonSection
          title="Equipment Section"
          takeaway="Structured content improves readability and reinforces key value points."
          description="The client version presents equipment information in a more text-heavy format. The UX and SEO version introduces bullet points and clearer structure, making the content easier to scan while reinforcing key benefits for both users and search engines."
          before="/images/equipment-xtreme.png"
          after="/images/ux-equipment-xtreme.png"
          beforeAlt="Xtreme equipment section client version"
          afterAlt="Xtreme equipment section UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Page"
          takeaway="Enhanced contact flow improves conversions and local SEO signals."
          description="The client version presents a basic contact form with limited structure and context.
The UX and SEO version introduces a clearer layout, supporting content, and location signals, making it easier for users to submit requests while strengthening search relevance."
          before="/images/contact-xtreme.jpeg"
          after="/images/ux-contact-xtreme.jpeg"
          beforeAlt="Xtreme contact client versioN"
          afterAlt="Xtreme contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Mobile-first design improves usability and conversion efficiency."
          description="The client version presents a more limited mobile experience with less optimized layout and CTA visibility. The UX and SEO version introduces a mobile-first structure with clear CTAs, improved spacing, and stronger messaging, making it easier for users to take action and improving overall engagement."
          before="/images/xtreme2.jpeg"
          after="/images/ux-mobile-xtreme.jpeg"
          beforeAlt="Xtreme mobile client version"
          afterAlt="Xtreme mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section ux-reflection-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration highlights how strategic improvements to messaging, 
              structure, and conversion flow can significantly enhance both user 
              experience and search performance. By aligning content with real 
              user intent and local search behavior, the UX and SEO version 
              creates a clearer, more actionable experience without changing the 
              core business offering.
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
              While the client version reflects real-world constraints and 
              priorities, this alternative approach demonstrates how 
              focused UX and SEO decisions can create a more effective and 
              competitive digital presence.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}