import React from "react";
import ProjCard from "./ProjCard";
import TotalProjects from "@/data/TotalProjects";

const OnGoing = () => {
  const Ongoing = TotalProjects.filter((proj) => proj.ongoing === true);
  return (
    <div className="grid grid-rows-4 items-center justify-center">
      {Ongoing.map((card, index) => (
        <ProjCard
          key={index}
          image={card.thumbnail}
          name={card.title}
          summary={card.description}
        />
      ))}
    </div>
  );
};

export default OnGoing;
