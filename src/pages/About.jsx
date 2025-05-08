import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import UniverseBackground from '../components/UniverseBackground';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const rotateIn = {
  hidden: { rotate: -90, opacity: 0 },
  show: { rotate: 0, opacity: 1, transition: { type: 'spring', stiffness: 360 } },
};

export default function About() {
  const skills = ['React', '.NET Core', 'C#', 'SQL Server', 'Tailwind CSS', 'Framer Motion'];

  return (
    <motion.div
      className="relative px-6 py-20 space-y-20 text-white min-h-screen"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <UniverseBackground /> 

      <motion.section variants={fadeInUp} className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-cyan-300 drop-shadow-md">
          <Typewriter
            words={['About Me']}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Hi, I’m Vijay Prathap Pandey — a Full Stack Developer passionate about
          crafting immersive web experiences and solving real-world problems.
        </p>
      </motion.section>

      <motion.section
        variants={container}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={rotateIn} className="flex justify-center">
          <img
            src="/image.png"
            alt="Vijay Prathap Pandey"
            className="rounded-full w-48 h-48 object-cover shadow-2xl border-4 border-cyan-500"
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-4 text-gray-200">
          <p>
            I specialize in building <span className="text-cyan-400 font-semibold">scalable front-end</span> experiences with React and <span className="text-indigo-400 font-semibold">robust back-end</span> services using .NET Core and SQL Server.
          </p>
          <p>
            When I’m not coding, I enjoy exploring new JavaScript libraries, playing cricket, or experimenting with UI animations.
          </p>
        </motion.div>
      </motion.section>

      <motion.section variants={container} className="space-y-6 text-center">
        <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-indigo-300">
          My Skillset
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeInUp}
              className="px-5 py-2 bg-indigo-600 hover:bg-cyan-600 transition-all text-white rounded-full shadow-md cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
