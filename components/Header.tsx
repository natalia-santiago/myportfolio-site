"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
  if (href === "/") return pathname === "/";

  // Exact match for About Overview
  if (href === "/about") return pathname === "/about";

  // Everything else can use startsWith
  return pathname.startsWith(href);
};

  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-wrap">
          <p className="signature font-luxurious-script">Natalia Santiago</p>
          <h1 className="main-title">Web Design &amp; Development</h1>
        </div>

        <nav className="main-menu" aria-label="Main navigation">
          <ul>
            <li>
              <Link
                href="/"
                className={isActive("/") ? "active-menu-link" : ""}
                style={{ color: isActive("/") ? "var(--coral)" : "var(--green)" }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/portfolio"
                className={isActive("/portfolio") ? "active-menu-link" : ""}
                style={{
                  color: isActive("/portfolio") ? "var(--coral)" : "var(--green)",
                }}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-dropdown">
              <button
                type="button"
                className={isAboutActive ? "nav-dropdown-trigger active-menu-link" : "nav-dropdown-trigger"}
                style={{
                  color: isAboutActive ? "var(--coral)" : "var(--green)",
                }}
              >
                About Me
              </button>

              <div className="nav-dropdown-menu">
                <Link
                  href="/about"
                  className={isActive("/about") ? "active-menu-link" : ""}
                  style={{
                    color: isActive("/about") ? "var(--coral)" : "var(--green)",
                  }}
                >
                  Overview
                </Link>

                <Link
                  href="/about/work-experience"
                  className={isActive("/about/work-experience") ? "active-menu-link" : ""}
                  style={{
                    color: isActive("/about/work-experience")
                      ? "var(--coral)"
                      : "var(--green)",
                  }}
                >
                  Work Experience
                </Link>

                <Link
                  href="/about/education"
                  className={isActive("/about/education") ? "active-menu-link" : ""}
                  style={{
                    color: isActive("/about/education")
                      ? "var(--coral)"
                      : "var(--green)",
                  }}
                >
                  Education
                </Link>

                <Link
                  href="/about/licenses-certifications"
                  className={
                    isActive("/about/licenses-certifications")
                      ? "active-menu-link"
                      : ""
                  }
                  style={{
                    color: isActive("/about/licenses-certifications")
                      ? "var(--coral)"
                      : "var(--green)",
                  }}
                >
                  Licenses &amp; Certifications
                </Link>

                <Link
                  href="/about/skills"
                  className={isActive("/about/skills") ? "active-menu-link" : ""}
                  style={{
                    color: isActive("/about/skills")
                      ? "var(--coral)"
                      : "var(--green)",
                  }}
                >
                  Skills
                </Link>

                <Link
                  href="/about/personal-projects"
                  className={
                    isActive("/about/personal-projects") ? "active-menu-link" : ""
                  }
                  style={{
                    color: isActive("/about/personal-projects")
                      ? "var(--coral)"
                      : "var(--green)",
                  }}
                >
                  Personal Projects
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/booking"
                className={isActive("/booking") ? "active-menu-link" : ""}
                style={{
                  color: isActive("/booking") ? "var(--coral)" : "var(--green)",
                }}
              >
                Booking
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={isActive("/contact") ? "active-menu-link" : ""}
                style={{
                  color: isActive("/contact") ? "var(--coral)" : "var(--green)",
                }}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/payments"
                className={isActive("/payments") ? "active-menu-link" : ""}
                style={{
                  color: isActive("/payments") ? "var(--coral)" : "var(--green)",
                }}
              >
                Payments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}