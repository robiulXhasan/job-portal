import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <div className="bg-indigo-50">
        <Banner />
      </div>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
