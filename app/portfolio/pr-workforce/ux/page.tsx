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
            P&amp;R Workforce website, focused on improving how users understand
            the service and take action. The goal was not to change the
            business, but to improve how clearly it communicates value to both
            employers and job seekers.
          </p>

          <p className="portfolio-intro ux-intro">
            By refining content hierarchy, restructuring key sections, and
            introducing more intentional navigation and calls to action, this
            exploration shows how the same services can be presented in a way
            that is easier to scan, more action driven, and better aligned with
            how users search for staffing solutions in North Carolina.
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
              stronger focus on clarity, usability, and conversion. It centers
              on helping users quickly understand whether they are hiring or
              looking for work, and what step to take next. The exploration
              improves how services are presented, how navigation supports
              discovery, and how key actions are prioritized across desktop and
              mobile, while strengthening the site’s local SEO structure through
              clearer access to services and service areas.
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
          takeaway="Clarifies the staffing offer immediately and guides both employers and workers to the right next step."
          description="In the client version, the homepage includes valuable information, but the main message takes longer to understand. The exploration brings the staffing focus forward with a clearer headline, stronger section order, and earlier trust building content. It separates paths for employers and job seekers while aligning the page more closely with how users search for staffing services in North Carolina."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Turns a general introduction into a clear, action focused entry point for both hiring and job seeking."
          description="In the client version, users need to read more before understanding what to do next. The exploration shifts the hero toward immediate clarity with a stronger headline, more concise supporting copy, and clearly defined actions. It also reinforces location relevance and service scope earlier in the experience."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Expands site navigation to better support service discovery and local SEO coverage."
          description="In the client version, the navigation gives access to core pages but does not fully support how users explore staffing services or how search engines understand site structure. The exploration adds services and service areas directly into navigation, improving discoverability, internal linking, and visibility for location based and service specific searches."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Improves scanability and turns services into clear, actionable entry points."
          description="In the client version, services appear as a dense list, which makes scanning harder and gives users less direction on where to go next. The exploration restructures the section into a clearer card based layout that improves readability, encourages interaction, and better supports keyword targeting and internal linking for individual service types."
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
          beforeAlt="Services client version"
          afterAlt="Services UX and SEO exploration"
        />

        <ComparisonSection
          title="Industries Section"
          takeaway="Improves readability and helps the content communicate more clearly."
          description="The client version includes useful content, but the section is less structured for quick comprehension. The exploration improves grouping, spacing, and hierarchy so users can process the information faster while the content becomes easier to interpret and better organized for search visibility."
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
          beforeAlt="Industries client version"
          afterAlt="Industries UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Page"
          takeaway="Creates a clearer conversion path by separating employer and job seeker intent."
          description="In the client version, the contact page works, but it provides less guidance on what users should submit or how the company supports different inquiries. The exploration introduces clearer supporting content, better hierarchy, and stronger intent separation for employers and job seekers, creating a more confident and more purposeful contact experience."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          takeaway="Strengthens the call to action and makes the next step more visible and immediate."
          description="In the client version, the contact prompt is present but blends more into the page. The exploration increases contrast and emphasis with a darker section and more prominent call to action buttons, helping the prompt stand out at the right moment and encouraging users to take action."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Prioritizes key actions and simplifies decision making on mobile."
          description="In the client version, the mobile layout places the full company description and service tags before the primary actions, which makes the experience feel heavier before users can act. The exploration brings key actions forward with larger full width buttons and a more focused content hierarchy, making it easier to choose between hiring staff or finding work."
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
              structure, hierarchy, and content prioritization can significantly
              affect how a website performs. Rather than adding new features,
              the improvements focus on making existing content easier to
              understand, easier to navigate, and more aligned with user intent.
            </p>

            <div className="ux-reflection-outcomes">
              <div className="ux-reflection-outcome">
                Clearer path for employers and job seekers
              </div>
              <div className="ux-reflection-outcome">
                Improved structure for local SEO visibility
              </div>
              <div className="ux-reflection-outcome">
                More direct and action driven experience
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