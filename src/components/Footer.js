import React from "react";
import Image from "next/image";
import footerLogo from "../../public/assets/footerLogo.webp";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-r from-game-blue-400 via-game-blue-300 to-game-blue-100 grid grid-cols-2 ">
      <div className="flex scale-50 md:scale-100">
        <Link
          href="/"
          className="transition ease-in-out hover:opacity-80 flex items-end ml-2"
        >
          <Image className="" src={footerLogo} alt="logo" />
        </Link>
        <div className="text-6xl font-russo hidden xl:flex justify-end items-end w-5/12 mb-10 ">
          GAMESPAWN
        </div>
      </div>

      <div className=" text-blue grid grid-cols-3 ">
        <div className="grid col-span-2  justify-end items-end w-full">
          <div className="font-bold flex-col  justify-between h-4/6 font-monda hidden md:flex text-3xl border-white text-right  pl-20 mb-10">
            <div>contact us! </div>
            <br />
            <div>900 University Ave Riverside, CA 92521</div>
            <br />
            <div>gamespawn.ucr@gmail.com</div>
          </div>
        </div>

        <div className="flex flex-col sm:text-5xl justify-end h-full items-center ">
          <div className="flex flex-col h-4/6 justify-between  mb-10">
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
    </div>
  );
};

export default Footer;
