"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function PersonalProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectImages = [
    "/images/jobtracker1.jpeg",
    "/images/jobtracker2.jpeg",
  ];

  const projectSkills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "RESTful API Development",
    "JSON Web Token (JWT)",
  ];

  return (
    <>
      <section className="about-page">
        <div className="about-title-wrap">
          <h1 className="about-title">About Me</h1>
        </div>

        <section className="work-section personal-projects-section">
          <div className="work-container personal-projects-container">
            <h3 className="work-title">Personal Projects</h3>

            <div className="work-card personal-project-card">
              <div className="work-content personal-project-content">
                <h3 className="work-role">Job Tracker Website Application</h3>

                <p className="work-meta">January 2026 • Full Stack Application</p>

                <p className="work-description">
                  Full-stack web application designed to help users track and
                  manage job applications throughout the hiring process. Built
                  using React, Node.js, Express, and MongoDB, featuring secure
                  user authentication with JWT and protected routes. Implements
                  CRUD functionality for managing job entries, along with
                  filtering, sorting, and status tracking. Designed with a
                  responsive UI and optimized for usability, performance, and
                  scalability.
                </p>

                <ul className="work-list">
                  <li>
                    Built a full-stack application with a connected frontend,
                    backend, and MongoDB database.
                  </li>
                  <li>
                    Implemented secure user authentication using JSON Web Tokens
                    and protected routes.
                  </li>
                  <li>
                    Created CRUD functionality for adding, updating, viewing,
                    and deleting job applications.
                  </li>
                  <li>
                    Added filtering, sorting, and status-based organization to
                    improve workflow and usability.
                  </li>
                  <li>
                    Designed a responsive interface focused on clarity,
                    performance, and scalability.
                  </li>
                </ul>

                <div className="work-skills">
                  <div className="work-skills-pills">
                    {projectSkills.map((skill) => (
                      <span key={skill} className="work-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="work-links">
                  <a
                    href="https://job-tracker-frontend.netlify.app/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="Live Site"
                    title="Live Site"
                  >
                    <FaGlobe />
                  </a>

                  <a
                    href="https://github.com/natalia-santiago/job-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-icon-link"
                    aria-label="GitHub Repository"
                    title="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="work-images personal-project-images">
                {projectImages.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Job Tracker preview ${index + 1}`}
                    className="work-image personal-project-image"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      {selectedImage && (
        <Lightbox
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}