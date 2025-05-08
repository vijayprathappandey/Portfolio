import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/404-animation.json';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-4">
      <AlertTriangle className="text-yellow-400 w-16 h-16 mb-4" />

      <div className="w-72 h-72 mb-6">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-400 hover:underline text-lg">
        Go back to Home
      </a>
    </div>
  );
}

export default NotFound;
