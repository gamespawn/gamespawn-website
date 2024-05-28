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
    <div className="flex flex-col">
      <Search />
      <Filters
        text="Year"
        options={schoolyears}
        filters={yearFilters}
        setFilters={setYears}
      />
      <Filters
        text="Tags"
        options={Tags}
        filters={tagFilters}
        setFilters={setTags}
      />
      <Cards
        yearFilters={yearFilters}
        tagFilters={tagFilters}
        projData={projData}
      />
    </div>
  );
};

export default DisplayProjs;
