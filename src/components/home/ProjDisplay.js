import React from "react";
import Image from "next/image";

const ProjDisplay = ({ image, title }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-block rounded-3xl font-start px-5 py-5">
        <Image src={image} alt="project image" />
        <div className="text-4xl text-center font-monda py-4">{title}</div>
      </div>
    </div>
  );
};

export default ProjDisplay;
