import { Young_Serif } from "next/font/google";

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[1,2].map((item) => (
          <div key={item} className="bg-amber-100 p-6 rounded-lg hover:border-blue-500 border border-transparent">
            <h3 className="text-xl font-bold">Project {item}</h3>
            <p className="text-gray-400 mt-2">Description of your project</p>
          </div>
        ))}
      </div>
    </section>
  );
}
