import React from "react";
import Image from "next/image";
import landingleft from "@/public/assets/home/landingLeft.webp";
import landingright from "@/public/assets/home/landingRight.webp";
const Landing = () => {
  return (
    <div className="flex justify-evenly items-center">
      <Image src={landingleft} />
      Landing
      <Image src={landingright} />
    </div>
  );
};

export default Landing;
