import Reveal from "../components/Reveal";


function Projects() {
  const projects = [
    {
      title: "Pixel Grid Ad App 🧩",
      description: "A React + Django app like Million Dollar Homepage where users buy pixels and upload images.",
      link: "https://your-deployed-site-link.com",
      tech: ["React", "Tailwind", "Node", "MongoDB"]
    },
    {
      title: "E-Wallet Adoption Research 📊",
      description: "A research study exploring how students adopt e-wallets, using TAM model.",
      link: "https://github.com/your-research-link",
      tech: ["SPSS", "Google Forms", "Research"]
    },
    {
      title: "Blockchain Dashcam Project 🚗",
      description: "A YOLOv8 + Blockchain-based system that alerts police about modified vehicles via dashcam analysis.",
      link: "https://github.com/your-blockchain-dashcam",
      tech: ["Django", "YOLOv8", "IPFS", "Solidity"]
    }
  ];

  return (
    <Reveal delay={1}>
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 bg-gray-50 py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Projects;
