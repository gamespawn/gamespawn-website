import React from "react";
import CalendarEvents from "@/components/events/CalendarEvents";
import Banner from "@/components/PageBanner";
const page = () => {
  return (
    <div>
      <Banner title="EVENTS" />
      <CalendarEvents show={false} />
    </div>
  );
};

export default page;
