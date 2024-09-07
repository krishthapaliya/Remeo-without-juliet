import React from "react";
import img1 from "../assets/Ellipse 5.png";
import img2 from "../assets/Ellipse 6.png";
import img3 from "../assets/Ellipse 9.png";
import img4 from "../assets/Group 20.png";

const Herosection = () => {
  return (
    <div className="flex relative  items-center justify-between min-h-screen bg-blue-50 p-6">
      <div className="flex flex-col items-center">
        <div className="max-w-5xl text-center mb-8">
          <p className="text-5xl  font-semibold text-gray-800">
            "Your <span className="text-[#30ba2d]">talent</span> can shape{" "}
            <br />
            <span className="text-[#30ba2d]">tomorrow</span>—come be part of a{" "}
            <br />
            <span className="text-[#30ba2d]">team</span> where <br />
            <span className="text-[#30ba2d]">creativity</span> knows no bounds."
          </p>
        </div>

        <div className="mt-10">
          <button className="px-8  py-3 text-white bg-[#30ba2d] rounded-full shadow-md hover:bg-[#1d791c] transition">
            Join Us →
          </button>
        </div>
      </div>
      <div>
        <img src={img4} alt="logo" className="w-[550px]" />
      </div>
      <img src={img1} className="w-[150px] left-[800px] top-[100px] absolute" />
      <img src={img2} className="w-[150px] absolute left-[800px] top-[450px]" />
      <img src={img3} className="w-[150px] absolute right-10 top-[450px]" />
    </div>
  );
};

export default Herosection;
