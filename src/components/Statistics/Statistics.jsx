import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    myMarks: 57,
    fullMarks: 60,
    Shortage: 3,
  },
  {
    name: "Assignment-2",
    myMarks: 60,
    fullMarks: 60,
    Shortage: 0,
  },
  {
    name: "Assignment-3",
    myMarks: 60,
    fullMarks: 60,
    Shortage: 0,
  },
  {
    name: "Assignment-4",
    myMarks: 60,
    fullMarks: 60,
    Shortage: 0,
  },
  {
    name: "Assignment-5",
    myMarks: 60,
    fullMarks: 60,
    Shortage: 0,
  },
  {
    name: "Assignment-6",
    myMarks: 59,
    fullMarks: 60,
    Shortage: 1,
  },
  {
    name: "Assignment-7",
    myMarks: 60,
    fullMarks: 60,
    Shortage: 0,
  },
];

const Statistics = () => {
  return (
    <div className="container my-5">
      <h3 className=" text-primary text-center fw-bold mb-5 ">Assignment Marks</h3>
      <ResponsiveContainer width="95%" height={400}>
        <ComposedChart className="mx-auto" data={data}>
          <XAxis dataKey="name" />
          <YAxis dataKey="myMarks" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="Shortage" fill="red" stroke="#8884d8" />
          <Bar dataKey="fullMarks" barSize={25} fill="#413ea0" />
          <Line type="monotone" dataKey="myMarks" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
