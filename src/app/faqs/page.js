"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../../../public/faqs-banner.jpg";

const faqs = [
  {
    question: "Why should I take an English Language Proficiency Test?",
    answer:
      "Simply because it will help you to get an offer letter. The university won’t accept your application unconditionally till you have not sat for an English Language exam that fulfills the university language requirement."
  },
  {
    question: "Is IELTS Academic a tough test?",
    answer:
      "It won’t be if you have practiced enough under professional supervision, it just requires a careful amount of practice, consistency, and time management."
  },
  {
    question: "Can I take the IELTS general and get admission to a university?",
    answer:
      "No, every potential student has to take the IELTS academic test if they wish to be admission to a university. The IELTS general test is not acceptable to universities."
  },
  {
    question: "Is PTE paper-based?",
    answer:
      "No, PTE is a computer-based test that has a short waiting time span as the results are published in a fast-paced way."
  },
  {
    question: "Is IELTS Computer-based?",
    answer:
      "Ielts has both variants available, paper-based and computer-based"
  },
  {
    question: "Is PTE easier than Ielts?",
    answer:
      "It’s a general misconception that PTE is easier, if you haven’t practiced for either of the tests they both will be equally tough."
  },
  {
    question: "Should I take PTE or IELTS?",
    answer:
      "Basically, it depends on the personal preference of the students and sometimes what the university prefers. Some courses and universities would not accept PTE. IELTS generally has a wider acceptance rate."
  },
  {
    question: "What is the rejection rate of UK students’ visas?",
    answer:
      "UK student visa has a low rejection rate if you have submitted the complete application in.time."
  },
  {
    question: "How much money is required for a UK Student Visa?",
    answer:
      "In the current situation a student should have at least 3 Million PKR."
  },
  {
    question: "How much Bank Statement Required for a Student Visa?",
    answer:
      "A student going to either the UK, Australia or Canada should have at least 7-8 Million PKR bank statements."
  },
  {
    question: "What is the student visa processing time?",
    answer:
      "Minimum time requirement is 90 working days but it can take either less or more than that depending on the country and varies from case to case."
  },
  {
    question: "How much is the student application fee for the university?",
    answer:
      "Student application procedure is free at CLC Consultants, we do not charge for the admission application process."
  },
  {
    question: "Do CLC Consultants help with visa processing?",
    answer:
      "Yes, we provide visa processing services once the admission is secured for the student."
  },
  // ...rest of your FAQs
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqRef.current) {
    const yOffset = -150; // adjust based on your header height
    const y = faqRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src={banner}
          alt="Frequently Asked Questions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

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
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Find answers to the most common questions about studying abroad, visa processes, and our services. If you need further assistance, feel free to reach out to us directly.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg shadow-lg transition-all"
              onClick={scrollToFAQs}
            >
              View FAQs
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg shadow-lg transition-all"
              href="/"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <div ref={faqRef} id="faqs" className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#B91C1C]">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mt-3">
            Everything you need to know about English language tests, admissions, and visas.
          </p>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#B91C1C]" />
                  ) : (
                    <ChevronDown className="text-[#B91C1C]" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600 border-t border-gray-200"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
