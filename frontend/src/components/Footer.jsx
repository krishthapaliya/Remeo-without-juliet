import React from 'react';

const Footer = () => {
  return (
    <footer
      className=" py-8 bg-[#e0f0fe] text-gray-500"
    >
      {/* Container to center the content */}
      <div className="container mx-auto flex flex-col items-center space-y-12">
        {/* Left and Right Content */}
        <div className="flex flex-col md:flex-row justify-center space-x-96 text-center">
          {/* Left Side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Organization</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">About Us</a></li>
              <li><a href="/blogs" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">Blogs</a></li>
              <li><a href="/programs" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">Our Program</a></li>
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">Contact Us</a></li>
              <li><a href="/help" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">Help</a></li>
              <li><a href="/location" className="hover:bg-[#7AC142] hover:text-white transition-color px-2 py-1 rounded-full">Our Location</a></li>
            </ul>
          </div>
        </div>

        

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 w-full">
          <p>Volunteer 2024 © All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
