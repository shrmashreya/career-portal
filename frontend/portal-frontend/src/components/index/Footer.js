import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  UserGroupIcon, 
  NewspaperIcon 
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Placement Portal</h2>
          <p className="mt-4 text-gray-400">
            Your gateway to career success. Find your dream job with ease!
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-10 w-10 text-blue-500" />
              <p className="text-gray-400">Samrat Ashok Technological Institute (Engineering College)
              Civil Lines, Vidisha (M.P.) 464001, INDIA</p>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-green-500" />
              <p className="text-gray-400">+91-7592-250121</p>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-5 w-5 text-yellow-500" />
              <p className="text-gray-400">sati@satiengg.in<br/>
              www.satiengg.in</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center space-x-2 hover:text-blue-400 transition">
              <AcademicCapIcon className="h-5 w-5 text-blue-400" />
              <a href="/">Home</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition">
              <BriefcaseIcon className="h-5 w-5 text-green-400" />
              <a href="/">Jobs</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition">
              <UserGroupIcon className="h-5 w-5 text-orange-400" />
              <a href="/">Companies</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-400 transition">
              <NewspaperIcon className="h-5 w-5 text-yellow-400" />
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mt-4">
            Stay updated with the latest job openings and career tips.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-r-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Placement Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
