import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
    id,
  } = job;
  return (
    <div>
      <div className="md:flex mt-5 items-center border rounded-md p-3 justify-between">
        <div className="md:flex gap-5">
          <img className="h-44 w-72 bg-indigo-50 p-4" src={company_logo} alt="" />
          <div className="space-y-2 p-5">
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
          </div>
        </div>
        <Link to={`/${id}`}>
          <button className="px-4 py-2 mt-5 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-md text-white mb-10 md:mb-0 ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
