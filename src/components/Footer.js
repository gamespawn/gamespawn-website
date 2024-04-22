import React from "react";
import Image from "next/image";
import footerLogo from "../../public/assets/footerLogo.webp";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-r from-game-blue-400 via-game-blue-300 to-game-blue-100 grid grid-cols-2 ">
      <div className="flex ">
        <Link
          href="/"
          className="transition ease-in-out hover:opacity-80 flex items-end ml-2"
        >
          <Image className="" src={footerLogo} alt="logo" />
        </Link>
        <div className="text-6xl font-russo flex justify-end items-end w-5/12 mb-10">
          GAMESPAWN
        </div>
      </div>

      <div className=" text-blue grid grid-cols-3 ">
        <div className="grid col-span-2  justify-end items-end w-full">
          <div className="font-bold flex flex-col  justify-between h-4/6 font-monda lg:text-3xl border-white text-right  pl-20 mb-10">
            <div>contact us! </div>
            <br />
            <div>900 University Ave Riverside, CA 92521</div>
            <br />
            <div>gamespawn.ucr@gmail.com</div>
          </div>
        </div>

        <div className="flex flex-col md:text-5xl justify-end h-full items-center ">
          <div className="flex flex-col h-4/6 justify-between  mb-10">
            <Link
              target="_blank"
              href="https://discord.com/invite/ejzg2Wb"
              alt="UCR Gamepawn Discord"
            >
              <FaDiscord className="transition ease-in-out scale-110 hover:opacity-80 hover:text" />
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/gamespawn.ucr/"
              alt="UCR Gamespawn Instagram"
            >
              <AiOutlineInstagram className="transition ease-in-out scale-110 hover:opacity-80 hover:text" />
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCDnCEGvQ-JMULHeqJrEuTDw"
              alt="UCR Gamespawn YouTube"
            >
              <AiFillYoutube className="transition ease-in-out hover:text hover:scale-95" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
