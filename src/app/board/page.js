import React from "react";
import Team from "@/components/board/Team";
import Banner from "/src/components/PageBanner.js";

const page = () => {
  return (
    <div>
      <Banner title={"MEET THE BOARD"} />
      <Team />
    </div>
  );
};

export default page;
