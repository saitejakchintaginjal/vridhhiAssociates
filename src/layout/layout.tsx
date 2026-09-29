import { lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FloatingButtons = lazy(() => import("../components/FloatingButtons"));

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Layout;
