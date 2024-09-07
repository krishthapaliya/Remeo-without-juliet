import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const cloudinaryUploadPreset = "hrf8ovcz"; // Replace with your Cloudinary upload preset

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    participationType: "",
  });
  console.log("formdata", formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const notifySuccess = () =>
    toast.success("Volunteer Registration successfully");
  const notifyError = () => toast.error("Failed to Register");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notifySuccess();

      // console.log(JSON.stringify(response.data.data));
      // console.log("response", response.data.user);
    } catch (error) {
      notifyError();
    }
  };

  // console.log("formData", formData);

  // const [loading, setLoading] = useState(false);

  // const notifySuccess = (message) => toast.success(message);
  // const notifyError = (message) => toast.error(message);

  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "image") {
  //     setFormData({ ...formData, image: files[0] });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const uploadImageToCloudinary = async (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", cloudinaryUploadPreset);

  //   try {
  //     const response = await axios.post(
  //       "https://api.cloudinary.com/v1_1/deqtran8y/image/upload", // Replace with your Cloudinary cloud name
  //       formData
  //     );
  //     return response.data.secure_url; // Return the URL of the uploaded image
  //   } catch (error) {
  //     notifyError("Image upload failed");
  //     throw error;
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     let imageUrl = "";
  //     if (formData.image) {
  //       imageUrl = await uploadImageToCloudinary(formData.image);
  //     }

  //     const dataToSend = {
  //       ...formData,
  //       imageUrl,
  //     };

  //     // Replace with your API endpoint
  //     const response = await axios.post(
  //       "http://localhost:4000/api/event",
  //       dataToSend
  //     );

  //     notifySuccess(response.data.message);
  //   } catch (error) {
  //     notifyError("Failed to submit form");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Volunteer Registration
        </h2>

        <form onSubmit={(e) => submitData(e)} className="space-y-6">
          {/* First Name */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="Doe"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="+1 123 456 7890"
              required
            />
          </div>
          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          {/* Phone */}

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="+1 123 456 7890"
              required
            />
          </div>

          {/* Participation Type */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Participation Type
            </label>
            <select
              name="participationType"
              value={formData.participationType}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
            >
              <option value="volunteer">Volunter</option>
              <option value="attendee">Attendes</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-transform transform hover:scale-105"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
