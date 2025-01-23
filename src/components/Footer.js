import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links Column */}
          {[...Array(4)].map((_, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Help</li>
                <li className="hover:text-white cursor-pointer">Rooms</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p className="text-gray-400">
            Copyright © 2025 All rights reserved | This template is made with{" "}
            <i className="fa-solid fa-heart-crack text-red-500"></i> by Colorlib
          </p>
          <div className="flex justify-center space-x-4 text-xl">
            <a
              href="#"
              className="text-blue-500 hover:text-white transition"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
