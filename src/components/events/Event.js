import React from "react";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import reactHtmlParser from "html-react-parser";

const Event = ({ month, day, start, title, location, description }) => {
  return (
    <div className="font-russo flex justify-center rounded-2xl overflow-hidden w-full my-4">
      <div className="bg-black text-white text-center w-1/4">
        <div className="text-xl md:text-5xl font-bold pt-9">{month}</div>
        <div className="text-xl md:text-5xl font-bold pt-3">{day}</div>
        <div className="text-base md:text-2xl font-normal py-3">{start}</div>
      </div>
      <div className="flex-1 pt-3 pl-7 bg-game-blue-100 w-3/4 overflow-auto rounded-r-2xl">
        <div className="text-lg md:text-4xl text-black font-bold">{title}</div>
        <div className="flex text-black items-center">
          {location && (
            <div className="text-base md:text-xl flex font-light">
              {location.startsWith("http") ? (
                <Link className="flex flex-row items-center" href={location}>
                  <LuExternalLink className="text-game-blue-400" /> &nbsp;Zoom
                </Link>
              ) : (
                location
              )}
            </div>
          )}
        </div>
        <div className="text-base md:text-xl font-light mt-2">
          {description ? reactHtmlParser(description) : ""}
        </div>
      </div>
    </div>
  );
};

export default Event;
