import React, { useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaPlay, FaPause } from 'react-icons/fa';

function Header() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-[10vh] w-full bg-[#0f0c29] overflow-hidden shadow-2xl z-20 animate-header-border">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#232526] to-[#0f2027] opacity-95"></div>

      <div
        className="relative z-10 h-full flex items-center justify-between px-4 md:px-10"
        style={{ perspective: '1000px' }}
      >
        
        <h1
          className="text-md md:text-2xl font-semibold transform hover:rotate-x-3 transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
            background: 'linear-gradient(90deg, #00C9FF, #92FE9D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hi, I'm{' '}
          <span className="font-bold">
            <Typewriter
              words={['Vijay Prathap Pandey', '.NET Developer', 'React Enthusiast']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <button
          onClick={toggleAudio}
          className="text-white text-xl p-3 rounded-full bg-gradient-to-br from-cyan-600 to-pink-700 shadow-xl hover:scale-110 transition-all duration-500 animate-pulse-glow mr-[5%]"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <audio ref={audioRef} loop>
          <source src="/Krishna-Bansuri.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Header;
