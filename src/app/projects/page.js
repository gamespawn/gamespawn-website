import React from "react";
import Intro from "@/components/projects/Intro";
import Search from "@/components/projects/Search";
import Cards from "@/components/projects/Cards";
import { Suspense } from "react";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Intro />
      <Suspense />
      <Search />
      <Cards />
      <Suspense />
    </div>
  );
};

export default page;
