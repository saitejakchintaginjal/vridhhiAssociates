import { lazy } from "react";
import Navbar from "../components/Navbar";

const FloatingButtons = lazy(() => import("../components/FloatingButtons"));

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <FloatingButtons />
    </>
  );
};

export default Layout;
