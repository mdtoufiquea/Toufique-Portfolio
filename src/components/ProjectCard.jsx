import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl transition-all duration-300 hover:border-[#c89116]/40 hover:shadow-[#c89116]/10"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {project.category && (
          <div className="absolute left-4 top-4 rounded-full border border-[#c89116]/30 bg-black/70 px-3 py-1 text-xs font-medium text-[#c89116] backdrop-blur-md">
            {project.category}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#c89116] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <FiArrowUpRight />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#c89116]">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-[#c89116]/40 hover:text-[#c89116]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl bg-[#c89116] px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#d9a52a]"
            >
              <FiExternalLink />
              Live Demo
            </motion.a>
          )}

          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all hover:border-[#c89116] hover:text-[#c89116]"
            >
              <FiGithub />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;