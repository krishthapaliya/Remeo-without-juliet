import React, { useState } from "react";
import emailjs from "emailjs-com";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    event: "",
    participationType: "volunteer",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Service
    const serviceID = "service_lol0k0a"; // Replace with your EmailJS service ID
    const templateID = "template_1zaie7o"; // Replace with your EmailJS template ID
    const publicKey = "_aIWDQVms0xGhDsme"; // Replace with your EmailJS public key

    emailjs.send(serviceID, templateID, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      event: formData.event,
      participationType: formData.participationType,
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Registration form successfully submitted via email!");
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Volunteer Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="+1 123 456 7890"
              required
            />
          </div>

          {/* Address */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-600 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
              placeholder="123 Main Street"
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
              onChange={handleInputChange}
              className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-none transition duration-200"
            >
              <option value="volunteer">Volunteer</option>
              <option value="attendee">Attendee</option>
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
    </div>
  );
};

export default RegistrationPage;
