import React from "react";
import img1 from "../assets/Ellipse 11.png";

const AboutUs = () => {
  return (
    <div className="relative bg-blue-50 pb-16 px-6 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl text-center font-bold pb-10 text-gray-800">
        About Us
      </h2>

      {/* Background Shape */}
      <div className="hidden lg:block absolute left-[-200px] top-[50px] w-[400px] h-[500px] bg-[#c1f3bf] rounded-full opacity-50"></div>

      {/* Card Container */}
      <div className="relative flex  justify-center max-w-full mx-auto  space-y-16 lg:space-y-0 lg:space-x-2 px-4 lg:px-0">
        {/* First Card */}
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Donation Box"
              className="absolute rounded-full top-[30px] left-[10px] object-cover shadow-md"
            />
          </div>
          <div className="bg-[#7dcbfc] text0 rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] hover:scale-200 hover:shadow-2xl ">
            <p className="text-gray-800 text-sm mb-4">
              We are dedicated to fostering empathy, compassion, and respect in
              our interactions with clients, colleagues, and the community at
              large.
            </p>
            <h3 className="font-bold text-base text-[#f2fcf1]">Uphold a sense of humanity</h3>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex flex-col items-center text-center lg:left-[100px] ">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Donation Box"
              className="absolute rounded-full top-10 left-[-80px] object-cover shadow-md"
            />
          </div>
          <div className="bg-[#7dcbfc] rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-lg  hover:scale-200 hover:shadow-2xl">
            <p className="text-gray-800 mb-4">
              We are dedicated to fostering empathy, compassion, and respect in
              our interactions with clients, colleagues, and the community at
              large.
            </p>
            <h3 className="font-bold text-base text-[#f2fcf1]">Encouraging young minds</h3>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative flex flex-col items-center text-center lg:left-[200px] top-16">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Donation Box"
              className="absolute rounded-full top-[30px] left-[-50px] object-cover shadow-md"
            />
          </div>
          <div className="bg-[#7dcbfc] rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-lg  hover:scale-200 hover:shadow-2xl">
            <p className="text-gray-800 mb-4">
              We are dedicated to fostering empathy, compassion, and respect in
              our interactions with clients, colleagues, and the community at
              large.
            </p>
            <h3 className="font-bold text-base text-[#f2fcf1]">Environmental Care</h3>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="relative flex flex-col items-center text-center lg:left-[300px] ">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Donation Box"
              className="absolute rounded-full top-[-20px] left-[10px] object-cover shadow-md"
            />
          </div>
          <div className="bg-[#7dcbfc] rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-lg  hover:scale-200 hover:shadow-2xl">
            <p className="text-gray-00 mb-4">
              We are dedicated to fostering empathy, compassion, and respect in
              our interactions with clients, colleagues, and the community at
              large.
            </p>
            <h3 className="font-bold text-base text-[#f2fcf1]">Fostering Growth</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
