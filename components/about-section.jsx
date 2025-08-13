
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../public/about.jpg"; // Replace with your image

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={aboutImg}
              alt="About Cambridge Language Council"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative Red Box */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-red-700 opacity-90 rounded-xl -z-10"></div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-700">
            About Cambridge Language Council
          </h2>
          <div className="w-20 h-1 bg-blue-900 mt-2 mb-6"></div>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-900">Cambridge Language Council</span>, 
            we believe language is the key to unlocking a world of opportunities. 
            Our expert educators, Cambridge-certified curriculum, and personalized 
            learning approach ensure every student achieves fluency and confidence.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether your goal is excelling in international exams like IELTS and PTE, 
            mastering spoken English, or improving professional communication, 
            we provide the resources and guidance to get you there.
          </p>

          {/* Highlight Box */}
          <div className="mt-8 p-6 bg-blue-900 text-white rounded-xl shadow-md">
            <p className="text-lg font-semibold">
              “Empowering you to speak with confidence, anywhere in the world.”
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#programs"
            className="inline-block mt-6 px-6 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800 transition-all"
          >
            Explore Our Programs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
