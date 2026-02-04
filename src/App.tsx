import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;
