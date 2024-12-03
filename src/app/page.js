import React from "react";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Promote from "@/components/home/Promote";
import Project from "@/components/home/Project";
import ClubCards from "@/components/home/ClubCards";
import Constitution from "@/components/home/Constitution";

const page = () => {
  return (
    <div className="">
      <Landing />
      <About />
      <ClubCards />
      <Promote />
      <Project />
      <Constitution />
    </div>
  );
};

export default page;
