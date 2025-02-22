import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-black h-[632px]  text-right px-[33px]">
        <div className="w-[666px] h-[84px] pt-[196px] ml-[501px] mr-[20px]">
          <h1 className=" text-white text-[30px] font-bold ">
            Empowering Your Digital Journey with Innovative Solutions
          </h1>
        </div>
        <div className="w-[543px] h-[66px] pt-32 ml-[624px]">
          <h2 className="text-white text-[14px] ">
            At SoftenBD, we harness the power of blue light and green technology
            to deliver cutting-edge web development, android applications,
            social media marketing, video editing, and a plethora of software
            and IT solutions tailored to your needs.
          </h2>
        </div>
        <div className="flex mt-24 gap-10 mr-[50px] float-right">
          <button className="bg-[#4CC277] rounded-[62.5px] px-6 py-2 text-[8.69px] text-white ">
            Get Started Today
          </button>
          <button className="bg-black border border-white rounded-[62.5px] px-6 py-2 text-[8.69px] text-white">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
