import React from "react";
import Image from "next/image";
import blizzard from "@/public/assets/home/blizzard.webp";
import obsidian from "@/public/assets/home/obsidian.webp";
import turtle from "@/public/assets/home/turtle.webp";

const Promote = () => {
  return (
    <div className="grid grid-cols-2 mb-20">
      <div className="flex items-center justify-center bg-game-blue-300 space-x-8 rounded-r-3xl">
        <Image alt="Blizzard" src={blizzard}></Image>
        <Image alt="Obsidian Entertainment" src={obsidian}></Image>
        <Image alt="Turtle Rock Studios" src={turtle}></Image>
      </div>
      <div className="flex flex-col  justify-end items-end p-3">
        <div className="font-russo text-6xl text-right py-2 w-9/12">
          MEET THE PROS
        </div>
        <div className="font-monda text-xl text-right leading-8 w-10/12">
          Industry professionals frequently visit Gamespawn to share their
          personal success stories and advice for aspiring game developers.
          Previously, we have invited developers from Obsidian Entertainment,
          Blizzard, and Turtle Rock Studios.
        </div>
      </div>
    </div>
  );
};

export default Promote;
