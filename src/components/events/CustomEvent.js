import React from "react";

const CustomEvent = ({ event }) => {
  return (
    <div className=" font-monda semibold text-base text-white p-1">
      <p className="inline whitespace-nowrap">
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
        &nbsp;
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
