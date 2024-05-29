import React from "react";
import ProjCard from "./ProjCard";
import Ongoing from "@/data/Ongoing";

const OnGoing = () => {
  return (
    <div className="grid grid-rows-4 items-center justify-center">
      {Ongoing.map((card, index) => (
        <ProjCard
          key={index}
          image={card.image}
          name={card.name}
          summary={card.summary}
        />
      ))}
    </div>
  );
};

export default OnGoing;
