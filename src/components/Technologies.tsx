const Technologies = () => {
  const technologies = [
    {
      name: "AWS",
      icon: "☁️",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
    },
    {
      name: "Docker",
      icon: "🐳",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
    },
    {
      name: "Kubernetes",
      icon: "⚓",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
    },
    {
      name: "Git",
      icon: "📝",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600",
    },
    {
      name: "Jenkins",
      icon: "⚙️",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
    },
    {
      name: "Monitoring",
      icon: "📊",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Master In-Demand{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            Learn the tools and platforms that top companies use in production.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.bgColor} ${tech.borderColor} border-2 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{tech.icon}</div>
              <h3 className={`font-semibold ${tech.textColor} text-sm sm:text-base`}>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
