import React from "react";
import CalendarEvents from "@/components/events/CalendarEvents";
import Banner from "@/components/PageBanner";
const page = () => {
  return (
    <div>
      <Banner title="EVENTS" />
      <CalendarEvents />
    </div>
  );
};

export default page;
