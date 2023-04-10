import React, { useEffect, useState } from "react";
import Category from "../ShowCategory/ShowCategory";
import ShowCategory from "../ShowCategory/ShowCategory";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20 ">
      <h2 className="text-center text-5xl font-semibold">Job Category List</h2>
      <p className="text-[#757575] text-center mt-5">
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-10 mt-5">
        {categories.map((category) => (
          <ShowCategory key={category.id} category={category}></ShowCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
