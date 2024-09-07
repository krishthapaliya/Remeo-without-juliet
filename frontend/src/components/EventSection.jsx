import React from "react";
import { useParams, Link } from "react-router-dom";

const EventSection = () => {
  const { id } = useParams();  // Get the event ID from URL

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Event Details (ID: {id})
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Event Title (based on ID: {id})
        </h3>
        <p className="text-gray-600 mb-4">
          This is a detailed description of the event with ID: {id}.
        </p>
        <Link
          to="/register"
          className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default EventSection;
