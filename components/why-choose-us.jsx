
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";
import Image from "next/image";
import aboutImg from "../public/why-choose.webp"; // replace with your image

export default function WhyChooseUsModern() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title: "Proven Expertise",
      desc: "10+ years helping students achieve top English proficiency scores worldwide.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Certified Trainers",
      desc: "Globally accredited instructors with innovative teaching techniques.",
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      title: "Personalized Learning",
      desc: "Small class sizes and tailored lesson plans for maximum results.",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Network",
      desc: "University and visa partnerships in Australia, UK, Canada, and more.",
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-red-600">Cambridge Language Council</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We’re more than a language school — we’re your pathway to global
            opportunities. Here’s why students trust us with their dreams.
          </p>

          <div className="mt-8 space-y-5">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-red-50 rounded-full">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-40"></div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <Image
              src={aboutImg}
              alt="Why Choose Us"
              className="object-cover"
              width={600}
              height={500}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
