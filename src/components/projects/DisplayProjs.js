"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import Search from "./Search";
import Cards from "./Cards";
import Tags from "@/data/Tags";

const schoolyears = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

const DisplayProjs = ({ projData }) => {
  const [yearFilters, setYears] = useState([]);
  const [tagFilters, setTags] = useState([]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="px-2 py-6 flex w-full space-x-4">
        <div className="w-3/12">
          <Filters
            text="year"
            options={schoolyears}
            filters={yearFilters}
            setFilters={setYears}
          />
        </div>
        <div className="w-3/12">
          <Filters
            text="tags"
            options={Tags}
            filters={tagFilters}
            setFilters={setTags}
          />
        </div>

        <div className="w-6/12">
          <Search />
        </div>
      </div>

      <Cards
        yearFilters={yearFilters}
        tagFilters={tagFilters}
        projData={projData}
      />
    </div>
  );
};

export default DisplayProjs;
