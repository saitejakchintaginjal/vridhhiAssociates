import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Layout from "./layout/layout";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
