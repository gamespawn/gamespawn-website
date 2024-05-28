import React from "react";
import Image from "next/image";
import blizzard from "@/public/assets/home/blizzard.webp";
import obsidian from "@/public/assets/home/obsidian.webp";
import turtle from "@/public/assets/home/turtle.webp";

const Promote = () => {
  return (
    <div className="sm:grid md:grid grid-cols-2 mb-20">
      <div className="hidden lg:flex items-center justify-center bg-game-blue-300 space-x-8 rounded-r-3xl">
        <Image alt="Blizzard" src={blizzard}></Image>
        <Image alt="Obsidian Entertainment" src={obsidian}></Image>
        <Image alt="Turtle Rock Studios" src={turtle}></Image>
      </div>
      <div className="flex flex-col lg:justify-end items-center justify-center lg:items-end p-3 text-center">
        <div className="font-russo text-4xl md:text-6xl py-2 lg:w-9/12 ">
          MEET THE PROS
        </div>
        <div className="font-monda text-base lg:text-xl leading-8 w-11/12 lg:w-9/12 ">
          Industry professionals frequently visit Gamespawn to share their
          personal success stories and advice for aspiring game developers.
          Previously, we have invited developers from Obsidian Entertainment,
          Blizzard, and Turtle Rock Studios.
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center bg-game-blue-300 space-x-8 rounded-r-3xl">
        <Image alt="Blizzard" src={blizzard}></Image>
        <Image alt="Obsidian Entertainment" src={obsidian}></Image>
        <Image alt="Turtle Rock Studios" src={turtle}></Image>
      </div>
    </div>
  );
};

export default Promote;
