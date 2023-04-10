import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
  const jobData = useLoaderData();
  const [jobs, setJobs] = useState(jobData.slice(0, 4));
  const handleSeeAllJobs = () => {
    setJobs(jobData);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20 ">
      <h2 className="text-center text-5xl font-semibold">Featured Jobs</h2>
      <p className="text-[#757575] text-center my-5">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      <div className="text-center mb-20">
        <button
          onClick={handleSeeAllJobs}
          className="px-4 py-2 mt-5 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-md text-white mb-10 md:mb-0"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
