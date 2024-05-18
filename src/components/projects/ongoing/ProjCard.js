import React from "react";
import Image from "next/image";

const ProjCard = ({ image, name, summary }) => {
  return (
    <div className="grid grid-cols-5 p-4 my-3 border-2 border-black rounded-2xl">
      <div className="col-span-3 mr-10">
        <Image src={image} alt="picture of project" />
      </div>

      <div className="col-span-2">
        <div className="font-russo font-medium text-5xl mb-4">{name}</div>

        <div className="font-monda text-2xl mr-10">{summary}</div>
      </div>
    </div>
  );
};

export default ProjCard;
