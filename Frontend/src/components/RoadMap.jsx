import React, { useState, useEffect, useRef } from "react";

const RoadMap = () => {
  const [hoveredPhase, setHoveredPhase] = useState(null);
  const [inView, setInView] = useState([]);

  const phases = [
    {
      title: "Phase 1",
      date: "October 2021",
      description: [
        "Official website launched & smart contract deployed",
        "Social media sites (twitter, telegram, etc.) launched",
        "Pre-sale & airdrop started",
        "Developing the NFT platform",
      ],
    },
    {
      title: "Phase 2",
      date: "November 2021",
      description: [
        "Pre-sale completed",
        "Airdrop distribution completed",
        "NS listed on binance, huobi, and coinbase exchanges",
        "Buyback NS tokens",
      ],
    },
    {
      title: "Phase 3",
      date: "December 2021",
      description: [
        "NFT platform launched",
        "Artists and high-quality projects settled in the platform",
        "Start large-scale marketing online",
      ],
    },
    {
      title: "Phase 4",
      date: "2022",
      description: [
        "Become the Largest, Lowest rate, and most comprehensive cross-blockchain NFT marketplace",
        "Start the Metaverse project",
        "More functions, more activities in planning",
      ],
    },
  ];

  const circleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          } else {
            setInView((prevState) => {
              const newState = [...prevState];
              newState[index] = false;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the circle is in view
    );

    // Observe each circle
    circleRefs.current.forEach((circle) => observer.observe(circle));

    // Cleanup observer on component unmount
    return () => {
      circleRefs.current.forEach((circle) => observer.unobserve(circle));
    };
  }, []);

  return (
    <div className="roadmap-container px-20 py-10">
      <h2 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400 mb-6">
        RoadMap
      </h2>

      <div className="timeline flex justify-start items-start space-x-12">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="timeline-phase flex items-start relative w-72"
            onMouseEnter={() => setHoveredPhase(index)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            {/* Circle Marker */}
            <div
              ref={(el) => (circleRefs.current[index] = el)} // Assign ref to each circle
              style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
              className={`bg-white w-12 h-12 rounded-full flex justify-center items-center 
                hover:border-2 z-[55] border-green-400 cursor-pointer  text-blue-500 font-bold text-xl transition-all duration-[1000]
                ${
                  inView[index]
                    ? "scale-110 opacity-100 bounce"
                    : "scale-100 opacity-50"
                }
                ${hoveredPhase === index ? "scale-110" : "scale-100"}`}
            >
              {index + 1}
            </div>

            {/* Info Box */}
            <div
              style={{ boxShadow: "0 1px 10px rgba(7, 255, 130, 0.4)" }}
              className={`bg-white info-box absolute top-3 left-5 w-full p-6 rounded-xl  
                opacity-0  transition-all duration-1000 ease-in-out transform z-50
                ${
                  hoveredPhase === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <h3 className="font-semibold text-lg text-green-400">
                {phase.title}
              </h3>
              <p className="text-sm text-blue-500">{phase.date}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                {phase.description.map((event, i) => (
                  <li key={i}>{event}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
