const skills = [
  { category: "Languages", items: ["HTML", "CSS", "JavaScript", "Python", "SQL"] },
  { category: "Frontend", items: ["React.js"] },
  { category: "Tools & Other", items: ["Power BI", "Git", "GitHub", "GitLab"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}