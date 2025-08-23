const CurriculumTable = () => {
  // const curriculum = [
  //   {
  //     week: "Week 1",
  //     module: "Linux & Git Basics",
  //     topics: [
  //       "Linux Fundamentals",
  //       "Shell Scripting",
  //       "Git & GitHub",
  //       "Basic Networking",
  //     ],
  //     duration: "8 hours",
  //     projects: "Lab: Git branching workflow",
  //   },
  //   {
  //     week: "Week 2",
  //     module: "AWS Core Services",
  //     topics: ["AWS Overview", "EC2, S3, IAM", "VPC Basics", "AWS CLI"],
  //     duration: "8 hours",
  //     projects: "Mini Project: Host a web app on AWS",
  //   },
  //   {
  //     week: "Week 3",
  //     module: "Docker & Containerization",
  //     topics: [
  //       "Docker Basics",
  //       "Images & Containers",
  //       "Docker Compose",
  //       "Best Practices",
  //     ],
  //     duration: "8 hours",
  //     projects: "Lab: Build and run a custom Docker image",
  //   },
  //   {
  //     week: "Week 4",
  //     module: "Kubernetes Introduction",
  //     topics: [
  //       "K8s Architecture",
  //       "Pods & Services",
  //       "Deployments",
  //       "Basic Ingress",
  //     ],
  //     duration: "8 hours",
  //     projects: "Mini Project: Deploy a containerized app on K8s",
  //   },
  //   {
  //     week: "Week 5",
  //     module: "CI/CD with Jenkins",
  //     topics: [
  //       "Jenkins Basics",
  //       "Pipelines",
  //       "GitHub Actions (Intro)",
  //       "CI/CD Best Practices",
  //     ],
  //     duration: "8 hours",
  //     projects: "Lab: Create a CI/CD pipeline in Jenkins",
  //   },
  //   {
  //     week: "Week 6-8",
  //     module: "Integrated Foundation Project",
  //     topics: ["Combine AWS", "Docker", "K8s", "Jenkins"],
  //     duration: "24 hours",
  //     projects: "Foundation Project: End-to-end CI/CD pipeline deployment",
  //   },
  //   {
  //     week: "Week 9",
  //     module: "Infrastructure as Code",
  //     topics: [
  //       "Terraform Basics",
  //       "Provisioning AWS Infra",
  //       "State Management",
  //       "Best Practices",
  //     ],
  //     duration: "8 hours",
  //     projects: "Lab: Provision AWS EC2 & S3 using Terraform",
  //   },
  //   {
  //     week: "Week 10",
  //     module: "Advanced Kubernetes",
  //     topics: [
  //       "Helm Charts",
  //       "Ingress & Load Balancing",
  //       "Auto Scaling",
  //       "Namespaces & RBAC",
  //     ],
  //     duration: "8 hours",
  //     projects: "Mini Project: Helm-based deployment with autoscaling",
  //   },
  //   {
  //     week: "Week 11",
  //     module: "Monitoring, Security & DevSecOps",
  //     topics: [
  //       "Prometheus & Grafana",
  //       "ELK Stack",
  //       "Security Scanning",
  //       "DevSecOps Compliance",
  //     ],
  //     duration: "8 hours",
  //     projects: "Lab: Setup monitoring dashboard with alerts",
  //   },
  //   {
  //     week: "Week 12",
  //     module: "Capstone Project",
  //     topics: [
  //       "Design & deploy a production-grade CI/CD pipeline with AWS, Docker, K8s, Terraform, Jenkins",
  //     ],
  //     duration: "8 hours",
  //     projects: "Capstone Project ",
  //   },
  //   {
  //     week: "Week 13",
  //     module: "Career Preparation",
  //     topics: ["Resume Building", "Mock Interviews", "Job Assistance"],
  //     duration: "4 hours",
  //     projects: "Job readiness",
  //   },
  // ];
  const curriculum = [
    {
      week: "Week 1",
      module: "Linux & Git Basics",
      topics: [
        "Linux Fundamentals",
        "Shell Scripting",
        "Git & GitHub",
        "Basic Networking",
      ],
      duration: "8 hours",
      projects: "Lab: Git branching workflow",
    },
    {
      week: "Week 2",
      module: "AWS Core Services",
      topics: ["AWS Overview", "EC2, S3, IAM", "VPC Basics", "AWS CLI"],
      duration: "8 hours",
      projects: "Mini Project: Host a web app on AWS",
    },
    {
      week: "Week 3",
      module: "Docker & Containerization",
      topics: [
        "Docker Basics",
        "Images & Containers",
        "Docker Compose",
        "Best Practices",
      ],
      duration: "8 hours",
      projects: "Lab: Build and run a custom Docker image",
    },
    {
      week: "Week 4",
      module: "Kubernetes Introduction",
      topics: [
        "K8s Architecture",
        "Pods & Services",
        "Deployments",
        "Basic Ingress",
      ],
      duration: "8 hours",
      projects: "Mini Project: Deploy a containerized app on K8s",
    },
    {
      week: "Week 5",
      module: "CI/CD with Jenkins",
      topics: [
        "Jenkins Basics",
        "Pipelines",
        "GitHub Actions (Intro)",
        "CI/CD Best Practices",
      ],
      duration: "8 hours",
      projects: "Lab: Create a CI/CD pipeline in Jenkins",
    },
    {
      week: "Week 6-7",
      module: "Integrated Foundation Project",
      topics: ["Combine AWS", "Docker", "K8s", "Jenkins"],
      duration: "16 hours",
      projects: "Foundation Project: End-to-end CI/CD pipeline deployment",
    },
    {
      week: "Week 8",
      module: "Infrastructure as Code",
      topics: [
        "Terraform Basics",
        "Provisioning AWS Infra",
        "State Management",
        "Best Practices",
      ],
      duration: "8 hours",
      projects: "Lab: Provision AWS EC2 & S3 using Terraform",
    },
    {
      week: "Week 9",
      module: "Advanced Kubernetes",
      topics: [
        "Helm Charts",
        "Ingress & Load Balancing",
        "Auto Scaling",
        "Namespaces & RBAC",
      ],
      duration: "8 hours",
      projects: "Mini Project: Helm-based deployment with autoscaling",
    },
    {
      week: "Week 10",
      module: "Monitoring, Security & DevSecOps",
      topics: [
        "Prometheus & Grafana",
        "ELK Stack",
        "Security Scanning",
        "DevSecOps Compliance",
      ],
      duration: "8 hours",
      projects: "Lab: Setup monitoring dashboard with alerts",
    },
    {
      week: "Week 11",
      module: "Capstone Project",
      topics: [
        "Design & deploy a production-grade CI/CD pipeline with AWS, Docker, K8s, Terraform, Jenkins",
      ],
      duration: "8 hours",
      projects: "Capstone Project",
    },
    {
      week: "Week 12",
      module: "Career Preparation",
      topics: ["Resume Building", "Mock Interviews", "Job Assistance"],
      duration: "4 hours",
      projects: "Job readiness",
    },
  ];

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Complete{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 text-sm sm:text-base">
            A comprehensive 16-week program covering everything you need to
            become a DevOps professional.
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
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
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
                <div className="font-semibold text-blue-600 text-sm sm:text-base">
                  {item.week}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {item.duration}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                {item.module}
              </h3>

              {/* Topics */}
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Topics Covered:
                </h4>
                <ul className="space-y-1">
                  {item.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-xs sm:text-sm text-gray-600 flex items-center"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                <span className="text-xs sm:text-sm font-medium text-purple-600">
                  {item.projects}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumTable;
