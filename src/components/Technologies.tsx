import awsLogo from "../assets/aws.png";
import dockerLogo from "../assets/docker.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import grafanaLogo from "../assets/grafana.png";
import helmLogo from "../assets/helm.png";
import jenkinsLogo from "../assets/jenkins.png";
import k8sLogo from "../assets/k8s.png";
import linuxLogo from "../assets/linux.png";
import prometheusLogo from "../assets/prometheus.png";
import terraformLogo from "../assets/terraform.png";

const Technologies = () => {
  const technologies = [
    { name: "Linux", icon: linuxLogo },
    { name: "Git", icon: gitLogo },
    { name: "GitHub", icon: githubLogo },
    { name: "AWS", icon: awsLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "Kubernetes", icon: k8sLogo },
    { name: "Helm", icon: helmLogo },
    { name: "Jenkins", icon: jenkinsLogo },
    { name: "Terraform", icon: terraformLogo },
    { name: "Prometheus", icon: prometheusLogo },
    { name: "Grafana", icon: grafanaLogo },
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
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 sm:h-16 mx-auto mb-3 sm:mb-4 object-contain"
              />
              <h3 className="font-semibold text-gray-700 text-sm sm:text-base">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
