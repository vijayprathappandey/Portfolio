import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaEnvelope, FaBars, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Right() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-2 fixed h-[50%] top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="text-white  text-2xl hover:scale-110 transition-transform"
        >
          <FaBars />
        </button>
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-gradient-to-br from-[#7F00FF]/90 to-[#E100FF]/90 
          text-white p-6 shadow-2xl backdrop-blur-lg border-l border-white/10
          transition-transform duration-700 ease-in-out transform-gpu
          ${open ? 'translate-x-0 rotate-y-0' : 'translate-x-full rotate-y-20 '}`}
        style={{
          transformOrigin: 'right',
          perspective: '1000px',
        }}
      >
        <nav className="space-y-5 mt-16 text-sm">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-2 transform text-2xl transition-all"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-2 transform text-2xl transition-all"
          >
            <FaUserAlt /> About
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-2 transform text-2xl transition-all"
          >
            <FaEnvelope /> Contact
          </Link>
          <Link
            to="/GsvProject"
            className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-2 transform text-2xl transition-all"
          >
            <FaFolderOpen /> Projects
          </Link>
          <Link
            to="/projectdetails"
            className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-2 transform text-2xl transition-all"
          >
            <FaFolderOpen /> Not Found
          </Link>
         
        </nav>
      </div>
    </>
  );
}

export default Right;
