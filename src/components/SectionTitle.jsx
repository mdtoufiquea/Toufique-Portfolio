import { motion } from "framer-motion";

const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89116]">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;