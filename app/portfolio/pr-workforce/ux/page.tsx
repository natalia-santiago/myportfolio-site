"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaSearchPlus } from "react-icons/fa";

type ComparisonSectionProps = {
  title: string;
 takeaway: string;
  clientPoints: string[];
  explorationPoints: string[];
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

function ComparisonSection({
  title,
  takeaway,
  clientPoints,
  explorationPoints,
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

            <p className="portfolio-project-description ux-comparison-takeaway">
              {takeaway}
            </p>
          </div>

          <div className="ux-comparison-notes-grid">
            <div className="ux-comparison-notes-card">
              <p className="ux-comparison-label ux-comparison-label-client">
                Client Version
              </p>

              <ul className="ux-comparison-points">
                {clientPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="ux-comparison-notes-card ux-comparison-notes-card-improved">
              <p className="ux-comparison-label ux-comparison-label-ux">
                UX + SEO Exploration
              </p>

              <ul className="ux-comparison-points">
                {explorationPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ux-comparison-grid">
            <div className="ux-comparison-column">
              <div className="ux-comparison-meta">
                <p className="ux-comparison-subtitle">
                  Final site developed with the client
                </p>
              </div>

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
              <div className="ux-comparison-meta">
                <p className="ux-comparison-subtitle ux-comparison-subtitle-improved">
                  Improved hierarchy, structure, and discoverability
                </p>
              </div>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX and SEO exploration`}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap ux-comparison-image-wrap-improved">
                  <div className="ux-comparison-improved-badge">Improved</div>
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
            This UX and SEO exploration presents an alternative approach to the
            P&amp;R Workforce website, focusing on how layout, hierarchy,
            structure, and content organization can improve both usability and
            search visibility while working within the same business goals.
          </p>

          <p className="portfolio-intro ux-intro">
            The client version reflects the final website developed in
            collaboration with the client, while this exploration shows how
            targeted UX and SEO refinements can create a clearer, more effective
            experience without changing the core service offering.
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
              P&amp;R Workforce UX &amp; SEO Exploration
            </h2>

            <p className="portfolio-project-description">
              This project was originally developed in collaboration with a
              client, where the final version reflects their preferences and
              business decisions. This exploration presents an alternative
              UX and SEO-driven approach that shows how refinements to layout,
              hierarchy, internal linking, and content structure can improve
              clarity, usability, and search visibility while maintaining the
              same service offering.
            </p>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Improves clarity, hierarchy, and SEO targeting from the first screen."
          clientPoints={[
            "Multiple messages compete for attention early",
            "Core value takes longer to understand",
            "Weaker page focus for search visibility",
          ]}
          explorationPoints={[
            "Stronger hierarchy puts the main message first",
            "Faster scanning and clearer service understanding",
            "More focused structure supports SEO relevance",
          ]}
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Makes the offer clearer and the next step easier to identify."
          clientPoints={[
            "Primary message has less visual emphasis",
            "Call to action blends in more with surrounding content",
            "Search terms are less strongly reinforced",
          ]}
          explorationPoints={[
            "Headline and supporting copy are more intentional",
            "Call to action has stronger visibility",
            "Content aligns more clearly with search intent",
          ]}
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Creates a cleaner path for both users and search engines."
          clientPoints={[
            "Navigation works, but is less structured for fast scanning",
            "Page discovery feels less intentional",
            "Internal linking is less supportive of crawlability",
          ]}
          explorationPoints={[
            "Navigation is easier to scan and understand",
            "Users can move through the site more confidently",
            "Internal linking becomes clearer and more effective",
          ]}
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Makes offerings easier to scan and strengthens service-related keyword clarity."
          clientPoints={[
            "Denser layout makes services harder to scan",
            "Grouping feels less intentional",
            "Service hierarchy is weaker",
          ]}
          explorationPoints={[
            "More spacing improves readability",
            "Service grouping is clearer and more organized",
            "Stronger hierarchy supports both UX and SEO",
          ]}
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX and SEO exploration"
        />

        <ComparisonSection
          title="Industries Section"
          takeaway="Improves readability and helps the content communicate more clearly."
          clientPoints={[
            "Useful content is present, but harder to process quickly",
            "Grouping is less refined",
            "Section structure is less readable at a glance",
          ]}
          explorationPoints={[
            "Improved spacing supports easier scanning",
            "Content grouping is more digestible",
            "Clearer structure benefits users and search engines",
          ]}
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Section"
          takeaway="Creates a smoother conversion path with clearer form hierarchy."
          clientPoints={[
            "Necessary contact elements are present",
            "Visual flow is less guided",
            "Conversion path feels less intentional",
          ]}
          explorationPoints={[
            "Form hierarchy is easier to follow",
            "Content grouping improves usability",
            "Users are guided more naturally toward action",
          ]}
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          takeaway="Adds stronger emphasis to the conversion moment."
          clientPoints={[
            "Call to action is present but less visually dominant",
            "Next step competes more with surrounding content",
            "Prompt feels less focused",
          ]}
          explorationPoints={[
            "Stronger contrast improves visibility",
            "Hierarchy makes the next step more obvious",
            "Users are guided more confidently toward contact",
          ]}
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Creates a more readable, comfortable, and polished mobile experience."
          clientPoints={[
            "Mobile version works, but content feels tighter in places",
            "Section rhythm is less refined",
            "Readability and tap flow are less polished",
          ]}
          explorationPoints={[
            "Improved spacing makes content easier to absorb",
            "Readability and vertical rhythm are stronger",
            "Touch targets and scanning feel more comfortable",
          ]}
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
          beforeAlt="Mobile client version"
          afterAlt="Mobile UX and SEO exploration"
        />

        <section className="portfolio-grid-section">
          <article className="portfolio-project-card text-center">
            <h2 className="portfolio-project-title">Reflection</h2>

            <p className="portfolio-project-description">
              This exploration shows how small changes in hierarchy, structure,
              internal linking, and content organization can significantly
              improve how users understand a website and how search engines
              interpret it.
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
              priorities, this alternative approach shows how thoughtful UX and
              SEO refinements can create a clearer user journey, support
              stronger discoverability, and improve the overall experience.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}