import React from "react";
import Image from "next/image";

const Card = ({ filler }) => {
  return (
    <div className="border-2 border-black w-72 rounded-3xl">
      <Image
        src={ image }
        alt="picture of project"
        className="mt-4 mr-auto ml-auto"
      />

      <div className="ml-3 mt-4">
        <div className="font-russo font-bold text-xl">{filler}</div>

      </div>
    </div>
  );
};

export default Card;
