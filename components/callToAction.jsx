"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ctaImg from "../public/cta-image.png"; // replace with your image

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-blue-50 opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Take the First Step Towards Your{" "}
            <span className="text-red-600">Global Future</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Join Cambridge Language Council today and start your journey
            towards mastering English and unlocking opportunities worldwide.
            Our expert instructors and proven methods guarantee results.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition-all"
              href="#apply"
            >
              Apply Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg shadow-lg transition-all"
              href="#contact"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={ctaImg}
            alt="Students learning English"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
