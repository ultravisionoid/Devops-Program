const About = () => {
  const stats = [
    { number: "12+", label: "Weeks of Guided Learning" },
    { number: "10+", label: "Industry-Grade Projects" },
    { number: "100%", label: "Rewatchable Recordings" },
    { number: "1:1", label: "Personal Mentorship" },
  ];

  const team = [
    {
      name: "Aayush Jhunjhunwala",
      role: "Senior DevOps Engineer, Oracle",
      bio: "DevOps professional with 5+ years of experience in cloud infrastructure, automation, and CI/CD pipelines.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Jayshree Prasad",
      role: "Career & Placement Manager",
      bio: "Career & Placement Manager with 5+ years of experience in career counseling and placement assistance.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const handleGetStarted = () => {
    // Scroll to courses section
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevOps Ready
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            We're on a mission to bridge the DevOps skills gap and help
            professionals transition into high-paying, in-demand careers.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To democratize DevOps education and create a pathway for
              professionals to acquire the skills needed in today's rapidly
              evolving tech landscape. We believe everyone deserves access to
              quality education that leads to meaningful career growth.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 mb-2 sm:mb-2 text-sm sm:text-base">
                What We Believe
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Practical skills over theoretical knowledge
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Industry-relevant curriculum
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continuous support and mentorship
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To become the leading platform for DevOps education, recognized
              for producing job-ready professionals who drive innovation in the
              tech industry. We envision a world where quality tech education is
              accessible to all.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 mb-2 sm:mb-2 text-sm sm:text-base">
                Our Approach
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hands-on project-based learning
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expert-led instruction
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Career-focused outcomes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Learn from industry professionals who have worked at top tech
            companies and are passionate about sharing their knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                {member.name}
              </h4>
              <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                {member.role}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start Your DevOps Journey?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Join our community of learners and take the first step towards
              your dream career.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
