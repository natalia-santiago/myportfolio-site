export default function AboutOverview() {
  return (
    <section className="about-hero">
      <div className="about-title-wrap">
        <h1 className="about-title">About Me</h1>
      </div>

      <div className="about-hero-inner">
        <div className="about-copy">
          <p className="about-intro">
            I’m a Web Designer and Developer focused on designing, developing,
            and maintaining custom websites from scratch without using AI
            builders or pre-made templates.
          </p>

          <p className="about-text">
            I create websites that are modern, responsive, and built with
            purpose. My work combines clean design, strong user experience, and
            solid development practices to create websites that feel polished
            and professional.
          </p>

          <p className="about-text">
            I’ve worked on websites for businesses and brands in industries like
            staffing, construction, and service-based work, while also building
            with the flexibility to support creators, podcasts, athletes,
            musicians, DJs, and other unique projects.
          </p>

          <div className="about-block">
            <h2 className="about-subtitle">Technical Skills</h2>
            <ul className="about-list">
              <li>
                <strong>Frontend:</strong> React, Next.js, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express
              </li>
              <li>
                <strong>Database:</strong> MongoDB
              </li>
              <li>
                <strong>Tools:</strong> Git, Netlify, Vercel
              </li>
            </ul>
          </div>

          <div className="about-block">
            <h2 className="about-subtitle">What I Bring</h2>
            <ul className="about-list">
              <li>
                Strong attention to detail in both design and development
              </li>
              <li>
                A custom approach built around each project’s goals and identity
              </li>
              <li>
                Focus on performance, responsiveness, and user experience
              </li>
            </ul>
          </div>

          <div className="about-block">
            <h2 className="about-subtitle">I’m Currently Open To</h2>
            <ul className="about-list">
              <li>Entry-level Web Developer roles</li>
              <li>Freelance web design and development projects</li>
            </ul>
          </div>
        </div>

        <div className="about-side">
          <div className="about-photo-wrap">
            <img
              src="/images/about-me.jpg"
              alt="Portrait of Natalia Santiago"
              className="about-photo"
            />
          </div>

          <div className="about-highlight-card">
            <p className="highlight-text">
              I design, develop, and maintain custom websites from scratch with
              a strong focus on clarity, responsiveness, and clean execution. My
              work is built to look polished, feel intentional, and support a
              strong online presence without relying on AI builders or pre-made
              templates.
            </p>

            <div className="highlight-section">
              <h3 className="highlight-heading">Services Provided</h3>
              <ul className="highlight-list">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Web Maintenance</li>
                <li>Search Engine Optimization (SEO)</li>
              </ul>
            </div>

            <div className="highlight-section">
              <h3 className="highlight-heading">Top Skills</h3>
              <ul className="highlight-list">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}