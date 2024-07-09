"use client";
import React from "react";
import Team from "@/components/board/Team";
import Banner from "/src/components/PageBanner.js";
import Filters from "@/components/projects/Filters";
import { useState } from "react";
import BOARD from "@/data/Board";
const Page = () => {
  const years = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];
  const [yearFilters, setYears] = useState(["2023"]);
  return (
    <div className="w-full ">
      <Banner title={"MEET THE BOARD"} />
      <div className="w-4/12  flex justify-center items-center m-2">
        <Filters
          text="Year"
          options={years}
          filters={yearFilters}
          setFilters={setYears}
        />
      </div>
      <Team yearFilters={yearFilters} boardData={BOARD} />
    </div>
  );
};

export default Page;
