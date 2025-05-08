import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Footer() {
  return (
    <footer
      className="w-full bg-gray-900 text-white   animate-fade-in-up"
    >
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">
          <Typewriter
            words={['Thanks for Visiting!', 'Made with ❤️ by Vijay Prathap Pandey', 'Follow for more updates!']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-500 relative inline-block group">
          © {new Date().getFullYear()} Vijay Prathap Pandey. All rights reserved.
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
