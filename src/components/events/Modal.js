import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiTriangleLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ event, setState }) => {
  if (!event) return event && <div>No Event</div>;
  const startTime = new Date(event.start).toLocaleTimeString(
    navigator.language,
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  return (
    <div
      className={`font-urbanist font-medium fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[75vw] md:w-[50vw] bg-white border-4 border-game-blue-400 rounded-2xl z-10 overflow-y-auto max-h-[40vw]`}
    >
      <div className={`flex justify-between items-center`}>
        <p
          className={`text-white bg-game-blue-400 rounded-full m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl`}
        >
          {event.summary}
        </p>

        <button className="p-0 m-2 text-5xl" onClick={() => setState(null)}>
          <AiOutlinePlus className="text-game-blue-400 rotate-45 p-0 m-0 " />
        </button>
      </div>
      {event.description && (
        <div className="md:text-xl text-lg p-2 flex justify-start items-center">
          <RiTriangleLine className="text-game-blue-300 mr-2 " />
          <p className="font-monda ">{event.description}</p>
        </div>
      )}

      <div className="p-2 text-lg md:text-xl font-monda flex justify-start items-center">
        <FaRegCircle className="text-game-blue-300 mr-2" />
        {new Date(event.start).toLocaleDateString()}
      </div>
      {event.location && (
        <div className="p-2 text-lg md:text-xl font-monda flex justify-start items-center">
          <FaRegSquare className="text-game-blue-300 mr-2" />
          {startTime}
        </div>
      )}
      {event.location && (
        <div className="p-2 text-lg md:text-xl font-monda flex justify-start items-center">
          <RxCross1 className="text-game-blue-300 mr-2" />
          {event.location}
        </div>
      )}
    </div>
  );
};

export default Modal;
