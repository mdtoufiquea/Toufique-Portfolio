
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

const Contract = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "toufiquealam0200@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=toufiquealam0200@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+880 1732-999681",
      link: "tel:+8801732999681",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c89116]">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's Work <span className="text-[#c89116]">Together</span>
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, collaboration opportunity, or just want to
            say hello? Feel free to contact me. I would love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Contact <span className="text-[#c89116]">Information</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
                I'm available for freelance projects, internship opportunities,
                and web development collaborations.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target={item.title === "Email" ? "_blank" : undefined}
                  rel={
                    item.title === "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#c89116]/40 hover:bg-[#c89116]/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c89116]/10 text-xl text-[#c89116]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="mt-1 text-sm font-medium text-gray-200 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801732999681?text=Hello%20Toufique,%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[#c89116] px-6 py-3.5 font-semibold text-[#c89116] transition-all hover:bg-[#c89116] hover:text-black"
            >
              <FiSend />
              Contact Me on WhatsApp
            </motion.a>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Follow Me
              </p>

              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/mdtoufiquea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all hover:border-[#c89116] hover:text-[#c89116]"
                >
                  <FiGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/toufique-alam-888299428/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all hover:border-[#c89116] hover:text-[#c89116]"
                >
                  <FiLinkedin />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/toufique.islam.525678"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition-all hover:border-[#c89116] hover:text-[#c89116]"
                >
                  <FiFacebook />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-8"
          > */}
            {/* <h2 className="text-2xl font-bold">
              Send Me a <span className="text-[#c89116]">Message</span>
            </h2> */}

            {/* <p className="mt-2 text-sm leading-6 text-gray-400">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p> */}

            {/* <form className="mt-8 space-y-5"> */}

              {/* Name */}
              {/* <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#c89116]"
                />
              </div> */}

              {/* Email
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#c89116]"
                />
              </div> */}

              {/* Subject
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project subject"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#c89116]"
                />
              </div> */}

              {/* Message
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#c89116]"
                ></textarea>
              </div> */}

              {/* Submit
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c89116] to-[#a6750e] px-6 py-3.5 font-semibold text-black shadow-lg shadow-[#c89116]/20 transition-all hover:shadow-[#c89116]/40"
              >
                <FiSend />
                Send Message
              </motion.button> */}
            {/* </form> */}
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contract;