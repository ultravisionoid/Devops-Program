const Features = () => {
  const features = [
    {
      icon: "💻",
      title: "Hands-on Learning",
      description:
        "Work on live projects & simulations that mirror real industry scenarios.",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      icon: "🎥",
      title: "Live Interactive Sessions",
      description:
        "Learn directly from industry experts with years of practical experience.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-400",
    },
    {
      icon: "💼",
      title: "Placement Assistance",
      description:
        "Resume building, mock interviews, and job referrals to top companies.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
    },
    {
      icon: "⏰",
      title: "Flexible Learning",
      description:
        "Weekend-friendly schedule (Sat & Sun, 2 hrs/day) perfect for working professionals.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Program?
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            Our comprehensive approach ensures you're not just learning, but
            actually becoming job-ready.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
              >
                <span className="text-xl sm:text-2xl text-white">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
