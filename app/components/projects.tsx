import { link } from "fs";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "Developed a Weather App as a project for learning purpose. The app shows the weather of particular countries using Python.",
      tech: "Python",
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/sudi-git/Weather-App"
    },
    {
      title: "Random Quote Generator",
      description: "Developed a quote generator as a project for learning purpose with clean UI and simple interactivity.",
      tech: "HTML, CSS, JavaScript",
      gradient: "from-green-500 to-emerald-500",
      link: "https://github.com/sudi-git/Random-Quote-Generator"
    },
    {
      title: "Snake Game",
      description: "Classic Snake game built to improve logic and DOM manipulation skills through interactive gameplay.",
      tech: "HTML, CSS, JavaScript",
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/sudi-git/Snake-Game"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <Link href={project.link} className="text-sm">→</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}