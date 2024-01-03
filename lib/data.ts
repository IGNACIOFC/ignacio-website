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
    title: "Buscolibro",
    location: "Madrid, Spain",
    description:
      "I worked as a full-stack developer for 1 year. I built the website from scratch using Javascript, Python and PostgreSQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Full-stack Developer - Orange",
    location: "Madrid, Spain",
    description:
      "I worked as a full-stack developer for 1 year in Orange. I developed multiple SPA using Angular, Node.js, Express, and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-end Developer - Inditex",
    location: "Madrid, Spain",
    description:
      "I'm now a front-end developer working in a logistic team for Inditex. I work with React, Tailwind, Redux, and more.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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