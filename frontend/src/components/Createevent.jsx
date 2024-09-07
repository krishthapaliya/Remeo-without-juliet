import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    deadlineDate: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const notifySuccess = () => toast.success("Event created successfully");
  const notifyError = () => toast.error("Failed to create Event");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("startDate", formData.startDate);
    formDataToSend.append("deadlineDate", formData.deadlineDate);

    if (file) {
      formDataToSend.append("image", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/event",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Event created successfully", response.data);
      notifySuccess();

      //Handle success (e.g., redirect to another page or show a success message)
    } catch (error) {
      notifyError();

      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="mx-24">
      <h1 className="text-center text-3xl font-extrabold p-8">Create Events</h1>
      <form
        className="mx-24 p-20 rounded-3xl bg-slate-200"
        onSubmit={handleSubmit}
      >
        {/* Existing Fields */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">
            Event Name<span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-lg font-semibold">
            Event Location <span className="text-red-600"> *</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-lg font-semibold">
            Start Date <span className="text-red-600"> *</span>
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-lg font-semibold">
            Deadline date <span className="text-red-600"> *</span>
          </label>
          <input
            type="date"
            id="duration"
            name="deadlineDate"
            value={formData.deadlineDate}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
            placeholder="e.g., 2 hours, 1 day"
            required
          />
        </div>

        {/* New Fields for Action Data and Event Image */}

        <div className="mb-4">
          <label htmlFor="eventImage" className="block text-lg font-semibold">
            Event Image <span className="text-red-600"> *</span>
          </label>
          <input
            type="file"
            id="image"
            name="image" // Ensure this name is consistent
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-semibold">
            Description <span className="text-red-600"> *</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 m-6 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateEvent;
