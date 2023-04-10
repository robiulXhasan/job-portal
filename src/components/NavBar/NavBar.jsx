import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`md:flex justify-between items-center py-8 ${open ? "bg-white" : ""}`}>
      <div className="md:w-3/4 flex justify-between items-center relative ">
        <h3 className="navbar-brand text-5xl font-semibold ps-2">
          Find<span className="text-indigo-600">Your</span>Job
        </h3>
        <div onClick={() => setOpen(!open)} className="md:hidden pe-2">
          {open ? (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          )}
        </div>
      </div>
      <div
        className={`md:flex w-full justify-between items-center  md:gap-5 text-xl absolute md:static duration-200  ${
          open ? "top-20 py-10 px-5 bg-white" : "-top-96 "
        }`}
      >
        <ul className="md:flex items-center  gap-5 text-md">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Applied Jobs</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="px-4 py-2 text-md bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-sm text-white">
          Start Applying
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
