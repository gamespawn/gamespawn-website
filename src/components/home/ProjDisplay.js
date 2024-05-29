import React from "react";
import Image from "next/image";

const ProjDisplay = ({ image, title }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-block rounded-3xl font-start w-10/12">
        <Image src={image} alt="project image" />
        <div className="text-2xl lg:text-4xl text-center font-monda py-4">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ProjDisplay;
