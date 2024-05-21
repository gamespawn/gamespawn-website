import React from "react";
import Intro from "@/components/projects/Intro";
import { Suspense } from "react";
import Banner from "@/components/PageBanner";
import DisplayProjs from "@/components/projects/DisplayProjs";

const page = () => {
  return (
    <div>
      <Banner title="Projects" />
      <div className="flex flex-col justify-center items-center">
        <Intro />
        <Suspense>
          <DisplayProjs />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
