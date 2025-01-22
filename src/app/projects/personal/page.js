import React from "react";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import TotalProjects from "@/data/TotalProjects";
const page = () => {
  const PersonalProjects = TotalProjects.filter(
    (proj) => proj.personal === true
  );

  return (
    <div>
      <Banner title="PERSONAL PROJECTS" />
      <div className="flex flex-col justify-center items-center">
        <Suspense>
          <DisplayProjs projData={PersonalProjects} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
