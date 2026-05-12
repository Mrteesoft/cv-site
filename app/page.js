import styles from "./page.module.scss";

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

const nexafuelMetrics = [
  "Cross-chain gas top-ups",
  "Pay gas with any token",
  "Wallet-ready API"
];

const phoneServerMetrics = [
  "Local-only Android runtime",
  "Ubuntu Base staging",
  "Persistent shell sessions"
];

const cvBuilderMetrics = [
  "AI-guided resume content",
  "Professional templates",
  "PDF export"
];

const lizzotechMetrics = [
  "Solar sizing wizard",
  "Power station storefront",
  "WhatsApp sales flow"
];

const experienceItems = [
  {
    company: "Aigenthic",
    role: "Technical Founder",
    period: "Current",
    location: "Remote",
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
    company: "Coconut Africa",
    role: "Senior Backend Engineer",
    period: "August 2025 - March 2026",
    location: "Hybrid",
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
    company: "GEEPEE Industries Limited",
    role: "SIWES Industrial Trainee",
    period: "April 2024 - August 2024",
    location: "On-site",
    logo: "https://geepee.com/wp-content/uploads/2018/09/Red-Logo-5.png",
    summary:
      "Completed SIWES industrial training as a logistics assistant, supporting inventory operations with TallyPrime and ERP workflows.",
    details: [
      "Supported logistics and inventory documentation across daily operations",
      "Operated TallyPrime for inventory records and stock movement tracking",
      "Worked with ERP systems for inventory updates, reporting, and warehouse coordination"
    ],
    focus: ["SIWES", "Logistics", "Inventory systems"]
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "2020 - 2023",
    location: "Remote",
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

const education = {
  school: "Federal University of Agriculture, Abeokuta",
  degree: "B.Sc. Statistics",
  logo: "/funaab-logo.jpg",
  focus: ["Statistical modeling", "Data analysis", "Quantitative systems"]
};

const achievements = [
  {
    title: "Microsoft for Startups Recipient",
    meta: "Microsoft for Startups",
    summary:
      "Aigenthic was selected for Microsoft for Startups, receiving access to up to $100,000 in Azure cloud credits to support cloud services, product infrastructure, and technical scaling.",
    highlights: ["Azure credits", "Cloud infrastructure", "Technical scaling"]
  },
  {
    title: "Amadeus Genesis Hack Participant",
    meta: "TAIKAI hackathon",
    summary:
      "Participated in the Amadeus Genesis Hack hackathon hosted on TAIKAI and received a commemorative hackathon NFT for participation.",
    highlights: ["Hackathon", "TAIKAI", "Participation NFT"]
  }
];

const systemMapItems = [
  "Product Architecture",
  "Install Workflows",
  "API Contracts",
  "Wallet Flows",
  "Payment Rails",
  "Data Models",
  "Cloud Delivery",
  "Launch Support"
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
  nexafuel: [
    {
      group: "Frontend",
      items: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
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
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        }
      ]
    },
    {
      group: "Web3",
      items: [
        {
          name: "Solana",
          icon: "https://cryptologos.cc/logos/solana-sol-logo.svg"
        },
        {
          name: "EVM",
          icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg"
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
  ],
  lizzotech: [
    {
      group: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        }
      ]
    },
    {
      group: "Deployment",
      items: [
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        }
      ]
    }
  ],
  phoneServer: [
    {
      group: "Android",
      items: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        },
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
        }
      ]
    },
    {
      group: "Runtime",
      items: [
        {
          name: "Gradle",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
        },
        {
          name: "Ubuntu",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
        }
      ]
    }
  ],
  cvBuilder: [
    {
      group: "Android",
      items: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
        },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
        }
      ]
    },
    {
      group: "Build",
      items: [
        {
          name: "Gradle",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        },
        {
          name: "AdMob",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
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

function AchievementIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M6 5H4.5A1.5 1.5 0 0 0 3 6.5V7a4 4 0 0 0 4 4" />
      <path d="M18 5h1.5A1.5 1.5 0 0 1 21 6.5V7a4 4 0 0 1-4 4" />
      <path d="M12 12v4" />
      <path d="M9 20h6" />
      <path d="M10 16h4l1 4H9l1-4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.128 2.063 2.063 0 0 1 0 4.128ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.535-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.11.81 2.235 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12Z" />
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

        <header className={styles.navWrap}>
          <a className={styles.brand} href="/" aria-label="Tolulope Olaniyan home">
            Tolulope Olaniyan
          </a>

          <nav className={styles.navLinks} aria-label="Primary navigation">
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#stack">Services</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Awards</a>
            <a href="#education">Education</a>
          </nav>

          <a className={styles.login} href="#contact">
            <UserIcon />
            Start
          </a>
        </header>

        <div className={styles.heroCopy}>
          <h1 id="hero-title">
            Software that scales cleanly.
          </h1>
          <a className={styles.cta} href="#contact">
            <ArrowIcon />
            Start your project
          </a>
        </div>

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
          <h2 id="about-title">Built for speed. Designed to last.</h2>
          <div className={styles.aboutRule} />
          <p>
            I am Tolulope Olaniyan, a software engineer focused on backend systems,
            fintech infrastructure, AI powered products, and reliable web platforms.
            I build production ready APIs, wallet systems, transaction flows,
            background jobs, and scalable services using Node.js, TypeScript,
            Python, PostgreSQL, Redis, and modern cloud tools. My work connects
            clean engineering with real product delivery, from fintech platforms
            like Nexfuel to AI systems, trading tools, and developer focused
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
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Trusted AI agent discovery, controlled installs, and verifiable release history.
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
            src="https://www.aigenthic.xyz/"
            title="Live preview of Aigenthic"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
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
            <div className={styles.nexafuelTitle}>
              <img src="/nexafuel-logo-mark.png" alt="" aria-hidden="true" loading="lazy" />
              <h2>NexaFuel</h2>
            </div>
            <p>
              NexaFuel is a cross-chain gas abstraction system for wallets and
              dApps. It lets users top up native gas on a target chain using
              assets they already hold on another chain, with quote, execute,
              confirm, and status flows built for wallet teams.
            </p>
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Users getting stuck without native gas when moving across chains.
            </p>
            <ProjectStack groups={projectTech.nexafuel} />
            <div className={styles.projectMetrics} aria-label="NexaFuel project highlights">
              {nexafuelMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://www.nexafuel.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open live site
            </a>
          </div>
        </div>

        <div className={styles.livePreview} aria-label="Live preview of NexaFuel website">
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>https://www.nexafuel.xyz</p>
          </div>
          <iframe
            src="https://www.nexafuel.xyz/"
            title="Live preview of NexaFuel"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          <a
            className={styles.previewFallback}
            href="https://www.nexafuel.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Open NexaFuel if the live preview is blocked
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
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Turning noisy market data into actionable signals and private trading workflows.
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
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Fast image sharing with clean previews and developer-friendly links.
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

        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Featured project</span>
            <h2>Lizzotech</h2>
            <p>
              Lizzotech Dynamic Solutions is a solar power station storefront
              for Nigerian homes and businesses. The site pairs polished energy
              product pages with a conversational sizing wizard, WhatsApp sales
              routing, product showcases, and a clear process for turning outage
              needs into installation-ready recommendations.
            </p>
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Helping customers choose the right solar backup system without guessing from generic inverter tables.
            </p>
            <ProjectStack groups={projectTech.lizzotech} />
            <div className={styles.projectMetrics} aria-label="Lizzotech project highlights">
              {lizzotechMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://lizzotech.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open live site
            </a>
          </div>
        </div>

        <div className={styles.livePreview} aria-label="Live preview of Lizzotech website">
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>https://lizzotech.vercel.app</p>
          </div>
          <iframe
            src="https://lizzotech.vercel.app/"
            title="Live preview of Lizzotech"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
          <a
            className={styles.previewFallback}
            href="https://lizzotech.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open Lizzotech if the live preview is blocked
          </a>
        </div>

        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Mobile Linux project</span>
            <h2>Pocket Ubuntu Server</h2>
            <p>
              Pocket Ubuntu Server is a local-first Android app that turns a
              phone into a self-managed server workspace. It brings terminal
              sessions, local project storage, managed services, and Ubuntu
              Base preparation into an on-device runtime without account setup
              or an external control plane.
            </p>
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Running Linux-style development workflows directly from an Android phone.
            </p>
            <ProjectStack groups={projectTech.phoneServer} />
            <div className={styles.projectMetrics} aria-label="Pocket Ubuntu Server project highlights">
              {phoneServerMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://github.com/Mrteesoft/phone-server"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open GitHub repo
            </a>
          </div>
        </div>

        <div
          className={`${styles.livePreview} ${styles.phonePreview}`}
          aria-label="Pocket Ubuntu Server Android terminal preview"
        >
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>github.com/Mrteesoft/phone-server</p>
          </div>
          <div className={styles.phonePreviewStage}>
            <img
              src="/server-phone.jpeg"
              alt="Pocket Ubuntu Server Android terminal running an Ubuntu 22.04 shell"
              loading="lazy"
            />
            <p>Ubuntu 22.04 LTS on-phone terminal runtime</p>
          </div>
          <a
            className={styles.previewFallback}
            href="https://github.com/Mrteesoft/phone-server"
            target="_blank"
            rel="noreferrer"
          >
            View Phone Server on GitHub
          </a>
        </div>

        <div className={styles.projectIntro}>
          <div>
            <span className={styles.eyebrow}>Android product</span>
            <h2>CV Builder AI</h2>
            <p>
              CV Builder AI is a Java Android application for creating
              professional resumes on mobile. It guides users through templates,
              structured CV forms, AI writing help, preview screens, and PDF
              export, with local SQLite storage and AdMob monetization.
            </p>
            <p className={styles.projectSolve}>
              <strong>Solves:</strong> Helping job seekers build polished CVs from a phone without fighting document formatting.
            </p>
            <ProjectStack groups={projectTech.cvBuilder} />
            <div className={styles.projectMetrics} aria-label="CV Builder AI project highlights">
              {cvBuilderMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className={styles.darkButton}
              href="https://github.com/Mrteesoft/Cv_builder-application"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowIcon />
              Open GitHub repo
            </a>
          </div>
        </div>

        <div
          className={`${styles.livePreview} ${styles.phonePreview} ${styles.cvPreview}`}
          aria-label="CV Builder AI Android dashboard preview"
        >
          <div className={styles.browserBar}>
            <span />
            <span />
            <span />
            <p>github.com/Mrteesoft/Cv_builder-application</p>
          </div>
          <div className={styles.phonePreviewStage}>
            <img
              src="/cv-builder.jpeg"
              alt="CV Builder AI Android dashboard with AI assistant, templates, and recent CV progress"
              loading="lazy"
            />
            <p>AI-guided CV templates and PDF export</p>
          </div>
          <a
            className={styles.previewFallback}
            href="https://github.com/Mrteesoft/Cv_builder-application"
            target="_blank"
            rel="noreferrer"
          >
            View CV Builder on GitHub
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
                  <span
                    className={`${styles.timelineIcon} ${
                      item.logo ? styles.timelineLogo : ""
                    }`}
                  >
                    {item.logo ? (
                      <img src={item.logo} alt={`${item.company} logo`} loading="lazy" />
                    ) : (
                      <ExperienceIcon />
                    )}
                  </span>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                  <span className={styles.timelineLocation}>{item.location}</span>
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

          <div className={styles.education} id="education" aria-labelledby="education-title">
            <div className={styles.educationIntro}>
              <p>Education</p>
              <h3 id="education-title">Academic background</h3>
            </div>

            <article className={styles.educationCard}>
              <div className={styles.educationLogo}>
                <img src={education.logo} alt={`${education.school} logo`} loading="lazy" />
              </div>

              <div className={styles.educationBody}>
                <p className={styles.educationMeta}>Federal University of Agriculture, Abeokuta</p>
                <h4>{education.school}</h4>
                <p className={styles.educationDegree}>{education.degree}</p>
                <div className={styles.educationHighlights} aria-label="Education focus areas">
                  {education.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.achievements} id="achievements" aria-labelledby="achievements-title">
        <div className={styles.achievementsIntro}>
          <span className={styles.eyebrow}>Recognition</span>
          <h2 id="achievements-title">Achievements & Recognition</h2>
          <p>
            Selected milestones across startup programs, cloud infrastructure, and
            hackathon participation.
          </p>
        </div>

        <div className={styles.achievementGrid}>
          {achievements.map((achievement) => (
            <article className={styles.achievementCard} key={achievement.title}>
              <div className={styles.achievementIcon}>
                <AchievementIcon />
              </div>
              <div className={styles.achievementBody}>
                <p>{achievement.meta}</p>
                <h3>{achievement.title}</h3>
                <span>{achievement.summary}</span>
                <div
                  className={styles.achievementTags}
                  aria-label={`${achievement.title} highlights`}
                >
                  {achievement.highlights.map((highlight) => (
                    <em key={highlight}>{highlight}</em>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.systemMap} aria-labelledby="system-map-title">
        <h2 className={styles.systemMapTitle} id="system-map-title">
          Product delivery surfaces
        </h2>
        <div className={styles.systemMapCanvas}>
          <div className={styles.systemMapTiles}>
            {systemMapItems.map((item) => (
              <span className={styles.systemMapTile} key={item}>
                {item}
              </span>
            ))}
          </div>

          <svg
            className={styles.systemMapLines}
            viewBox="0 0 1440 540"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M126 104 C126 250 560 270 720 430" />
            <path d="M296 104 C296 238 596 282 720 430" />
            <path d="M466 104 C466 228 628 294 720 430" />
            <path d="M636 104 C636 220 690 306 720 430" />
            <path d="M804 104 C804 220 750 306 720 430" />
            <path d="M974 104 C974 228 812 294 720 430" />
            <path d="M1144 104 C1144 238 844 282 720 430" />
            <path d="M1314 104 C1314 250 880 270 720 430" />
          </svg>

          <div className={styles.systemMapHub} aria-hidden="true">
            <span>TO</span>
          </div>
        </div>
      </section>

      <section className={styles.follow} aria-labelledby="follow-title">
        <div className={styles.followIntro}>
          <span className={styles.eyebrow}>Follow me</span>
          <h2 id="follow-title">Follow the build across socials.</h2>
        </div>

        <div className={styles.followLinks} aria-label="Social profiles">
          <a
            href="https://ng.linkedin.com/in/mrteesoft"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.followIcon}>
              <LinkedInIcon />
            </span>
            <span>
              <strong>LinkedIn</strong>
              <em>Professional updates</em>
            </span>
          </a>
          <a
            href="https://x.com/Mrtee_O_SOft"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.followIcon}>
              <XIcon />
            </span>
            <span>
              <strong>X</strong>
              <em>Build notes</em>
            </span>
          </a>
          <a
            href="https://github.com/Mrteesoft"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.followIcon}>
              <GitHubIcon />
            </span>
            <span>
              <strong>GitHub</strong>
              <em>Code and repos</em>
            </span>
          </a>
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
            <nav className={styles.footerSocials} aria-label="Social profiles">
              <a
                href="https://ng.linkedin.com/in/mrteesoft"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/Mrtee_O_SOft"
                target="_blank"
                rel="noreferrer"
                aria-label="X profile"
              >
                <XIcon />
                <span>X</span>
              </a>
              <a
                href="https://github.com/Mrteesoft"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </nav>
            <nav className={styles.footerLinks} aria-label="Footer links">
              <a href="#about">ABOUT</a>
              <a href="#stack">STACK</a>
              <a href="#experience">EXPERIENCE</a>
              <a href="#achievements">ACHIEVEMENTS</a>
              <a href="#education">EDUCATION</a>
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
