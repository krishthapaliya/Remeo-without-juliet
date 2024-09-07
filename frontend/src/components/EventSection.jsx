import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EventSection = () => {
  const { id } = useParams(); // Get the event ID from URL
  console.log("id", id);
  const [eventData, setEventData] = useState({});
  const [loading, setLoading] = useState(false);
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

  return (
    <div className="w-full flex justify-center my-[5%]">
      <div className="flex flex-col w-[80%] bg-gray-100 shadow-md p-5">
        <div className="flex gap-5">
          <div className="w-[300px] h-300px]">
            <img src={eventData?.eventImage} alt="" />{" "}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {eventData?.eventTitle}
            </h3>
            <p className="text-gray-600 mb-4">
              location :{eventData?.eventLocation}
            </p>
            <p>Start Date:{eventData?.startDate}</p>
          </div>
        </div>
        <div>{eventData?.eventDescription}</div>
        <div>
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
