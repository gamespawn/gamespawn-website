import React from "react";
import Intro from "@/components/projects/Intro";
import Search from "@/components/projects/Search";
import Cards from "@/components/projects/Cards";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
const page = () => {
  return (
    <div>
      <Banner title="Projects" />
      <div className="flex flex-col justify-center items-center">
        <Intro />
        <Suspense>
          <Search />
          <Cards />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
