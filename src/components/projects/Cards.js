"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import TempProjects from "@/data/TempProjects.js";
import Card from "./Card";

const Cards = ({ yearFilters, tagFilters }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";
  const searchString = search.toLowerCase();

  const filteredCards = TempProjects.filter(
    ({ title, schoolyear, tags }) =>
      title.toLowerCase().includes(searchString) &&
      (yearFilters.length === 0 || yearFilters.includes(schoolyear)) &&
      (tagFilters.length === 0 || tagFilters.some((tag) => tags.includes(tag)))
  ).slice(12 * page, 12 * page + 12);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 justify-center my-6">
      {filteredCards.map(({ title, thumbnail, id }) => (
        <Card key={id} id={id} name={title} image={thumbnail} />
      ))}
    </div>
  );
};

export default Cards;
