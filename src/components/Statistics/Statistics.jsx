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
    <div className="w-full md:w-10/12 mx-auto mb-10">
      <h3 className=" my-10 md:text-6xl text-3xl text-center font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-yellow-500 bg-clip-text text-transparent ">
        Assignment Marks
      </h3>
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
