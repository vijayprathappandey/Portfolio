import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import universeGif from '../assets/unverse.gif'; // Import the GIF

function Home() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${universeGif})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     
      <motion.video 
        onClick={() => setShowIntro(true)}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover rounded-lg shadow-md cursor-pointer z-20"
        initial={{ width: 200, height: 150, top: '20%', left: 'calc(50% - 100px)' }}
        animate={showIntro ? {
          width: 100,
          height: 70,
          position: 'fixed',
          bottom: 20,
          right: 20,
          top: 'auto',
          left: 'auto',
        } : {
          width: 200,
          height: 150,
          position: 'absolute',
          top: '20%',
          left: 'calc(50% - 100px)',
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <source src="/gsvlobo.mp4" type="video/mp4" />
      </motion.video>

      {!showIntro && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-lg mt-[19%] gap-10 z-10 relative text-white"
        >
          Click On It
        </motion.p>
      )}

      {showIntro && (
        <div className='flex'>
          <motion.div 
            className="w-1/2 min-h-screen bg-black text-white flex items-center justify-end text-2xl"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <div className='border border-gray-400 h-[30vh] w-[30vw] p-[5%]'>
              <div className='font-serif text-3xl'>
                <b>
                  <h1>Hi,</h1>
                  <h3>I'm Full Stack Developer</h3>
                </b>
                <h6>Coding Your Vision to Reality.</h6>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-1/2 bg-white min-h-screen text-black flex items-center justify-start text-2xl"
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <div style={{ opacity: 1 }} className='border border-gray-400 h-[30vh] w-[30vw] p-[5%]'>
              <img 
                src='/image.png' 
                alt='My pic' 
                className='w-[20vw] mt-[-48.6%] h-[50vh]'
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Home;
