const CurriculumTable = () => {
  const curriculum = [
    {
      week: "Week 1-2",
      module: "Foundation & Linux Basics",
      topics: ["Linux Fundamentals", "Shell Scripting", "Git Version Control", "Basic Networking"],
      duration: "40 hours",
      projects: "2 Mini Projects"
    },
    {
      week: "Week 3-4",
      module: "Cloud Computing & AWS",
      topics: ["AWS Fundamentals", "EC2, S3, VPC", "CloudFormation", "AWS CLI"],
      duration: "50 hours",
      projects: "3 Cloud Projects"
    },
    {
      week: "Week 5-6",
      module: "Containerization & Docker",
      topics: ["Docker Basics", "Docker Compose", "Container Orchestration", "Best Practices"],
      duration: "45 hours",
      projects: "2 Docker Projects"
    },
    {
      week: "Week 7-8",
      module: "Kubernetes & Orchestration",
      topics: ["K8s Architecture", "Pods, Services", "Deployments", "Helm Charts"],
      duration: "55 hours",
      projects: "3 K8s Projects"
    },
    {
      week: "Week 9-10",
      module: "CI/CD & Automation",
      topics: ["Jenkins Pipeline", "GitHub Actions", "ArgoCD", "Automation Tools"],
      duration: "50 hours",
      projects: "4 CI/CD Projects"
    },
    {
      week: "Week 11-12",
      module: "Monitoring & Observability",
      topics: ["Prometheus & Grafana", "ELK Stack", "Jaeger Tracing", "Alerting"],
      duration: "40 hours",
      projects: "2 Monitoring Projects"
    },
    {
      week: "Week 13-14",
      module: "Security & Best Practices",
      topics: ["DevSecOps", "Security Scanning", "Compliance", "Best Practices"],
      duration: "35 hours",
      projects: "2 Security Projects"
    },
    {
      week: "Week 15-16",
      module: "Advanced Topics & Capstone",
      topics: ["Service Mesh", "Serverless", "Multi-cloud", "Capstone Project"],
      duration: "60 hours",
      projects: "1 Major Capstone"
    }
  ];

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Complete{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            A comprehensive 16-week program covering everything you need to become a DevOps professional.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
            <div className="grid grid-cols-5 gap-4 font-semibold">
              <div>Week</div>
              <div>Module</div>
              <div>Topics Covered</div>
              <div>Duration</div>
              <div>Projects</div>
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
                <div className="grid grid-cols-5 gap-4 items-center">
                  {/* Week */}
                  <div className="font-semibold text-blue-600">{item.week}</div>
                  
                  {/* Module */}
                  <div className="font-medium text-gray-900">{item.module}</div>
                  
                  {/* Topics */}
                  <div className="text-sm text-gray-600">
                    <ul className="list-disc list-inside space-y-1">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Duration */}
                  <div className="text-sm text-gray-600">{item.duration}</div>
                  
                  {/* Projects */}
                  <div className="text-sm text-gray-600">{item.projects}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Week and Module Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="font-semibold text-blue-600 text-sm sm:text-base">{item.week}</div>
                <div className="text-xs sm:text-sm text-gray-500">{item.duration}</div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{item.module}</h3>
              
              {/* Topics */}
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Topics Covered:</h4>
                <ul className="space-y-1">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Projects */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                <span className="text-xs sm:text-sm text-gray-600">Projects:</span>
                <span className="text-xs sm:text-sm font-medium text-purple-600">{item.projects}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumTable;
