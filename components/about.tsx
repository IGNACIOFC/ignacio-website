"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">International Relations</span>, I decided to pursue my
        passion for programming. I started a project to transform the {" "}
        <span className="font-medium">book industry in Spain.</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spend time with my family, riding bikes, and playing sports. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>
      </p>
    </motion.section>
  );
}