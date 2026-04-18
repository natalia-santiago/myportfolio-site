"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaSearchPlus } from "react-icons/fa";

export default function PRWorkforceUXPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio-page">
        {/* HERO */}
        <section className="portfolio-hero">
          <h1 className="portfolio-title">UX Exploration</h1>

          <p className="portfolio-intro">
            P&amp;R Workforce LLC — Client Project + UX Exploration
          </p>
        </section>

        {/* INTRO */}
        <section className="portfolio-grid-section">
          <div className="portfolio-project-card">
            <div className="portfolio-project-content">
              <div className="portfolio-project-copy">
                <h2 className="portfolio-project-title">
                  P&amp;R Workforce UX Exploration
                </h2>

                <p className="portfolio-project-description">
                  This UX exploration builds on the production website I designed
                  and developed for P&amp;R Workforce. Using the same business
                  context and goals, I explored an alternative direction focused
                  on improving visual hierarchy, spacing, and overall user flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTIONS */}

        {/* Homepage */}
        <Comparison
          title="Homepage"
          before="/images/homepage-pr.jpeg"
          after="/images/ux-homepage-pr.jpeg"
        />

        {/* Hero */}
        <Comparison
          title="Hero Section"
          before="/images/hero-pr.png"
          after="/images/ux-hero-pr.png"
        />

        {/* Navigation */}
        <Comparison
          title="Navigation"
          before="/images/navigation-pr.png"
          after="/images/ux-navigation-pr.png"
        />

        {/* Services */}
        <Comparison
          title="Services Section"
          before="/images/services-pr.png"
          after="/images/ux-services-pr.png"
        />

        {/* Industries */}
        <Comparison
          title="Industries Section"
          before="/images/industries-pr.png"
          after="/images/ux-industries-pr.png"
        />

        {/* Contact */}
        <Comparison
          title="Contact Section"
          before="/images/contact-pr.jpeg"
          after="/images/ux-contact-pr.jpeg"
        />

        {/* Contact Prompt */}
        <Comparison
          title="Contact Prompt"
          before="/images/contact-prompt-pr.png"
          after="/images/ux-contact-prompt-pr.png"
        />

        {/* Mobile */}
        <Comparison
          title="Mobile Experience"
          before="/images/prwork2.jpeg"
          after="/images/mobile-pr.jpeg"
        />

        {/* REFLECTION */}
        <section className="portfolio-cta">
          <h2 className="portfolio-cta-title">Reflection</h2>

          <p className="portfolio-cta-text">
            This exploration reinforced the impact of spacing, hierarchy, and
            structured layouts in improving clarity and usability while working
            within the same content and business goals.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------
   REUSABLE COMPONENT
------------------------- */

function Comparison({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  return (
    <section className="portfolio-grid-section">
      <div className="portfolio-project-card">
        <div className="portfolio-project-content">
          <div className="portfolio-project-copy">
            <h2 className="portfolio-project-title">{title}</h2>
          </div>

          <div className="portfolio-project-media">
            <div className="portfolio-project-image-wrap portfolio-hover-zoom">
              <img src={before} alt={`${title} production`} />
              <div className="portfolio-image-overlay">
                <FaSearchPlus className="portfolio-zoom-icon" />
              </div>
            </div>

            <div className="portfolio-project-image-wrap portfolio-hover-zoom">
              <img src={after} alt={`${title} ux`} />
              <div className="portfolio-image-overlay">
                <FaSearchPlus className="portfolio-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}