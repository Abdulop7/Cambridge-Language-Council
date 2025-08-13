
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "../public/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center text-white ">
      {/* Optimized Background */}
      <Image
        src={banner}
        alt="Study Abroad"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      {/* Floating Shapes for Depth */}
      <motion.div
        className="absolute w-72 h-72 bg-red-600/20 rounded-full blur-3xl top-[-50px] left-[-50px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl bottom-[-50px] right-[-50px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Study Abroad with Confidence
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Your dream destination awaits — expert visa guidance, English test
          preparation, and university admissions made easy.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg shadow-lg transition-all"
            href="#apply"
          >
            Apply Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg shadow-lg transition-all"
            href="#services"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
