import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-custom font-bold text-gray-700 mb-4">
            SOME THINGS I'VE BUILT
          </h2>
          <div className="w-20 h-1 bg-blue-600 md:mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-500">
                    <a
                      href={project.gitLink}
                      className="hover:text-blue-600 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      className="hover:text-blue-600 transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-500 text-lg mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-blue-600 text-sm font-bold border border-gray-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
