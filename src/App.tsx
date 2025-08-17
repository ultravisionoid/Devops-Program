import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Courses from "./pages/Courses";
import CurriculumTable from "./components/CurriculumTable";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Technologies />
        <About />
        <Courses />
        <CurriculumTable />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
