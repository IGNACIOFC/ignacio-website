import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import estapasandoImg from "@/public/estapasando.png";
import appImg from "@/public/app.png";
import iceDriveImg from "@/public/icedrive.png";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "iceDrive",
    description:
      "Mobile app to deliver ice cubes to customers. I worked as a full-stack developer on this startup project for 1 year.",
    tags: ["React Native", "TypeScript", "Tailwind", "Redux", "Supabase"],
    imageUrl: iceDriveImg,
  },
  {
    title: "Readly",
    description:
      "This is a web app to keep track of books you've read. It's a personal project I built to learn Next.js and Prisma.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: appImg,
  },
  {
    title: "Esta Pasando",
    description:
      "I worked migrating this website server. I also added new features and fixed bugs.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: estapasandoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;