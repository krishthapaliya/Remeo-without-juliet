import React, { useState, useEffect } from "react";
import axios from "axios";
import EventContext from "./EventContext";

const MainContext = (props) => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvent = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/api/event");
      // console.log(response.data.message); // "Successfully fetched all event"
      // console.log(response.data.getAllEvent);
      console.log(JSON.stringify(response.data.getAllEvent));
      setEventData(response.data.getAllEvent);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <>
      <EventContext.Provider value={eventData}>
        {props.children}
      </EventContext.Provider>
    </>
  );
};

export default MainContext;
