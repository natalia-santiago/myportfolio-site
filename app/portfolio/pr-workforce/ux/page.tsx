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
                Improved hierarchy, structure, and discoverability
              </p>

              <button
                type="button"
                className="portfolio-project-image-button ux-comparison-image-button"
                onClick={() => setSelectedImage(after)}
                aria-label={`Open ${title} UX and SEO exploration`}
              >
                <div className="portfolio-project-image-wrap portfolio-hover-zoom ux-comparison-image-wrap ux-comparison-image-wrap-improved">
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
              business decisions. This exploration presents an alternative UX
              and SEO driven approach that shows how refinements to layout,
              hierarchy, internal linking, and content structure can improve
              clarity, usability, and search visibility while maintaining the
              same service offering.
            </p>
          </article>
        </section>

        <ComparisonSection
          title="Homepage"
          takeaway="Improves clarity, hierarchy, and SEO targeting from the first screen."
          description="In the client version, multiple messages compete for attention early, which makes it harder to quickly understand the company’s core value. The UX and SEO exploration simplifies the hierarchy, gives the main staffing message more priority, and structures content more clearly so users can scan faster while search engines get a stronger understanding of the page’s focus."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Makes the offer clearer and the next step easier to identify."
          description="The client version introduces the business with less emphasis on the primary message and next step. The UX and SEO exploration strengthens the headline, improves supporting copy, and gives the call to action more prominence, helping users understand the offer immediately while aligning the section more clearly with relevant search terms."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Creates a cleaner path for both users and search engines."
          description="The client version provides the needed links, but the structure is less supportive of fast scanning and page discovery. The UX and SEO exploration organizes navigation more clearly, making it easier for users to move through the site while also improving internal linking and crawlability."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Makes offerings easier to scan and strengthens service related keyword clarity."
          description="In the client version, services are presented in a denser layout, which makes scanning more effortful. The UX and SEO exploration increases spacing, clarifies grouping, and improves content hierarchy so users can understand the offerings more easily while the page supports stronger service related keyword targeting."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX and SEO exploration"
        />

        <ComparisonSection
          title="Industries Section"
          takeaway="Improves readability and helps the content communicate more clearly."
          description="The client version includes helpful content, but the section is less structured for quick comprehension. The UX and SEO exploration improves grouping, spacing, and readability so users can process the information more easily while the content becomes clearer and more interpretable for search engines."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Section"
          takeaway="Creates a smoother conversion path with clearer form hierarchy."
          description="The client version includes the necessary contact elements, but the visual flow is less intentional. The UX and SEO exploration restructures the section with a clearer form hierarchy, better content grouping, and a more guided path to action, creating a smoother conversion experience while keeping important information easy to access."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          takeaway="Adds stronger emphasis to the conversion moment."
          description="In the client version, the call to action is present but less visually dominant. The UX and SEO exploration gives the contact prompt stronger contrast, clearer hierarchy, and more direct emphasis so users are guided more confidently toward the next step."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Creates a more readable, comfortable, and polished mobile experience."
          description="The client version works on mobile, but content feels tighter and less refined in places. The UX and SEO exploration improves spacing, readability, section rhythm, and tap target clarity so the mobile experience feels more comfortable and polished while preserving the same content and business message."
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