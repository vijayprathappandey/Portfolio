import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Left() {
  const icons = [
    {
      href: 'https://www.linkedin.com/in/vijay-prathap-pandey',
      icon: <FaLinkedin size={30} />,
      color: 'hover:text-blue-500',
    },
    {
      href: 'https://github.com/vijayprathappandey',
      icon: <FaGithub size={30} />,
      color: 'hover:text-gray-300',
    },
    {
      href: 'https://twitter.com/your-profile',
      icon: <FaTwitter size={30} />,
      color: 'hover:text-sky-400',
    },
    {
      href: 'https://www.instagram.com/vijay_prathap_pandey',
      icon: <FaInstagram size={30} />,
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <div className="fixed top-1/3 left-4 z-50 space-y-6">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center w-12 h-12 bg-white/10 
            backdrop-blur-md rounded-full shadow-lg transition-transform duration-500 
            transform hover:scale-125 hover:rotate-12 hover:shadow-pink-500/50 ${item.color}`}
          style={{
            animation: `fadeInLeft 0.8s ease ${index * 0.1}s forwards`,
            opacity: 0,
            transform: 'translateX(-50px)',
          }}
        >
          {item.icon}
        </a>
      ))}

      
      <style>
        {`
          @keyframes fadeInLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Left;
