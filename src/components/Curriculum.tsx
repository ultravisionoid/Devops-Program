const Curriculum = () => {
  const curriculum = [
    { week: "Week 1-2", topics: "Linux & Git Mastery", program: "Both" },
    { week: "Week 3-4", topics: "Docker & Containerization", program: "Both" },
    { week: "Week 5-6", topics: "Kubernetes Basics", program: "Both" },
    { week: "Week 7-8", topics: "AWS Fundamentals (EC2, S3, IAM)", program: "Both" },
    { week: "Week 9-10", topics: "CI/CD Pipelines (Jenkins/GitHub Actions)", program: "Both" },
    { week: "Week 11-12", topics: "Terraform Basics & Monitoring", program: "Both" },
    { week: "Week 13-14", topics: "Advanced Kubernetes (Helm, Operators)", program: "All-Inclusive" },
    { week: "Week 15-16", topics: "Advanced Terraform & AWS Services", program: "All-Inclusive" },
    { week: "Week 17-18", topics: "GitOps & Enterprise CI/CD", program: "All-Inclusive" },
    { week: "Week 19-20", topics: "Observability & Capstone Projects", program: "All-Inclusive" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive program covering everything you need to become a DevOps professional. 
            Choose your learning path based on your career goals.
          </p>
        </div>

        {/* Curriculum Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-6 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold">
              <div>Week</div>
              <div>Topics</div>
              <div>Program</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className={`px-6 py-6 hover:bg-gray-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                  {/* Week */}
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 font-medium text-sm">
                      {item.week}
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <span className="text-gray-900 font-medium">{item.topics}</span>
                  </div>

                  {/* Program */}
                  <div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      item.program === 'Both' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {item.program}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 text-sm">Both Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600 text-sm">All-Inclusive Only</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Download Full Syllabus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
