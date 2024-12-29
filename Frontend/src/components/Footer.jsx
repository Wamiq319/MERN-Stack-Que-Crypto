import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primaryGreen py-8 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">© 2024 Your Company. All rights reserved.</p>
          </div>

          {/* Right Section: Links */}
          <div className="flex space-x-6">
            <a href="/about" className="text-lg hover:underline">
              About Us
            </a>
            <a href="/contact" className="text-lg hover:underline">
              Contact
            </a>
            <a href="/privacy-policy" className="text-lg hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
