import React from "react";
import banner from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
  return (
    <div className=" w-10/12 mx-auto banner flex sm:flex-col flex-col-reverse md:flex-row   justify-between items-center ">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold text-center md:text-start ">
          One Step <br />
          Closer To Your <br />
          <span className="text-indigo-500">Dream Job</span>
        </h2>
        <div className=" mt-5">
          <p className="text-[#757575]">
            Explore thousands of job opportunities with all the information you need. Its your
            future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="px-4 py-2 mt-5 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-sm text-white mb-10 md:mb-0">
            Get Started
          </button>
        </div>
      </div>

      <img className="md:w-1/2" src={banner} alt="" />
    </div>
  );
};

export default Banner;
