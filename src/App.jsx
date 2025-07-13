import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import WorkExperience from "./sections/Experience";
import Contact from "./sections/Contacts";
import Footer from "./sections/Footer";
import Tech from "./sections/Tech";
import Playground from "./sections/Playground";
import { useState } from "react";
import LandingReveal from "./utils/LandingReveal";

const MainPage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Tech />
    <WorkExperience />
    <Projects />
    <Clients />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  const [showReveal, setShowReveal] = useState(true);

  const handleRevealComplete = () => {
    setShowReveal(false);
  };
  return (
    <main className="max-w-7xl mx-auto relative">
      {showReveal && <LandingReveal onComplete={handleRevealComplete} />}

      <div
        className={`transition-all duration-1000 ${
          showReveal ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
