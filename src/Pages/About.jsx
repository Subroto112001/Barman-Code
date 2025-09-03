import {
  FaCode,
  FaUsers,
  FaBullseye,
  FaAward,
  FaGlobe,
  FaBolt,
  FaHeart,
} from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Co-Founder & Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years of experience in modern web technologies.",
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder & Design Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "UI/UX designer passionate about creating intuitive and beautiful user experiences.",
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Backend Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Backend specialist with expertise in scalable architecture and cloud solutions.",
    },
    {
      name: "Emma Thompson",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Frontend enthusiast who loves bringing designs to life with clean, efficient code.",
    },
  ];

  const values = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "We write maintainable, scalable code that stands the test of time.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Your success is our success. We're partners in your digital journey.",
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Passion",
      description:
        "We love what we do, and it shows in every project we deliver.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f76680] to-[#57007b] opacity-80 text-white">
        <div className="absolute inset-0  bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Barman & Code
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We craft digital experiences that blend creativity with
              cutting-edge technology, turning your vision into powerful web
              solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2025, Barman & Code emerged from a simple belief:
                great software should be both powerful and elegant. Like a
                skilled bartender crafting the perfect cocktail, we blend the
                right technologies to create digital solutions that are both
                functional and delightful.
              </p>
              <p>
                What started as a small team of passionate developers has grown
                into a full-service web development company, but our core
                mission remains unchanged: to help businesses thrive in the
                digital world through exceptional code and innovative solutions.
              </p>
              <p>
                Today, we're proud to have helped over 50 companies transform
                their digital presence, from startups finding their footing to
                established enterprises scaling new heights.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r to-[#f76680] from-[#57007b] rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <FaCode className="w-16 h-16 mb-6 text-blue-200" />
              <h3 className="text-2xl text-center font-bold mb-4 pr-22">{"<Barman&code/>"}</h3>
              <p className="text-blue-100 text-end">Grow Your Business With Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from the code we write to
            the relationships we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-blue-600 mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who bring your digital dreams to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className=" bg-gradient-to-r from-[#f76680] to-[#57007b] rounded-3xl p-12 md:p-16 text-white text-center">
          <FaBullseye className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            To empower businesses with exceptional digital solutions that drive
            growth, enhance user experiences, and create lasting value in an
            ever-evolving digital landscape.
          </p>
          <div className="inline-flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <FaAward className="w-6 h-6 text-yellow-300" />
            <span className="font-medium">
              Excellence in Every Line of Code
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can bring your vision to
            life.
          </p>
          <div className="space-x-4">
            <button className=" bg-gradient-to-r from-[#f76680] to-[#57007b] hover:from-[#57007b] hover:to-[#f76680] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
              Start Your Project
            </button>
            <button className="bg-gradient-to-r from-[#57007b] hover:from-[#f76680] to-[#f76680] hover:to-[#57007b] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
