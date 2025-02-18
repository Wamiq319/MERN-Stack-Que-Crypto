import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 text-blue-400">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer content */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600">© 2024 All rights reserved.</p>
        </div>

        {/* Policy Section - Multi-Column Layout */}
        <div className="mt-8 border-t pt-8">
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400 animate__animated animate__fadeIn animate__delay-1s">
            Terms & Policies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Policy Item 1 */}
            <div className="policy-item">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                Cheating or Fraud
              </h4>
              <p className="text-gray-600 text-sm">
                Any attempts to cheat or commit fraud will lead to the loss of
                all accumulated points and may result in permanent suspension
                from the platform.
              </p>
            </div>

            {/* Policy Item 2 */}
            <div className="policy-item">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                One Account Per Device
              </h4>
              <p className="text-gray-600 text-sm">
                Only one account per device or per user is allowed. Any attempt
                to bypass this rule will lead to account termination.
              </p>
            </div>

            {/* Policy Item 3 */}
            <div className="policy-item">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">
                Suspension Policy
              </h4>
              <p className="text-gray-600 text-sm">
                Users may face a temporary or permanent suspension for violating
                platform rules. All decisions are final.
              </p>
            </div>

            {/* Policy Item 4 */}
            <div className="policy-item">
              <h4 className="text-xl font-semibold text-blue-400 mb-2 border-green-500">
                Privacy Policy
              </h4>
              <p className="text-gray-600 text-sm">
                We value your privacy. Please review our privacy policy to
                understand how we handle your personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section - Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
