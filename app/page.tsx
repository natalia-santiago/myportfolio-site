import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Job Tracker Web Application",
    category: "Custom Web Application",
    description:
      "A full-stack app for tracking job applications, statuses, and progress in one organized dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://job-tracker-frontend.netlify.app",
    cta: "View App",
    images: [
      {
        src: "/images/projects/job-tracker-dashboard.jpeg",
        alt: "Job Tracker dashboard",
      },
      {
        src: "/images/projects/job-tracker-add-job.jpeg",
        alt: "Job Tracker add job page",
      },
      {
        src: "/images/projects/job-tracker-account.jpeg",
        alt: "Job Tracker account page",
      },
      {
        src: "/images/projects/job-tracker-register.jpeg",
        alt: "Job Tracker register page",
      },
      {
        src: "/images/projects/job-tracker-login.jpeg",
        alt: "Job Tracker login page",
      },
    ],
  },
  {
    title: "P & R Workforce",
    category: "Business Website",
    description:
      "A professional staffing website designed to build trust, present services clearly, and generate leads.",
    tech: ["Next.js", "Tailwind CSS", "Netlify"],
    live: "https://prworkforcenc.com/",
    cta: "View Website",
    images: [
      {
        src: "/images/projects/prworkforce-home.jpeg",
        alt: "P & R Workforce homepage",
      },
      {
        src: "/images/projects/prworkforce-contact.jpeg",
        alt: "P & R Workforce contact page",
      },
    ],
  },
  {
    title: "Xtreme Concrete Cutting",
    category: "Business Website",
    description:
      "A service-based business website built to showcase services, improve visibility, and drive quote requests.",
    tech: ["Next.js", "Tailwind CSS", "Netlify"],
    live: "https://xtremeconcretecutting.com/",
    cta: "View Website",
    images: [
      {
        src: "/images/projects/xtreme-home.jpeg",
        alt: "Xtreme Concrete Cutting homepage",
      },
      {
        src: "/images/projects/xtreme-services.jpeg",
        alt: "Xtreme Concrete Cutting services page",
      },
      {
        src: "/images/projects/xtreme-service-areas.jpeg",
        alt: "Xtreme Concrete Cutting service areas page",
      },
      {
        src: "/images/projects/xtreme-quote.jpeg",
        alt: "Xtreme Concrete Cutting quote form page",
      },
    ],
  },
];

const services = [
  "Business websites",
  "Landing pages",
  "Responsive design",
  "Website redesigns",
  "Contact forms",
  "Deployment and launch",
];

const benefits = [
  {
    title: "Clean Design",
    description:
      "Websites that look polished, modern, and aligned with your brand.",
  },
  {
    title: "Mobile Friendly",
    description:
      "Designed to work smoothly across desktop, tablet, and mobile.",
  },
  {
    title: "Business Focused",
    description:
      "Built to help you showcase services, build trust, and get inquiries.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Netlify",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dbe6eb] text-[#111111]">
      <section className="mx-auto max-w-[1280px] px-5 py-6 md:px-8 lg:px-10">
        <header className="sticky top-4 z-30 mb-8">
          <div className="rounded-[2rem] border border-black/10 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-md md:rounded-full md:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold tracking-tight md:text-base">
                Natalia Santiago
              </div>

              <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
                <a href="#about" className="transition hover:text-black">
                  About
                </a>
                <a href="#services" className="transition hover:text-black">
                  Services
                </a>
                <a href="#projects" className="transition hover:text-black">
                  Work
                </a>
                <a href="#contact" className="transition hover:text-black">
                  Contact
                </a>
              </nav>

              <a
                href="#contact"
                className="rounded-full bg-[#111111] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Let&apos;s Work Together
              </a>
            </div>

            <nav className="mt-4 flex flex-wrap gap-2 md:hidden">
              <a
                href="#about"
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-[#111111]"
              >
                About
              </a>
              <a
                href="#services"
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-[#111111]"
              >
                Services
              </a>
              <a
                href="#projects"
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-[#111111]"
              >
                Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-[#111111]"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/40 bg-[#eef4f6] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10 lg:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
              Web Developer Portfolio
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] text-[#0f1720] md:text-6xl lg:text-[4.5rem]">
              I build modern websites that help businesses look credible online.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/62 md:text-lg">
              I&apos;m Natalia Santiago, a web developer focused on creating
              responsive, polished websites and web applications that help
              businesses strengthen their online presence and turn visitors into
              clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                Start a Project
              </a>

              <Link
                href="https://www.linkedin.com/in/natalia-santiago-086570362"
                target="_blank"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/natalia-santiago"
                target="_blank"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                GitHub
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/85 p-5 transition hover:-translate-y-1">
                <p className="text-3xl font-semibold text-[#0f1720]">3</p>
                <p className="mt-1 text-sm text-black/55">Featured projects</p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/85 p-5 transition hover:-translate-y-1">
                <p className="text-3xl font-semibold text-[#0f1720]">Custom</p>
                <p className="mt-1 text-sm text-black/55">
                  Built for real business needs
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/85 p-5 transition hover:-translate-y-1">
                <p className="text-3xl font-semibold text-[#0f1720]">Mobile</p>
                <p className="mt-1 text-sm text-black/55">
                  Designed for desktop and mobile
                </p>
              </div>
            </div>
          </div>

          <div
            id="about"
            className="relative overflow-hidden rounded-[2rem] bg-[#121218] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] md:p-10"
          >
            <div className="absolute -right-16 top-16 h-64 w-64 rounded-full border border-white/8" />
            <div className="absolute right-8 top-24 h-52 w-52 rounded-full border border-white/6" />
            <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-white/5 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  About
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-[2.6rem]">
                  Websites that are clear, polished, and built to represent your
                  business well.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-white/68">
                  I create modern websites with an emphasis on clean design,
                  usability, responsiveness, and strong presentation. My goal is
                  to help businesses stand out online with websites that feel
                  professional and easy to navigate.
                </p>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  What I Focus On
                </p>

                <p className="mt-3 text-lg leading-8 text-white/85">
                  Professional business websites, landing pages, and custom web
                  experiences that help companies build trust and attract more
                  customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-10 grid gap-6 rounded-[2rem] border border-black/10 bg-white/72 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
              Services
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#0f1720] md:text-5xl">
              What I can build for your business
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/62">
              Whether you need a new website, a redesign, or a clean landing
              page, I can help create a professional online presence tailored to
              your brand.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black/52">
              From design and development to deployment, I build websites that
              are clean, responsive, and ready to launch.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/5 bg-[#121218] px-5 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#171720]"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-black/10 bg-[#eef4f6] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
                Why Work With Me
              </p>

              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#0f1720] md:text-5xl">
                A website should look good and support your business goals
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-black/62">
              I focus on thoughtful design, responsive layouts, and clear
              messaging so your site feels professional and easy for customers to
              use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/85 p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-2xl font-semibold text-[#0f1720]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="pt-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
                Featured Work
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#0f1720] md:text-5xl">
                Selected Projects
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-black/55 md:text-right">
              Real projects that show how I design and build clean, functional
              websites and web applications.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[1.9rem] border border-black/10 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.1)]"
              >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="border-b border-black/8 bg-[#e7eff2] p-4 md:p-5 lg:border-b-0 lg:border-r">
                    <div
                      className={`grid gap-4 ${
                        project.images.length === 2
                          ? "md:grid-cols-2"
                          : project.images.length >= 3
                            ? "sm:grid-cols-2"
                            : ""
                      }`}
                    >
                      {project.images.map((image, index) => (
                        <div
                          key={image.src}
                          className={`overflow-hidden rounded-[1.4rem] border border-black/8 bg-white shadow-sm ${
                            project.images.length >= 4 && index === 0
                              ? "sm:col-span-2"
                              : ""
                          }`}
                        >
                          <div
                            className={`relative w-full ${
                              project.images.length === 1
                                ? "aspect-[16/10]"
                                : project.images.length === 2
                                  ? "aspect-[16/11]"
                                  : index === 0
                                    ? "aspect-[16/9]"
                                    : "aspect-[4/3]"
                            }`}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                              priority={
                                project.title === "Job Tracker Web Application" &&
                                index === 0
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#6a7e86]">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#0f1720] md:text-[2rem]">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-black/62 md:text-[15px]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-black/10 bg-[#eef4f6] px-3 py-1.5 text-xs font-medium text-[#24343b]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={project.live}
                        target="_blank"
                        className="inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                      >
                        {project.cta}
                      </Link>

                      <a
                        href="#contact"
                        className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                      >
                        Build Something Similar
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-black/10 bg-white/72 px-7 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
            Ready to Build?
          </p>

          <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[#0f1720] md:text-5xl">
                Have a business idea, redesign, or landing page in mind?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black/62">
                I can help you create something clean, modern, and ready to
                present professionally online.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Start a Project
            </a>
          </div>
        </section>

        <section id="skills" className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6a7e86]">
            Skills
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#0f1720] md:text-5xl">
            Tools I use
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/5 bg-[#121218] px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#171720]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 rounded-[2rem] bg-[#121218] px-7 py-12 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] md:px-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            Contact
          </p>

          <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Need a website for your business?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
            I&apos;d love to help you create a clean, professional website that
            reflects your brand and supports your business goals. Reach out to
            start your project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:natalia.santiago.dev@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111111] transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Email Me
            </a>

            <Link
              href="https://www.linkedin.com/in/natalia-santiago-086570362"
              target="_blank"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111111]"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com/natalia-santiago"
              target="_blank"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111111]"
            >
              GitHub
            </Link>
          </div>
        </section>

        <footer className="pb-6 pt-8 text-center text-sm text-black/45">
          © {new Date().getFullYear()} Natalia Santiago. Built with Next.js and
          Tailwind CSS.
        </footer>
      </section>
    </main>
  );
}