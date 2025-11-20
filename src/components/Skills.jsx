// src/components/Skills.jsx
import "../styles/skills.css";

// import your icons here (adjust paths & filenames)
import csharpIcon from "../assets/react.svg";
import jsIcon from "../assets/react.svg";
import tsIcon from "../assets/react.svg";
import reactIcon from"../assets/react.svg";
import nodeIcon from "../assets/react.svg";
import expressIcon from "../assets/react.svg";
import postgresIcon from "../assets/react.svg";
import prismaIcon from "../assets/react.svg";
import redisIcon from "../assets/react.svg";
import androidIcon from "../assets/react.svg";
import kotlinIcon from "../assets/react.svg";
import unityIcon from "../assets/react.svg";
import gitIcon from "../assets/react.svg";
import githubIcon from "../assets/react.svg";
import tailwindIcon from "../assets/react.svg";
import htmlIcon from "../assets/react.svg";

const skillItems = [
  { name: "C#", icon: csharpIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Prisma", icon: prismaIcon },
  { name: "Redis", icon: redisIcon },
  { name: "Android", icon: androidIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "Unity", icon: unityIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "HTML5", icon: htmlIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skillset</h2>

      <div className="skills-grid">
        {skillItems.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}