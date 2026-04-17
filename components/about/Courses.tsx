"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

type Course = {
  code: string;
  title: string;
  grade: string;
  term: string;
  credits: string;
  instructor: string;
  dates: string;
  description: string;
};

export default function Courses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const courses: Course[] = [
    {
      code: "CS-499",
      title: "Computer Science Capstone",
      grade: "B",
      term: "2025 C-1 (January–March)",
      credits: "3 Credits",
      instructor: "Federico Bermudez",
      dates: "January 6 – March 2, 2025",
      description:
        "Taken in the student’s final term, the capstone course is the culminating experience for the Bachelor of Science in Computer Science. Integrates previous coursework and practical experience with a focus on demonstrating mastery of program competencies through enhanced programming projects and real-world applications.",
    },
    {
      code: "CS-465",
      title: "Full Stack Development I",
      grade: "A",
      term: "2025 C-1 (January–March)",
      credits: "3 Credits",
      instructor: "John Watson",
      dates: "January 6 – March 2, 2025",
      description:
        "Students design and develop a full-stack application using programming language frameworks. The course includes database development and application-to-database integration and serves as the first course in a two-course sequence.",
    },
    {
      code: "CS-410",
      title: "Software Reverse Engineering",
      grade: "A",
      term: "2024 C-6 (October–December)",
      credits: "3 Credits",
      instructor: "Kaan Esendemir",
      dates: "October 28 – December 22, 2024",
      description:
        "Students learn the fundamentals of reverse engineering for software systems, including recreating missing documentation for legacy code, improving software functionality and efficiency, and applying reverse engineering practices for maintainability and security-related use cases.",
    },
    {
      code: "CS-405",
      title: "Secure Coding",
      grade: "A-",
      term: "2025 C-1 (January–March)",
      credits: "3 Credits",
      instructor: "Mimi Tam",
      dates: "January 6 – March 2, 2025",
      description:
        "Students focus on common software security vulnerabilities and learn techniques for developing robust, secure code using secure programming principles. The course includes identifying vulnerabilities and writing code to mitigate risks to software and data.",
    },
    {
      code: "CS-370",
      title: "Current/Emerging Trends in CS",
      grade: "A",
      term: "2024 C-6 (October–December)",
      credits: "3 Credits",
      instructor: "Obafemi Balogun",
      dates: "October 28 – December 22, 2024",
      description:
        "Students explore advanced topics in Computer Science through authentic scenarios, analyze the role of ethics in current trends, and apply core concepts of the field to solve complex problems in new ways.",
    },
    {
      code: "CS-360",
      title: "Mobile Architect & Programming",
      grade: "C+",
      term: "2024 C-5 (September–October)",
      credits: "3 Credits",
      instructor: "Alejandro Benavente",
      dates: "September 2 – October 27, 2024",
      description:
        "Students apply mobile development principles and best practices to create mobile applications using user-centered design and industry standards. The course also includes security, product assuredness, and compatibility checks prior to launch.",
    },
    {
      code: "CS-350",
      title: "Emerging Sys Arch & Tech",
      grade: "A",
      term: "2025 C-2 (March–April)",
      credits: "3 Credits",
      instructor: "Derek Jacobs",
      dates: "March 3 – April 27, 2025",
      description:
        "Students explore emerging systems, architectures, and technologies with an emphasis on performance, software/hardware interaction, and architecture design. The course builds experience evaluating both established and emerging architectures to meet business needs.",
    },
    {
      code: "CS-340",
      title: "Client/Server Development",
      grade: "A",
      term: "2024 C-6 (October–December)",
      credits: "3 Credits",
      instructor: "Tarik Iles",
      dates: "October 28 – December 22, 2024",
      description:
        "Students apply database systems concepts and principles to develop client/server applications that connect client-side code with databases.",
    },
    {
      code: "CS-330",
      title: "Comp Graphic and Visualization",
      grade: "A",
      term: "2024 C-5 (September–October)",
      credits: "3 Credits",
      instructor: "Gholam Shaykhian",
      dates: "September 2 – October 27, 2024",
      description:
        "Students create realistic, interactive three-dimensional objects using API libraries and best practices while also developing complete graphic applications that meet project requirements.",
    },
    {
      code: "CS-320",
      title: "Software Test, Automation QA",
      grade: "A",
      term: "2024 C-5 (September–October)",
      credits: "3 Credits",
      instructor: "Angel Cross",
      dates: "September 2 – October 27, 2024",
      description:
        "Students apply software testing strategies and quality assurance practices throughout the software development lifecycle, including requirements analysis, verification and validation, quality management, and unit testing.",
    },
    {
      code: "CS-305",
      title: "Software Security",
      grade: "C",
      term: "2024 C-4 (July–August)",
      credits: "3 Credits",
      instructor: "Aaron Demory",
      dates: "July 1 – August 25, 2024",
      description:
        "Students analyze advanced security concepts and learn to develop secure code that complies with security testing protocols. The course also covers encryption technologies and secure communication practices.",
    },
    {
      code: "CS-300",
      title: "DSA: Analysis and Design",
      grade: "A",
      term: "2024 C-4 (July–August)",
      credits: "3 Credits",
      instructor: "Oluwayomi Adamo",
      dates: "July 1 – August 25, 2024",
      description:
        "Students develop code and use non-coding methodologies in algorithmic design and problem solving. The course emphasizes advanced algorithmic design and evaluation of complex data structures.",
    },
    {
      code: "CS-255",
      title: "System Analysis and Design",
      grade: "A",
      term: "2024 C-4 (July–August)",
      credits: "3 Credits",
      instructor: "Goran Trajkovski",
      dates: "July 1 – August 25, 2024",
      description:
        "Students explore principles, methods, and techniques used in systems development to create system models with industry tools and communicate technical concepts and design decisions effectively to varied audiences.",
    },
    {
      code: "CS-230",
      title: "Operating Platforms",
      grade: "A",
      term: "2024 C-3 (May–June)",
      credits: "3 Credits",
      instructor: "Bryant Moscon",
      dates: "May 6 – June 30, 2024",
      description:
        "Students analyze and evaluate operating platforms and architectures, including their characteristics, strengths, and weaknesses, while learning how software design templates can be used to solve problems effectively.",
    },
    {
      code: "CS-210",
      title: "Programming Languages",
      grade: "A",
      term: "24EW4",
      credits: "3 Credits",
      instructor: "Sabahudin Tricic",
      dates: "March 4 – April 28, 2024",
      description:
        "Students develop functional programs using various programming languages while following industry regulations and best practices, with special attention to writing code that is secure, efficient, and professional.",
    },
    {
      code: "MAT-350",
      title: "Applied Linear Algebra",
      grade: "A",
      term: "2025 C-2 (March–April)",
      credits: "3 Credits",
      instructor: "Randall Shaffer",
      dates: "March 3 – April 27, 2025",
      description:
        "This course introduces linear algebra and matrices, including systems of linear equations, linear independence, matrix algebra, determinants, vector spaces, eigenvalues, and eigenvectors, with applications to problems in business, science, computer science, and economics.",
    },
    {
      code: "MAT-243",
      title: "Applied Statistics for STEM",
      grade: "A",
      term: "2025 C-2 (March–April)",
      credits: "3 Credits",
      instructor: "Gudeta Fufaa",
      dates: "March 3 – April 27, 2025",
      description:
        "Students examine STEM applications of inferential statistics and solve statistical problems using a scripting language. Topics include probability distributions, sampling distributions, estimation, hypothesis testing, and linear regression.",
    },
    {
      code: "IDS-105",
      title: "Cultural Awareness and Online Learning",
      grade: "A",
      term: "24EW4",
      credits: "3 Credits",
      instructor: "Carl Tippen",
      dates: "March 4 – April 28, 2024",
      description:
        "This course introduces skills relevant to university learning and the foundational knowledge and values of intercultural fluency needed to navigate contemporary society. Students explore justice, diversity, collaboration, communication, and interpersonal conflict resolution.",
    },
  ];

  return (
    <section className="education-subsection">
      <h3 className="education-subsection-title">Courses</h3>

      <div className="courses-grid">
        {courses.map((course, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`course-card ${isOpen ? "open" : ""}`}
              onClick={() => {
                setOpenIndex(isOpen ? null : index);
              }}
            >
              <div className="course-header">
                <div className="course-header-main">
                  <p className="course-title">
                    {course.code} — {course.title}
                  </p>

                  <p className="course-meta">
                    {course.term} • {course.credits}
                  </p>
                </div>

                <div className="course-header-right">
                  <span className="course-grade">{course.grade}</span>

                  <span className="course-toggle-icon" aria-hidden="true">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
              </div>

              <div className="course-details">
                <p className="course-detail-line">
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p className="course-detail-line">
                  <strong>Term Dates:</strong> {course.dates}
                </p>

                <p className="course-description">{course.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}