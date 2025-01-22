import React from "react";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import TotalProjects from "@/data/TotalProjects";
const page = () => {
  const GamejamProjects = TotalProjects.filter((proj) => proj.gamejam === true);
  return (
    <div>
      <Banner title="GAMEJAM PROJECTS" />
      <div className="flex flex-col justify-center items-center">
        <Suspense>
          <DisplayProjs projData={GamejamProjects} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
