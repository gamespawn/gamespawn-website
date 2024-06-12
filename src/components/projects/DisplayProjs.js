"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import Search from "./Search";
import Cards from "./Cards";
import Tags from "@/data/Tags";

const schoolyears = [
  "2015-2016",
  "2016-2017",
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
  "2024-2025",
];

const DisplayProjs = ({ projData }) => {
  const [yearFilters, setYears] = useState([]);
  const [tagFilters, setTags] = useState([]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-24">
        <div className="grid grid-cols-4 gap-2">
          <Filters
            text="year"
            options={schoolyears}
            filters={yearFilters}
            setFilters={setYears}
          />
          <Filters
            text="tags"
            options={Tags}
            filters={tagFilters}
            setFilters={setTags}
          />
          <div className="grid col-span-2">
            <Search />
          </div>
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
