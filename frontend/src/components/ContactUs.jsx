import React from 'react';
import backgroundImage from '../assets/bgimg.jpg'; // Adjust the path as needed

const ContactForm = () => {
  return (
    <div>
      {/* "Contact Us" section with gradient and background image */}
      <div
        className="p-8 text-white flex justify-center items-center h-96 relative"
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

          <div className="w-full lg:w-2/3">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold"
                >
                  Description*
                </label>
                <textarea
                  id="description"
                  className="w-full mt-2 p-2 border border-gray-300 rounded h-24"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
