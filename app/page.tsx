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
    href: "#",
  },
  {
    title: "Rental Management System",
    type: "App System Concept",
    description:
      "A mobile app concept for landlords and tenants with rent tracking, deposit management, rent notifications, payment records, and tenant assistance requests.",
    proof:
      "Product thinking, feature planning, and app architecture awareness.",
    tags: ["React Native", "App Design", "System Planning"],
    href: "#",
  },
  {
    title: "SmartBento",
    type: "AI Business Concept",
    description:
      "An AI-driven personalized lunch box subscription business concept for urban Malaysians, combining food technology, personalization, and startup planning.",
    proof:
      "AI product thinking, personalization logic, and business planning.",
    tags: ["AI Concept", "Business Planning", "Food Tech"],
    href: "#",
  },
  {
    title: "Card & Wallet Spend Intelligence",
    type: "Fintech Analytics Concept",
    description:
      "A fintech analytics platform concept for transaction analysis, customer profiling, spending insights, and next-best-offer recommendations.",
    proof:
      "Data analytics thinking, customer profiling, and machine learning use-case design.",
    tags: ["Data Analytics", "Fintech", "Machine Learning"],
    href: "#",
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
    value: "Add LinkedIn URL later",
  },
  {
    label: "Location",
    value: "Kuala Lumpur, Malaysia",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <a
            href="#identity"
            className="w-fit text-sm font-semibold uppercase tracking-[0.26em] text-white"
          >
            Hazik Nabi
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="identity"
        className="mx-auto grid min-h-[calc(100vh-85px)] max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:py-28"
      >
        <aside className="border-l border-white/20 pl-5 text-sm text-neutral-500">
          <p className="font-mono uppercase tracking-[0.2em]">Proof Archive</p>
          <p className="mt-4 max-w-xs leading-7">
            A personal operating record for projects, stack, direction, and
            practical engineering growth.
          </p>
        </aside>

        <div>
          <SectionMarker number="01" label="Identity" />
          <h1 className="mt-8 max-w-5xl text-6xl font-semibold tracking-tight text-white sm:text-8xl lg:text-9xl">
            Hazik Nabi
          </h1>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-tight text-neutral-100 sm:text-4xl">
            AI student building practical software systems.
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            I am focused on machine learning, web development, deployment
            workflows, and turning ideas into working projects that can be
            tested, shared, and improved.
          </p>

          <ul className="mt-10 grid gap-3 border-y border-white/10 py-5 text-sm text-neutral-300 lg:grid-cols-3">
            {statusItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-px w-5 shrink-0 bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center border border-white bg-white px-7 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-950"
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
        intro="A working inventory of the languages, frameworks, AI concepts, and deployment tools I am using to turn study into shipped proof."
      >
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <article key={group.title} className="bg-neutral-950 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                {group.title}
              </h3>
              <ul className="mt-6 divide-y divide-white/10">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-3 text-sm text-neutral-200"
                  >
                    <span>{item}</span>
                    <span className="font-mono text-xs text-neutral-600">OK</span>
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
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex min-h-96 flex-col border border-white/10 bg-neutral-900"
            >
              <div className="flex items-start justify-between gap-6 border-b border-white/10 p-6">
                <div>
                  <p className="font-mono text-xs text-neutral-500">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-36 text-right text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {project.type}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-base leading-7 text-neutral-300">
                  {project.description}
                </p>
                <div className="mt-7 border-l border-white/20 pl-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                    What it proves
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-200">
                    {project.proof}
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  className="mt-auto inline-flex h-11 w-fit items-center justify-center border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-950"
                >
                  View Project
                </a>
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
        <div className="border border-white/10">
          {buildLog.map((entry, index) => (
            <article
              key={entry.title}
              className="grid gap-4 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[0.25fr_0.75fr]"
            >
              <p className="font-mono text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-400">
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
        <div className="grid gap-4 md:grid-cols-3">
          {directionCards.map((card, index) => (
            <article
              key={card}
              className="min-h-44 border border-white/10 bg-neutral-900 p-6"
            >
              <p className="font-mono text-xs text-neutral-600">
                DIRECTION {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                {card}
              </h3>
            </article>
          ))}
        </div>
      </ArchiveSection>

      <section
        id="contact"
        className="border-t border-white/10 bg-black px-5 py-20 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionMarker number="06" label="Contact" />
            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Open to useful work, practical builds, and learning in public.
            </h2>
          </div>
          <address className="not-italic">
            <dl className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
              {contactDetails.map((detail) => (
                <ContactDetail key={detail.label} {...detail} />
              ))}
            </dl>
          </address>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-neutral-600 sm:px-8">
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
    <section id={id} className="border-t border-white/10 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionMarker number={number} label={label} />
          <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
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
    <div className="bg-black p-5">
      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
        {label}
      </dt>
      <dd className="mt-3 text-base text-neutral-200">
        {href ? (
          <a
            href={href}
            className="break-words transition-colors hover:text-white"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
