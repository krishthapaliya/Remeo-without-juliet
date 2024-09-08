import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns"; // Correct import for format

const EventSection = () => {
  const { id } = useParams(); // Get the event ID from URL
  console.log("id", id);
  const [eventData, setEventData] = useState({});
  const [loading, setLoading] = useState(false);

  // Convert string dates to Date objects if they exist
  const startDate = eventData?.startDate ? new Date(eventData.startDate) : null;
  const deadlineDate = eventData?.deadlineDate
    ? new Date(eventData.deadlineDate)
    : null;

  console.log("eventData", eventData);
  const fetchEvent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/api/event/${id}`);
      // console.log(response.data.message); // "Successfully fetched all event"
      // console.log("Fetched event:", response.data);
      // console.log(JSON.stringify(response.data.data));
      setEventData(response.data.data); // Assuming single event object is returned      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  // Helper function to format dates
  const formatDate = (date) => {
    if (!date || isNaN(date.getTime())) return "Date not available";
    return format(date, "MMM d, yyyy");
  };

  return (
    <div className="w-full flex justify-center my-[5%]">
      <div className="flex flex-col w-[60%] bg-gray-100 shadow-md p-5 gap-3">
        <div className="flex items-center">
          <div className="w-[300px] h-300px] ">
            <img src={eventData?.eventImage} alt="" className="rounded-md" />{" "}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">
              {eventData?.eventTitle}
            </h3>
            <p className="text-gray-600 ">
              location :{eventData?.eventLocation}
            </p>
            <p>Start Date: {formatDate(startDate)}</p>
            <p>Deadline Date: {formatDate(deadlineDate)}</p>
          </div>
        </div>
        <div>{eventData?.eventDescription}</div>
        <div className="p-4">
          <Link
            to="/register"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
