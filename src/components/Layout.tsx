import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
