import React from "react";
import Intro from "@/components/projects/Intro";
import Search from "@/components/projects/Search";
import Cards from "@/components/projects/Cards";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Intro />
      <Search />
      <Cards />
    </div>
  );
};

export default page;
