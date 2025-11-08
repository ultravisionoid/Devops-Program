const Testimonials = () => {
  const handleEnrollNow = () => {
    // Scroll to courses section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              DevOps Program?
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            We're launching our first batch with industry experts who have
            helped hundreds of professionals transition into DevOps careers.
            Join our inaugural cohort and be part of our success story.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">👨‍💻</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Industry Expert Instructors
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Learn from DevOps professionals with 5+ years of experience at top
              tech companies. Our instructors have helped hundreds transition
              into DevOps careers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Job-Ready Curriculum
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our curriculum is designed based on real job requirements. Learn
              exactly what employers are looking for in DevOps professionals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              First Batch Advantage
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Join our inaugural cohort and get personalized attention,
              exclusive early bird pricing, and be part of our founding success
              story.
            </p>
          </div>
        </div>

        {/* Instructor Credentials */}

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start Your DevOps Journey?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Join our first batch and get exclusive early bird pricing with
              personalized attention from industry experts.
            </p>
            <button
              onClick={handleEnrollNow}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now - Limited Seats
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
