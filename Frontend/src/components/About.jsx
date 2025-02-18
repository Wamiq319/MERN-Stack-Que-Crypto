import React, { useState, useEffect } from "react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-card");
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }

      const leftCard = document.getElementById("left-card");
      const rightCard = document.getElementById("right-card");

      const rectLeft = leftCard.getBoundingClientRect();
      const rectRight = rightCard.getBoundingClientRect();

      if (rectLeft.top <= window.innerHeight && rectLeft.bottom >= 0) {
        setInViewLeftCard(true);
      }
      if (rectRight.top <= window.innerHeight && rectRight.bottom >= 0) {
        setInViewRightCard(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check immediately if it's in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" px-4 sm:px-8 hover:scale-95 transform transition-all duration-1000">
      <div
        id="about-card"
        className={`overflow-x-hidden bg-gray-100 flex p-2 flex-col sm:flex-row justify-between items-center  shadow-lg rounded-3xl ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-[2000ms] ease-in-out transform`}
      >
        {/* Left side: About heading and description */}
        <div className="sm:w-1/2 text-center   sm:text-left">
          <h2 className="sm:text-6xl text-4xl  font-bold leading-normal md:leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
            About QDigital
          </h2>

          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto sm:mx-0 ">
            Que Digital is an innovative platform designed to revolutionize the
            NFT ecosystem. With a focus on eliminating the limitations found in
            traditional marketplaces, we simplify the user experience, reduce
            fees, and introduce cross-blockchain compatibility to expand
            opportunities for creators and collectors alike. Our mission is to
            become the largest, most affordable, and comprehensive
            cross-blockchain NFT marketplace. At Que Digital, we envision a
            community-driven ecosystem governed by passionate members, including
            top investors and NFT enthusiasts. Though we are not affiliated with
            OpenSea, we acknowledge and appreciate their pivotal role in the
            growth of the NFT space. As we continue to grow, Que Digital is
            dedicated to enhancing the NFT experience with advanced features
            like blockchain integration and decentralized governance, paving the
            way for a more accessible and thriving digital marketplace.
          </p>
        </div>

        {/* Right side: Grid of 9 images */}
        <div
          style={{ marginRight: "-80px", marginTop: "-150px" }}
          className="sm:w-1/2 grid grid-cols-3 gap-4   -rotate-6  transform"
        >
          {[...Array(9).keys()].map((index) => (
            <div
              key={index}
              className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden transform hover:z-50 hover:scale-[1.2] hover:rotate-3 transition-all duration-300 opacity-100"
            >
              <img
                src="https://web.archive.org/web/20211006140559im_/http://nftsea.net/assets/img/4.png" // Provided image URL
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
