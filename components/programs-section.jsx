import { motion } from "framer-motion";
import { BookOpen, Globe, MessageCircle, GraduationCap } from "lucide-react";
import programbg from "../public/programs-bg.jpg"

export default function KeyPrograms() {
  const programs = [
    {
      icon: <GraduationCap className="w-10 h-10 text-red-700" />,
      title: "IELTS Mastery",
      description:
        "Achieve your dream score with our intensive IELTS preparation program, tailored to all skill levels.",
    },
    {
      icon: <Globe className="w-10 h-10 text-red-700" />,
      title: "Spoken English Excellence",
      description:
        "Develop fluency and confidence in real-life conversations with native-level speaking practice.",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-red-700" />,
      title: "Business English Pro",
      description:
        "Master professional communication, email etiquette, and presentation skills for global success.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-red-700" />,
      title: "Cambridge Grammar Workshop",
      description:
        "Polish your grammar foundation with interactive and practical exercises designed for real-world use.",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-white text-blue-900">
      {/* Background Pattern / Blur */}
      <div style={{ backgroundImage: `url(${programbg})` }} className={`absolute inset-0 bg-cover bg-center opacity-50 `}></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-700"
        >
          Key Programs at Cambridge Language Council
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-blue-900/80"
        >
          From exam preparation to advanced speaking skills, we provide courses
          designed for academic, professional, and personal growth.
        </motion.p>

        {/* Programs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-blue-900/10 rounded-2xl backdrop-blur-md border border-blue-900/20 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="flex justify-center mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-red-700">
                {program.title}
              </h3>
              <p className="text-blue-900/80 mt-2">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
