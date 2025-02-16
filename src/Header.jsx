import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Maincontent from "./Maincontent";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Maincontent />
      <Footer />
    </div>
  );
};

export default Header;
