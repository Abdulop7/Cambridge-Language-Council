"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ImmersiveTestimonials() {
  const testimonials = [
    {
      name: "Sophia Lee",
      location: "Singapore",
      review:
        "Cambridge Language Council transformed my confidence in English. I now lead meetings with international clients effortlessly.",
      image: "/student1.jpg",
    },
    {
      name: "James Parker",
      location: "New Zealand",
      review:
        "From day one, I felt supported. The lessons are engaging, and the instructors genuinely care about your progress.",
      image: "/student2.jpg",
    },
    {
      name: "Aisha Khan",
      location: "UAE",
      review:
        "A truly premium experience — from structured courses to real-world speaking practice, they deliver beyond expectations.",
      image: "/student3.jpg",
    },
    {
      name: "Daniel Carter",
      location: "Canada",
      review:
        "I passed my IELTS with flying colors thanks to their structured, motivating classes.",
      image: "/student4.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -3 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: i % 2 === 0 ? 2 : -2,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-white py-20">
      {/* Trustpilot Header */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div className="flex items-center gap-4">
          <Image
            src="/trustpilot-logo.png"
            alt="Trustpilot"
            width={140}
            height={40}
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-green-500 fill-green-500"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mt-4 md:mt-0">
          Rated 4.9/5 by our students worldwide
        </p>
      </div>

      {/* Floating Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative"
            style={{
              transformOrigin: i % 2 === 0 ? "left top" : "right top",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full border border-gray-200"
              />
              <div>
                <h4 className="text-red-600 font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.location}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">“{t.review}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

