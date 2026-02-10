import FloatingButtons from "../components/FloatingButtons";
import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}

      {/* Global Floating Actions */}
      <FloatingButtons />
    </>
  );
};

export default Layout;
