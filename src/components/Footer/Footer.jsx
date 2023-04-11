import React from "react";
import logo from "../../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div>
      <footer className=" footer p-4 md:py-10 md:px-24 bg-black text-white">
        <div className="space-y-2">
          <h3 className="navbar-brand text-4xl font-semibold">
            Find<span className="text-indigo-600 font-bold">Your</span>Job
          </h3>
          <p>
            There are many variations of passages of Lorem <br /> Ipsum , but the majority have
            suffered <br />
            alteration in some form.
          </p>
          <img src={logo} alt="" />
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Latest News</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers </a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </footer>

      <footer className="footer p-4 md:py-4 md:px-24 border-t bg-black text-white border-base-300">
        <div className="items-center grid-flow-col">
          <p>@2023 CareerHub. All Rights Reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <p>Powered by FindYourJob</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
