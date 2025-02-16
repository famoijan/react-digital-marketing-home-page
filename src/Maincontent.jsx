import React from "react";
import partner from "./assets/Images/icon/partner.png";
import m_image from "./assets/Images/icon/m_image.png";
import container from "./assets/Images/icon/Container.png";
import i_logo01 from "./assets/Images/icon/i_logo01.png";
import i_logo02 from "./assets/Images/icon/i_logo02.png";
import i_logo03 from "./assets/Images/icon/i_logo03.png";
import i_logo04 from "./assets/Images/icon/i_logo04.png";
import a_avatar8 from "./assets/Images/icon/a_avatar08.png";
import a_avatar7 from "./assets/Images/icon/a_avatar07.png";
import a_avatar6 from "./assets/Images/icon/a_avatar06.png";
import a_avatar5 from "./assets/Images/icon/a_avatar05.png";
import a_avatar3 from "./assets/Images/icon/a_avatar03.png";
import a_avatar2 from "./assets/Images/icon/a_avatar02.png";
import a_avatar1 from "./assets/Images/icon/a_avatar01.png";
import a_avatar9 from "./assets/Images/icon/a_avatar09.png";
import b_plan from "./assets/Images/icon/plan.png";
import a_hub from "./assets/Images/icon/hub.png";

const Maincontent = () => {
  return (
    <div>
      <main className=" ">
        <div className="md:max-w-7xl mx-auto bg-white">
          <h1 className="text-[30px] font-bold text-center pt-32">
            Innovative Solutions for a Brighter Future
          </h1>
          <img src={partner} alt className="mx-auto pt-16 pb-32" />
          <div className="flex justify-center mx-auto gap-10 p-10">
            <div className>
              <img
                src={m_image}
                alt
                className="object-contain md:object-cover"
              />
            </div>
            <div className=" mt-32">
              <img
                src={container}
                alt
                className="object-contain md:object-cover"
              />
            </div>
          </div>
          <div className="text-center pt-32">
            <h1 className="text-[#4D4D4D] text-[18px] font-semibold">
              Innovative IT Solutions
            </h1>
            <p className="text-[30px] font-bold">
              Empowering Your Digital Experience
            </p>
          </div>
          <div className="text-center flex flex-row justify-between gap-10 p-10 mx-20">
            <div className="w-1/2">
              <img src={i_logo01} alt className="mx-auto" />
              <h1 className="text-[18px] font-bold py-2">Web Development</h1>
              <p className="text-[16px]">
                Transforming ideas into stunning websites, leveraging the latest
                technologies to enhance user engagement.
              </p>
              <h2 className="text-[#2463EB] text-[18px] leading-7 font-bold p-5">
                Discover Our Web Services
              </h2>
            </div>
            <div className="w-1/2">
              <img src={i_logo02} alt className="mx-auto" />
              <h1 className="text-[18px] font-bold py-2">
                Android Development
              </h1>
              <p className>
                Creating seamless mobile applications tailored to your needs,
                ensuring optimal performance and user satisfaction.
              </p>
              <h2 className="text-[#2463EB] text-[18px] leading-7 font-bold p-5">
                Explore Our Apps
              </h2>
            </div>
            <div className="w-1/2">
              <img src={i_logo03} alt className="mx-auto" />
              <h1 className="text-[18px] font-bold py-2">Social Marketing</h1>
              <p className>
                Maximizing your brand's reach and engagement through strategic
                social media campaigns and analytics.
              </p>
              <h2 className="text-[#2463EB] text-[18px] leading-7 font-bold p-5">
                Boost Your Presence
              </h2>
            </div>
            <div className="w-1/2">
              <img src={i_logo04} alt className="mx-auto" />
              <h1 className="text-[18px] font-bold py-2">Video Editing</h1>
              <p className="text-[16px] leading-6">
                Crafting compelling visual stories that resonate with your
                audience, utilizing advanced editing techniques and tools.
              </p>
              <h2 className="text-[#2463EB] text-[18px] leading-7 font-bold p-5">
                See Our Work
              </h2>
            </div>
          </div>
          <div className="md:max-w-7xl mx-20 mt-16">
            <div className="text-center">
              <h1 className="text-[30px] font-bold">
                What Our Clients Say About SoftenBD
              </h1>
            </div>
            <div className="flex flex-row justify-between mx-20 gap-10 mt-16 ">
              <div className>
                <img src={a_avatar8} alt className="h-16 w-16" />
              </div>
              <div className>
                <img src={a_avatar6} alt className="h-16 w-16" />
              </div>
              <div className>
                <img src={a_avatar6} alt className="h-16 w-16" />
              </div>
              <div className>
                <img src={a_avatar2} alt className="h-20 w-20" />
              </div>
              <div className>
                <img src={a_avatar1} alt className="h-25 w-25" />
              </div>
              <div className>
                <img src={a_avatar3} alt className="h-20 w-20" />
              </div>
              <div className>
                <img src={a_avatar5} alt className="h-16 w-16" />
              </div>
              <div className>
                <img src={a_avatar7} alt className="h-16 w-16" />
              </div>
              <div className>
                <img src={a_avatar9} alt className="h-16 w-16 " />
              </div>
            </div>
            <div className="text-center w-1/3 mx-auto">
              <h1 className="text-[24px] font-semibold">
                Sarah Thompson - Digital Marketing Expert
              </h1>
              <p className="text-[#0D0D0DB2]">
                Passionate about innovative tech.
              </p>
            </div>
          </div>
          <div className="mt-32">
            <div className="text-center mx-auto">
              <h1 className="text-[30px] font-bold">Flexible Pricing Plans</h1>
              <p className="text-[18px] text-[#0D0D0DB2]">
                Choose a package that fits your needs and budget.
              </p>
            </div>
            <div className="mx-auto mt-16">
              <img src={b_plan} alt className="mx-auto" />
            </div>
          </div>
          <div className="mt-32">
            <div className="text-center mx-auto">
              <h1 className="text-[30px] font-bold">
                Innovative Solutions Hub
              </h1>
              <p className="text-[18px] text-[#0D0D0DB2]">
                Empowering Your Digital Journey
              </p>
            </div>
            <div className="mx-auto mt-16">
              <img src={a_hub} alt className="mx-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Maincontent;
