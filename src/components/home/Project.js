"use client";
import React from "react";
import Button from "/src/components/Button.js";
import Link from "next/link";

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-6xl font-russo mb-2">CHECK OUT OUR PROJECTS!</div>
      <div className="grid grid-cols-2 my-8">
        <div className="font-monda text-xl text-right leading-8">
          At the Heart of the Forest
        </div>
        <div className="font-monda text-xl text-right leading-8">Sketch</div>
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
