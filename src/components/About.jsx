import { motion } from "motion/react";
import { skills } from "../data";
import ProfilePic from "../../images/myprofile.jpg";
import { CircleChevronRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-custom font-extrabold text-gray-700 mb-6">
              ABOUT ME
            </h2>

            <div className="space-y-4 text-lg text-slate-600">
              <p className="font-custom font-normal">
                Hello! My name is Mwansa Kunda and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2019 when I decided to try editing custom HTML5 web
                templates — turns out building website was about structure, and
                design. I later went on to learn CSS to apply building
                responsive and attractive web page designs.
              </p>
              <p className="font-custom font-normal">
                Fast-forward to today, and I've had the privilege of advancing
                my web fundamnetal knowledge by learning JavaScript frameworks,
                like Express Js and React. It has actually been a tedious
                journey, but I'm glad I've understood what i have learnt so far.
              </p>
              <p className="font-custom font-normal">
                Here are a few technologies &amp; languages I've been working
                with recently:
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-bold text-neutral-900"
                >
                  <span>
                    <CircleChevronRight size={14} color="blue" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-auto max-w-md mx-auto relative rounded-b-full rounded-t-full overflow-hidden group">
              <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img
                src={ProfilePic}
                alt="Portrait"
                className="w-full h-122 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative offset border */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
