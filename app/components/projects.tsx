export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "Built using Python. Displays weather information for selected countries for learning API integration and data handling.",
      tech: "Python"
    },
    {
      title: "Random Quote Generator",
      description: "Generates random quotes using HTML, CSS, and JavaScript with a clean UI and simple interactivity.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "Snake Game",
      description: "Classic Snake game built with HTML, CSS, and JavaScript to improve logic and DOM manipulation skills.",
      tech: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-amber-100 p-6 rounded-lg hover:border-blue-500 border border-transparent transition"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <span className="inline-block mt-3 text-sm font-medium text-blue-600">
              Tech: {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
