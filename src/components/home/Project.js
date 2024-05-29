"use client";
import React from "react";
import Button from "/src/components/Button.js";
import Link from "next/link";
import ProjDisplay from "./ProjDisplay";
import heart from "@/public/assets/projects/heart.webp";
import sketch from "@/public/assets/projects/sketch.webp";

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-6xl font-russo mb-2">CHECK OUT OUR PROJECTS!</div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 my-8">
        <div>
          <ProjDisplay title="At the Heart of the Forest" image={heart} />
        </div>
        <div>
          <ProjDisplay title="Sketch" image={sketch} />
        </div>
      </div>

      <Link
        as="/projects"
        href="/"
        onClick={() => {
          setSelected("");
        }}
      >
        <Button
          text="see all projects"
          background="bg-game-blue-300 p-10 mb-20"
        />
      </Link>
    </div>
  );
};

export default Project;
