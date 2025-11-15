import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Myself from "./components/Myslef";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="pb-10">
        <Hero/>
        <Myself />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
