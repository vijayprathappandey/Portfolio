import React from 'react';

const UniverseBackground = () => {
  const stars = Array.from({ length: 1000 });
  const planets = [
    { size: 60, top: '10%', left: '20%', color: 'bg-yellow-300' },
    { size: 40, top: '60%', left: '70%', color: 'bg-blue-400' },
    { size: 30, top: '30%', left: '80%', color: 'bg-pink-500' },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] h-full w-full">
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        />
      ))}
      {planets.map((planet, i) => (
        <div
          key={`planet-${i}`}
          className={`absolute rounded-full opacity-80 ${planet.color} animate-bounce`}
          style={{
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            top: planet.top,
            left: planet.left,
            animationDuration: `${2 + i}s`,
          }}
        />
      ))}
    </div>
  );
};

export default UniverseBackground;
