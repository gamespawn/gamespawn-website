import React from "react";
import Intro from "@/components/projects/Intro";
import Search from "@/components/projects/Search";
import Cards from "@/components/projects/Cards";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner title={"Projects"} />
      <Intro />
      <Suspense>
        <Search />
        <Cards />
      </Suspense>
    </div>
  );
};

export default page;
