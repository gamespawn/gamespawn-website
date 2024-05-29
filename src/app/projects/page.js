import React from "react";
import Intro from "@/components/projects/Intro";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import TotalProjects from "@/data/TotalProjects";
const page = () => {
  return (
    <div>
      <Banner title="PROJECTS" />
      <div className="flex flex-col justify-center items-center">
        <Intro />
        <Suspense>
          <DisplayProjs projData={TotalProjects} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
