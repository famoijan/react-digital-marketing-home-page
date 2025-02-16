import React from "react";
import b_body from "./assets/Images/icon/body.png";

const Banner = () => {
  return (
    <div>
      <div className="md:max-w-7xl mx-auto bg-black">
        <img src={b_body} alt className="max-w-7xl mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
