import { lazy, Suspense } from "react";
import Layout from "./layout/layout";
import LazySection from "./components/LazySection";

/* ---------- LAZY LOAD PAGES ---------- */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

/* ---------- LOADER ---------- */
const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      color: "#64748b",
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <main>
          <Home />

          <LazySection>
            <About />
          </LazySection>

          <LazySection>
            <Services />
          </LazySection>

          <LazySection>
            <Projects />
          </LazySection>

          <LazySection>
            <Contact />
          </LazySection>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
