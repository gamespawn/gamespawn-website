"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import TempProjects from "@/data/TempProjects.json"; // temp projects data file (not committed)
import Card from "./Card";

const Cards = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";
  const searchString = search.toLowerCase();
  const cards = TempProjects.filter(({ title }) =>
    title.toLowerCase().includes(searchString)
  ).slice(12 * page, 12 * page + 12);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-10/12">
      {cards.map(({ title, thumbnail, id }) => (
        <Card key={id} id={id} name={title} img={thumbnail} />
      ))}
    </div>
  );
};

export default Cards;
