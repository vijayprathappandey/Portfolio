import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'GSV Router Demo',
    url: 'https://gsvrouter.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/3208/3208707.png',
    description: 'A project demonstrating routing in React using React Router.',
  },
  {
    name: 'GSV useContext Hook Demo',
    url: 'https://gsvusecontext.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/3103/3103451.png',
    description: 'Global state management with React\'s useContext hook.',
  },
  {
    name: 'GSV Class Components',
    url: 'https://gsvclasscomponents.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/2819/2819187.png',
    description: 'React app showcasing class components and lifecycle methods.',
  },
  {
    name: 'GSV useEffect Hook Demo',
    url: 'https://gsvuseeffect.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/3039/3039434.png',
    description: 'Demonstration of the useEffect hook to manage side effects.',
  },
  {
    name: 'GSV useState Hook Demo',
    url: 'https://gsvusestate.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
    description: 'Illustrates the useState hook for local state management.',
  },
  {
    name: 'GSV Components Props',
    url: 'https://gsvcomponentsprops.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/2721/2721287.png',
    description: 'Demonstrates the use of props in React components.',
  },
  {
    name: 'GSV Game Project',
    url: 'https://gsvgame.netlify.app/',
    img: 'https://cdn-icons-png.flaticon.com/512/2324/2324380.png',
    description: 'An interactive cricket-themed game made with React.',
  }
];

const getDirectionVariant = (index) => {
  const directions = ['x', '-x', 'y', '-y'];
  const dir = directions[index % 4];
  return {
    hidden: { opacity: 0, [dir.replace('-', '')]: dir.includes('-') ? -100 : 100 },
    visible: {
      opacity: 1,
      [dir.replace('-', '')]: 0,
      transition: {
        delay: index * 0.7,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  };
};

function GsvProject() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.2 }}
        className="text-5xl font-extrabold mb-12 text-pink-400 underline decoration-wavy"
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full"
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={getDirectionVariant(idx)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/10 rounded-xl border border-pink-300/30 p-5 overflow-hidden transition-transform shadow-lg shadow-pink-400/20 hover:shadow-pink-400/60 hover:bg-white/20 backdrop-blur-xl"
          >
            <motion.img
              src={project.img}
              alt={project.name}
              onError={(e) => (e.target.src = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png')}
              className="w-full h-40 object-contain mb-5 transition-transform duration-500 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
            />
            <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <p className="mt-3 text-blue-300 underline text-sm truncate">{project.url}</p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default GsvProject;
