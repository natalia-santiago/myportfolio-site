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
            This UX and SEO exploration presents an alternative direction for 
            the P&R Workforce website, focused on improving how users understand 
            the service and take action. The goal was not to change the business, 
            but to improve how clearly it communicates its value to both employers 
            and job seekers.
          </p>

          <p className="portfolio-intro ux-intro">
            By refining content hierarchy, restructuring key sections, and 
            introducing more intentional navigation and calls to action, this 
            exploration shows how the same services can be presented in a way 
            that is easier to scan, more action-driven, and better aligned with h
            ow users search for staffing solutions in North Carolina.
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
              P&amp;R Workforce 
            </h2>

            <p className="portfolio-project-description">
              This project reimagines the P&R Workforce website with a stronger 
              focus on clarity, usability, and conversion. The exploration centers 
              on how users interact with staffing websites, particularly the need 
              to quickly understand whether they are hiring or looking for work, 
              and what step to take next. The redesign improves how services are 
              presented, how navigation supports discovery, and how key actions are 
              prioritized across both desktop and mobile. It also strengthens the 
              site’s structure for local SEO by making services and service areas 
              more accessible and better aligned with search intent. The result is 
              a more focused, user-centered experience that supports both engagement 
              and visibility.
            </p>

            <div className="portfolio-project-links">
              <a
                href="https://prworkforce-ux-concept.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-icon-link"
                aria-label="View Xtreme UX and SEO exploration live website"
              >
                <FaGlobe />
              </a>

              <a
                href="https://github.com/natalia-santiago/prworkforce-ux"
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
          takeaway="Clarifies the staffing offer immediately and guides both employers and workers to the right next step."
          description="In the client version, the homepage presents valuable information, but the core message is less immediate and requires more scanning to understand who the company serves and what action to take. The UX and SEO exploration brings the staffing focus forward by introducing a clearer headline, stronger supporting structure, and more intentional section order. The improved layout separates paths for employers and job seekers, reinforces trust earlier through real work examples, and aligns the content with how users search for staffing services in North Carolina. This makes the homepage easier to understand at a glance while also strengthening its ability to rank for relevant local and service-based queries."
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
          beforeAlt="Homepage client version"
          afterAlt="Homepage UX and SEO exploration"
        />

        <ComparisonSection
          title="Hero Section"
          takeaway="Turns a general introduction into a clear, action-focused entry point for both hiring and job seeking."
          description="In the client version, the hero introduces the company with descriptive text, but the main message requires more reading before users clearly understand what to do next. The UX and SEO exploration shifts the focus toward immediate clarity by using a stronger headline, a more concise supporting message, and clearly defined actions. The improved version separates intent by offering direct paths for both employers and job seekers, while reinforcing location relevance and service scope earlier in the experience. This makes the first screen easier to scan, more action-driven, and better aligned with how users search for staffing services."
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
          beforeAlt="Hero client version"
          afterAlt="Hero UX and SEO exploration"
        />

        <ComparisonSection
          title="Navigation"
          takeaway="Expands site navigation to better support service discovery and local SEO coverage."
          description="In the client version, the navigation is minimal and focused on basic access to key pages, but it does not fully support how users explore staffing services or how search engines understand site structure. Important pages like services and service areas are not directly accessible, limiting both discoverability and internal linking. The UX and SEO exploration introduces a more complete navigation system that includes services and service areas, making it easier for users to find relevant information while also strengthening the site's structure for search engines. This improves usability by giving users clearer paths through the site and supports better visibility for location-based and service-specific searches."
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png" 
          beforeAlt="Navigation client version"
          afterAlt="Navigation UX and SEO exploration"
        />

        <ComparisonSection
          title="Services Section"
          takeaway="Improves scanability and turns services into clear, actionable entry points."
          description="In the client version, services are presented as a dense list, which makes it harder for users to quickly scan options or understand where to go next. While all services are visible, the layout does not clearly guide interaction or highlight each offering as a distinct entry point. The UX and SEO exploration restructures this section into a more organized, card-based layout that improves readability and creates clearer separation between services. Each item feels more intentional and easier to select, encouraging interaction while also supporting stronger keyword targeting and internal linking for individual service types."
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
          title="Contact Page"
          takeaway="Creates a clearer conversion path by separating employer and job seeker intent."
          description="In the client version, the contact page provides a functional form, but the overall layout offers less guidance on what information to provide or how the company supports different types of inquiries. Users can reach out, but the experience is more generic and less tailored to their specific needs. The UX and SEO exploration restructures this section to better support both employers and job seekers by clearly defining how each group should engage. Supporting content is introduced alongside the form to guide what information to submit, while the layout improves hierarchy and readability. This creates a more confident and intentional contact experience, increasing the likelihood of meaningful inquiries while reinforcing trust."
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg" 
          beforeAlt="Contact client version"
          afterAlt="Contact UX and SEO exploration"
        />

        <ComparisonSection
          title="Contact Prompt"
          takeaway="Strengthens the call to action and makes the next step more visible and immediate."
          description="In the client version, the contact prompt is present but blends into the page, making the call to action less visually prominent. While users can still reach out, the section does not strongly capture attention or clearly signal that this is the next step. The UX and SEO exploration increases contrast and emphasis by introducing a darker section and more prominent call-to-action buttons. This makes the prompt stand out within the page flow, drawing attention at the right moment and encouraging users to take action, whether they are looking to hire staff or find work."
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
          beforeAlt="Contact prompt client version"
          afterAlt="Contact prompt UX and SEO exploration"
        />

        <ComparisonSection
          title="Mobile Experience"
          takeaway="Prioritizes key actions and simplifies decision-making on mobile."
          description="In the client version, the mobile layout presents the full company description and service tags before the primary actions, which can make the experience feel heavier and require more reading before users take action. While all content is available, the most important next steps are not immediately prioritized. The UX and SEO exploration streamlines the mobile experience by emphasizing the primary actions earlier, using larger, full-width buttons and a more focused content hierarchy. This makes it easier for users to quickly choose between hiring staff or finding work, while improving tap interaction and overall clarity on smaller screens."
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
              impact how a website performs. Rather than adding new features, the 
              improvements focus on making existing content easier to understand, 
              easier to navigate, and more aligned with user intent. By clarifying 
              the user journey, separating key audiences, and strengthening calls to 
              action, the experience becomes more direct and more effective. It 
              also reinforces the importance of aligning UX decisions with SEO 
              strategy. Clear navigation, structured service pages, and location-based 
              content not only improve usability, but also support better visibility in 
              search. 
            </p>

            <div className="ux-reflection-outcomes">
              <div className="ux-reflection-outcome">Clearer path for employers and job seekers </div>
              <div className="ux-reflection-outcome">
                Improved structure for local SEO visibility
              </div>
              <div className="ux-reflection-outcome">
                More direct and action-driven experience
              </div>
            </div>

            <p className="portfolio-project-description">
              While the client version reflects real-world collaboration and 
              business priorities, this alternative approach demonstrates how a more 
              structured and user-focused presentation can lead to stronger engagement, 
              clearer decision-making, and higher conversion potential.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}