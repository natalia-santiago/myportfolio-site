import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Figma",
  "Canva",
  "Stripe",
  "Calendly",
  "Google Analytics",
  "SEO",
];

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main className="homepage-main">
        <section className="hero-section">
          <div className="hero-inner fade-in-section">
            <p className="hero-copy">
              <span className="hero-line">
                I design, develop, and maintain custom websites from 
              </span>
              <span className="hero-line">
                scratch without using AI builders or pre-made templates.
              </span>
            </p>

            <div className="hero-cta-wrap">
              <Link href="/booking" className="hero-cta">
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section fade-in-section">
          <h2 className="services-title">Services</h2>

          <div className="services-grid">
            <article className="service-card">
              <h3>Web Design</h3>
              <p>Custom website designs that reflect your brand.</p>

              <ul className="service-list">
                <li>Clean, modern layouts</li>
                <li>Easy to navigate</li>
                <li>Aligned with your goals</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Web Development</h3>
              <p>Fast, responsive websites built with clean code.</p>

              <ul className="service-list">
                <li>Works across all devices</li>
                <li>Strong performance and reliability</li>
                <li>Smooth, consistent user experience</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Web Maintenance</h3>
              <p>Ongoing support to keep your website running smoothly.</p>

              <ul className="service-list">
                <li>Regular updates and improvements</li>
                <li>Security and performance checks</li>
                <li>Edits as your needs grow</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Custom Websites</h3>
              <p>Every website is built from scratch for your brand.</p>

              <ul className="service-list">
                <li>No templates or pre-made layouts</li>
                <li>Flexible and fully customized</li>
                <li>Built to match your content and goals</li>
              </ul>
            </article>

            <article className="service-card">
              <h3>Search Engine Optimization</h3>
              <p>Built with SEO best practices from the start.</p>

              <ul className="service-list">
                <li>Search-friendly structure</li>
                <li>Performance optimization</li>
                <li>Improved visibility over time</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="features-section fade-in-section">
          <h2 className="features-title">Features Included</h2>
          <p className="features-sub">
            Everything you need to support your presence online
          </p>

          <div className="features-grid">
            <article className="feature-card">
              <h3>Professional Email Setup</h3>
              <p>
                A branded email address that helps your communication look more
                professional and trustworthy.
              </p>
            </article>

            <article className="feature-card">
              <h3>Contact Form to Business Email</h3>
              <p>
                Messages from your website go directly to your email so you can
                respond quickly and stay organized.
              </p>
            </article>

            <article className="feature-card">
              <h3>Google Business Profile Setup</h3>
              <p>
                Help people find your information, location, and contact details
                more easily through Google.
              </p>
            </article>

            <article className="feature-card">
              <h3>Bing Places Setup</h3>
              <p>
                Expand your visibility across search platforms by listing your
                business on Bing as well.
              </p>
            </article>

            <article className="feature-card">
              <h3>Google Analytics Setup</h3>
              <p>
                Track how visitors use your website so you can better understand
                performance and behavior.
              </p>
            </article>

            <article className="feature-card">
              <h3>Google Reviews Integration</h3>
              <p>
                Display customer reviews on your website to build trust and add
                social proof.
              </p>
            </article>

            <article className="feature-card">
              <h3>Google Maps Integration</h3>
              <p>
                Show your location directly on your website so visitors can find
                you more easily.
              </p>
            </article>

            <article className="feature-card">
              <h3>Calendly Booking Integration</h3>
              <p>
                Let visitors book appointments through your website with a
                simple scheduling flow.
              </p>
            </article>

            <article className="feature-card">
              <h3>Stripe Payment Integration</h3>
              <p>
                Accept secure online payments through your website in a clean
                and convenient way.
              </p>
            </article>

            <article className="feature-card">
              <h3>Blog Setup</h3>
              <p>
                Add a blog to share updates, publish content, and support your
                visibility online.
              </p>
            </article>

            <article className="feature-card">
              <h3>Editable CMS Sections</h3>
              <p>
                Update selected website content more easily without needing to
                edit the code directly.
              </p>
            </article>
          </div>
        </section>

        <section className="tech-stack-section fade-in-section">
          <h2 className="tech-stack-title">Tech Stack</h2>

          <p className="tech-stack-sub">
            Tools and technologies I use to design, build, and optimize custom
            websites
          </p>

          <div className="tech-stack-grid">
            {techStack.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}