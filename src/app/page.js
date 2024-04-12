import React from "react";
import Landing from "@/components/home/Landing";
import Promote from "@/components/home/Promote";
import ClubCards from "@/components/home/ClubCards";

const page = () => {
  return (
    <div className="">
      <Landing />
      <ClubCards />
      <Promote />
    </div>
  );
};

export default page;
