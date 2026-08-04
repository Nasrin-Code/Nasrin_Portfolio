// All content below is sourced directly from Nasrin A's resume.
// Do not add achievements, tools, or dates that aren't in the source resume.

export const profile = {
  name: "Nasrin A",
  role: "Python Developer",
  roles: [
    "Python Developer",
    "Backend Developer",
    "REST API Developer",
    "Software Engineer",
    "Problem Solver",
  ],
  email: "nasrin512003@gmail.com",
  linkedin: "https://linkedin.com/in/nasrin512003",
  github: "https://github.com/Nasrin-Code",
  leetcode: "https://leetcode.com/u/nasrin512003/",
  resumeFile: "/Nasrin_A_Resume.pdf",
  summary:
    "Entry-level Python Developer and Software Engineer with hands-on experience in backend development, REST API design, and Object-Oriented Programming. Proficient in Python, Flask, SQLAlchemy, SQLite, and SQL, with a solid foundation in the Software Development Life Cycle (SDLC) and Agile methodology. Independently designed, developed, and deployed full-stack applications, integrating REST APIs and version-controlling all work with Git/GitHub. Strong problem-solving ability and a track record of shipping production-ready projects; seeking an entry-level Python Developer, Software Developer, or AI/ML Engineer role.",
};

export const aboutHighlights = [
  "Python",
  "Software Engineering",
  "Backend Development",
  "REST APIs",
  "Object-Oriented Programming",
  "Git",
  "GitHub",
  "Problem Solving",
];

export type SkillGroup = {
  label: string;
  route: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    route: "GET /skills/languages",
    items: ["Python", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    route: "GET /skills/frameworks",
    items: ["Flask", "SQLAlchemy", "Streamlit", "Pandas", "NumPy", "Tkinter"],
  },
  {
    label: "Backend",
    route: "GET /skills/backend",
    items: [
      "REST APIs",
      "CRUD Operations",
      "Authentication",
      "Password Hashing",
      "ORM (SQLAlchemy)",
      "Unit Testing",
      "SQLite",
      "MySQL",
    ],
  },
  {
    label: "Tools",
    route: "GET /skills/tools",
    items: ["Git", "GitHub", "Postman", "Render", "VS Code", "Power BI", "Excel"],
  },
  {
    label: "Core",
    route: "GET /skills/core",
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "SDLC",
      "Agile",
      "Scrum",
      "Debugging",
      "Problem Solving",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  overview: string;
  features: string[];
  stack: string[];
  challenges: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "medicine-reminder-app",
    title: "Medicine Reminder App",
    period: "May 2026 – Jun 2026",
    tagline: "Full-stack medicine tracker with automated scheduling and RESTful CRUD.",
    overview:
      "Architected and deployed a full-stack medicine reminder application using Flask and SQLAlchemy, with automated scheduling and secure CRUD-based tracking for recurring medication.",
    features: [
      "Automated scheduling for recurring medication",
      "Secure, CRUD-based tracking of medicine records",
      "RESTful APIs with full CRUD functionality — cut manual medicine-tracking effort by ~70% for end users",
      "All endpoints validated with Postman before release",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "SQLite", "REST API", "HTML", "CSS"],
    challenges:
      "Shipped a production-ready build on Render via Git/GitHub, validating every endpoint with Postman and achieving zero critical bugs at launch.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: true,
  },
  {
    slug: "smart-job-tracker",
    title: "Smart Job Tracker",
    period: "Apr 2026 – May 2026",
    tagline: "Interactive Streamlit dashboard for managing a job search end to end.",
    overview:
      "Built an interactive job-tracking dashboard in Streamlit, enabling real-time filtering and end-to-end application status management.",
    features: [
      "Search, filter, and CRUD logic to streamline job search workflows — cut application review time by ~50%",
      "CSV export feature for offline analysis",
      "Analytics dashboard with data-driven insights",
      "Manages 50+ job entries in production use",
    ],
    stack: ["Python", "Streamlit", "SQLite", "Pandas"],
    challenges: "Deployed on Streamlit Community Cloud, currently managing 50+ live job entries.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: true,
  },
  {
    slug: "voice-assistant",
    title: "Voice Assistant",
    period: "OIBSIP",
    tagline: "Voice-driven desktop assistant with speech recognition and text-to-speech.",
    overview:
      "A Python voice assistant built during the Oasis Infobyte internship, combining speech recognition with text-to-speech output.",
    features: [
      "Voice commands via SpeechRecognition",
      "Text-to-speech responses with pyttsx3",
      "Google search and app launching by voice",
      "Real-time weather lookup via the OpenWeatherMap REST API",
      "Voice-set reminders",
    ],
    stack: ["Python", "SpeechRecognition", "pyttsx3", "Requests", "OpenWeatherMap API"],
    challenges:
      "Delivered under mentor guidance as part of the OIBSIP Advanced-tier task set, following clean-coding practices and fixed task deadlines.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: false,
  },
  {
    slug: "weather-application",
    title: "Weather Application",
    period: "OIBSIP",
    tagline: "Tkinter GUI for real-time weather lookups.",
    overview:
      "A Tkinter-based desktop application that surfaces live weather data through the OpenWeatherMap REST API.",
    features: [
      "Real-time temperature, humidity, and wind-speed lookup",
      "Clean Tkinter GUI",
      "OpenWeatherMap REST API integration",
    ],
    stack: ["Python", "Tkinter", "OpenWeatherMap API"],
    challenges: "Built as part of the OIBSIP Advanced-tier task set with OOP-driven, structured code.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: false,
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    period: "OIBSIP",
    tagline: "GUI-based BMI tool with SQLite-backed history tracking.",
    overview:
      "A Tkinter BMI calculator that classifies results and stores a persistent history of past entries in SQLite.",
    features: [
      "GUI-based BMI classification",
      "SQLite-backed history tracking",
      "Structured, OOP-driven Python code",
    ],
    stack: ["Python", "Tkinter", "SQLite"],
    challenges: "Delivered against fixed OIBSIP task deadlines with version control on every commit.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: false,
  },
  {
    slug: "random-password-generator",
    title: "Random Password Generator",
    period: "OIBSIP",
    tagline: "Configurable secure password generator with a Tkinter GUI.",
    overview: "A lightweight Tkinter utility for generating randomized, secure passwords.",
    features: ["Tkinter GUI", "Randomized password generation"],
    stack: ["Python", "Tkinter"],
    challenges: "Built as part of the OIBSIP Advanced-tier task set.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: false,
  },
  {
    slug: "chat-application",
    title: "Chat Application",
    period: "OIBSIP",
    tagline: "Multi-user real-time chat over sockets.",
    overview:
      "A multi-user chat application built with raw socket programming and threading for real-time client-server messaging.",
    features: [
      "Real-time client-server messaging",
      "Multi-user support via threading",
      "Built on Python's socket programming",
    ],
    stack: ["Python", "Tkinter", "Socket Programming", "Threading"],
    challenges: "Delivered under mentor guidance as part of the OIBSIP Advanced-tier task set.",
    github: "https://github.com/Nasrin-Code",
    demo: undefined,
    featured: false,
  },
];

export type Internship = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  current: boolean;
};

export const internships: Internship[] = [
  {
    company: "Oasis Infobyte (OIBSIP)",
    role: "Python Development Intern",
    period: "Jul 2026 – Aug 2026",
    bullets: [
      "Completed a series of Advanced-tier Python projects — Weather Application (Tkinter GUI, OpenWeatherMap REST API integration), BMI Calculator (Tkinter GUI with SQLite-backed history tracking), Random Password Generator, and a multi-user Chat Application (socket programming, threading) — under mentor guidance.",
      "Applied Object-Oriented Programming principles and structured problem-solving to deliver clean, functional Python code against fixed task deadlines.",
      "Used Git and GitHub for version control across all deliverables and followed SDLC and clean-coding practices throughout.",
    ],
    current: false,
  },
  {
    company: "Zaalima Development Pvt. Ltd.",
    role: "Python Development Intern",
    period: "Aug 2026 – Present",
    bullets: [],
    current: true,
  },
];

export const certifications = [
  {
    title: "Python Programming, OOP, DBMS, SQL, NoSQL",
    issuer: "Infosys Springboard",
    period: "Mar – Apr 2026",
  },
  {
    title: "Software Engineering & Agile Development, Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    period: "Apr – May 2026",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata, via Forage",
    period: "Jan 2026",
  },
  {
    title: "Python Programming Workshop",
    issuer: "NIT Trichy Pragyan",
    period: "Feb 2025",
  },
  {
    title: "Artificial Intelligence",
    issuer: "NoviTech R&D Pvt. Ltd",
    period: "May – Jun 2025",
  },
  {
    title: "Data Analytics",
    issuer: "NoviTech R&D Pvt. Ltd",
    period: "Feb – Mar 2025",
  },
  {
    title: "Excel Essential Training",
    issuer: "LinkedIn Learning",
    period: "Nov 2025",
  },
];

export const education = [
  {
    level: "College",
    institution: "M.I.E.T. Engineering College, Tiruchirappalli, Tamil Nadu",
    detail: "B.E. in Electronics and Communication Engineering",
    metric: "CGPA: 8.6/10",
    period: "Sep 2022 – May 2026",
  },
  {
    level: "HSC",
    institution: "Swami Vivekananda Matriculation Higher Secondary School",
    detail: "Higher Secondary Certificate",
    metric: "92%",
    period: "",
  },
  {
    level: "SSLC",
    institution: "Swami Vivekananda Matriculation Higher Secondary School",
    detail: "Secondary School Leaving Certificate",
    metric: "95%",
    period: "",
  },
];

export const technicalSkillsFlat = [
  "Python",
  "SQL",
  "HTML",
  "CSS",
  "Flask",
  "SQLAlchemy",
  "Pandas",
  "NumPy",
  "Streamlit",
  "SQLite",
  "MySQL",
  "DBMS",
  "NoSQL",
  "REST APIs",
  "JSON",
  "HTTP",
  "CRUD Operations",
  "Authentication",
  "Password Hashing",
  "ORM (SQLAlchemy)",
  "Unit Testing",
  "Git",
  "GitHub",
  "Postman",
  "Render",
  "VS Code",
  "Power BI",
  "Excel",
  "OOP",
  "Data Structures",
  "SDLC",
  "Agile",
  "Scrum",
  "Debugging",
];
