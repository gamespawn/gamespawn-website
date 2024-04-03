import React from "react";
import Image from "next/image";
import landingleft from "@/public/assets/home/landingLeft.png";
import landingright from "@/public/assets/home/landingRight.png";
import Button from "/src/components/Button.js";
const Landing = () => {
  return (
    <div className="flex justify-evenly items-center">
      <Image alt="left" src={landingleft} />
      <div className="text-center">
        <div className="font-monda text-4xl font-bold mb-3">Welcome to</div>
        <div className="text-8xl font-russo mb-2">GAMESPAWN</div>
        <div className="font-monda text-4xl mb-16 ">
          {" "}
          UCR&#39;s game development club
        </div>
        <Button text="join us" background="bg-blue-100" />
      </div>
      <Image alt="right" src={landingright} />
    </div>
  );
};

export default Landing;
