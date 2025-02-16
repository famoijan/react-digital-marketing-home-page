import React from "react";
import c_logo2 from "./assets/Images/icon/i_company_logo2.png";

const Footer = () => {
  return (
    <div>
      <footer className>
        <div className="md:max-w-7xl mx-auto flex flex-row justify-between bg-white pt-32 px-16">
          <div className=" flex gap-5 w-2/3">
            <img src={c_logo2} alt className="w-10 h-10" />
            <p className="text-[20px] font-semibold">SoftenBD Solutions</p>
            <p className>© 2023 SoftenBD. All Rights Reserved.</p>
          </div>
          <div className="flex justify-between w-1/3">
            <a href className="text-[16px]">
              Privacy Policy
            </a>
            <a href className="text-[16px]">
              Terms of Service
            </a>
            <a href className="text-[16px]">
              Careers
            </a>
            <a href className="text-[16px]">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
