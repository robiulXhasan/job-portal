import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import jobDataLoader from "./Loader/jobDataLoader";
import JobDetails from "./components/JobDetails/JobDetails";
import jobDetailsLoader from "./Loader/jobDetailsLoader";
import cartProductsLoader from "./Loader/cartProductsLoader";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: jobDataLoader,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: cartProductsLoader,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => {
          return jobDetailsLoader(params.id);
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
