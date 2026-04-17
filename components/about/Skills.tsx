"use client";

import { useState } from "react";

type SkillCategory = {
  title: string;
  featured?: boolean;
  skills: string[];
};

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  const mainCategories: SkillCategory[] = [
    {
      title: "Core Skills",
      featured: true,
      skills: [
        "Web Development",
        "Front-End Development",
        "Responsive Web Design",
        "UI/UX Design",
        "Search Engine Optimization (SEO)",
        "RESTful API Development",
        "Website Deployment",
      ],
    },
    {
      title: "Development",
      skills: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Database Management (SQL & NoSQL)",
        "JSON Web Token (JWT)",
        "Code Review & Debugging",
        "Algorithm Analysis & Optimization",
      ],
    },
    {
      title: "Design & UX",
      skills: [
        "Prototyping",
        "Wireframing",
        "Sketching and Ideating",
        "Conducting Usability Studies",
        "User Experience Research (UXR)",
        "UX Design Tools",
        "Figma",
        "Adobe XD",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "Netlify",
        "Tailwind CSS",
        "HTML",
        "Cascading Style Sheets (CSS)",
      ],
    },
    {
      title: "Business & Professional",
      skills: [
        "Client Communication & Requirements Gathering",
        "Project Scope Analysis",
        "Stakeholder Communication",
        "Business Development & Client Outreach",
        "Cross-Functional Collaboration",
        "Team Collaboration",
        "Customer Service & Client Engagement",
      ],
    },
  ];

  const extraCategories: SkillCategory[] = [
    {
      title: "Preconstruction & Proposal Support",
      skills: ["Preconstruction Coordination", "Bid & Proposal Support"],
    },
    {
      title: "Retail & Sales Experience",
      skills: [
        "Sales & Product Presentation",
        "Merchandising & Product Display",
        "Visual Merchandising",
        "Inventory Management",
        "Inventory Control & Stock Replenishment",
        "Retail Operations",
        "Retail Merchandising & Visual Display",
        "Sales Support & Upselling",
        "Customer Service",
        "Product Knowledge (Cosmetics, Skincare & Fragrance)",
      ],
    },
    {
      title: "Academic & Supporting Knowledge",
      skills: [
        "Computer Science",
        "Software Development",
        "Data Modeling",
        "Discrete Mathematics",
        "Probability",
        "Recursion",
        "Scientific Methods",
        "Spiral Model",
        "General Physics I",
        "Physics",
        "Vapor Pressure",
        "Philosophy Of Science",
        "Ancient Philosophy",
        "History of Philosophy",
        "Introduction To Philosophy",
        "American Civil Right Movement",
        "American Civil War",
        "African American History",
        "United States History",
        "World History",
      ],
    },
  ];

  return (
    <section className="about-page skills-page">
      <div className="about-title-wrap">
        <h1 className="about-title">About Me</h1>
      </div>

      <section className="skills-section-shell">
        <div className="skills-container">
          <div className="skills-page-heading">
            <h3 className="work-title">Skills</h3>

            <p className="skills-page-intro">
              A focused overview of my strongest skills in web development, design, UX, deployment, and client-facing&nbsp;work.
            </p>
          </div>

          <div className="skills-category-list">
            {mainCategories.map((category) => (
              <article
                key={category.title}
                className={`skills-category-card ${
                  category.featured ? "skills-category-card-featured" : ""
                }`}
              >
                <h3 className="skills-category-title">{category.title}</h3>

                <div className="skills-pill-group">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skills-pill ${
                        category.featured
                          ? "skills-pill-featured"
                          : "skills-pill-standard"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <div className="skills-toggle-wrap">
              <button
                type="button"
                className="skills-toggle-button"
                onClick={() => setShowMore((prev) => !prev)}
                aria-expanded={showMore}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>

            {showMore &&
              extraCategories.map((category) => (
                <article
                  key={category.title}
                  className="skills-category-card skills-category-card-extra"
                >
                  <h3 className="skills-category-title">{category.title}</h3>

                  <div className="skills-pill-group">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skills-pill skills-pill-extra">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </section>
  );
}