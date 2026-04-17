"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function PortfolioPage() {
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
                    January 2026 · Full-Stack Web Application
                  </p>

                  <h2 className="portfolio-project-title">Job Tracker</h2>

                  <p className="portfolio-project-description">
                    A database-driven job tracking application built with React, Node.js, Express, and MongoDB for managing job applications through a full-stack workflow.
                </p>

                  <ul className="portfolio-project-features">
                    <li>Full-stack React, Express, and MongoDB application.</li>
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
                        aria-label="Live Demo"
                    >
                        <FaGlobe />
                    </a>

                    <a
                        href="https://github.com/natalia-santiago/job-tracker"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-circle"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub />
                    </a>
                    </div>
                </div>

                <div className="portfolio-project-media">
                  <div className="portfolio-project-image-wrap">
                    <img
                      src="/images/jobtracker-dashboard.png"
                      alt="Job Tracker dashboard showing job application records, filters, and performance metrics."
                      className="portfolio-project-image"
                    />
                  </div>

                  <div className="portfolio-project-image-wrap">
                    <img
                      src="/images/jobtracker-add-job.png"
                      alt="Job Tracker add job page showing the form used to create and store new application records."
                      className="portfolio-project-image"
                    />
                  </div>
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

      <Footer />
    </div>
  );
}