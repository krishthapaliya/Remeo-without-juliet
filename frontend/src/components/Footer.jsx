import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{
        background: 'linear-gradient(90deg, #997676, #C09C9C)',
      }}
    >
      {/* Container to center the content */}
      <div className="container mx-auto flex flex-col items-center space-y-12">
        {/* Left and Right Content */}
        <div className="flex flex-col md:flex-row justify-center space-x-96 text-center">
          {/* Left Side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Organization</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/blogs" className="hover:underline">Blogs</a></li>
              <li><a href="/programs" className="hover:underline">Our Program</a></li>
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/help" className="hover:underline">Help</a></li>
              <li><a href="/location" className="hover:underline">Our Location</a></li>
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
