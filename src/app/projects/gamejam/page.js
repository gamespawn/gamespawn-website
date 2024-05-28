import React from "react";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import TotalProjects from "@/data/TotalProjects";
const page = () => {
  return (
    <div>
      <Banner title="GAMEJAM PROJECTS" />
      <div className="flex flex-col justify-center items-center">
        <Suspense>
          <DisplayProjs projData={TotalProjects} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
