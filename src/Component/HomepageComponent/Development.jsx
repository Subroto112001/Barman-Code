import React, { useState, useEffect } from "react";

// Individual step card component
const ProcessCard = ({
  number,
  title,
  description,
  delay = 0,
  isVisible,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 px-6 h-[200px] flex items-center justify-center flex-col shadow-lg hover:shadow-xl transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-center">
        <span className="text-purple-600 font-bold text-xl">#{number}</span>
        <h3 className="font-bold text-gray-900 text-lg mt-1 leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

// Timeline line component
const TimelineLine = ({
  isVisible,
  delay = 0,
  isVertical = false,
  className = "",
}) => {
  return (
    <div
      className={`flex ${
        isVertical ? "flex-col items-center" : "items-center justify-center"
      } ${className}`}
    >
      <div
        className={`bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-800 ease-out ${
          isVertical ? "w-0.5 h-20" : "h-0.5 w-20"
        } ${
          isVisible
            ? "scale-100 opacity-100"
            : (isVertical ? "scale-y-0" : "scale-x-0") + " opacity-0"
        }`}
        style={{
          transitionDelay: `${delay}ms`,
          transformOrigin: isVertical ? "top" : "left",
        }}
      />
    </div>
  );
};

// Trophy component
const TrophyIcon = ({ isVisible }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`text-5xl transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 rotate-0 scale-100"
            : "opacity-0 translate-y-8 rotate-45 scale-50"
        }`}
        style={{ transitionDelay: "1800ms" }}
      >
        <div className="animate-pulse hover:animate-bounce cursor-pointer">
          🏆
        </div>
      </div>
    </div>
  );
};

const Development=()=>{
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    {
      number: 1,
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      number: 2,
      title: "Sprint planning",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      number: 3,
      title: "Tech architecture",
      description:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
    },
    {
      number: 4,
      title: "Standups & weekly demos",
      description:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      number: 5,
      title: "Code reviews",
      description:
        "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
    },
    {
      number: 6,
      title: "Iterative delivery",
      description:
        "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Purple accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-8 rounded-full"></div>

            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-3 tracking-tight">
              How development
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Alcaline
              </span>{" "}
              works
            </h2>
          </div>
        </div>

        {/* Process Flow Grid */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Top Row */}
            <div className="relative">
              <ProcessCard
                {...processSteps[0]}
                isVisible={isVisible}
                delay={300}
                className="relative"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            <div className="flex items-center justify-center">
              <TimelineLine isVisible={isVisible} delay={500} />
            </div>

            <div className="relative">
              <ProcessCard
                {...processSteps[2]}
                isVisible={isVisible}
                delay={700}
                className="relative"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            {/* Vertical connectors */}
            <div className="flex justify-center">
              <TimelineLine
                isVisible={isVisible}
                delay={600}
                isVertical={true}
              />
            </div>

            <div></div>

            <div className="flex justify-center">
              <TimelineLine
                isVisible={isVisible}
                delay={800}
                isVertical={true}
              />
            </div>

            {/* Middle Row */}
            <div className="relative">
              <ProcessCard
                {...processSteps[1]}
                isVisible={isVisible}
                delay={800}
                className="relative"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            <div className="flex items-center justify-center">
              <TimelineLine isVisible={isVisible} delay={1000} />
            </div>

            <div className="relative">
              <ProcessCard
                {...processSteps[3]}
                isVisible={isVisible}
                delay={1200}
                className="relative"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            {/* Vertical connectors */}
            <div></div>

            <div className="flex justify-center">
              <TimelineLine
                isVisible={isVisible}
                delay={1100}
                isVertical={true}
              />
            </div>

            <div className="flex justify-center">
              <TimelineLine
                isVisible={isVisible}
                delay={1300}
                isVertical={true}
              />
            </div>

            {/* Bottom Row */}
            <div></div>

            <div className="relative">
              <ProcessCard
                {...processSteps[4]}
                isVisible={isVisible}
                delay={1400}
                className="relative"
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            <div className="relative">
              <ProcessCard
                {...processSteps[5]}
                isVisible={isVisible}
                delay={1600}
                className="relative"
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </div>

            {/* Final connector and trophy */}
            
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.number}>
                <ProcessCard
                  {...step}
                  isVisible={isVisible}
                  delay={300 + index * 200}
                  onMouseEnter={() => setHoveredCard(step.number)}
                  onMouseLeave={() => setHoveredCard(null)}
                />
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <TimelineLine
                      isVisible={isVisible}
                      delay={400 + index * 200}
                      isVertical={true}
                    />
                  </div>
                )}
              </div>
            ))}

            
          </div>
        </div>

      

      
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
export default React.memo(Development);