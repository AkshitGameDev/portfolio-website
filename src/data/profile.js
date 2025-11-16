// src/data/profile.js
export const profile = {
  name: "Akshit Sharma",
  title: "Software, Game & App Developer",
  summary:
    "I build games, mobile apps, web apps and backend systems. Curious, fast learner and love shipping polished products.",
  location: "Ontario, Canada",
  email: "your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-linkedin",
  resumeUrl: "", // add Google Drive / PDF link later
};

export const skills = [
  "JavaScript / TypeScript",
  "React / React Native / Expo",
  "Node.js / Express",
  "PostgreSQL / Prisma / Redis",
  "Android (Kotlin / Java)",
  "Unity / C# (Games)",
  "Git / GitHub",
];

export const experiences = [
  {
    role: "Game Developer",
    company: "Gamezop",
    period: "2021 - 2023",
    description:
      "Developed and optimized hyper-casual games, collaborated with designers and artists, shipped multiple titles.",
  },
  {
    role: "Software Developer",
    company: "Freelance / Personal Projects",
    period: "2019 - Present",
    description:
      "Built apps, websites and tools with modern stacks like React, Node, Android and Unity.",
  },
];

export const projects = [
  {
    name: "Delivery-App-API",
    description:
      "Backend for delivery platform using Node, Express, Prisma, PostgreSQL and Redis with idempotency, job assignment and heartbeat tracking.",
    tech: ["Node", "Express", "Prisma", "PostgreSQL", "Redis"],
    github: "https://github.com/your-username/Delivery-App-API",
    live: "",
    image: "",
  },
  {
    name: "Journal Pro",
    description:
      "Android journaling app using Firebase Realtime Database, RecyclerView and custom UI for daily reflections.",
    tech: ["Android", "Kotlin", "Firebase"],
    github: "https://github.com/your-username/JournalPro",
    live: "",
    image: "",
  },
  {
    name: "Mock Therapy Videos Generator",
    description:
      "AI-powered mock therapy simulation for Family TLC to help with training and education.",
    tech: ["Python", "Streamlit", "AI"],
    github: "https://github.com/your-username/mock-therapy",
    live: "",
    image: "",
  },
];
