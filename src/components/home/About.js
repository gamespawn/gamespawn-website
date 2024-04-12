import React from "react";
import Image from "next/image";
import image from "@/public/assets/home/about.webp";

const About = () => {
  return (
    <div className="grid grid-cols-2 mb-20">
      <div className="text-6xl font-russo items-left justify-left pl-10">
        {" "}
        ABOUT US
        <div className="text-xl w-11/12 pt-7 leading-8 font-monda items-left justify-left">
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
      <div>
        <Image src={image} alt="about us"></Image>
      </div>
    </div>
  );
};

export default About;
