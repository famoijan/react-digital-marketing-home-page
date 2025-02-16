import React from "react";
import c_logo from "./assets/Images/icon/i_company_logo.png";
import n_icon from "./assets/Images//icon/icons.png";
const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="md:max-w-7xl mx-auto flex flex-row justify-between mt-5 bg-white ">
        <div className="flex gap-5 w-4/8  p-5">
          <img src={c_logo} alt />
          <p className>SoftenBD: Innovating for Tomorrow</p>
        </div>
        <div className="w-3/8 max-w-7xl flex flex-row justify-between p-5">
          <a href className>
            Home
          </a>
          <a href className>
            Service
          </a>
          <a href className>
            About Us
          </a>
          <a href className>
            Blog
          </a>
          <a href className>
            Contact
          </a>
        </div>
        <div className="w-1/8">
          <img src={n_icon} alt className="p-5" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
