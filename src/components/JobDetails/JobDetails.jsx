import React from "react";
import SharedBanner from "../SharedBanner/SharedBanner";
import { useLoaderData } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    salary,
    job_title,
    experiences,
    contact_information,
    location,
  } = jobDetails;
  console.log(jobDetails);
  return (
    <div>
      <SharedBanner bannerHeading="Job Details"></SharedBanner>
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center gap-10 my-10">
        <div className="md:w-3/4 space-y-4 text-lg">
          <h3>
            <span className="font-bold">Job Description: </span>
            {job_description}
          </h3>
          <h3>
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </h3>
          <h3>
            <span className="font-bold">Educational Requirements: </span> <br />
            {educational_requirements}
          </h3>
          <h3>
            <span className="font-bold">Experiences: </span> <br />
            {experiences}
          </h3>
        </div>
        <div className="md:w-1/3">
          <div className="bg-indigo-50 p-5 border rounded-lg space-y-2">
            <h3 className="text-xl font-bold">Job Details</h3>
            <hr className="border border-1 border-slate-300" />
            <h4 className="text-lg flex space-x-2">
              <CurrencyDollarIcon className="w-5 text-slate-400"></CurrencyDollarIcon>
              <span className="font-semibold">Salary: &nbsp; </span>
              {salary}
            </h4>
            <h4 className="text-lg flex space-x-2">
              <BriefcaseIcon className="w-5 text-slate-400"></BriefcaseIcon>
              <span className="font-semibold">Job Title: &nbsp;</span>
              {job_title}
            </h4>
            <h3 className="text-xl font-bold">Contact Information</h3>
            <hr className="border border-1 border-slate-300" />
            <h4 className="text-lg flex space-x-2">
              <PhoneIcon className="w-5 text-slate-400"></PhoneIcon>
              <span className="font-semibold">Phone: &nbsp; </span>
              {contact_information.phone}
            </h4>
            <h4 className="text-lg flex space-x-2">
              <EnvelopeIcon className="w-5 text-slate-400"></EnvelopeIcon>
              <span className="font-semibold">Email: &nbsp;</span>
              {contact_information.email}
            </h4>
            <h4 className="text-lg flex space-x-2">
              <MapPinIcon className="w-5 text-slate-400"></MapPinIcon>
              <span className="font-semibold">Address: &nbsp; </span>
              {location}
            </h4>
          </div>
          <button className="px-4 w-full py-2 mt-5 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-sm text-white mb-10 md:mb-0">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
