import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "SmartDine",
      image:
        "https://i.ibb.co.com/ymFR0mYW/Gemini-Generated-Image-57ojy457ojy457oj.png",
      category: "MERN Stack",
      description:
        "A modern restaurant web application with user authentication, menu management, food ordering, Stripe payment, order history, rating system and admin dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      liveLink: "https://smart-dine-toufique.netlify.app",
      githubLink: "https://github.com/mdtoufiquea/Smart-dine-client",
    },
    {
      title: "ScholarX",
      image:
        "https://i.ibb.co.com/XrbzwnSC/scholarship-img.jpg",
      category: "MERN Stack",
      description:
        "A scholarship management web application where students can explore scholarships, view details, apply for scholarships and manage their applications through an interactive platform.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      liveLink: "https://toufique-scholarx.netlify.app",
      githubLink: "https://github.com/mdtoufiquea/ScholarX-client-side",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89116]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89116]">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="text-[#c89116]">Projects</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Here are some of the projects I have built using modern web
            technologies with a focus on performance, usability and clean
            design.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mdtoufiquea/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#c89116]/40 px-6 py-3 font-semibold text-[#c89116] transition-all duration-300 hover:bg-[#c89116] hover:text-black"
          >
            View More Projects
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;