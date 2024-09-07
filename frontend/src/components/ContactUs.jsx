import React from 'react';
import backgroundImage from '../assets/bgimg.jpg'; // Adjust the path as needed

const ContactForm = () => {
  return (
    <div>
      {/* "Contact Us" section with gradient and background image */}
      <div
        className="p-8 text-white flex justify-center items-center h-72 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 90, 213, 0.8), rgba(128, 90, 213, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Let’s Start a Conversation</p>
        </div>
      </div>

      {/* Form section */}
      <div className="flex justify-center items-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Ask how we can help you:</h2>

          <div className="mb-6">
            <ul className="list-disc ml-5 text-gray-700">
              <li>See our platform in action</li>
              <li>Master performance marketing</li>
              <li>Explore life at TUNE</li>
            </ul>
          </div>

          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-lg w-1/2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-lg w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Company Email"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Request a Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
