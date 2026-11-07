"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Aperture, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const experience = [
  {
    role: "Technology Lead",
    company: "Hangar / Critical Mass LATAM",
    period: "December 2019 — Present",
    bullets: [
      "Designed and operated cloud infrastructure across AWS and Azure using Terraform and Infrastructure as Code.",
      "Architected enterprise CI/CD platforms with GitHub Actions, Jenkins and CircleCI for multiple engineering teams.",
      "Built a centralized GitHub Actions platform with reusable workflows and standardized CI/CD templates used across projects.",
      "Developed ephemeral self-hosted GitHub Actions runners in Docker, provisioned and destroyed on demand.",
      "Automated GitHub PAT generation, lifecycle management, runner registration, rotation, expiration and revocation.",
      "Created workflow templates that let teams onboard projects without custom deployment pipelines.",
      "Built secure GitHub Artifact delivery to Azure VMs over SSH ED25519, including validation, rollback and orchestration across dev, QA, staging and production.",
      "Containerized enterprise workloads with Docker and Kubernetes; hardened Linux using rootless Docker, least privilege and restricted SSH.",
      "Automated infrastructure, releases and operational tasks with Bash and version-controlled IaC; established Git and release standards across teams.",
      "Reduced release times from several hours to under 30 minutes through standardized automation.",
      "Established troubleshooting, validation and maintenance practices to improve platform reliability.",
      "Partnered with architects, developers, QA and stakeholders on secure, highly available cloud solutions.",
      "Introduced an AI-assisted GitHub Actions process that reduced deployment setup to under 15 minutes.",
      "Designed AI-driven media delivery architecture, reducing delivery from 1–2 days to an hour or less.",
    ],
  },
  {
    role: "Senior PHP Developer",
    company: "Hangar / Critical Mass LATAM",
    period: "April 2015 — December 2019",
    bullets: [
      "Built enterprise web applications for global organizations using PHP, Drupal, WordPress, JavaScript and modern web technologies.",
      "Introduced Docker-based development environments and supported CI/CD automation with CircleCI.",
      "Contributed to architecture, code reviews, production releases and performance optimization.",
      "Collaborated with engineering and QA through the software development lifecycle; supported business-critical production platforms.",
    ],
  },
  {
    role: "Software Engineering Lecturer",
    company: "Universidad Latina de Costa Rica",
    period: "September 2012 — September 2013",
    bullets: [
      "Taught Software Engineering, Software Design and Design Patterns through full SDLC projects.",
      "Mentored multidisciplinary teams on architecture, implementation, testing, deployment and maintainability.",
      "Courses: Programming with Design Patterns, Conceptual Software Design, Software Engineering Project II.",
    ],
  },
  {
    role: "PHP Web Developer",
    company: "Descontadora Nacional S.A.",
    period: "March 2011 — April 2015",
    bullets: [
      "Developed business applications with PHP, Java, ASP.NET and SQL Server.",
      "Automated builds and deployments with Jenkins CI/CD and connected front-end and back-end systems.",
      "Maintained legacy ASP Classic applications and administered Linux and Windows production servers.",
    ],
  },
];

const skills = [
  ["Cloud", "Amazon Web Services · Microsoft Azure"],
  ["Infrastructure", "Terraform · Docker · Kubernetes · Linux · Apache · NGINX · Windows Server"],
  ["Delivery", "GitHub Actions · Jenkins · CircleCI · Bash · Git · GitHub · Bitbucket · Jira"],
  ["Development", "PHP · JavaScript · C# · SQL · React · Next.js · HTML5 · CSS3 · Sass · GSAP"],
  ["Platforms", "Drupal · WordPress · Laravel · ASP.NET MVC · Handlebars · Bootstrap"],
  ["Data & quality", "MySQL · PostgreSQL · Microsoft SQL Server · Selenium"],
  ["Hosting", "AWS · WP Engine · Pantheon · Ubuntu · CentOS · Red Hat"],
];

const photos = {
  walk: "/photos/walk-daruma.jpg",
  fuji: "/photos/miho-fuji.png",
  temple: "/photos/kiyomizu-temple.png",
  gold: "/photos/kinkakuji.png",
  daruma: "/photos/daruma-detail.png",
};

function Photo({ src, alt, label, className = "", phase = 0 }: { src: string; alt: string; label: string; className?: string; phase?: number }) {
  const reducedMotion = useReducedMotion();
  const frameRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [145, -145]);
  const scale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1.08, 1.08] : [1.18, 1.42]);

  return (
    <figure ref={frameRef} className={`photo-print ${className}`}>
      <div className="photo-window">
        <motion.div className="photo-motion" style={{ y, scale }}>
          <Image src={src} alt={alt} fill sizes="(max-width: 760px) 92vw, 55vw" priority={phase === 0} />
        </motion.div>
        <span className="photo-index"><Aperture size={13} /> {label}</span>
      </div>
      <figcaption>{alt}</figcaption>
    </figure>
  );
}

function Motif({ kind, className = "" }: { kind: "ukiyoe" | "sun" | "mountain" | "torii" | "sakura"; className?: string }) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => reducedMotion ? 0 : Math.sin(value / 1000 + kind.length) * 70);
  const rotate = useTransform(scrollY, (value) => reducedMotion ? 0 : Math.sin(value / 1800 + kind.length) * 3);

  return (
    <motion.svg className={`japan-motif motif-${kind} ${className}`} style={{ y, rotate }} viewBox="0 0 640 420" aria-hidden="true">
      {kind === "ukiyoe" && <g stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
        <circle cx="490" cy="112" r="58" fill="#c6463c" stroke="none" />
        <path d="M22 326Q116 248 218 326q91 67 179 0 83-62 215 5v89H22z" fill="#648d83" />
        <path d="m94 339 183-244 47 67 50-37 167 214" fill="#2c5265" />
        <path d="m277 95 39 52 24-19 33 44-27-12-29 17-28-25-24 11z" fill="#fffdf6" stroke="none" />
        <path d="M0 180q78-51 160 0t161 0 159 0 160 0M0 205q78-51 160 0t161 0 159 0 160 0" fill="none" stroke="#fffdf6" strokeWidth="12" />
        <path d="M510 353v-72m-20 72 20-40 20 40m-20-26-26-18m26 18 27-22m-27 4-23-23m23 23 23-26" fill="none" stroke="#253b3b" strokeWidth="8" strokeLinecap="round" />
        <path d="M552 362v-57m-15 57 15-32 16 32m-16-21-19-14m19 14 19-16" fill="none" stroke="#253b3b" strokeWidth="7" strokeLinecap="round" />
      </g>}
      {kind === "sun" && <g><circle cx="390" cy="180" r="116" fill="currentColor" /><path d="M250 215h280M280 242h220M310 269h160" fill="none" stroke="#c6463c" strokeWidth="4" /></g>}
      {kind === "mountain" && <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"><path d="m35 355 190-250 80 94 76-128 220 284H35Z"/><path d="m225 105 53 73 27-25m76-82 68 90 24-19"/></g>}
      {kind === "torii" && <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square"><path d="M85 115q235-44 470 0M115 139h410M155 155v220m330-220v220M136 228h368"/><path d="M190 157v160m230-160v160" strokeWidth="5"/></g>}
      {kind === "sakura" && <g fill="currentColor"><path d="M56 380Q255 280 580 30M200 307l-70-90m155 27 55-107m-10 73 102 5m-176 71 111-3" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>{[[130,216],[286,137],[442,226],[500,96],[335,294]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}>{[0,72,144,216,288].map((deg)=><ellipse key={deg} cx="0" cy="-10" rx="6" ry="11" transform={`rotate(${deg})`}/>)}</g>)}</g>}
    </motion.svg>
  );
}

function ManekiNeko({ className = "" }: { className?: string }) {
  return (
    <svg className={`maneki-mark ${className}`} viewBox="0 0 140 160" aria-hidden="true">
      <circle cx="70" cy="72" r="60" fill="#e6b943" />
      <path d="M29 65 25 25l30 20q16-10 34-2l25-20-2 43q10 17 2 34l-7 27H38l-7-27q-9-17-2-35Z" fill="#fff9ee" stroke="#29252a" strokeWidth="5" strokeLinejoin="round" />
      <path d="M49 72q8-7 15 0m17 0q8-7 15 0m-26 12 5 4 5-4m-10 9q5 5 10 0M45 87l-13-3m13 10-13 2m64-9 13-3m-13 10 13 2" fill="none" stroke="#29252a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="70" cy="126" r="12" fill="#c6463c"/><text x="70" y="131" textAnchor="middle" fill="#fff9ee" fontSize="12" fontFamily="serif">福</text>
    </svg>
  );
}

function KitsuneMask({ className = "" }: { className?: string }) {
  return (
    <svg className={`kitsune-mask ${className}`} viewBox="0 0 180 190" aria-hidden="true">
      <path d="M34 79 19 17l57 35q17-6 34 0l52-34-12 64q10 40-12 70-18 25-42 25t-42-25Q31 120 34 79Z" fill="#d76b43" stroke="#29252a" strokeWidth="6" strokeLinejoin="round" />
      <path d="m45 82-8-35 33 21m74 0 7-35-32 21" fill="#f2bd61" stroke="#29252a" strokeWidth="4" strokeLinejoin="round" />
      <path d="M42 100q18-17 42 0l-7 13-27 4m88-17q-18-17-42 0l7 13 27 4" fill="#fff7e9" stroke="#29252a" strokeWidth="4" strokeLinejoin="round" />
      <path d="M74 121q16-10 32 0l-16 17z" fill="#29252a" />
      <path d="M90 138v15m-17-1q17 8 34 0" fill="none" stroke="#29252a" strokeWidth="4" strokeLinecap="round" />
      <path d="M47 125 28 130m21-1-18 9m102-13 19 5m-20 1 18 9" fill="none" stroke="#fff7e9" strokeWidth="3" strokeLinecap="round" />
      <circle cx="90" cy="163" r="11" fill="#f2bd61" stroke="#29252a" strokeWidth="3" />
      <text x="90" y="168" textAnchor="middle" fill="#29252a" fontSize="12" fontFamily="serif">狐</text>
    </svg>
  );
}

function FiveYen() {
  return <svg className="five-yen" viewBox="0 0 180 180" aria-label="Five yen coin"><circle cx="90" cy="90" r="78" fill="#d9ad4c" stroke="#5d4b2f" strokeWidth="7"/><circle cx="90" cy="92" r="15" fill="#f4eddf" stroke="#5d4b2f" strokeWidth="4"/><path d="M42 69q24-25 48 0m0 0q24-25 48 0M47 76h86M50 119h80m-68 10h56" fill="none" stroke="#5d4b2f" strokeWidth="4" strokeLinecap="round"/><text x="90" y="44" textAnchor="middle" fill="#5d4b2f" fontSize="14" fontFamily="serif">五円</text></svg>;
}

function SectionMark({ number, title }: { number: string; title: string }) {
  const principles = ["忍耐", "進化", "成功", "進化", "忍耐", "成功"];
  const principle = principles[Number(number) - 1] ?? "進化";
  return <div className="section-mark"><span>{number}</span><span>{title}</span><i lang="ja" aria-label={principle}>{principle}</i></div>;
}

export default function Home() {
  return (
    <main className="magazine">
      <header className="masthead">
        <a className="wordmark" href="#top">AO<span> / CR</span></a>
        <nav aria-label="Sections"><a href="#story">Profile</a><a href="#journal">Japan journal</a><a href="#work">Work</a><a href="#toolkit">Toolkit</a></nav>
        <a className="header-contact" href="mailto:aldortsa@gmail.com">CONTACT <ArrowUpRight size={14}/></a>
      </header>

      <section className="cover" id="top">
        <Motif kind="sun" className="cover-sun" />
        <div className="cover-meta"><span>FIELD JOURNAL / VOL. 01</span><span>CARTAGO · COSTA RICA</span></div>
        <div className="cover-grid">
          <div className="cover-copy">
            <p className="kicker"><span>PHOTOGRAPHER</span><span>DEVELOPER</span><span>PLATFORM ENGINEER</span></p>
            <h1>Aldair Josue<br /><em>Ortiz Sancho</em></h1>
            <p className="cover-lead">I build dependable systems<br />and collect small moments.</p>
            <a className="cover-scroll" href="#story"><span>SCROLL TO EXPLORE</span><ArrowDown size={18}/></a>
          </div>
          <Photo src={photos.walk} alt="Walking past a wall of red daruma dolls in Japan" label="35° 44' N / 139° 50' E" className="cover-photo" phase={0} />
          <ManekiNeko className="cover-neko" />
        </div>
        <div className="cover-bottom"><span>DEVOPS / CLOUD / AI</span><span>01 — A WALK THROUGH THE IN-BETWEEN</span></div>
      </section>

      <section className="profile spread" id="story">
        <Motif kind="ukiyoe" className="profile-ukiyoe" />
        <SectionMark number="01" title="THE PERSON BEHIND THE SYSTEMS" />
        <div className="profile-layout">
          <div className="profile-title"><p className="kicker">15+ YEARS IN SOFTWARE</p><h2>Make room<br />for <em>good work.</em></h2><p className="place"><MapPin size={16}/> Cartago, Costa Rica</p></div>
          <div className="profile-text">
            <p className="intro-large">Senior DevOps Engineer with 15+ years designing, automating and operating cloud infrastructure, CI/CD platforms and enterprise software.</p>
            <p>Hands-on across AWS and Azure, Terraform, Docker, Kubernetes, GitHub Actions, Jenkins, CircleCI, Linux and automation. I build secure deployment systems, reusable workflows and the platform foundations that help teams ship with confidence.</p>
            <p>My work brings together cloud architecture, release engineering, platform design and technical leadership, with a growing focus on AI-enabled workflows.</p>
            <div className="discipline-line"><span>AWS</span><span>DEVOPS</span><span>CLOUD</span><span>PLATFORM</span><span>AI</span><span>TECH LEAD</span></div>
          </div>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="journal-heading"><SectionMark number="02" title="JAPAN, IN FRAMES"/><h2>Light, texture,<br /><em>in-between.</em></h2><p>A few pieces of a journey through distance, craft and quiet detail.</p><FiveYen/></div>
        <div className="contact-sheet">
          <Photo src={photos.fuji} alt="Fuji above the road to Miho beach" label="MIHO / 01" className="journal-fuji" phase={1.2}/>
          <Photo src={photos.temple} alt="Kiyomizu-dera temple above Kyoto" label="KYOTO / 02" className="journal-temple" phase={2.4}/>
          <Photo src={photos.daruma} alt="A close-up of a red daruma doll" label="KATSUSHIKA / 03" className="journal-daruma" phase={3.6}/>
          <Photo src={photos.gold} alt="The Golden Pavilion reflected in its pond" label="KINKAKU-JI / 04" className="journal-gold" phase={4.8}/>
          <Motif kind="mountain" className="journal-mountain"/>
          <KitsuneMask className="journal-kitsune"/>
        </div>
      </section>

      <section className="work spread" id="work">
        <Motif kind="sakura" className="work-sakura"/>
        <SectionMark number="03" title="CAREER / SELECTED NOTES"/>
        <div className="work-heading"><h2>Engineering<br /><em>that travels.</em></h2><p>Four chapters in platform, product, teaching and business systems.</p></div>
        <div className="timeline">
          {experience.map((job,index)=><article className="timeline-entry" key={job.role}>
            <div className="timeline-index"><span>0{index+1}</span><span>{job.period}</span></div>
            <div className="timeline-copy"><p className="timeline-company">{job.company}</p><h3>{job.role}</h3><ul>{job.bullets.map(item=><li key={item}>{item}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="toolkit spread" id="toolkit">
        <Motif kind="ukiyoe" className="toolkit-ukiyoe"/>
        <SectionMark number="04" title="TOOLS / PRACTICE"/>
        <div className="work-heading"><h2>One craft.<br /><em>Many tools.</em></h2><p>From infrastructure to interface,<br/>from first commit to steady state.</p></div>
        <div className="tool-list">{skills.map(([label,items],index)=><div className="tool-row" key={label}><span>0{index+1}</span><h3>{label}</h3><p>{items}</p><ArrowUpRight size={17}/></div>)}</div>
        <div className="competencies"><span>CORE COMPETENCIES</span><p>DevOps Engineering · Cloud Infrastructure · CI/CD Automation · Infrastructure as Code · Kubernetes · Docker · Platform Engineering · Linux Administration · AWS · Azure · GitHub Actions · Jenkins · CircleCI · Cloud Architecture · Site Reliability Engineering · Technical Leadership · Agile / Scrum</p></div>
      </section>

      <section className="education spread">
        <Motif kind="sun" className="education-sun"/>
        <SectionMark number="05" title="THE FOOTNOTES"/>
        <div className="education-layout"><div><p className="kicker">2011 / COSTA RICA</p><h2>Learned to<br /><em>keep learning.</em></h2><h3>Bachelor&apos;s Degree in Software Engineering</h3><p>Universidad Latina de Costa Rica</p></div><div className="language-list"><span>LANGUAGES</span><p><b>Spanish</b><i>Native</i></p><p><b>English</b><i>Professional working proficiency</i></p><KitsuneMask className="education-kitsune"/></div></div>
      </section>

      <section className="contact-page">
        <Motif kind="torii" className="contact-torii"/>
        <Photo src={photos.gold} alt="Golden Pavilion at dusk reflected in the water" label="LAST LIGHT / KYOTO" className="contact-photo" phase={5.5}/>
        <div className="contact-copy"><SectionMark number="06" title="THE NEXT CHAPTER"/><p className="kicker">OPEN TO GOOD CONVERSATIONS</p><h2>Let&apos;s make<br /><em>something work.</em></h2><a className="email-link" href="mailto:aldortsa@gmail.com">aldortsa@gmail.com <ArrowUpRight size={20}/></a><div className="contact-details"><a href="tel:+50660352490">+506 6035 2490</a><a href="https://www.linkedin.com/in/aldair-ortiz-sancho-1688a135/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a><span>Cartago, Costa Rica</span></div></div>
        <footer className="footer"><a className="wordmark" href="#top">AO<span> / CR</span></a><span>ALDAIR JOSUE ORTIZ SANCHO · 2026</span><a href="#top">BACK TO THE TOP ↑</a></footer>
      </section>
    </main>
  );
}