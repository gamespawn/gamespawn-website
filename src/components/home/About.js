import React from "react";
import Image from "next/image";
import image from "@/public/assets/home/about.webp";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
      <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <div className="text-3xl lg:text-6xl font-russo">ABOUT US</div>

        <div className="text-base md:text-xl w-11/12 lg:w-11/12 pt-7 lg:leading-8 font-monda">
          {" "}
          Founded in 2014, Gamespawn @ University of California Riverside is a
          student organization that focuses on introducing students to game
          development. Our organization teaches students game design, art, and
          programming through competitions and guest speakers. We do our best
          not only to motivate and encourage students to learn about game
          development, but also to provide a professional and comfortable
          environment for engineers, programmers, designers, and artists!
        </div>
      </div>
      <div className="flex justify-center items-center my-4 md:my-0">
        <Image
          className="w-11/12 lg:w-full "
          src={image}
          alt="about us"
        ></Image>
      </div>
    </div>
  );
};

export default About;
