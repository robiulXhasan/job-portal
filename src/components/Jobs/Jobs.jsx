import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    location,
    remote_or_onsite,
    salary,
    fulltime_or_parttime,
  } = job;
  console.log(job);
  return (
    <div className="border p-5 rounded-lg space-y-2">
      <img className="h-20" src={company_logo} alt="" />
      <h4 className="text-3xl font-medium">{job_title}</h4>
      <p className="text-[#524c4c]">{company_name}</p>
      <div className="flex gap-5">
        <p className="px-2 border border-indigo-400 text-indigo-400 rounded-sm">
          {remote_or_onsite}
        </p>
        <p className="px-2 border border-indigo-400 text-indigo-400 rounded-sm">
          {fulltime_or_parttime}
        </p>
      </div>
      <div className="flex gap-5 text-[#757575]">
        <p className="flex">
          <MapPinIcon className="w-5"></MapPinIcon>
          {location}
        </p>
        <p className="flex">
          <CurrencyDollarIcon className="w-5"></CurrencyDollarIcon> {salary}
        </p>
      </div>
      <Link to={`/${id}`}>
        <button className="px-4 py-2 mt-5 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-md text-white mb-10 md:mb-0">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Jobs;
