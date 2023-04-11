import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import SharedBanner from "../SharedBanner/SharedBanner";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState(jobs);
  const handleFilter = () => {
    var filterOption = document.getElementById("mySelect").value;
    if (filterOption) {
      let filteredJobs = jobs.filter((job) => job.remote_or_onsite === filterOption);
      console.log(filteredJobs);
      setAppliedJobs(filteredJobs);
    }
  };

  return (
    <div>
      <SharedBanner bannerHeading="Applied Jobs"></SharedBanner>
      <div className="w-10/12 mx-auto mt-12">
        <div className="text-end">
          <select
            onChange={handleFilter}
            className="border border-1 border-slate-500 p-2 rounded-md"
            id="mySelect"
          >
            <option value="">Filter By </option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        <div className="mb-16">
          {appliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
