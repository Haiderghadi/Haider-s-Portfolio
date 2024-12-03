import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import WorkExperience from "./sections/Experience";
import Contact from "./sections/Contacts";
import Footer from "./sections/Footer";
import Tech from "./sections/Tech";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      {/* <Tech /> */}
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
