import Curriculum from "../components/Curriculum";

const Courses = () => {
  const pricingPlans = [
    {
      name: "Basic Program",
      description: "Perfect for getting started in DevOps",
      price: "₹12,000",
      originalPrice: "₹15,000",
      discount: "20% Early Bird Discount",
      duration: "2 Months",
      schedule: "Sat & Sun, 2 hrs/day",
      batchSize: "Small batch (max 20 students)",
      topics: [
        "Linux & Shell Scripting",
        "Docker & Containerization",
        "CI/CD with Jenkins",
        "AWS Cloud Basics",
      ],
      popular: false,
      popularLabel: "Best Value",
    },
    {
      name: "All-Inclusive Program",
      description: "Complete DevOps mastery with advanced topics",
      price: "₹18,000",
      originalPrice: "₹22,000",
      discount: "18% Early Bird Discount",
      duration: "3 Months",
      schedule: "Sat & Sun, 2 hrs/day",
      batchSize: "Small batch (max 20 students)",
      topics: [
        "Kubernetes in-depth",
        "Infrastructure as Code with Terraform",
        "Workflow Automation with Apache Airflow",
        "Advanced AWS Services",
      ],
      popular: true,
      popularLabel: "Most Popular",
    },
  ];

  const handleLearnMore = () => {
    // Scroll to curriculum section
    const curriculumSection = document.getElementById("curriculum");
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnrollNow = () => {
    // Scroll to contact section for enrollment
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            Two comprehensive programs designed to get you job-ready in DevOps.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                      plan.popularLabel === "Most Popular"
                        ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {plan.popularLabel}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {plan.description}
                </p>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {plan.price}
                  </div>
                  <div className="text-base sm:text-lg text-gray-500 line-through">
                    {plan.originalPrice}
                  </div>
                </div>
                <p className="text-green-600 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                  {plan.discount}
                </p>

                {/* Program Details */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {plan.schedule}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {plan.batchSize}
                    </span>
                  </div>
                </div>

                {/* Key Topics */}
                <div className="text-left mb-6 sm:mb-8">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    {plan.name === "All-Inclusive Program"
                      ? "Everything in Basic +"
                      : "Key Topics:"}
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {plan.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleLearnMore}
                  className={`w-full py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start Your DevOps Journey?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Choose your program and take the first step towards your dream
              career.
            </p>
            <button
              onClick={handleEnrollNow}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Full Curriculum */}
        <div id="curriculum">
          <Curriculum />
        </div>
      </div>
    </main>
  );
};

export default Courses;
