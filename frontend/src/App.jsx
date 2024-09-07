import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import EventList from "./components/EventList";
import EventSection from "./components/EventSection";
import RegistrationPage from "./components/RegistrationPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/aboutus" element={<AboutUs />} /> {/* About Us Page */}
          <Route path="/eventlist" element={<EventList />} />{" "}
          {/* List of Events */}
          <Route path="/event/:id" element={<EventSection />} />{" "}
          {/* Event Details Page */}
          <Route path="/register" element={<RegistrationPage />} />{" "}
          {/* Registration Form */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
