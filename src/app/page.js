"use client"

import React from "react";
import Hero from "../../components/hero";
import KeyPrograms from "../../components/programs-section";
import AboutSection from "../../components/about-section";
import WhyChooseUs from "../../components/why-choose-us";
import Testimonials from "../../components/testimonials";
import LearningJourney from "../../components/learningJourney";
import CallToAction from "../../components/callToAction";

export default function Home() {
  return (
    <div className="font-sans w-[100vw] overflow-x-hidden">

      <Hero />
      <AboutSection />
      <KeyPrograms />
      <WhyChooseUs />
      <Testimonials />
      <LearningJourney />
      <CallToAction />
    </div>
  );
}
