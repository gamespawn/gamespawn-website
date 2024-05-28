"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.js";
import CustomEvent from "./CustomEvent.js";
import CustomHeader from "./CustomHeader.js";
import Modal from "./Modal.js";
import Upcoming from "./Upcoming.js";
const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        console.log(data);
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime() + offset)),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime() + offset
            )),
            (item.hidden = false);

          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <Upcoming events={events.filter((e) => e.start >= new Date())} size={3} />
      <div className="h-[100vh] w-10/12 relative my-10">
        <Calendar
          className="w-full font-russo text-2xl"
          date={date}
          events={events}
          localizer={mLocalizer}
          defaultView="month"
          views={["month"]}
          showAllEvents={true}
          components={{
            event: CustomEvent,
            toolbar: CustomToolbar,
            header: CustomHeader,
          }}
          onNavigate={(newDate) => {
            setDate(newDate);
          }}
          eventPropGetter={() => {
            return { className: `!bg-game-blue-300` };
          }}
          onSelectEvent={(event) => setEvent(event)}
          dayPropGetter={(event) => {
            const bg =
              new Date(event).toLocaleDateString() ==
              new Date().toLocaleDateString()
                ? "!bg-blue-100"
                : "!bg-white";
            return {
              className: `${bg} m-0 p-0 border-x-4 border-b-4 border-black`,
            };
          }}
        />
      </div>
      {event && <Modal event={event} setState={setEvent} />}
    </section>
  );
};

export default CalendarEvents;
