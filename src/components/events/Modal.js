import React from "react";

// import icons
import { RiTriangleLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ event }) => {
  return (
    <div className="border-4 border-[#0085FF] rounded-2xl w-1/3   ml-5 mb-5">
      <div className="flex items-center p-2">
        <p className="font-monda text-white bg-[#0085FF] rounded-full font-bold py-1 md:py-2 px-3 md:px-4 text-md md:text-2xl">
          {event.name}
        </p>
      </div>
      <div className="flex items-center p-2 -mt-3">
        <RiTriangleLine className="text-[#0085FF] mr-2" />
        <p className="font-monda">{event.description}</p>
      </div>
      <div className="flex items-center p-2 -mt-3">
        <FaRegCircle className="text-[#0085FF] mr-2" />
        <p className="font-monda">
          {event.month}/{event.day}
        </p>
      </div>
      <div className="flex items-center p-2 -mt-3">
        <RxCross1 className="text-[#0085FF] mr-2" />
        <p className="font-monda">{event.hour}</p>
      </div>
      <div className="flex items-center p-2 -mt-3">
        <FaRegSquare className="text-[#0085FF] mr-2" />
        <p className="font-monda">{event.location}</p>
      </div>
    </div>
  );
};

export default Modal;
