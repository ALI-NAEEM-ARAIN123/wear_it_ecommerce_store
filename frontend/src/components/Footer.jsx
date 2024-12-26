import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-700 text-white">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-10 py-10 px-5 sm:px-20 mt-40 text-sm">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="w-40 h-40 mt-1000" alt="Ved Stationary Logo" />
          <p className="w-full md:w-2/3 text-gray-200">
            At wear it , we are committed to providing high-quality
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer">About us</li>
            <li className="hover:text-yellow-300 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-300 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-yellow-300 cursor-pointer">Return Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-yellow-300 cursor-pointer">+91 9899459288</li>
            <li className="hover:text-yellow-300 cursor-pointer">contact@alinaeemarain@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600">
        <p className="py-5 text-center text-gray-300 text-sm">
          Copyright &copy; 2024 Ved Stationary - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
