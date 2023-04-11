import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import SharedBanner from "../SharedBanner/SharedBanner";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState(jobs);
  


  return (
    <div>
      <SharedBanner bannerHeading="Applied Jobs"></SharedBanner>
      <div className="w-10/12 mx-auto mt-24">
        <div className="text-end">
          <select
          
            className="border border-1 border-slate-500 p-2 rounded-md"
            id="mySelect"
          >
            <option value="">Filter By </option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        {appliedJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
