import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const fadeIn = (delay = 0.3) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.7 } }
});

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden px-6 py-20 space-y-20">

      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-20 animate-pulse-slow z-0" />

      <motion.div
        className="relative z-10 max-w-[65%] mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl space-y-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.4 } } }}
      >
        <motion.h2 className="text-4xl font-bold text-center neon-text" variants={fadeIn(0)}>
          Contact MeInfo
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
         
          <Tilt glareEnable={true} glareMaxOpacity={0.3}>
            <motion.form className="space-y-4" variants={fadeIn(0.2)}>
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-black/30 border border-purple-400 rounded-md text-white" />
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-black/30 border border-cyan-400 rounded-md text-white" />
              <textarea rows="4" placeholder="Your Message" className="w-full p-3 bg-black/30 border border-pink-400 rounded-md text-white" />
              <motion.button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 font-bold rounded-md" whileHover={{ scale: 1.05 }}>
                🚀 Send Message
              </motion.button>
            </motion.form>
          </Tilt>

          <motion.div className="space-y-6" variants={fadeIn(0.4)}>
            <div>
              <p><strong>Email:</strong> vijay@email.com</p>
              <p><strong>Location:</strong> Hyderabad, India</p>
              <p><strong>Available:</strong> Mon–Sat (10 AM – 6 PM)</p>
            </div>
            <div className="flex gap-6 text-3xl">
              <motion.a href="#" className="hover:text-blue-400"><FaLinkedin /></motion.a>
              <motion.a href="#" className="hover:text-gray-300"><FaGithub /></motion.a>
              <motion.a href="mailto:vijay@email.com" className="hover:text-red-400"><FaEnvelope /></motion.a>
              <motion.a href="https://wa.me/1234567890" className="hover:text-green-400"><FaWhatsapp /></motion.a>
              <motion.a href="#" className="hover:text-blue-300"><FaTelegram /></motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div className="text-center" variants={fadeIn(0.6)}>
          <video autoPlay loop muted className="mx-auto w-72 h-72 rounded-xl shadow-2xl border border-white/20 object-cover">
            <source src="/fullPage.mp4" type="video/mp4" />
          </video>
          <p className="mt-2 text-gray-400">Here’s a quick video intro from me 👆</p>
        </motion.div>

        
        <motion.div className="space-y-4" variants={fadeIn(0.8)}>
          <h3 className="text-2xl font-semibold">FAQs</h3>
          <details className="bg-black/30 p-4 rounded-md border border-white/10">
            <summary className="cursor-pointer text-lg font-medium">What technologies do you work with?</summary>
            <p className="mt-2 text-gray-300">React, .NET Core, C#, SQL Server, Tailwind, Framer Motion, and more.</p>
          </details>
          <details className="bg-black/30 p-4 rounded-md border border-white/10">
            <summary className="cursor-pointer text-lg font-medium">Are you open to freelance or collab?</summary>
            <p className="mt-2 text-gray-300">Yes! I’m actively open to freelance projects and collaborations.</p>
          </details>
        </motion.div>
      </motion.div>

      <footer className="relative z-10 text-center text-gray-400 text-sm pt-12">
        © {new Date().getFullYear()} Vijay Prathap Pandey. All rights reserved.
      </footer>
    </div>
  );
}
