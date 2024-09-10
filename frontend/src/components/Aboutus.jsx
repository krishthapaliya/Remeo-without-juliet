import React from "react";
import img1 from "../assets/Ellipse 11.png";
import ourmission from "../assets/ourmission.jpg";
import img2 from "../assets/Ellipse 6.png";
import img3 from "../assets/ellipse 9.png";
import img4 from "../assets/Ellipse 5.png";
import our from "../assets/our.jpg";

const AboutUs = () => {
  return (
    <div className="relative bg-blue-50 pb-16 px-6 md:px-12 lg:px-24 p-10">
      {/* Main Title */}

      <div className="container mx-auto py-12">
        <h2 className="text-4xl lg:text-5xl text-center font-semibold text-[#0bbcfe] mb-10">
          About Us
        </h2>
        {/* Core Values Cards */}
        <div className="relative flex flex-wrap justify-center gap-16 mx-auto space-y-12 lg:space-y-0 lg:space-x-8 px-4 lg:px-0 mt-12">
          {[
            {
              img: img1,
              title: "Uphold a Sense of Humanity",
              desc: "We are dedicated to fostering empathy, compassion, and respect in our interactions with clients, colleagues, and the community at large.",
            },
            {
              img: img2,
              title: "Encouraging Young Minds",
              desc: "We encourage the growth of young minds, empowering the next generation to step up and make a difference.",
            },
            {
              img: img3,
              title: "Environmental Care",
              desc: "We focus on environmental care and sustainability as key values in our mission.",
            },
            {
              img: img4,
              title: "Fostering Growth",
              desc: "We provide resources and opportunities for individuals to grow personally and professionally through volunteerism.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative w-36 h-36 mb-6">
                <img
                  src={value.img}
                  alt={`${value.title} Image`}
                  className="absolute rounded-full top-[110px] left-1 transform -translate-x-1/2 -translate-y-1/2 object-cover shadow-lg"
                />
              </div>
              <div className="bg-[#019bd5] rounded-tr-[56px] rounded-bl-[56px] px-10 py-10 text-sm h-[296px] w-[210px] shadow-xl border border-[#01e9ee] hover:shadow-2xl transition-shadow duration-300">
                <p className="text-white mb-4">{value.desc}</p>
                <h3 className="font-bold text-white">{value.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Mission and Vision Section */}
        <div className="grid rounded-xl px-6 sm:px-10 sm:pt-12 grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {/* Mission Section */}
          <div className="text-center rounded-xl bg-[#01AEEE] pr-6 sm:pr-32 pl-6 sm:pl-10 py-6 md:text-left border-[#01e9ee] hover:shadow-2xl">
            <h3 className="text-4xl sm:text-5xl  text-white my-4 sm:my-6 font-semibold ">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-white my-4 sm:my-6">
              To create a world where everyone has the opportunity to contribute
              to the well-being of their community through meaningful volunteer
              work.
            </p>
          </div>

          {/* Mission Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={our}
              alt="Mission Image"
              className="w-full max-w-xs sm:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        <div className="grid rounded-xl px-6 py-8 sm:px-10 sm:py-12 grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={ourmission}
              alt="Vision Image"
              className="w-full max-w-xs sm:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Vision Text */}
          <div className="text-center rounded-xl bg-[# F3FF90] pr-6 sm:pr-32 pl-6 sm:pl-10 py-6 md:text-left bg-green-600 border-[#01e9ee] hover:shadow-2xl">
            <h3 className="text-4xl sm:text-5xl text-white my-4 sm:my-6 font-semibold">
              Our Vision
            </h3>
            <p className="text-lg sm:text-xl text-white my-4 sm:my-6">
              A future where every individual feels empowered to make a positive
              impact through volunteerism and acts of kindness.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 bg-white py-8 px-4 mx-20 rounded-lg shadow-xl border border-gray-300">
        <h3 className="text-2xl text-center font-bold text-gray-600 mb-6">
          What Volunteers Say
        </h3>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {[
            {
              quote:
                "Volunteering here has changed my life. It's rewarding to know I can make a real difference!",
              name: "John Doe",
            },
            {
              quote:
                "A wonderful place filled with passion and kindness. I'm so grateful to be part of this team.",
              name: "Jane Smith",
            },
          ].map((testimonial, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="font-bold mt-4 text-green-600">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="text-center mt-8 mx-20 pb-20 bg-white py-8 px-4 rounded-lg shadow-xl border border-gray-300">
        <h3 className="text-xl font-bold text-gray-600">Our Impact</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: "500+", desc: "Volunteers Engaged" },
            { stat: "1000+", desc: "Hours Contributed" },
            { stat: "250+", desc: "Events Organized" },
          ].map((impact, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold text-green-600">
                {impact.stat}
              </h4>
              <p className="text-gray-600">{impact.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-600">
          Join Us in Making a Difference
        </h3>
        <p className="text-gray-600 mt-4">
          Be part of something bigger. Become a volunteer today and help us
          create a better tomorrow.
        </p>
        <a
          href="/event"
          className="bg-green-600 text-white px-6 py-3 rounded-full mt-6 inline-block hover:bg-green-700 transition"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
