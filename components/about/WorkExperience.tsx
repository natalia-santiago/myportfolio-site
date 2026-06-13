"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { FaGithub, FaGlobe, FaInstagram } from "react-icons/fa";

export default function WorkExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="about-page">
        <div className="about-title-wrap">
          <h1 className="about-title">About Me</h1>
        </div>

        <section className="work-section">
          <div className="work-container">
            <h3 className="work-title">Experience</h3>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Web Developer — Crafty Cati
                </h3>

                <p className="work-meta">
                  Freelance • April 2026 • Raleigh, North Carolina — Remote
                </p>

                <p className="work-description">
                  Designed and developed a custom website for a handmade gifts and workshops business.
                </p>

                <ul className="work-list">
                  <li>Built a custom Next.js website from scratch</li>
                  <li>Developed English and Spanish experiences</li>
                  <li>Added automatic language detection</li>
                  <li>Integrated Cloudinary image management</li>
                  <li>Implemented CMS, SEO, and responsive design</li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">Next.js</span>
                    <span className="work-skill-pill">React</span>
                    <span className="work-skill-pill">Cloudinary</span>
                    <span className="work-skill-pill">CMS</span>
                    <span className="work-skill-pill">SEO</span>
                    <span className="work-skill-pill">Internationalization (i18n)</span>
                    <span className="work-skill-pill">Responsive Web Design</span>
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://craftycati.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View live site"
                    title="View live site"
                  >
                    <FaGlobe />
                  </a>

                  {/* Add GitHub icon later if repo becomes public */}
                </div>
              </div>

              <div className="work-images">
                {[
                  "/images/craftycati1.jpeg",
                  "/images/craftycati2.jpeg",
                ].map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Crafty Cati Website Screenshot ${i + 1}`}
                    className="work-image"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Content Producer — Tucker Trivette Disc Golf
                </h3>

                <p className="work-meta">
                  Part Time • March 2026 • Mishawaka, Indiana
                </p>

                <p className="work-description">
                  Produced engaging content for a professional disc golf athlete,
                  capturing tournament highlights, practice sessions, and social
                  media moments.
                </p>

                <ul className="work-list">
                  <li>Filmed and edited short-form and long-form video content</li>
                  <li>
                    Created Instagram-focused content to grow audience engagement
                  </li>
                  <li>
                    Captured tournament footage and behind-the-scenes moments
                  </li>
                  <li>
                    Collaborated directly to align content with personal brand
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Content Creation & Editing
                    </span>
                    <span className="work-skill-pill">
                      Social Media Strategy
                    </span>
                    <span className="work-skill-pill">
                      Video Production (Short & Long Form)
                    </span>
                    <span className="work-skill-pill">
                      Brand Alignment & Storytelling
                    </span>
                    <span className="work-skill-pill">
                      Audience Engagement Optimization
                    </span>
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://www.instagram.com/tucker.disc?igsh=ZzNhNWE4MHpsZm15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="work-images">
                {[
                  "/images/TuckerDisc1.jpeg",
                  "/images/TuckerDisc2.jpeg",
                  "/images/TuckerDisc3.jpeg",
                ].map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Tucker Disc ${i + 1}`}
                    className="work-image"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Web Developer — Little Hands Mobile Soft Play
                </h3>

                <p className="work-meta">
                  Freelance • March 2026 • Goldsboro, North Carolina — Remote
                </p>

                <ul className="work-list">
                  <li className="work-list-item">
                    Designed and developed a fully custom website from scratch
                  </li>
                  <li className="work-list-item">
                    Focused on mobile responsiveness and user experience
                  </li>
                  <li className="work-list-item">
                    Worked directly with the client to implement custom features
                  </li>
                  <li className="work-list-item">
                    Integrated contact forms, SEO, and performance optimizations
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Responsive Web Design
                    </span>
                    <span className="work-skill-pill">
                      Front-End Development
                    </span>
                    <span className="work-skill-pill">UI/UX Design</span>
                    <span className="work-skill-pill">
                      Search Engine Optimization (SEO)
                    </span>
                    <span className="work-skill-pill">
                      Client Communication & Requirements Gathering
                    </span>
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://littlehands-mobilesoftplay.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View live site"
                    title="View live site"
                  >
                    <FaGlobe />
                  </a>

                  <a
                    href="https://github.com/natalia-santiago/littlehands.mobilesoftplay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View GitHub repository"
                    title="View GitHub repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="work-images">
                {["/images/littlehands1.jpeg", "/images/littlehands2.jpeg"].map(
                  (img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={
                        i === 0
                          ? "Little Hands Mobile Soft Play GitHub repository preview"
                          : "Little Hands Mobile Soft Play live website preview"
                      }
                      className="work-image"
                      onClick={() => setSelectedImage(img)}
                    />
                  )
                )}
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Preconstruction Assistant — Xtreme Concrete Cutting & Demolition
                </h3>

                <p className="work-meta">
                  Part Time • March 2026 • Goldsboro, North Carolina — Remote
                </p>

                <p className="work-description">
                  Supported company growth by identifying and pursuing new project
                  opportunities while building relationships with general
                  contractors across Eastern North Carolina.
                </p>

                <ul className="work-list">
                  <li>
                    Engaged with estimators, project managers, and construction
                    teams via PlanHub and BuildingConnected
                  </li>
                  <li>
                    Maintained consistent communication and timely follow-ups on
                    bid opportunities
                  </li>
                  <li>
                    Reviewed project scopes to ensure alignment with services
                    (cutting, drilling, demolition)
                  </li>
                  <li>
                    Supported preconstruction coordination by gathering project
                    details and facilitating communication
                  </li>
                  <li>
                    Helped expand project pipeline and strengthen contractor
                    relationships
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Preconstruction Coordination
                    </span>
                    <span className="work-skill-pill">
                      Business Development & Client Outreach
                    </span>
                    <span className="work-skill-pill">Bid & Proposal Support</span>
                    <span className="work-skill-pill">
                      Stakeholder Communication
                    </span>
                    <span className="work-skill-pill">
                      Project Scope Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Web Developer — Xtreme Concrete Cutting & Demolition
                </h3>

                <p className="work-meta">
                  Freelance • March 2026 • Goldsboro, North Carolina — Remote
                </p>

                <p className="work-description">
                  Designed and developed a high-performance website tailored to
                  the construction industry, focusing on usability,
                  responsiveness, and lead generation.
                </p>

                <ul className="work-list">
                  <li>
                    Designed and developed a production-ready website focused on
                    usability and lead generation
                  </li>
                  <li>
                    Built a responsive, mobile-first application using Next.js
                    and Tailwind CSS
                  </li>
                  <li>
                    Implemented SEO best practices including metadata and local
                    keyword optimization
                  </li>
                  <li>
                    Integrated contact forms and SMS workflows to streamline
                    client inquiries
                  </li>
                  <li>
                    Managed deployment, domain configuration, and hosting with
                    Netlify
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Search Engine Optimization (SEO)
                    </span>
                    <span className="work-skill-pill">
                      Responsive Web Design
                    </span>
                    <span className="work-skill-pill">Website Deployment</span>
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://xtremeconcretecutting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View live site"
                    title="View live site"
                  >
                    <FaGlobe />
                  </a>

                  <a
                    href="https://github.com/natalia-santiago/xtreme-concrete-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View GitHub repository"
                    title="View GitHub repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="work-images">
                {["/images/xtreme1.jpeg", "/images/xtreme2.jpeg"].map(
                  (img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={`Xtreme Website Preview ${i + 1}`}
                      className="work-image"
                      onClick={() => setSelectedImage(img)}
                    />
                  )
                )}
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">Web Developer — P&R Workforce LLC</h3>

                <p className="work-meta">
                  Freelance • September 2025 • Goldsboro, North Carolina —
                  Remote
                </p>

                <p className="work-description">
                  Designed and developed production-ready websites for small
                  businesses from concept to deployment.
                </p>

                <ul className="work-list">
                  <li>
                    Built responsive, mobile-first applications using Next.js,
                    React, and Tailwind CSS
                  </li>
                  <li>
                    Collaborated directly with clients to translate business needs
                    into functional, engaging websites
                  </li>
                  <li>
                    Implemented SEO best practices including metadata and local
                    keyword optimization
                  </li>
                  <li>
                    Integrated contact forms and dynamic components to support
                    lead generation
                  </li>
                  <li>
                    Managed deployment, domain configuration, and hosting using
                    Netlify
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">UI/UX Design</span>
                    <span className="work-skill-pill">
                      Responsive Web Design
                    </span>
                    <span className="work-skill-pill">
                      Front-End Development
                    </span>
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://prworkforcenc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View live site"
                    title="View live site"
                  >
                    <FaGlobe />
                  </a>

                  <a
                    href="https://github.com/natalia-santiago/prworkforce-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="View GitHub repository"
                    title="View GitHub repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="work-images">
                {["/images/prwork1.jpeg", "/images/prwork2.jpeg"].map(
                  (img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={`P&R Workforce LLC Website Screenshot ${i + 1}`}
                      className="work-image"
                      onClick={() => setSelectedImage(img)}
                    />
                  )
                )}
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Mathematics & Coding Expert — Outlier AI
                </h3>

                <p className="work-meta">
                  Contract • October 2024 - October 2025 • Memphis, Tennessee —
                  Remote
                </p>

                <p className="work-description">
                  Reviewed Python-based solutions and educational coding responses
                  to improve accuracy, clarity, and reliability in AI-assisted
                  learning systems.
                </p>

                <ul className="work-list">
                  <li>
                    Reviewed Python solutions for correctness, efficiency, and
                    edge-case handling
                  </li>
                  <li>
                    Evaluated student-style coding responses in structured
                    educational contexts
                  </li>
                  <li>
                    Strengthened understanding of algorithm design and structured
                    programming concepts
                  </li>
                  <li>
                    Collaborated with cross-functional teams to improve clarity
                    and reliability of AI-assisted learning systems
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Algorithm Analysis & Optimization
                    </span>
                    <span className="work-skill-pill">
                      Code Review & Debugging
                    </span>
                    <span className="work-skill-pill">
                      Cross-Functional Collaboration
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Merchandise Coordinator — Home Goods
                </h3>

                <p className="work-meta">
                  Full Time • June 2023 - March 2024 • Cary, North Carolina
                </p>

                <p className="work-description">
                  Managed merchandising, inventory, and in-store presentation to
                  enhance customer experience and support sales performance.
                </p>

                <ul className="work-list">
                  <li>
                    Organized and maintained visually appealing merchandise
                    displays
                  </li>
                  <li>
                    Managed inventory through restocking, rotation, and seasonal
                    merchandising
                  </li>
                  <li>
                    Executed floor plans and daily merchandising tasks with team
                    coordination
                  </li>
                  <li>
                    Ensured product quality and presentation met brand and safety
                    standards
                  </li>
                  <li>
                    Assisted customers with product inquiries and in-store
                    navigation
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">Inventory Management</span>
                    <span className="work-skill-pill">Retail Operations</span>
                    <span className="work-skill-pill">
                      Merchandising & Product Display
                    </span>
                    <span className="work-skill-pill">Team Collaboration</span>
                    <span className="work-skill-pill">Customer Service</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">
                  Merchandise Coordinator — T.J. Maxx
                </h3>

                <p className="work-meta">
                  Full Time • January 2023 - June 2024 • Raleigh, North Carolina
                </p>

                <p className="work-description">
                  Supported merchandising, inventory, and sales floor presentation
                  to improve customer experience and store performance.
                </p>

                <ul className="work-list">
                  <li>
                    Curated merchandise displays to improve visual appeal and
                    customer flow
                  </li>
                  <li>
                    Maintained stock levels through replenishment and seasonal
                    item rotation
                  </li>
                  <li>
                    Partnered with store leadership to execute layout updates and
                    promotions
                  </li>
                  <li>
                    Ensured displays met corporate merchandising standards and
                    store organization goals
                  </li>
                  <li>
                    Assisted customers with product selection and purchasing
                    decisions
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">Visual Merchandising</span>
                    <span className="work-skill-pill">
                      Inventory Control & Stock Replenishment
                    </span>
                    <span className="work-skill-pill">Retail Operations</span>
                    <span className="work-skill-pill">Customer Service</span>
                    <span className="work-skill-pill">
                      Sales & Product Presentation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-content">
                <h3 className="work-role">Beauty Associate — T.J. Maxx</h3>

                <p className="work-meta">
                  Full Time • November 2022 - January 2023 • Raleigh, North
                  Carolina
                </p>

                <p className="work-description">
                  Delivered personalized customer support while maintaining a
                  well-organized and visually appealing beauty department.
                </p>

                <ul className="work-list">
                  <li>
                    Recommended beauty products based on customer needs and
                    preferences
                  </li>
                  <li>
                    Maintained clean, organized, and well-stocked product displays
                  </li>
                  <li>
                    Assisted with receiving, unpacking, and stocking new inventory
                  </li>
                  <li>
                    Provided product guidance on cosmetics, skincare, and
                    fragrance items
                  </li>
                  <li>
                    Supported promotional displays and seasonal merchandising
                    resets
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    <span className="work-skill-pill">
                      Customer Service & Client Engagement
                    </span>
                    <span className="work-skill-pill">
                      Product Knowledge (Cosmetics, Skincare & Fragrance)
                    </span>
                    <span className="work-skill-pill">
                      Retail Merchandising & Visual Display
                    </span>
                    <span className="work-skill-pill">Inventory Management</span>
                    <span className="work-skill-pill">
                      Sales Support & Upselling
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {selectedImage && (
              <Lightbox
                src={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}
          </div>
        </section>
      </section>
    </>
  );
}