import React from "react";

const ShowCategory = (props) => {
  const { categoryLogo, categoryName, jobVacancies } = props.category;
  console.log(props.category);
  return (
    <div className="bg-indigo-50 p-10 rounded-md space-y-2">
      <img className="h-16 bg-indigo-200 p-2 rounded-md" src={categoryLogo} alt="" />
      <h4 className="text-3xl font-medium">{categoryName}</h4>
      <p className="text-[#757575]">{jobVacancies} Jobs Available</p>
    </div>
  );
};

export default ShowCategory;
