import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-secondaryBlue">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer content */}
        <div className="flex justify-center items-center">
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>

        {/* Policy Section - Single Row Layout */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold text-center mb-6 text-secondaryBlue">
            Terms & Policies
          </h3>
          <div className="flex justify-between space-x-8">
            {/* Policy Item 1 */}
            <div className="policy-item flex-1">
              <h4 className="font-semibold text-secondaryBlue">
                Cheating or Fraud
              </h4>
              <p className="text-black">
                Any attempts to cheat or commit fraud will lead to the loss of
                all accumulated points and may result in permanent suspension
                from the platform.
              </p>
            </div>

            {/* Policy Item 2 */}
            <div className="policy-item flex-1">
              <h4 className="font-semibold text-secondaryBlue">
                One Account Per Device
              </h4>
              <p className="text-black">
                Only one account per device or per user is allowed. Any attempt
                to bypass this rule will lead to account termination.
              </p>
            </div>

            {/* Policy Item 3 */}
            <div className="policy-item flex-1">
              <h4 className="font-semibold text-secondaryBlue">
                Suspension Policy
              </h4>
              <p className="text-black">
                Users may face a temporary or permanent suspension for violating
                platform rules. All decisions are final.
              </p>
            </div>

            {/* Policy Item 4 */}
            <div className="policy-item flex-1">
              <h4 className="font-semibold text-secondaryBlue">
                Privacy Policy
              </h4>
              <p className="text-black">
                We value your privacy. Please review our privacy policy to
                understand how we handle your personal data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
