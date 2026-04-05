export const resumeData = {
  name: "Ashmit Yerukola",
  initials: "AY",
  location: "East Lansing, MI",
  locationLink: "https://www.google.com/maps/place/East+Lansing,+MI",
  about:
    "An aspiring Software Engineer currently pursuing a Bachelor of Science in Computer Science with a Minor in Business at the University of Michigan. Passionate about backend engineering, API development, and creating structured, efficient software systems. Proven ability to automate workflows, debug complex architectures, and build robust applications.",
  summary:
    "I am a junior Computer Science student at the University of Michigan. My focus lies in systems programming and full-stack development. I have built diverse projects spanning from performant C++ applications to modern web apps using React and Next.js. In my most recent role as a Software Engineer Intern at All Covered, I built automation pipelines for device provisioning, reducing manual setup time significantly. I'm always eager to learn and tackle complex technical challenges.",
  avatarUrl: "",
  personalWebsiteUrl: "https://ashmityerukola.com",
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
      end: "May 2027",
      description: "Relevant Coursework: Discrete Mathematics, Computer Organization and Architecture, Data Structures and Algorithms, Information Management and the Cloud, Linear Algebra, Probability and Statistics.",
    },
  ],
  work: [
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
    "NestJS",
    "NextAuth.js",
    "Git",
    "Linux",
    "Google Cloud Platform",
    "Supabase",
    "SQLite",
    "Pandas",
    "NumPy",
    "Socket.io",
    "Monaco Editor"
  ],
  projects: [
    {
      title: "Concurrent Task Processing System",
      href: "",
      active: true,
      description:
        "Implemented a thread-safe queue using mutexes and condition variables, eliminating busy-waiting and reducing CPU usage under load by ~25%. Designed a multi-producer, multi-consumer system handling 50+ concurrent threads, improving task throughput and ensuring safe parallel execution. Built concurrent test workloads to validate synchronization behavior, eliminating race conditions and ensuring consistent execution across stress tests.",
      technologies: [
        "C++",
      ],
      links: [],
    },
    {
      title: "CodeCollab",
      href: "",
      active: true,
      description:
        "Developed a real-time collaborative code editor with Monaco Editor, enabling seamless collaboration between developers. Built a robust backend with NestJS and PostgreSQL, handling 1,000+ active sessions and ensuring real-time synchronization. Reduced collaboration delays by 30% by integrating Socket.io for real-time data syncing.",
      technologies: [
        "TypeScript",
        "Next.js",
        "NestJS",
        "Tailwind CSS",
        "Socket.io",
        "Supabase",
        "NextAuth.js",
        "PostgreSQL"
      ],
      links: [],
    },
    {
      title: "Algorithmic Trading Strategy Backtester",
      href: "",
      active: true,
      description:
        "Developed a trading backtesting engine that simulated 10-30 trades across ~250 trading days by implementing moving-average crossover logic and portfolio simulation in Python, generating actionable performance insights. Evaluated strategy effectiveness as measured by Sharpe ratio (~0.8-1.5), drawdown (~5-15%), and return vs. benchmark by designing vectorized financial computations and exposing results through a FastAPI-based API for configurable analysis.",
      technologies: [
        "Python",
        "FastAPI",
        "Pandas",
        "NumPy",
        "yfinance"
      ],
      links: [],
    },
  ],
};
