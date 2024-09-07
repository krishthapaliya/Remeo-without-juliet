import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Charity Run 2024",
      description: "Join us for a fun and fulfilling charity run.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Eco Awareness Workshop",
      description: "Learn about sustainable living in this interactive workshop.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <Link
              to={`/event/${event.id}`}
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
