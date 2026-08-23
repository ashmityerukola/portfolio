export const resumeData = {
  name: "Ashmit Yerukola",
  initials: "AY",
  location: "Ann Arbor, MI",
  locationLink: "https://www.google.com/maps/place/Ann+Arbor,+MI",
  about:
    "An aspiring Software Engineer currently pursuing a Bachelor of Science in Computer Science at the University of Michigan. Passionate about backend engineering, data systems, and creating structured, efficient software solutions. Proven ability to automate workflows, debug complex architectures, and build robust applications.",
  summary:
    "I am a Computer Science student at the University of Michigan. My focus lies in systems programming and full-stack development. I have built diverse projects spanning from performant C++ applications to modern web apps using React and Next.js. I have professional experience as a Software Developer Intern at Georgia Tech Research Institute and as a Software Engineer Intern at All Covered. I'm always eager to learn and tackle complex technical challenges.",
  avatarUrl: "",
  personalWebsiteUrl: "https://ashmityerukola.org",
  contact: {
    email: "ashmity@umich.edu",
    tel: "734-972-8891",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ashmityerukola",
        icon: "Github",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashmit-yerukola/",
        icon: "Linkedin",
      },
    },
  },
  education: [
    {
      school: "University of Michigan",
      href: "https://umich.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "",
      end: "May 2028",
      description: "GPA: 3.7/4.0. Relevant Coursework: Data Structures & Algorithms, Computer Organization & Architecture, Discrete Mathematics, Linear Algebra, Probability & Statistics, Cloud Computing.",
    },
  ],
  work: [
    {
      company: "Georgia Tech Research Institute",
      href: "https://www.gtri.gatech.edu/",
      badges: [],
      location: "Huntsville, AL",
      title: "Software Developer Intern",
      logoUrl: "",
      start: "May 2026",
      end: "Aug 2026",
      description:
        "Remediated all 84 JavaScript vulnerabilities (including command injection and path traversal flaws) from GitLab SAST and dependency scanning, and built a reusable 4-function input-validation module to standardize sanitization going forward—clearing the security gate with zero regressions across 200+ tests. Extended a Wireshark testing tool from supporting a single protocol to supporting multiple protocols, by using Python to orchestrate ANTLR-based test programs running against each other in Docker. Added support for a new IDL version across the Wireshark dissector, RTI DDS, and ANTLR components, updating protocol definitions and build configuration in each so traffic using the updated schema decoded correctly end to end.",
    },
    {
      company: "All Covered",
      href: "https://www.allcovered.com/",
      badges: [],
      location: "New Hudson, MI",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Built automation pipelines provisioning 300+ devices per day using Python and Bash, reducing manual setup time by ~70% and enabling scalable deployments across multiple client environments. Developed standardized deployment scripts across 10+ hardware configurations, reducing configuration inconsistencies and cutting setup errors by ~40%. Diagnosed OS-level and software compatibility issues, increasing deployment success rates from ~85% to 98% and improving overall system reliability.",
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Java",
    "C++",
    "C",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "ARM Assembly",
    "React",
    "Next.js",
    "FastAPI",
    "Git",
    "Linux",
    "Google Cloud Platform",
    "Supabase",
    "SQLite",
    "Docker",
    "GitLab",
    "Podman",
    "Wireshark",
    "ANTLR",
    "Pandas",
    "NumPy",
    "Socket.io",
    "Monaco Editor"
  ],
  projects: [
    {
      title: "Spartan Finder",
      href: "",
      active: true,
      description:
        "Developed a full-stack social platform to connect students, implementing authentication, profile management, and database integration, supporting 100+ user interactions per session with reliable data persistence. Built location-based matching using Leaflet maps, enabling users to discover nearby connections and improving user discovery efficiency through real-time filtering and rendering. Designed and optimized backend messaging and data workflows using Supabase/PostgreSQL, reducing data retrieval overhead by ~25% and improving overall application responsiveness.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Leaflet"
      ],
      links: [],
    },
    {
      title: "Crypto Exchange Simulator",
      href: "",
      active: true,
      description:
        "Developed a C++ trading engine simulating a crypto exchange with order matching (buy/sell, limit orders), processing thousands of transactions per run with millisecond-level execution latency using map/vector-based order books. Designed portfolio and order management system supporting multi-user asset tracking, trade execution, and balance validation, ensuring consistency across deposits, withdrawals, and concurrent order updates. Implemented trade history logging and bid-ask spread calculation, improving order matching efficiency and reducing lookup overhead by ~25% through optimized iteration and data structures.",
      technologies: [
        "C++",
      ],
      links: [],
    },
  ],
};
