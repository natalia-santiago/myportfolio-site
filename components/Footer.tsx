"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-label">Navigation</p>

          <div className="footer-links">
            <Link href="/" className={`footer-link ${pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`footer-link ${pathname === "/portfolio" ? "active" : ""}`}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`footer-link ${pathname === "/about" ? "active" : ""}`}
            >
              About Me
            </Link>
            <Link
              href="/booking"
              className={`footer-link ${pathname === "/booking" ? "active" : ""}`}
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className={`footer-link ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
            <Link
              href="/payments"
              className={`footer-link ${pathname === "/payments" ? "active" : ""}`}
            >
              Payments
            </Link>
          </div>
        </div>

        <div className="footer-center">
          <p className="footer-signature">Natalia Santiago</p>
          <h2 className="footer-title">Web Design &amp; Development</h2>
          <p className="footer-credit">© by Natalia Santiago</p>
        </div>

        <div className="footer-right">
          <a
            href="https://www.facebook.com/share/1CSJTGpXbE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="Facebook"
            data-tooltip="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/natalia-santiago-086570362"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/natalia-santiago"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}