const HeroSection = () => {
  const handleEnrollNow = () => {
    // Scroll to courses section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadBrochure = () => {
    // Download brochure from assets folder
    const link = document.createElement("a");
    link.href = "src/assets/Devops Course Brochure.pdf"; // Corrected file name
    link.download = "Devops Course Brochure.pdf"; // Corrected file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 pt-16"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-100 border border-blue-200 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium text-blue-600">
              🚀 Limited Seats Available
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Become Job-Ready in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevOps
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 px-2">
            in Just 2 Months
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Learn in-demand skills like AWS, Kubernetes, CI/CD, Docker, and more
            with hands-on projects & placement support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button
              onClick={handleDownloadBrochure}
              className="w-full sm:w-auto bg-white border-2 border-blue-300 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Brochure
            </button>
            <button
              onClick={handleEnrollNow}
              className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Enroll Now
            </button>
          </div>

          {/* Salary Info */}
          <div className="text-center px-4">
            <p className="text-gray-700 text-base sm:text-lg mb-2">
              Average starting salary for DevOps engineers
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-green-500 ">
              ₹6-10 LPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
