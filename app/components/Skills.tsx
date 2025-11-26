const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Node"];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className=" text-3xl font-bold text-black-50 mb-6 ">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-amber-100 p-4 text-center rounded hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
