import styles from "./page.module.scss";

const trustItems = [
  "Clean portfolio systems",
  "Transparent build process",
  "Sharp visual direction",
  "Launch-ready delivery"
];

const aboutHighlights = [
  "Backend systems",
  "Fintech infrastructure",
  "AI powered products"
];

const techStack = [
  {
    name: "JavaScript",
    label: "Core language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    label: "Typed systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    name: "Node.js",
    label: "Backend runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "React",
    label: "Interface layer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    label: "Full stack framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Express",
    label: "API framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    name: "NestJS",
    label: "Backend framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
  },
  {
    name: "Prisma",
    label: "Database toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
  },
  {
    name: "PostgreSQL",
    label: "Relational data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Redis",
    label: "Cache and jobs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
  },
  {
    name: "Python",
    label: "AI services",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    name: "Docker",
    label: "Delivery tooling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  }
];

const projectMetrics = [
  "AI agent marketplace",
  "Pinned manifests",
  "Onchain receipts"
];

const lunatrixxMetrics = [
  "Crypto signal intelligence",
  "Trading agents",
  "Private deployments"
];

const experienceItems = [
  {
    company: "Aigenthic",
    role: "Technical Founder",
    period: "Current",
    summary:
      "Building the AI agent marketplace across product architecture, trusted install flows, pinned manifests, and verifiable deployment workflows.",
    details: [
      "Defined the marketplace architecture for agent discovery and trusted installs",
      "Built product flows across the interface, backend contracts, and verification layer",
      "Led founder-level technical direction from prototype toward launch"
    ],
    focus: ["AI agents", "Marketplace", "Trust systems"]
  },
  {
    company: "HyperX LTD",
    role: "Lead Backend Engineer",
    period: "2023 - Present",
    summary:
      "Leading backend architecture for fintech infrastructure, wallet systems, transaction flows, background jobs, and production APIs.",
    details: [
      "Lead fintech backend architecture and service delivery",
      "Own wallet systems, transaction flows, and background jobs",
      "Build production APIs for scalable financial infrastructure"
    ],
    focus: ["Fintech", "Wallets", "Production APIs"]
  },
  {
    company: "Coconut Africa",
    role: "Software Engineer",
    period: "August 2024 - March 2026",
    summary:
      "Worked on reliable web platforms and service delivery across product, backend, and operational workflows.",
    details: [
      "Built reliable platform features across backend workflows",
      "Supported product delivery and operational systems",
      "Improved service quality across web platform releases"
    ],
    focus: ["Platform delivery", "Backend workflows", "Ops systems"]
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "2020 - 2023",
    summary:
      "Built client web platforms, backend services, APIs, dashboards, and product prototypes across early-stage projects.",
    details: [
      "Delivered client APIs, dashboards, and product prototypes",
      "Handled backend delivery, integrations, and launch support",
      "Worked across early-stage web platforms and product teams"
    ],
    focus: ["Client platforms", "APIs", "Launch support"]
  }
];

const projectTech = {
  aigenthic: [
    {
      group: "Frontend",
      items: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        }
      ]
    },
    {
      group: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        }
      ]
    }
  ],
  lunatrixx: [
    {
      group: "Frontend",
      items: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        }
      ]
    },
    {
      group: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        }
      ]
    }
  ],
  pixunio: [
    {
      group: "Frontend",
      items: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        }
      ]
    },
    {
      group: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        }
      ]
    }
  ]
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 12h10" />
      <path d="m13 8 4 4-4 4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M5.5 8h13A1.5 1.5 0 0 1 20 9.5v8A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-8A1.5 1.5 0 0 1 5.5 8Z" />
      <path d="M4 13h16" />
      <path d="M10 13v1.5h4V13" />
    </svg>
  );
}

function TechCard({ tech }) {
  return (
    <article className={styles.techCard}>
      <div>
        <h3>{tech.name}</h3>
        <p>{tech.label}</p>
      </div>
      <div className={styles.techIcon}>
        <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" />
      </div>
      <span>Production stack</span>
    </article>
  );
}

function ProjectStack({ groups }) {
  return (
    <div className={styles.projectStack} aria-label="Project technology stack">
      {groups.map((group) => (
        <div className={styles.projectStackGroup} key={group.group}>
          <span>{group.group}</span>
          <div>
            {group.items.map((item) => (
              <span className={styles.projectTechPill} key={`${group.group}-${item.name}`}>
                <img src={item.icon} alt={`${item.name} logo`} loading="lazy" />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.media} aria-hidden="true" />
        <div className={styles.scrim} aria-hidden="true" />

        <div className={styles.trustBar} aria-label="Project highlights">
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <header className={styles.navWrap}>
          <a className={styles.brand} href="/" aria-label="Tolulope Olaniyan home">
            Tolulope Olaniyan
          </a>

          <nav className={styles.navLinks} aria-label="Primary navigation">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#stack">Services</a>
            <a href="#experience">Experience</a>
          </nav>

          <a className={styles.login} href="#contact">
            <UserIcon />
            Start
          </a>
        </header>

        <div className={styles.heroCopy}>
          <h1 id="hero-title">
            Standout web presence, simplified.
          </h1>
          <a className={styles.cta} href="#contact">
            <ArrowIcon />
            Start your project
          </a>
        </div>

        <a
          className={styles.credit}
          href="https://www.freepik.com/free-photo/turned-gray-laptop-computer_12661377.htm"
          target="_blank"
          rel="noreferrer"
        >
          Image by Freepik
        </a>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.aboutVisual}>
          <img
            src="/about-portrait.jpeg"
            alt="Portrait of Tolulope Olaniyan"
            className={styles.aboutPhoto}
          />
          <div className={styles.aboutBadge}>Software Engineer</div>
        </div>

        <div className={styles.aboutCopy}>
          <span className={styles.eyebrow}>About me</span>
          <h2 id="about-title">Engineering reliable platforms for real products.</h2>
          <div className={styles.aboutRule} />
          <p>
            I am Tolulope Olaniyan, a software engineer focused on backend systems,
            fintech infrastructure, AI powered products, and reliable web platforms.
            I build production ready APIs, wallet systems, transaction flows,
            background jobs, and scalable services using Node.js, TypeScript,
            Python, PostgreSQL, Redis, and modern cloud tools. My work connects
            clean engineering with real product delivery, from fintech platforms
            like HyperX to AI systems, trading tools, and developer focused
            applications.
          </p>

          <a className={styles.darkButton} href="#contact">
            <ArrowIcon />
            Work with me
          </a>

          <div className={styles.aboutHighlights} aria-label="Engineering focus">
            {aboutHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stack} id="stack" aria-labelledby="stack-title">
        <div className={styles.stackHeader}>
          <div>
            <h2 id="stack-title">Frameworks and tools I use to build reliable products.</h2>
          </div>
        </div>

        <div className={styles.stackViewport} aria-label="Technology stack carousel">
          <div className={styles.stackTrack}>
            {[0, 1].map((setIndex) => (
              <div
                className={styles.stackGroup}
                aria-hidden={setIndex === 1}
                key={setIndex}
              >
                {techStack.map((tech) => (
                  <TechCard tech={tech} key={`${setIndex}-${tech.name}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projects} id="projects" aria-labelledby="projects-title">
        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Featured project</span>
            <h2 id="projects-title">Aigenthic.xyz</h2>
            <p>
              Aigenthic is an AI agent marketplace for trusted installs,
              manifests, pinned releases, permissions, and onchain receipts.
              It helps builders publish agent apps, let users pin releases, and
              keep agent activity verifiable across production workflows.
            </p>
            <ProjectStack groups={projectTech.aigenthic} />
            <div className={styles.projectMetrics} aria-label="Aigenthic project highlights">
              {projectMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://www.aigenthic.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open live site
            </a>
          </div>
        </div>

        <div className={styles.livePreview} aria-label="Live preview of Aigenthic website">
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>https://www.aigenthic.xyz</p>
          </div>
          <iframe
            src="/api/project-preview?site=aigenthic"
            title="Live preview of Aigenthic"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          <a
            className={styles.previewFallback}
            href="https://www.aigenthic.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Open Aigenthic if the live preview is blocked
          </a>
        </div>

        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Featured project</span>
            <h2>Lunatrixx.xyz</h2>
            <p>
              Lunatrix turns live crypto market data into signal decisions,
              APIs, and operator-ready workflows. The platform helps traders,
              builders, and desks customize market intelligence, deploy trading
              agents with deep context, and run private signal surfaces with
              controlled data and risk rules.
            </p>
            <ProjectStack groups={projectTech.lunatrixx} />
            <div className={styles.projectMetrics} aria-label="Lunatrixx project highlights">
              {lunatrixxMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://www.lunatrixx.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open live site
            </a>
          </div>
        </div>

        <div className={styles.livePreview} aria-label="Live preview of Lunatrixx website">
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>https://www.lunatrixx.xyz</p>
          </div>
          <iframe
            src="/api/project-preview?site=lunatrixx"
            title="Live preview of Lunatrixx"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          <a
            className={styles.previewFallback}
            href="https://www.lunatrixx.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Open Lunatrixx if the live preview is blocked
          </a>
        </div>

        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Featured project</span>
            <h2>Pixunio.xyz</h2>
            <p>
              Pixunio is a web platform for clean, share-ready image links,
              built with a focused Next.js frontend and Node.js backend. The
              product packages image delivery into a simple interface for links,
              previews, and developer-ready sharing flows.
            </p>
            <ProjectStack groups={projectTech.pixunio} />
            <a
              className={styles.darkButton}
              href="https://www.pixunio.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open live site
            </a>
          </div>
        </div>

        <div className={styles.livePreview} aria-label="Live preview of Pixunio website">
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>https://www.pixunio.xyz</p>
          </div>
          <iframe
            src="/api/project-preview?site=pixunio"
            title="Live preview of Pixunio"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          <a
            className={styles.previewFallback}
            href="https://www.pixunio.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Open Pixunio if the live preview is blocked
          </a>
        </div>
      </section>

      <section className={styles.experience} id="experience" aria-labelledby="experience-title">
        <div className={styles.experienceIntro}>
          <h2>Founder-led systems work</h2>
          <p>
            A focused path through AI marketplace ownership, fintech backend
            leadership, and platform engineering for products that need reliable
            technical foundations.
          </p>
          <div className={styles.experienceStats} aria-label="Experience focus areas">
            <span>AI product ownership</span>
            <span>Fintech infrastructure</span>
            <span>Production backend systems</span>
          </div>
          <a className={styles.experienceCta} href="#projects">
            View work
            <ArrowIcon />
          </a>
        </div>

        <div className={styles.experiencePanel}>
          <div className={styles.experiencePanelHeader}>
            <p>Work experience</p>
            <h3 id="experience-title">Selected roles</h3>
          </div>
          <div className={styles.timeline}>
            {experienceItems.map((item, index) => (
              <article
                className={`${styles.timelineItem} ${
                  index === 0 ? styles.timelineItemFeatured : ""
                }`}
                key={`${item.company}-${item.period}`}
              >
                <div className={styles.timelineMeta}>
                  <span className={styles.timelineIcon}>
                    <ExperienceIcon />
                  </span>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                </div>
                <div className={styles.timelineBody}>
                  <div className={styles.timelineHeading}>
                    <p>{item.company}</p>
                    <h4>{item.role}</h4>
                  </div>
                  <p className={styles.timelineSummary}>{item.summary}</p>
                  <ul className={styles.timelineDetails}>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className={styles.timelineTags} aria-label={`${item.company} focus areas`}>
                    {item.focus.map((focus) => (
                      <span key={focus}>{focus}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer} id="contact" aria-labelledby="footer-title">
        <div className={styles.footerWordmark} aria-hidden="true">
          <span>Tolulope</span>
          <span>Olaniyan</span>
          <i />
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.footerLeft}>
            <p>LET'S BUILD RELIABLE PRODUCTS, TOGETHER.</p>
            <div className={styles.footerButtons}>
              <a href="#projects">VIEW WORK</a>
              <a href="https://www.aigenthic.xyz/" target="_blank" rel="noreferrer">
                AIGENTHIC
              </a>
              <a href="#">TOP</a>
            </div>
            <nav className={styles.footerLinks} aria-label="Footer links">
              <a href="#about">ABOUT</a>
              <a href="#stack">STACK</a>
              <a href="#experience">EXPERIENCE</a>
              <a href="#contact">CONTACT</a>
            </nav>
            <p className={styles.footerCopyright}>
              COPYRIGHT 2026 TOLULOPE OLANIYAN. ALL RIGHTS RESERVED.
            </p>
          </div>

          <form className={styles.footerForm} id="footer-form" aria-labelledby="footer-title">
            <h2 id="footer-title">
              Send a concise project note for backend, fintech, AI, or platform work.
            </h2>
            <div className={styles.footerFieldGrid}>
              <label>
                <span>First name*</span>
                <input type="text" name="firstName" autoComplete="given-name" />
              </label>
              <label>
                <span>Last name*</span>
                <input type="text" name="lastName" autoComplete="family-name" />
              </label>
            </div>
            <label>
              <span>Email*</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <button type="button">SUBMIT</button>
          </form>
        </div>
      </footer>
    </main>
  );
}
