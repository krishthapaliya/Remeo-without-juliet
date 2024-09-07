import React, { useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send `formData` to the backend
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Event Registration
      </h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded-lg"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
