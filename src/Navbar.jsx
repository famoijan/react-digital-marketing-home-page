import React from "react";
import c_logo from "./assets/Images/icon/i_company_logo.png";
import SVG01 from "./assets/Images/icon/SVG01.png";
import SVG02 from "./assets/Images/icon/SVG02.png";
import SVG03 from "./assets/Images/icon/SVG03.png";

const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex flex-row justify-between bg-white ">
        <div className="flex gap-5 w-4/8 py-[16px] px-[20px]">
          <img src={c_logo} alt className="h-[40px] w-[40px]" />
          <p className="text-xl ">SoftenBD: Innovating for Tomorrow</p>
        </div>
        <div className="w-3/8 max-w-7xl flex flex-row justify-between my-[12px]">
          <a href className="text-[16px] py-2">
            Home
          </a>
          <a href className="text-[16px] py-2">
            Service
          </a>
          <a href className="text-[16px] py-2">
            About Us
          </a>
          <a href className="text-[16px] py-2">
            Blog
          </a>
          <a href className="text-[16px] py-2">
            Contact
          </a>
        </div>
        <div className="flex gap-2 mr-[30px] py-[25.75px]">
          <img
            src={SVG02}
            alt
            className="h-[12.5px] w-[12.5px] cursor-pointer"
          />
          <img
            src={SVG01}
            alt
            className="h-[12.5px] w-[12.5px] cursor-pointer"
          />
          <img
            src={SVG03}
            alt
            className="h-[12.5px] w-[12.5px] cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
