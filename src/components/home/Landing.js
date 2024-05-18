import React from "react";
import Image from "next/image";
import landingleft from "@/public/assets/home/landingLeft.webp";
import landingright from "@/public/assets/home/landingRight.webp";
import Button from "/src/components/Button.js";

const Landing = () => {
  return (
    <div className="flex justify-center items-center w-full h-[80vh] ">
      <div className="w-2/12">
        <Image alt="left" src={landingleft} />
      </div>
      <div className="text-center  w-6/12">
        <div className="font-monda text-4xl font-bold mb-3">Welcome to</div>
        <div className="text-8xl font-russo mb-2">GAMESPAWN</div>
        <div className="font-monda text-4xl mb-16 ">
          {" "}
          UCR&#39;s game development club
        </div>
        <Button text="join us" background="bg-game-blue-200" />
      </div>
      <div className="w-2/12">
        <Image className="" alt="right" src={landingright} />
      </div>
    </div>
  );
};

export default Landing;
