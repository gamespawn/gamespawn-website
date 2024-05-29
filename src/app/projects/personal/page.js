import React from "react";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import PersonalProjects from "@/data/PersonalProjects";
const page = () => {
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
