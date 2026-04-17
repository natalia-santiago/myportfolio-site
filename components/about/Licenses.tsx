import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

export default function Licenses() {
  return (
    <section className="about-page licenses-page">
      <div className="about-title-wrap">
        <h1 className="about-title">About Me</h1>
      </div>

      <section className="licenses-section">
        <h3 className="work-title">Licenses & Certifications</h3>

        <div className="licenses-list">
          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/Google.jfif"
                alt="Google UX Design Professional Certificate"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued April 2024</p>

              <h3 className="license-title">
                Google UX Design Professional Certificate
              </h3>

              <p className="license-issuer">Coursera</p>

              <p className="license-description">
                Those who earn the Google UX Design Certificate, developed by
                Google, have demonstrated their competence in the end-to-end
                design process. Through hands-on activities and assessments,
                graduates develop proficiency in empathizing with users,
                defining pain points, ideating solutions, creating wireframes
                and prototypes, and testing designs, preparing them for
                introductory-level roles in UX design.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                ea098eb8-a856-4d65-a69c-49f0f311a060
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">Prototyping</span>
                  <span className="work-skill-pill">Wireframing</span>
                  <span className="work-skill-pill">
                    Conducting Usability Studies
                  </span>
                  <span className="work-skill-pill">Figma & Adobe XD</span>
                  <span className="work-skill-pill">
                    Sketching and Ideating
                  </span>
                  <span className="work-skill-pill">
                    User Experience Research (UXR)
                  </span>
                  <span className="work-skill-pill">UX Design Tools</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/badges/ea098eb8-a856-4d65-a69c-49f0f311a060/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Google UX Design Professional Certificate credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/software.jfif"
                alt="Computer Science 307: Software Engineering"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued May 2024</p>

              <h3 className="license-title">
                Computer Science 307: Software Engineering
              </h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Covered core software engineering principles including process 
                models, agile development, system design, and testing methodologies.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                d22d0827-b96d-4079-9cf0-ff9b7033d298
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">Software Engineering</span>
                  <span className="work-skill-pill">Spiral Model</span>
                  <span className="work-skill-pill">
                    Systems Analysis and Design
                  </span>
                  <span className="work-skill-pill">
                    Systems Development Life Cycle
                  </span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/d22d0827-b96d-4079-9cf0-ff9b7033d298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Computer Science 307: Software Engineering credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/database.jfif"
                alt="Computer Science 107: Database Fundamentals"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued July 2024</p>

              <h3 className="license-title">
                Computer Science 107: Database Fundamentals
              </h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Learned database design, SQL, data modeling, and 
                fundamentals of database administration and security.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                d8399026-197e-4a02-9b68-eb7bd949093f
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">
                    Database Management Systems
                  </span>
                  <span className="work-skill-pill">Data Modeling</span>
                  <span className="work-skill-pill">
                    SQL (Programming Language)
                  </span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/d8399026-197e-4a02-9b68-eb7bd949093f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Computer Science 107: Database Fundamentals credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/discrete.jfif"
                alt="Math 108: Discrete Mathematics"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued June 2024</p>

              <h3 className="license-title">Math 108: Discrete Mathematics</h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Explored key concepts including logic, sets, probability, 
                recursion, and graph theory for computational problem-solving.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                2024e648-9736-4bbb-b7f6-69542fe121de
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">Discrete Mathematics</span>
                  <span className="work-skill-pill">Probability</span>
                  <span className="work-skill-pill">Recursion</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/2024e648-9736-4bbb-b7f6-69542fe121de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Math 108: Discrete Mathematics credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/physics.jfif"
                alt="Physics 111: Physics I"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued July 2024</p>

              <h3 className="license-title">Physics 111: Physics I</h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Applied fundamental physics concepts including Newton’s 
                laws, force mechanics, momentum, and wave behavior.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                5b0e593c-f42e-48e3-b8df-070872ad4734
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">General Physics I</span>
                  <span className="work-skill-pill">Physics</span>
                  <span className="work-skill-pill">Scientific Methods</span>
                  <span className="work-skill-pill">Vapor Pressure</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/5b0e593c-f42e-48e3-b8df-070872ad4734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Physics 111: Physics I credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/philosophy.jfif"
                alt="Philosophy 301: Principles of Philosophy"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued July 2024</p>

              <h3 className="license-title">
                Philosophy 301: Principles of Philosophy
              </h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Analyzed major philosophical concepts including ethics, 
                free will, and perspectives from key historical thinkers.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                b497fa36-1c34-492f-9824-dea99ef6656f
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">Ancient Philosophy</span>
                  <span className="work-skill-pill">History Of Philosophy</span>
                  <span className="work-skill-pill">
                    Introduction To Philosophy
                  </span>
                  <span className="work-skill-pill">Philosophy Of Science</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/b497fa36-1c34-492f-9824-dea99ef6656f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View Philosophy 301: Principles of Philosophy credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/history.jfif"
                alt="History 307: American Civil Rights Movement"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued July 2024</p>

              <h3 className="license-title">
                History 307: American Civil Rights Movement
              </h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Examined the origins, development, and impact of 
                the American Civil Rights Movement and its historical context.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                059871e0-57a0-4428-a0d1-ed58b916cd80
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">
                    African-American History
                  </span>
                  <span className="work-skill-pill">
                    American Civil Right Movement
                  </span>
                  <span className="work-skill-pill">
                    United States History
                  </span>
                  <span className="work-skill-pill">World History</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/059871e0-57a0-4428-a0d1-ed58b916cd80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View History 307: American Civil Rights Movement credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>

          <article className="license-card">
            <div className="license-card-media">
              <Image
                src="/images/civil.jfif"
                alt="History 106: The Civil War and Reconstruction"
                width={520}
                height={520}
                className="license-image"
              />
            </div>

            <div className="license-card-content">
              <p className="license-issued">Issued July 2024</p>

              <h3 className="license-title">
                History 106: The Civil War and Reconstruction
              </h3>

              <p className="license-issuer">Study.com</p>

              <p className="license-description">
                Studied the causes, key events, and aftermath of the Civil War, 
                including Reconstruction and its lasting effects.
              </p>

              <p className="license-description">
                <strong>Credential ID:</strong>{" "}
                13d7ac67-a06e-4f3a-b2c0-023fbc588af0
              </p>

              <div className="work-skills">
                <div className="work-skills-pills">
                  <span className="work-skill-pill">
                    African-American History
                  </span>
                  <span className="work-skill-pill">American Civil War</span>
                  <span className="work-skill-pill">
                    United States History
                  </span>
                  <span className="work-skill-pill">World History</span>
                </div>
              </div>

              <div className="work-links">
                <Link
                  href="https://www.credly.com/earner/earned/badge/13d7ac67-a06e-4f3a-b2c0-023fbc588af0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-icon-link"
                  aria-label="View History 106: The Civil War and Reconstruction credential"
                  title="View credential"
                >
                  <FaGlobe />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}