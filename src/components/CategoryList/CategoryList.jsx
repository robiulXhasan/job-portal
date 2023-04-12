import React, { useEffect, useState } from "react";
import "./CategoryList.css";
const CategoryList = ({ dataList }) => {
  const { categoryLogo, categoryName, jobVacancies } = dataList;
  return (
    <div>
      <div className="category-list my-4">
        <div className="col rounded-3 bg-section  p-4">
          <img style={{ height: "100px" }} className=" rounded-1 " src={categoryLogo} alt="" />
          <div>
            <h4 className=" mt-3 ">{categoryName}</h4>
            <p className="">{jobVacancies} Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
