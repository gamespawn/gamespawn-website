import React from "react";

const ClubCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl text-center px-5 py-5 text-white bg-game-black pt-10">
      <div className="flex justify-center text-4xl font-start">{title}</div>
      <div className="flex justify-center font-monda leading-loose text-sm p-3">
        {description}
      </div>
      <div className="flex justify-center">{icon} </div>
    </div>
  );
};

export default ClubCard;
