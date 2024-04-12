import React from "react";
import Image from "next/image";
import footerLogo from "../../public/assets/footerLogo.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-r from-game-blue-400 via-game-blue-300 to-game-blue-100 grid-cols-2">
      <div className="grid grid-cols2">
        <Link
          href="/"
          className="transition ease-in-out hover:opacity-80 flex items-end"
        >
          <Image className="" src={footerLogo} alt="logo" />
        </Link>
        <p>GAMESPAWN</p>
      </div>

      <div className=" text-blue grid grid-cols-2 divide-x-4 divide-white">
        <div className="flex flex-col font-monda lg:text-2xl text-xs border-white pr-2 text-right">
          <p>Contact Us </p>
          <p>900 University Ave</p>
          <p>Riverside, CA 92521</p>
        </div>

        <div className="flex flex-col md:text-3xl text-xs items-center">
          <Link target="_blank" href="">
            <AiOutlineInstagram className="transition ease-in-out scale-110 hover:opacity-80 hover:text" />
          </Link>

          <Link target="_blank" href="">
            <AiFillFacebook className="transition ease-in-out hover:opacity-80 hover:text" />
          </Link>

          <Link target="_blank" href="">
            <AiFillYoutube className="transition ease-in-out hover:text hover:scale-95" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
