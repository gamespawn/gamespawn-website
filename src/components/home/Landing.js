import React from "react";
import Image from "next/image";
import landingleft from "@/public/assets/home/landingLeft.png";
import landingright from "@/public/assets/home/landingRight.png";
const Landing = () => {
  return (
    <div className="flex justify-evenly items-center">
      <Image alt="" src={landingleft} />
      Landing
      <Image alt="" src={landingright} />
    </div>
  );
};

export default Landing;
