"use client";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Globe, GraduationCap } from "lucide-react";

export default function LearningJourney() {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8 text-red-600" />,
      title: "Foundation Stage",
      description:
        "Build your core grammar, vocabulary, and listening skills with engaging beginner-friendly lessons.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Fluency Development",
      description:
        "Enhance speaking and conversation skills through real-world practice and interactive sessions.",
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Cultural Immersion",
      description:
        "Experience English in context with cultural activities, debates, and storytelling exercises.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Exam & Career Success",
      description:
        "Prepare for IELTS, TOEFL, and business communication to achieve your academic and professional goals.",
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Your Learning Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Step-by-step guidance to take you from beginner to confident English speaker — designed for lasting success.
        </motion.p>
      </div>

      {/* Timeline Path */}
      <div className="relative mt-16 max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-blue-500 to-red-500 rounded-full"></div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10 shadow-md"></div>

              {/* Card */}
              <div
                className={`bg-white shadow-xl rounded-2xl p-6 w-full md:w-5/12 ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
