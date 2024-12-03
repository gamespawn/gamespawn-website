import React from "react";
import Card from "./Card";

const Upcoming = ({ size, events }) => {
  const seen = new Set();
  const seenReccuring = new Set();
  const uniqueEvents = events.filter((el) => {
    if (el.hasOwnProperty("recurringEventId") && !seenReccuring.has(el.etag)) {
      seenReccuring.add(el.etag);
      return el;
    } else if (!el.hasOwnProperty("recurringEventId")) {
      const dupe = seen.has(el.id);
      seen.add(el.id);
      return !dupe;
    }
  });
  return (
    <div className="w-full mt-10 flex justify-center items-center flex-col">
      <div className="w-full flex flex-col justify-center items-center  text-game-black">
        {uniqueEvents.length !== 0 ? (
          uniqueEvents.slice(0, size).map((event, index) => (
            <div className="flex w-full p-2" key={index}>
              <Card
                month={event.start
                  .toLocaleDateString("en-US", { month: "short" })
                  .toUpperCase()}
                day={event.start.toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
                name={event.summary}
                location={event.location}
                hour={event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                description={event.description}
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center text-lg md:text-2xl text-center text-game-black font-urbanist p-3">
            No upcoming events, please check back later!
          </div>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
