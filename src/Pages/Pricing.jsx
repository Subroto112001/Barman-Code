import React, { useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaBolt,
  FaCrown,
  FaRocket,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../AnimationCss/Pricing.css";

const Pricing = () => {
  const [billingType, setBillingType] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      icon: <FaRocket className="w-8 h-8" />,
      description: "Perfect for small businesses and startups",
      monthlyPrice: 999,
      yearlyPrice: 899,
      popular: false,
      color: "blue",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "Mobile-First Design",
        "1 Month Free Support",
        "Basic Analytics Setup",
        "Social Media Integration",
      ],
      notIncluded: [
        "E-commerce Functionality",
        "Custom CMS",
        "Advanced Animations",
        "Multi-language Support",
      ],
    },
    {
      name: "Professional",
      icon: <FaStar className="w-8 h-8" />,
      description: "Ideal for growing businesses",
      monthlyPrice: 1999,
      yearlyPrice: 1799,
      popular: true,
      color: "purple",
      features: [
        "Everything in Starter",
        "Up to 15 Pages",
        "E-commerce Integration",
        "Custom CMS",
        "Advanced SEO",
        "3 Months Free Support",
        "Performance Optimization",
        "Custom Animations",
        "Blog/News Section",
        "Advanced Analytics",
        "Live Chat Integration",
      ],
      notIncluded: [
        "Multi-language Support",
        "Custom API Development",
        "Advanced Integrations",
      ],
    },
    {
      name: "Enterprise",
      icon: <FaCrown className="w-8 h-8" />,
      description: "For large-scale applications",
      monthlyPrice: 3999,
      yearlyPrice: 3599,
      popular: false,
      color: "indigo",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom API Development",
        "Multi-language Support",
        "Advanced Integrations",
        "6 Months Free Support",
        "Priority Development",
        "Custom Database Design",
        "Advanced Security Features",
        "Load Balancing",
        "24/7 Monitoring",
        "Dedicated Project Manager",
      ],
      notIncluded: [],
    },
  ];

  const additionalServices = [
    {
      name: "Website Maintenance",
      price: "199",
      period: "month",
      description: "Keep your website updated and secure",
    },
    {
      name: "SEO Optimization",
      price: "499",
      period: "month",
      description: "Improve your search engine rankings",
    },
    {
      name: "Custom Feature Development",
      price: "150",
      period: "hour",
      description: "Add specific functionality to your site",
    },
    {
      name: "Website Redesign",
      price: "2499",
      period: "project",
      description: "Complete overhaul of your existing site",
    },
  ];

  const getColorClasses = (color, popular = false) => {
    const colors = {
      blue: popular
        ? "border-blue-500 bg-blue-50"
        : "border-blue-200 hover:border-blue-300",
      purple: popular
        ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 ring-2 ring-purple-500 ring-opacity-20"
        : "border-purple-200 hover:border-purple-300",
      indigo: popular
        ? "border-indigo-500 bg-indigo-50"
        : "border-indigo-200 hover:border-indigo-300",
    };
    return colors[color] || colors.blue;
  };

  const getButtonClasses = (color) => {
    const colors = {
      blue: "bg-blue-600 hover:bg-blue-700 text-white",
      purple:
        "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white",
      indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r to-[#f76680] from-[#57007b] text-white hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. No hidden fees, no
              surprises.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center relative bg-white/10 backdrop-blur-sm rounded-full p-1 w-[260px] sm:w-[300px]">
              {/* Animated sliding indicator */}
              <span
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${
                  billingType === "monthly"
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              />

              {/* Monthly button */}
              <button
                className={`relative z-10 w-1/2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  billingType === "monthly"
                    ? "text-blue-600"
                    : "text-white hover:text-blue-100"
                }`}
                onClick={() => setBillingType("monthly")}
              >
                Monthly
              </button>

              {/* Yearly button */}
              <button
                className={`relative z-10 w-1/2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  billingType === "yearly"
                    ? "text-blue-600"
                    : "text-white hover:text-blue-100"
                }`}
                onClick={() => setBillingType("yearly")}
              >
                Yearly
                <span className="ml-2 bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl pricing-card ${getColorClasses(
                plan.color,
                plan.popular
              )} ${
                plan.popular ? "transform lg:-translate-y-4 lg:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : plan.color === "indigo"
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                    $
                    {billingType === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/project</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${getButtonClasses(
                    plan.color
                  )}`}
                >
                  Get Started
                  <FaArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What's included:
                </h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-3 mt-6">
                      Not included:
                    </h4>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <FaTimes className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your website with our specialized services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-3 hover:shadow-lg transition-shadow duration-300 service-card"
              >
                <div className="text-center">
                  <FaBolt className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    ${service.price}
                    <span className="text-sm text-gray-600 font-normal ">
                      /{service.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 w-[80%]">
                    {service.description}
                  </p>
                  <button className="cursor-pointer w-full  bg-primary hover:bg-blue-950 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center items-center">
        <div className=" text-black w-[70%] bg-gradient-to-r from-[#f76680] to-[#57007b] rounded-3xl cta-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with us today for a free consultation and let's
              discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                <FaPhone className="w-5 h-5 mr-2" />
                Schedule a Call
              </button>
              <button className="cursor-pointer border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
            <p className="text-pink-200 text-sm mt-6">
              Free consultation • No obligation • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
