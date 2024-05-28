"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import Search from "./Search";
import Cards from "./Cards";

const schoolyears = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

const DisplayProjs = ({ projData }) => {
  const [filters, setFilters] = useState([]);

  return (
    <div className="flex flex-col">
      <Search />
      <Filters
        options={schoolyears}
        filters={filters}
        setFilters={setFilters}
      />
      <Cards activeFilters={filters} projData={projData} />
    </div>
  );
};

export default DisplayProjs;
