import React from "react";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";
import TechTalks from "@/data/TechTalks";
const page = () => {
  return (
    <div>
      <Banner title="TECH TALKS" />
      <div className="flex flex-col justify-center items-center">
        <Suspense>
          <DisplayProjs projData={TechTalks} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
