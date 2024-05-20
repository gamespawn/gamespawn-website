import React from "react";
import Intro from "@/components/projects/Intro";
import Banner from "/src/components/PageBanner.js";

const page = () => {
  return (
    <div>
      <Banner title={"Projects"} />
      <div className="flex items-center justify-center">
        <Intro />
      </div>
    </div>
  );
};

export default page;
