import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import EventContext from "../context/EventContext";

const EventList = () => {
  const [date, setDate] = useState("");

  const eventItems = useContext(EventContext);
  console.log("EventItems", eventItems);

  if (!eventItems || eventItems.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventItems &&
          eventItems?.map((event) => (
            <div key={event?.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={event?.eventImage}
                alt="event-photo"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.eventTitle}
              </h3>
              <p className="text-gray-600 mb-4">{event?.eventDescription}</p>
              <Link
                to={`/event/${event?._id}`}
                className="text-pink-600 hover:text-pink-800 font-bold"
              >
                View Details &rarr;
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventList;
