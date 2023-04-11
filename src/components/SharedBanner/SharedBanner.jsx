import React from "react";
import bannerImg1 from "../../../src/assets/All Images/Vector.png";
import bannerImg2 from "../../../src/assets/All Images/Vector-1.png";

const SharedBanner = ({ bannerHeading }) => {
  return (
    <div className="bg-indigo-50 h-[200px] md:h-[400px] md:flex justify-between ">
      <img className="h-48 mt-52 hidden md:block" src={bannerImg1} alt="" />
      <h2 className="pt-10 md:mt-32 text-4xl text-center font-bold">{bannerHeading}</h2>
      <img className="h-48 mt-[-110px]  hidden md:block" src={bannerImg2} alt="" />
    </div>
  );
};

export default SharedBanner;
