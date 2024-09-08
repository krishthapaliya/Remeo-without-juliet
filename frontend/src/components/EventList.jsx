import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EventContext from "../context/EventContext";

const EventList = () => {
  const [date, setDate] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const eventItems = useContext(EventContext);
  console.log("EventItems", eventItems);

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/search?title=${encodeURIComponent(
          searchTitle
        )}&location=${encodeURIComponent(searchLocation)}`
      );
      setSearchResult(response.data.data); // Ensure to extract data properly
    } catch (error) {
      console.log("An error occurred while fetching search results", error);
    }
  };

  // Trigger search when either searchTitle or searchLocation changes
  useEffect(() => {
    if (searchTitle.length > 0 || searchLocation.length > 0) {
      handleSearch();
    } else {
      setSearchResult([]);
    }
  }, [searchTitle, searchLocation]);

  const handleClearSearch = () => {
    setSearchLocation("");
    setSearchTitle("");
    setSearchResult([]);
  };

  if (!eventItems || eventItems.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex w-full justify-center">
        <span className=" flex gap-10">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center ">
            Upcoming Events
          </h2>
          <span>
            <input
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              placeholder="Search by Title"
              className="w-[400px] bg-slate-100 outline-none h-[40px] pl-4 border-r rounded-l-full"
            />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search by City"
              className="w-[400px] bg-slate-100 outline-none h-[40px] pl-4 rounded-r-full"
            />
          </span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(searchResult.length > 0 ? searchResult : eventItems)?.map((event) => (
          <div key={event?.id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={event?.eventImage}
              alt="event-photo"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">
              {event.eventTitle}
            </h3>
            <p className="text-gray-600 mb-4 overflow-hidden custom-truncate ... line-clamp-3">
              {event?.eventDescription}
            </p>
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
