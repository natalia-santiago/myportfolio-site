"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { FaGithub, FaGlobe, FaSearchPlus } from "react-icons/fa";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="page-shell">
      <Header />

      <main className="portfolio-page">
        <section className="portfolio-hero">
          <h1 className="portfolio-title">Portfolio</h1>

          <p className="portfolio-intro">
            A collection of websites and applications I’ve designed and
            developed, focused on responsive design, clean structure, and
            real-world usability.
          </p>
        </section>

        <section className="portfolio-grid-section">
          <div className="portfolio-grid">
            <article className="portfolio-project-card">
              <div className="portfolio-project-content">
                <div className="portfolio-project-copy">
                  <p className="portfolio-project-eyebrow">
                    March 2026 · Client Website
                  </p>

                  <h2 className="portfolio-project-title">
                    Xtreme Concrete Cutting &amp; Demolition 
                  </h2>

                  <p className="portfolio-project-description">
                    A production-ready concrete cutting and demolition company
                    website designed and developed to support performance,
                    usability, responsive access across devices, and lead
                    generation.
                  </p>

                  <ul className="portfolio-project-features">
                    <li>
                      Developed a production-ready website tailored
                      to the construction industry.
                    </li>
                    <li>
                      Built a responsive, mobile-first application using Next.js
                      and Tailwind CSS.
                    </li>
                    <li>
                      Implemented SEO best practices, metadata, and local
                      keyword optimization.
                    </li>
                    <li>
                      Integrated contact forms and SMS-based workflows to
                      streamline client inquiries.
                    </li>
                    <li>
                      Managed deployment, domain configuration, and hosting with
                      Netlify.
                    </li>
                  </ul>

                  <div className="portfolio-project-tags">
                    <span className="portfolio-project-tag">UI/UX Design</span>
                    <span className="portfolio-project-tag">
                      Responsive Web Design
                    </span>
                    <span className="portfolio-project-tag">
                      Front-End Development
                    </span>
                    <span className="portfolio-project-tag">Next.js</span>
                    <span className="portfolio-project-tag">React</span>
                    <span className="portfolio-project-tag">
                      Tailwind CSS
                    </span>
                  </div>

                  <div className="portfolio-project-links">
                    <a
                      href="https://xtremeconcretecutting.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="Live website"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/natalia-santiago/xtreme-concrete-site"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="GitHub repository"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <a
                    href="/portfolio/xtreme-concrete/ux"
                    className="portfolio-project-ux-button"
                  >
                    UX & SEO Exploration
                  </a>
                </div>

                <div className="portfolio-project-media">
                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() =>
                      setSelectedImage("/images/xtreme-portfolio1.png")
                    }
                    aria-label="Open Xtreme Concrete preview image 1"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/xtreme-portfolio1.png"
                        alt="Xtreme Concrete Cutting and Demolition website preview showing the live website layout and branding."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() =>
                      setSelectedImage("/images/xtreme-portfolio2.png")
                    }
                    aria-label="Open Xtreme Concrete preview image 2"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/xtreme-portfolio2.png"
                        alt="Xtreme Concrete Cutting and Demolition website preview showing a second view of the responsive client website."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </article>

            <article className="portfolio-project-card">
              <div className="portfolio-project-content">
                <div className="portfolio-project-copy">
                  <p className="portfolio-project-eyebrow">
                    September 2025 · Client Website
                  </p>

                  <h2 className="portfolio-project-title">
                    P&amp;R Workforce LLC
                  </h2>

                  <p className="portfolio-project-description">
                    A production-ready staffing company website designed and
                    developed to support business visibility, responsive access
                    across devices, and lead generation for employers and job
                    seekers.
                  </p>

                  <ul className="portfolio-project-features">
                    <li>
                      Designed and developed a responsive website from concept to
                      deployment.
                    </li>
                    <li>Built with Next.js, React, and Tailwind CSS.</li>
                    <li>
                      Implemented SEO best practices, metadata, and local
                      keyword optimization.
                    </li>
                    <li>
                      Integrated contact forms and dynamic components to support
                      lead generation.
                    </li>
                    <li>
                      Managed deployment, domain configuration, and hosting.
                    </li>
                  </ul>

                  <div className="portfolio-project-tags">
                    <span className="portfolio-project-tag">UI/UX Design</span>
                    <span className="portfolio-project-tag">
                      Responsive Web Design
                    </span>
                    <span className="portfolio-project-tag">
                      Front-End Development
                    </span>
                    <span className="portfolio-project-tag">Next.js</span>
                    <span className="portfolio-project-tag">React</span>
                    <span className="portfolio-project-tag">
                      Tailwind CSS
                    </span>
                  </div>

                  <div className="portfolio-project-links">
                    <a
                      href="https://prworkforcenc.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="Live website"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/natalia-santiago/prworkforce-site"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="GitHub repository"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <a
                    href="/portfolio/pr-workforce/ux"
                    className="portfolio-project-ux-button"
                  >
                    UX & SEO Exploration
                  </a>
                </div>

                <div className="portfolio-project-media">
                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() => setSelectedImage("/images/pr-portfolio1.png")}
                    aria-label="Open P&R Workforce LLC preview image 1"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/pr-portfolio1.png"
                        alt="P&R Workforce LLC homepage preview showing the live client website layout and branding."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() => setSelectedImage("/images/pr-portfolio2.png")}
                    aria-label="Open P&R Workforce LLC preview image 2"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/pr-portfolio2.png"
                        alt="P&R Workforce LLC website preview showing a second view of the client website design and responsive presentation."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </article>

            <article className="portfolio-project-card">
              <div className="portfolio-project-content">
                <div className="portfolio-project-copy">
                  <p className="portfolio-project-eyebrow">
                    January 2026 · Full-Stack Web Application
                  </p>

                  <h2 className="portfolio-project-title">Job Tracker</h2>

                  <p className="portfolio-project-description">
                    A database-driven job tracking application built with React,
                    Node.js, Express, and MongoDB for managing job applications
                    through a full-stack workflow.
                  </p>

                  <ul className="portfolio-project-features">
                    <li>
                      Full-stack React, Express, and MongoDB application.
                    </li>
                    <li>CRUD functionality for managing job records.</li>
                    <li>JWT authentication with protected routes.</li>
                    <li>Filtering, sorting, and status tracking.</li>
                    <li>Responsive and scalable UI design.</li>
                  </ul>

                  <div className="portfolio-project-tags">
                    <span className="portfolio-project-tag">React</span>
                    <span className="portfolio-project-tag">Node.js</span>
                    <span className="portfolio-project-tag">Express</span>
                    <span className="portfolio-project-tag">MongoDB</span>
                    <span className="portfolio-project-tag">REST API</span>
                    <span className="portfolio-project-tag">
                      JWT Authentication
                    </span>
                  </div>

                  <div className="portfolio-project-links">
                    <a
                      href="https://job-tracker-frontend.netlify.app/register"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="Live demo"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/natalia-santiago/job-tracker"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-circle"
                      aria-label="GitHub repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="portfolio-project-media">
                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() =>
                      setSelectedImage("/images/jobtracker-dashboard.png")
                    }
                    aria-label="Open Job Tracker dashboard image"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/jobtracker-dashboard.png"
                        alt="Job Tracker dashboard showing job application records, filters, and performance metrics."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="portfolio-project-image-button"
                    onClick={() =>
                      setSelectedImage("/images/jobtracker-add-job.png")
                    }
                    aria-label="Open Job Tracker add job image"
                  >
                    <div className="portfolio-project-image-wrap portfolio-hover-zoom">
                      <img
                        src="/images/jobtracker-add-job.png"
                        alt="Job Tracker add job page showing the form used to create and store new application records."
                        className="portfolio-project-image"
                      />
                      <div
                        className="portfolio-image-overlay"
                        aria-hidden="true"
                      >
                        <FaSearchPlus className="portfolio-zoom-icon" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="portfolio-cta">
          <h2 className="portfolio-cta-title">
            Interested in working together?
          </h2>

          <p className="portfolio-cta-text">
            Let’s talk about your website, your goals, and how we can build
            something that works for your business.
          </p>

          <a href="/booking" className="portfolio-cta-button">
            Book Your Free Consultation
          </a>
        </section>
      </main>

      {selectedImage && (
        <Lightbox
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <Footer />
    </div>
  );
}