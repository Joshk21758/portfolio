import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-100">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-gray-400 bg-gray-100 text-blue-700 text-lg font-medium tracking-wide mb-6">
            SOFTWARE DEVELOPER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8"
        >
          Building impactful software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-blue-600">
            products &amp; solutions
          </span>{" "}
          that matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl font-custom font-mono text-gray-600 max-w-2xl mx-auto mb-10"
        >
          As an aspiring Software developer student, I specialize in Backend
          architecture, building clean &amp; scalable REST API's and frontend
          frameworks for modern user interfaces for performant &amp; intuitive
          based software products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-800 text-white rounded-full font-custom font-bold hover:bg-blue-700 transition-colors"
          >
            Get in touch
            <ArrowRight size={20} />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#projects");
              if (el)
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: "smooth",
                });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-300 text-gray-800 rounded-full font-custom font-bold border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-colors"
          >
            View my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
