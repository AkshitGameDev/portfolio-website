// src/components/Skills.jsx
import "../styles/skills.css";

// Exact icons from your assets folder
import cpp from "../assets/icons/cpp.png";
import csharp from "../assets/icons/csharp.svg";
import cocos from "../assets/icons/cocos_creator.svg";
import dart from "../assets/icons/dart.svg";
import expo from "../assets/icons/expo.svg";
import flutter from "../assets/icons/flutter.svg";
import godot from "../assets/icons/godot.svg";
import js from "../assets/icons/js.svg";
import mongodb from "../assets/icons/mongodb.svg";
import node from "../assets/icons/node.png";
import react from "../assets/icons/react.svg";
import swift from "../assets/icons/swift.png";
import ts from "../assets/icons/ts.png";
import unity from "../assets/icons/unity.png";
import unreal from "../assets/icons/unreal.png";
import xcode from "../assets/icons/xcode.png";

const skillItems = [
  { name: "C++", icon: cpp },
  { name: "C#", icon: csharp },
  { name: "Cocos Creator", icon: cocos },
  { name: "Dart", icon: dart },
  { name: "Expo", icon: expo },
  { name: "Flutter", icon: flutter },
  { name: "Godot", icon: godot },
  { name: "JavaScript", icon: js },
  { name: "MongoDB", icon: mongodb },
  { name: "Node.js", icon: node },
  { name: "React", icon: react },
  { name: "Swift", icon: swift },
  { name: "TypeScript", icon: ts },
  { name: "Unity", icon: unity },
  { name: "Unreal Engine", icon: unreal },
  { name: "Xcode", icon: xcode },
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
