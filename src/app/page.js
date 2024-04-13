import React from "react";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Promote from "@/components/home/Promote";
import Project from "@/components/home/Project";
import ClubCards from "@/components/home/ClubCards";

const page = () => {
  return (
    <div className="">
      <Landing />
      <About />
      <ClubCards />
      <Promote />
      <Project />
    </div>
  );
};

export default page;
