import React from "react";
import Image from "next/image";
import blizzard from "@/public/assets/home/blizzard.webp";
import obsidian from "@/public/assets/home/obsidian.webp";
import turtle from "@/public/assets/home/turtle.webp";

const Promote = () => {
  return (
    <div className="flex py-6">
      <div className="flex w-1/2 h-1/3 absolute -left-4 items-center justify-center bg-game-blue-300 rounded-xl">
        <Image alt="Blizzard" src={blizzard} className="w-1/5"></Image>
        <Image
          alt="Obsidian Entertainment"
          src={obsidian}
          className="px-10"
        ></Image>
        <Image alt="Turtle Rock Studios" src={turtle} className="w-1/6"></Image>
      </div>
      <div className="flex flex-col w-5/12 absolute right-12">
        <div className="font-russo text-6xl text-right py-2">MEET THE PROS</div>
        <div className="font-monda text-lg text-right">
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
