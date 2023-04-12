import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(error.message, status);

  return (
    <div className="text-center mt-5">
      <h1 className="fw-bold">Hey Coder...</h1>
      <h6> Unexpected error has occurred </h6>
      <h3 className="fw-bold text-primary">
        <i>{error?.message}</i>
      </h3>
      <h5 className="">
        <i>Error: {status || "Status Code Not Available"}</i>
      </h5>
      <h5></h5>

      <Link to={"/"}>
        {" "}
        <Button variant="">
          Back HomePage
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
