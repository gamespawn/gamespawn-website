import React from "react";

const ClubCard = ({ title, description, icon }) => {
  return (
    <div
      className={`inline-block rounded-3xl text-4xl text-center font-start px-5 py-5 text-white bg-game-black pt-10`}
    >
      {title}
      <div className="font-monda leading-loose text-sm p-3">
        {" "}
        {description}{" "}
      </div>
      <div className="flex items-center justify-center">{icon} </div>
    </div>
  );
};

export default ClubCard;
