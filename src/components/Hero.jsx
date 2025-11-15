import { profile } from "../data/profile";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-grid">

        {/* LEFT CELL */}
        <div className="hero-text hero-center">
          <h1 className="hero-line">Hello my name is</h1>
          <h1 className="hero-name">{profile.name}</h1>
          <h1 className="hero-role">Software Developer</h1>
        </div>

        {/* RIGHT CELL: IMAGE */}
        <div className="hero-image-wrapper">
          <img
            src="/src/assets/me.jpg"
            alt="Profile"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}
