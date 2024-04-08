import React from "react";
import Button from "/src/components/Button.js";

const Project = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="text-center w-6/12">
        <div className="text-6xl font-russo mb-2">CHECK OUT OUR PROJECTS!</div>
        <div className="grid grid-cols-2 my-8">
          <div className="font-monda text-xl text-right leading-8 w-10/12">
            At the Heart of the Forest
          </div>
          <div className="font-monda text-xl text-right leading-8 w-10/12">
            Sketch
          </div>
        </div>
        <Button text="see all projects" background="bg-game-blue-300 p-10" />
      </div>
    </div>
  );
};

export default Project;
