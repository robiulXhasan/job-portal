import React from "react";
import bannerImg1 from "../../../src/assets/All Images/Vector.png";
import bannerImg2 from "../../../src/assets/All Images/Vector-1.png";

const SharedBanner = ({ bannerHeading }) => {
  return (
    <div className="bg-indigo-50 h-[400px] flex justify-between  ">
      <img className="h-48 mt-52" src={bannerImg1} alt="" />
      <h2 className="mt-32 text-4xl font-bold">{bannerHeading}</h2>
      <img className="h-48 mt-[-110px]" src={bannerImg2} alt="" />
    </div>
  );
};

export default SharedBanner;
