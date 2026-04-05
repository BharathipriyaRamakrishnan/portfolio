export const personalInfo = {
  name: "Bharathipriya",
  role: "Software Engineer",
  tagline: "Building digital experiences that matter.",
  bio: "Recently completed my B.E. in Information Science & Engineering and currently working in Kolkata to achieve my dreams of becoming an exceptional software engineer. I'm passionate about building scalable applications and solving real-world problems through technology.",
  location: "Tamil Nadu, India",
  email: "bharathipriyaramakrishnan@gmail.com",
  phone: "+91 76049 00996",
  github: "https://github.com/BharathipriyaRamakrishnan",
  linkedin: "https://www.linkedin.com/in/bharathipriya-ramakrishnan-43291a267/",
  cvFile: "/cv.pdf",
};

export const skills = [
  { category: "Frontend", items: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { category: "Programming Languages", items: ["Java", "C#", "C"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  { category: "Tools & DevOps", items: ["Git", "Linux"] },
];

export const techIcons: Record<string, string> = {
  "React.js": "⚛️", "TypeScript": "𝗧𝗦", "Node.js": "🟩", "MongoDB": "🍃",
  "Python": "🐍", "PostgreSQL": "🐘", "Docker": "🐳", "AWS": "☁️",
};

export const projects = [
  {
    id: 1,
    title: "Smart Timetable Scheduler",
    description: "An intelligent academic timetable generation system with constraint-based scheduling. Supports multi-department, multi-batch scheduling with faculty conflict resolution and room allocation.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/bharathipriya/timetable-scheduler",
    live: "#",
    featured: true,
    color: "#ea9a97",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with product management, cart system, Stripe payment integration, and real-time inventory tracking with admin dashboard.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/bharathipriya/ecommerce",
    live: "#",
    featured: true,
    color: "#9ccfd8",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative project management tool with Kanban boards, real-time updates via WebSocket, role-based access control, and analytics dashboard.",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    github: "https://github.com/bharathipriya/task-manager",
    live: "#",
    featured: false,
    color: "#f6c177",
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description: "Interactive weather analytics platform with historical data visualization, location-based forecasting, and beautiful data charts using D3.js.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/bharathipriya/weather-dash",
    live: "#",
    featured: false,
    color: "#31748f",
  },
  {
    id: 5,
    title: "Social Media REST API",
    description: "Scalable RESTful API for a social media platform with JWT authentication, media uploads, follow system, feeds algorithm, and rate limiting.",
    tags: ["Node.js", "Express", "MongoDB", "AWS S3"],
    github: "https://github.com/bharathipriya/social-api",
    live: "#",
    featured: false,
    color: "#eb6f92",
  },
  {
    id: 6,
    title: "AI Study Companion",
    description: "AI-powered study tool that generates flashcards, quizzes, and summaries from uploaded PDFs using OpenAI API with spaced repetition tracking.",
    tags: ["React", "Python", "OpenAI API", "Firebase"],
    github: "https://github.com/bharathipriya/ai-study",
    live: "#",
    featured: false,
    color: "#c4a7e7",
  },
];

export const experience = [
  {
    id: 1,
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    period: "March 2026 – Present",
    type: "Internship",
    description: "Developed and maintained React-based frontend applications and Node.js backend services. Implemented RESTful APIs, optimized database queries, and contributed to CI/CD pipeline setup.",
    achievements: [
      "Reduced API response time by 40% through query optimization",
      "Built reusable component library adopted across 3 projects",
      "Implemented real-time notifications using WebSocket",
    ],
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Freelance / Self-Employed",
    period: "Jun 2023 – Dec 2023",
    type: "Freelance",
    description: "Designed and developed responsive web applications for various clients. Focused on pixel-perfect UI implementation, performance optimization, and client communication.",
    achievements: [
      "Delivered 5+ client projects on time and within budget",
      "Achieved 98 Lighthouse performance scores consistently",
      "Integrated third-party APIs including Stripe and Google Maps",
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    id: 3,
    role: "Academic Project Lead",
    company: "Anna University",
    period: "2022 – 2024",
    type: "Academic",
    description: "Led a team of 4 developers to build an automated timetable scheduling system for the computer science department. Coordinated sprints, reviewed code, and presented demos to faculty.",
    achievements: [
      "Successfully deployed system used by 2000+ students",
      "Presented project at inter-college tech fest — Won 1st prize",
      "Implemented GA-based constraint solver for conflict-free schedules",
    ],
    tech: ["React", "Python", "PostgreSQL", "Flask"],
  },
];

export const education = [
  {
    degree: "B.E. Information Science & Engineering",
    institution: "Bannari Amman Institute of Technology",
    period: "2022 – 2026",
    grade: "CGPA: 8.3",
  },
];
