"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import TempProjects from "@/data/TempProjects.json"; // temp projects data file (not committed)
import Intro from "./Intro";

const Cards = () => {
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";

  const cards = TempProjects.filter(({ title }) =>
    title.toLowerCase().includes(search)
  ).slice(12 * page, 12 * page + 12);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-10/12">
      {cards.map(({ title, thumbnail, id }) => (
        <Intro key={id} id={id} name={title} img={thumbnail} />
      ))}
    </div>
  );
};

export default Cards;
