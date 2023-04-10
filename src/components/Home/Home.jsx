import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <div className="bg-indigo-50">
        <Banner />
      </div>
      <JobCategory></JobCategory>
    </div>
  );
};

export default Home;
