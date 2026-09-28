import { motion } from "framer-motion";
import {
    FiUser,
    FiMapPin,
    FiMail,
    FiCode,
    FiLayers,
    FiDatabase,
    FiGitBranch,
    FiDownload,
    FiSend,
    FiAward,
    FiBookOpen,
    FiZap,
} from "react-icons/fi";

const About = () => {

    const profileImage =
        "https://i.ibb.co.com/Nn9x45Cx/photo-2026-08-11-23-04-17.jpg";

    const skills = [
        {
            name: "React.js",
            icon: <FiCode />,
            level: "Advanced",
        },
        {
            name: "JavaScript",
            icon: <FiZap />,
            level: "Advanced",
        },
        {
            name: "Node.js",
            icon: <FiCode />,
            level: "Intermediate",
        },
        {
            name: "Express.js",
            icon: <FiLayers />,
            level: "Intermediate",
        },
        {
            name: "MongoDB",
            icon: <FiDatabase />,
            level: "Intermediate",
        },
        {
            name: "Firebase",
            icon: <FiZap />,
            level: "Intermediate",
        },
        {
            name: "Tailwind CSS",
            icon: <FiLayers />,
            level: "Advanced",
        },
        {
            name: "Git & GitHub",
            icon: <FiGitBranch />,
            level: "Intermediate",
        },
    ];

    const qualities = [
        {
            icon: <FiCode />,
            title: "Web Development",
            description:
                "I build modern, responsive and user-friendly websites using modern web technologies.",
        },
        {
            icon: <FiZap />,
            title: "Problem Solving",
            description:
                "I enjoy solving development problems and finding clean and practical solutions.",
        },
        {
            icon: <FiBookOpen />,
            title: "Continuous Learning",
            description:
                "I continuously learn new technologies and improve my development skills.",
        },
    ];

    const stats = [
        {
            number: "20+",
            title: "Projects",
        },
        {
            number: "15+",
            title: "Technologies",
        },
        {
            number: "1+",
            title: "Year Learning",
        },
        {
            number: "100%",
            title: "Passion",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
            {/* Background Glow */}
            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                <div className="absolute left-[-200px] top-[200px] h-[400px] w-[400px] rounded-full bg-[#c89116]/10 blur-[120px]" />
                <div className="absolute right-[-200px] top-[500px] h-[450px] w-[450px] rounded-full bg-[#c89116]/5 blur-[120px]" />
            </div>

            {/* ================= HERO ================= */}
            <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Small Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c89116]/40 bg-[#c89116]/10 px-4 py-2 text-sm font-medium text-[#c89116]"
                        >
                            <FiUser />
                            About Me
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-[#c89116] via-[#f0bd45] to-[#c89116] bg-clip-text text-transparent">
                                Md Toufique Alam
                            </span>
                        </h1>

                        <h2 className="mt-5 text-xl font-semibold tracking-[0.18em] text-gray-300 sm:text-2xl">
                            MERN STACK DEVELOPER
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                            I'm a passionate web developer focused on building modern,
                            responsive and user-friendly web applications. I enjoy turning
                            ideas into real-world digital experiences and continuously
                            improving my skills with new technologies.
                        </p>

                        {/* Info */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c89116]/30 bg-[#c89116]/10 text-xl text-[#c89116]">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <p className="text-xs text-gray-500">Location</p>
                                    <p className="text-sm font-medium text-gray-200">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c89116]/30 bg-[#c89116]/10 text-xl text-[#c89116]">
                                    <FiMail />
                                </span>

                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="text-sm font-medium text-gray-200">
                                        toufiquealam0200@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-wrap gap-4">
                            <motion.a
                                href="/Md Toufique alam Resume.pdf"
                                download="Md-Tou
                                ique-Alam-Resume.pdf"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c89116] to-[#a8750d] px-6 py-3.5 font-semibold text-black shadow-lg shadow-[#c89116]/20"
                            >
                                <FiDownload />
                                Download CV
                            </motion.a>

                            <motion.a
                                href="https://wa.me/8801732999681?text=Hello%20Toufique,%20I%20visited%20your%20portfolio."
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 rounded-xl border border-[#c89116] px-6 py-3.5 font-semibold text-[#c89116] transition-all hover:bg-[#c89116] hover:text-black"
                            >
                                <FiSend />
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        {/* Glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-[#c89116]/20 blur-[90px] sm:h-96 sm:w-96" />

                        {/* Image Frame */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative"
                        >
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-[#c89116] via-[#f0bd45] to-[#8f650c] opacity-70 blur-sm" />

                            <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[2rem] border border-[#c89116]/50 bg-[#0c0c0c] sm:h-[470px] sm:w-[370px]">
                                <img
                                    src={profileImage}
                                    alt="Md Toufique Alam"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 pt-20">
                                    <p className="text-sm text-gray-400">Currently</p>
                                    <h3 className="mt-1 text-lg font-bold text-white">
                                        MERN Stack Developer
                                    </h3>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-[#c89116]">
                                        <span className="h-2 w-2 rounded-full bg-green-500" />
                                        Available for projects
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="border-y border-white/5 bg-[#080808]/80 py-20">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-14 lg:grid-cols-2">
                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c89116]/40 bg-[#c89116]/10 px-4 py-2 text-sm text-[#c89116]">
                                <FiAward />
                                My Skills
                            </div>

                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Technologies I{" "}
                                <span className="text-[#c89116]">Work With</span>
                            </h2>

                            <p className="mt-4 max-w-xl leading-7 text-gray-400">
                                I work with modern technologies to create fast, responsive and
                                scalable web applications.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.07,
                                            duration: 0.5,
                                        }}
                                        whileHover={{
                                            y: -7,
                                            scale: 1.03,
                                        }}
                                        className="group rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 text-center transition-all duration-300 hover:border-[#c89116]/50 hover:bg-[#c89116]/5"
                                    >
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#c89116]/10 text-2xl text-[#c89116] transition-all group-hover:bg-[#c89116] group-hover:text-black">
                                            {skill.icon}
                                        </div>

                                        <h3 className="mt-3 text-sm font-semibold text-white">
                                            {skill.name}
                                        </h3>

                                        <p className="mt-1 text-[11px] text-gray-500">
                                            {skill.level}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* What I Do */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c89116]/40 bg-[#c89116]/10 px-4 py-2 text-sm text-[#c89116]">
                                <FiZap />
                                What I Do
                            </div>

                            <h2 className="text-3xl font-bold sm:text-4xl">
                                My Job & <span className="text-[#c89116]">Passion</span>
                            </h2>

                            <div className="mt-8 space-y-4">
                                {qualities.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.12,
                                            duration: 0.6,
                                        }}
                                        whileHover={{ x: 6 }}
                                        className="group flex gap-5 rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 transition-all duration-300 hover:border-[#c89116]/40 hover:bg-[#c89116]/5"
                                    >
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#c89116]/15 text-2xl text-[#c89116] transition-all group-hover:bg-[#c89116] group-hover:text-black">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid overflow-hidden rounded-3xl border border-[#c89116]/40 bg-gradient-to-r from-[#0d0d0d] via-[#111111] to-[#0d0d0d] sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            whileHover={{ backgroundColor: "rgba(200,145,22,0.06)" }}
                            className={`p-8 text-center ${index !== stats.length - 1
                                ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                                : ""
                                }`}
                        >
                            <h3 className="text-4xl font-extrabold text-[#c89116]">
                                {stat.number}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">{stat.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative px-5 pb-20 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#c89116]/30 bg-gradient-to-br from-[#16120a] via-[#0d0d0d] to-[#080808] px-6 py-14 text-center sm:px-10"
                >
                    {/* Decorative Glow */}
                    <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#c89116]/15 blur-[80px]" />

                    <div className="relative">
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#c89116]">
                            Let's Work Together
                        </p>

                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                            Let's Build Something{" "}
                            <span className="text-[#c89116]">Great Together</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
                            Have a project idea or looking for a web developer? Feel free to
                            reach out. I'm always open to discussing new projects and ideas.
                        </p>

                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=toufiquealam0200@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#c89116] px-7 py-3.5 font-semibold text-black shadow-lg shadow-[#c89116]/20"
                        >
                            <FiMail />
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default About;