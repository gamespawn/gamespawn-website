import React from "react";
import OnGoing from "@/components/projects/ongoing/OnGoing";
import Banner from "/src/components/PageBanner.js";

const page = () => {
  return (
    <div>
      <Banner title="ONGOING PROJECTS" />
      <div className="px-40 py-24">
        <OnGoing />
      </div>
    </div>
  );
};

export default page;
