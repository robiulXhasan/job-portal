import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="text-9xl font-extrabold">404</h1>
      <h1 className="text-xl font-bold">Oops! This Page Could Not Be Found</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">
        <button className="px-4 py-1 text-lg bg-gradient-to-r from-indigo-500 to-indigo-400 font-medium rounded-sm text-white">
          Back To Home Page
        </button>
      </a>
      <p></p>
    </div>
  );
};

export default ErrorPage;
