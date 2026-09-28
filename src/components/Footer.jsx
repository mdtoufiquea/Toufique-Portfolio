
import { motion } from "framer-motion";
import {
    FiGithub,
    FiLinkedin,
    FiFacebook,
    FiMail,
    FiArrowUp,
    FiHeart,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            icon: <FiGithub />,
            url: "https://github.com/mdtoufiquea",
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            url: "https://www.linkedin.com/in/toufique-alam-888299428/",
        },
        {
            name: "Facebook",
            icon: <FiFacebook />,
            url: "https://www.facebook.com/toufique.islam.525678",
        },
        {
            name: "X",
            icon: <FaXTwitter />,
            url: "https://x.com/Toufique684583",
        },
        {
            name: "Email",
            icon: <FiMail />,
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=toufiquealam0200@gmail.com",
        },
    ];

    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#050505] text-white">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c89116]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10">
                {/* Main Footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    rotate: 5,
                                }}
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c89116] to-[#8d640b] text-xl font-bold text-black shadow-lg shadow-[#c89116]/20"
                            >
                                T
                            </motion.div>

                            <div>
                                <h2 className="text-lg font-bold tracking-wide">
                                    Md Toufique Alam
                                </h2>

                                <p className="text-xs tracking-[0.2em] text-gray-500">
                                    MERN STACK DEVELOPER
                                </p>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
                            I build modern, responsive and user-friendly web applications
                            using React, Node.js, Express.js and MongoDB.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target={
                                        social.url.startsWith("http") ? "_blank" : undefined
                                    }
                                    rel={
                                        social.url.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={social.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.08,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-[#c89116]/50 hover:bg-[#c89116]/10 hover:text-[#c89116]"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:pl-16"
                    >
                        <h3 className="relative inline-block text-lg font-semibold">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#c89116]" />
                        </h3>

                        <div className="mt-6 flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-[#c89116]"
                                >
                                    <span className="h-[1px] w-0 bg-[#c89116] transition-all duration-300 group-hover:w-4" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="relative inline-block text-lg font-semibold">
                            Let's Connect
                            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#c89116]" />
                        </h3>

                        <p className="mt-6 text-sm leading-6 text-gray-400">
                            Have a project in mind? Feel free to get in touch. I'm always
                            open to discussing new opportunities and ideas.
                        </p>

                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=toufiquealam0200@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#c89116] to-[#a6750e] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#c89116]/10 transition-all duration-300 hover:shadow-[#c89116]/30"
                        >
                            <FiMail />
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-gray-500">
                        © {currentYear} Md Toufique Alam. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1 text-xs text-gray-500">
                        Made with
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                            }}
                            className="text-[#c89116]"
                        >
                            <FiHeart />
                        </motion.span>
                        using React
                    </p>

                    {/* Back To Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{
                            y: -4,
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 transition-all duration-300 hover:border-[#c89116]/40 hover:text-[#c89116]"
                    >
                        Back to Top
                        <FiArrowUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
