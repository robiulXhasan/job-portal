import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Job = () => {
  const jobData = useLoaderData();
  
  console.log(jobData);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 mt-2">
        {jobData.map((job) => (
          <div className="">
            <div class="col rounded p-3">
              <div class="card h-100">
                <div className="p-4">
                  <div>
                    <img className="img-fluid" src={job.logo} alt="" />
                  </div>
                  <h3>{job.title}</h3>
                  <p className="">{job.title}</p>
                  <div className="d-flex gap-3">
                    <button type="button" class="btn btn-outline-info">
                      {job.workType[0]}
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      {job.workType[1]}
                    </button>
                  </div>
                  <div className="d-flex gap-5 my-3">
                    <div>
                      <span>
                        <img src={job.icon} alt="" />
                      </span>{" "}
                      {""}
                      <span>{job.location}</span>
                    </div>

                    <div>
                      <span>
                        <img src={job.icon_2} alt="" />
                      </span>{" "}
                      {""}
                      <span>Salary: {job.salary}</span>
                    </div>
                  </div>
                  <Link to={`/details/${job.id}`}>
                    {" "}
                    <button type="button" class="btn btn-info">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
