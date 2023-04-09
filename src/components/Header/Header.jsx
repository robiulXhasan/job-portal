import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-11/12 mx-auto  flex justify-between">
      <h3 className="navbar-brand">FindYourJob</h3>
      <ul className=" flex gap-5">
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
    </nav>
  );
};

export default Header;
