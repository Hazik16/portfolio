"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Identity", href: "#identity" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Build Log", href: "#build-log" },
  { label: "Direction", href: "#direction" },
  { label: "Contact", href: "#contact" },
];

const statusItems = [
  "Based in Kuala Lumpur, Malaysia",
  "Focused on AI, web development, and software systems",
  "Building toward industry-ready engineering skills",
];

const stackGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "AI & Data",
    items: ["Machine Learning", "Data Analytics", "NLP", "Computer Vision"],
  },
  {
    title: "Workflow",
    items: ["GitHub", "Vercel", "VS Code", "Google Colab"],
  },
];

const projects = [
  {
    title: "DevProof AI",
    type: "Deployed Web Project",
    description:
      "A deployed Next.js project built using GitHub and Vercel, focused on development proof, project-based learning, and deployment practice.",
    proof: "GitHub workflow, Vercel deployment, and project-based learning.",
    tags: ["Next.js", "GitHub", "Vercel"],
    href: "https://devproof-ai-three.vercel.app/",
    buttonText: "View Project",
    isExternal: true,
  },
  {
    title: "Dream Language Centre",
    type: "Live Website",
    description:
      "A live website for Dream Language Centre, focused on presenting the centre online with a clean public-facing web presence.",
    proof:
      "Real website delivery, responsive layout, deployment, and public project publishing.",
    tags: ["Website", "Responsive Design", "Deployment"],
    href: "https://dreamlanguagecentre.com/",
    buttonText: "View Project",
    isExternal: true,
  },
  {
    title: "SmartBento",
    type: "Marketing & Business Concept",
    description:
      "A food-tech marketing and business concept for personalized lunch box subscriptions in Malaysia, focused on customer targeting, brand positioning, and startup planning.",
    proof:
      "Marketing strategy, business planning, product positioning, and AI-assisted concept development.",
    tags: ["Marketing", "Business Planning", "Food Tech"],
    buttonText: "Coming Soon",
  },
  {
    title: "Card & Wallet Spend Intelligence",
    type: "Fintech Analytics Concept",
    description:
      "A fintech analytics platform concept for transaction analysis, customer profiling, spending insights, and next-best-offer recommendations.",
    proof:
      "Data analytics thinking, customer profiling, and machine learning use-case design.",
    tags: ["Data Analytics", "Fintech", "Machine Learning"],
    buttonText: "Coming Soon",
  },
];

const buildLog = [
  {
    title: "Skill Project 01 - DevProof AI",
    text: "Created and deployed a Next.js project using GitHub and Vercel as a first development proof project.",
  },
  {
    title: "Skill Project 02 - Portfolio",
    text: "Built a black-and-white personal proof website to document technical skills, projects, and direction.",
  },
  {
    title: "Next Target",
    text: "Build a machine learning project using a real dataset, train and evaluate a model, and document the full workflow.",
  },
];

const directionCards = [
  "Build real projects",
  "Understand system design",
  "Document technical growth",
];

const contactDetails = [
  {
    label: "Email",
    value: "hazik123nabi@gmail.com",
    href: "mailto:hazik123nabi@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Hazik16",
    href: "https://github.com/Hazik16",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hazik-nabi",
    href: "https://www.linkedin.com/in/hazik-nabi",
  },
  {
    label: "Location",
    value: "Kuala Lumpur, Malaysia",
  },
];

function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    setOpacity(1);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Dynamic spotlight radial gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
          opacity: opacity,
        }}
      />
      {/* Grid pattern overlay with top-fade mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeaveWindow = () => setHidden(true);
    const handleMouseEnterWindow = () => setHidden(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Track initial hover states for current buttons and links
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHoverStart);
        el.addEventListener("mouseleave", handleLinkHoverEnd);
      });
    };

    addHoverListeners();

    // Use MutationObserver to wire up dynamically rendering items
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Outer cursor circle with high-speed smooth hardware-accelerated transition */}
      <div
        className="fixed left-0 top-0 rounded-full border border-white mix-blend-difference"
        style={{
          width: linkHovered ? "44px" : "22px",
          height: linkHovered ? "44px" : "22px",
          backgroundColor: clicked ? "rgba(255, 255, 255, 0.15)" : "transparent",
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${clicked ? 0.9 : 1})`,
          transition: "transform 0.08s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />
      {/* Inner precise dot */}
      <div
        className="fixed left-0 top-0 h-1 w-1 rounded-full bg-white mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <GridBackground />

      <header className="sticky top-0 z-40 border-b border-white/[0.04] bg-black/60 backdrop-blur-md transition-all duration-300">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <a
            href="#identity"
            className="w-fit text-sm font-semibold uppercase tracking-[0.26em] text-white hover:opacity-85 transition-opacity"
          >
            Hazik Nabi
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="identity"
        className="relative mx-auto grid min-h-[calc(100vh-85px)] max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:py-28"
      >
        <aside className="border-l border-white/10 pl-5 text-sm text-neutral-500">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            Proof Archive
          </p>
          <p className="mt-4 max-w-xs text-xs leading-6">
            A personal operating record for projects, stack, direction, and
            practical engineering growth.
          </p>
        </aside>

        <div>
          <SectionMarker number="01" label="Identity" />
          <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-tight sm:text-8xl lg:text-9xl bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent select-none leading-[0.9]">
            Hazik Nabi
          </h1>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-tight text-neutral-100 sm:text-4xl">
            AI & Software Developer building practical software systems.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            I am focused on machine learning, web development, deployment
            workflows, and turning ideas into working projects that can be
            tested, shared, and improved.
          </p>

          <ul className="mt-10 grid gap-3 border-y border-white/5 py-6 text-sm text-neutral-300 lg:grid-cols-3">
            {statusItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded border border-white bg-white px-7 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded border border-white/10 px-7 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <ArchiveSection
        id="stack"
        number="02"
        label="Stack"
        title="Current Stack"
        intro="A working inventory of the languages, frameworks, AI concepts, and deployment tools I am using to turn ideas into shipped proof."
      >
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="bg-neutral-950/40 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-neutral-950/80"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                {group.title}
              </h3>
              <ul className="mt-6 divide-y divide-white/5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-3.5 text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    <span>{item}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                      <span className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase">
                        Active
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ArchiveSection>

      <ArchiveSection
        id="projects"
        number="03"
        label="Projects"
        title="Proof Projects"
        intro="Projects and concepts selected for what they demonstrate: deployment, product planning, AI thinking, analytics logic, and practical software structure."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex min-h-96 flex-col overflow-hidden rounded-lg border border-white/[0.06] bg-neutral-950/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-950/60 shadow-[0_8px_30px_rgb(0,0,0,0.8)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)]"
            >
              {/* Top accent line animation */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-6 border-b border-white/[0.06] p-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 transition-colors group-hover:text-white">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-36 text-right text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 transition-colors group-hover:text-neutral-300">
                  {project.type}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-base leading-7 text-neutral-300 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <div className="mt-7 border-l border-white/10 pl-4 transition-colors group-hover:border-white/30">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-400">
                    What it proves
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    {project.proof}
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400 rounded transition-colors group-hover:border-white/10 group-hover:text-neutral-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <a
                    href={project.href}
                    target={project.isExternal ? "_blank" : undefined}
                    rel={project.isExternal ? "noopener noreferrer" : undefined}
                    className="mt-10 inline-flex h-11 w-fit items-center justify-center border border-white/10 px-5 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-all duration-300 hover:border-white hover:bg-white hover:text-black rounded"
                  >
                    {project.buttonText}
                  </a>
                ) : (
                  <span className="mt-10 inline-flex h-11 w-fit items-center justify-center border border-white/[0.04] bg-neutral-950/20 px-5 text-xs font-semibold uppercase tracking-wider text-neutral-600 rounded">
                    {project.buttonText}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </ArchiveSection>

      <ArchiveSection
        id="build-log"
        number="04"
        label="Build Log"
        title="Recent Proof Entries"
        intro="A short record of what has been built, what each build represents, and the next technical target."
      >
        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
          {buildLog.map((entry, index) => (
            <article
              key={entry.title}
              className="group relative transition-all duration-300"
            >
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-black transition-all duration-300 group-hover:border-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-white group-hover:scale-125 group-hover:animate-pulse" />
              </span>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 transition-colors group-hover:text-white">
                  ENTRY {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white transition-colors">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400 transition-colors group-hover:text-neutral-300">
                  {entry.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ArchiveSection>

      <ArchiveSection
        id="direction"
        number="05"
        label="Direction"
        title="Where This Is Going"
        intro="I am building toward roles in AI engineering, machine learning, and full-stack software development. My current focus is to move beyond theory by building, deploying, documenting, and explaining practical systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {directionCards.map((card, index) => (
            <article
              key={card}
              className="group relative min-h-44 rounded-lg border border-white/[0.06] bg-neutral-950/40 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-950/60 shadow-[0_8px_30px_rgb(0,0,0,0.8)]"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 transition-colors group-hover:text-white">
                DIRECTION {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-xl font-medium tracking-tight text-neutral-200 transition-colors group-hover:text-white">
                {card}
              </h3>
            </article>
          ))}
        </div>
      </ArchiveSection>

      <section
        id="contact"
        className="relative border-t border-white/5 bg-black px-5 py-20 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionMarker number="06" label="Contact" />
            <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Open to useful work, practical builds, and learning in public.
            </h2>
          </div>
          <address className="not-italic">
            <dl className="grid gap-px border border-white/5 bg-white/5 md:grid-cols-2 rounded-lg overflow-hidden">
              {contactDetails.map((detail) => (
                <ContactDetail key={detail.label} {...detail} />
              ))}
            </dl>
          </address>
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 py-12 text-center font-mono text-xs uppercase tracking-[0.18em] text-neutral-600 sm:px-8">
        <p>&copy; 2026 Hazik Nabi. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </main>
  );
}

function ArchiveSection({
  id,
  number,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/5 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionMarker number={number} label={label} />
          <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-neutral-400">
            {intro}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
      <span className="text-white">{number}</span>
      <span className="h-px w-10 bg-white/20" />
      <span>{label}</span>
    </div>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="bg-neutral-950/40 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-neutral-950/80 group">
      <dt className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
        {label}
      </dt>
      <dd className="mt-3 text-base font-medium text-neutral-300 transition-colors group-hover:text-white">
        {href ? (
          <a
            href={href}
            className="inline-flex items-center gap-1.5 break-all transition-colors hover:underline underline-offset-4"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
            {href.startsWith("http") && (
              <svg
                className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
