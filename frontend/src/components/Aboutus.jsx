import React from "react";
import img1 from "../assets/Ellipse 11.png";

const AboutUs = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 pb-16 px-6 overflow-hidden">
      {/* Main Title */}
      <h2 className="text-4xl text-center font-extrabold pb-10 text-gray-800">
        About Us
      </h2>

      {/* Mission Section */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
        <p className="text-gray-600 mt-4">
          To create a world where everyone has the opportunity to contribute to
          the well-being of their community through meaningful volunteer work.
        </p>
      </div>

      {/* Vision Section */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
        <p className="text-gray-600 mt-4">
          A future where every individual feels empowered to make a positive
          impact through volunteerism and acts of kindness.
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="relative flex justify-center max-w-full mx-auto space-y-16 lg:space-y-0 lg:space-x-4 px-4 lg:px-0 mt-12">
        {/* Core Value Card 1 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Value Image"
              className="absolute rounded-full top-[30px] left-[10px] object-cover shadow-lg"
            />
          </div>
          <div className="bg-pink-100 rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-xl border border-pink-300">
            <p className="text-gray-600 mb-4">
              We are dedicated to fostering empathy, compassion, and respect in
              our interactions with clients, colleagues, and the community at
              large.
            </p>
            <h3 className="font-bold text-pink-600">Uphold a Sense of Humanity</h3>
          </div>
        </div>

        {/* Core Value Card 2 */}
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Value Image"
              className="absolute rounded-full top-10 left-[-80px] object-cover shadow-lg"
            />
          </div>
          <div className="bg-pink-100 rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-xl border border-pink-300">
            <p className="text-gray-600 mb-4">
              We encourage the growth of young minds, empowering the next
              generation to step up and make a difference.
            </p>
            <h3 className="font-bold text-pink-600">Encouraging Young Minds</h3>
          </div>
        </div>

        
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Value Image"
              className="absolute rounded-full top-[30px] left-[-50px] object-cover shadow-lg"
            />
          </div>
          <div className="bg-pink-100 rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-xl border border-pink-300">
            <p className="text-gray-600 mb-4">
              We focus on environmental care and sustainability as key values in
              our mission.
            </p>
            <h3 className="font-bold text-pink-600">Environmental Care</h3>
          </div>
        </div>

       
        <div className="relative flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-6">
            <img
              src={img1}
              alt="Value Image"
              className="absolute rounded-full top-[-20px] left-[10px] object-cover shadow-lg"
            />
          </div>
          <div className="bg-pink-100 rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-xs h-[296px] w-[210px] shadow-xl border border-pink-300">
            <p className="text-gray-600 mb-4">
              We provide resources and opportunities for individuals to grow
              personally and professionally through volunteerism.
            </p>
            <h3 className="font-bold text-pink-600">Fostering Growth</h3>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 bg-white py-8 px-4 rounded-lg shadow-xl border border-gray-300">
        <h3 className="text-2xl text-center font-bold text-pink-600 mb-6">
          What Volunteers Say
        </h3>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="mb-6 lg:mb-0">
            <p className="text-gray-700 italic">
              "Volunteering here has changed my life. It's rewarding to know I
              can make a real difference!"
            </p>
            <p className="text-right font-bold mt-4 text-pink-600">- John Doe</p>
          </div>
          <div>
            <p className="text-gray-700 italic">
              "A wonderful place filled with passion and kindness. I'm so
              grateful to be part of this team."
            </p>
            <p className="text-right font-bold mt-4 text-pink-600">- Jane Smith</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="text-center mt-8 bg-gradient-to-r from-gray-100 to-gray-200 py-8 px-4 rounded-lg shadow-xl border border-gray-300">
        <h3 className="text-xl font-bold text-gray-800">Our Impact</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-2xl font-bold text-pink-600">500+</h4>
            <p className="text-gray-600">Volunteers Engaged</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-pink-600">1000+</h4>
            <p className="text-gray-600">Hours Contributed</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-pink-600">250+</h4>
            <p className="text-gray-600">Events Organized</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800">
          Join Us in Making a Difference
        </h3>
        <p className="text-gray-600 mt-4">
          Be part of something bigger. Become a volunteer today and help us
          create a better tomorrow.
        </p>
        <a
          href="/register"
          className="bg-pink-600 text-white px-6 py-3 rounded-full mt-6 inline-block hover:bg-pink-700 transition"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
