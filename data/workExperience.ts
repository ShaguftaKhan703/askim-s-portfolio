// data/workExperience.ts
import {
  FaBriefcase,
  FaPython,
  FaCloud,
  FaChartBar,
  FaReact,
  FaBrain,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { TbDeviceVisionPro, TbRobotFace } from "react-icons/tb";
import { GiPublicSpeaker, GiArchiveResearch } from "react-icons/gi";
import { PiDroneBold } from "react-icons/pi";

import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Aeronexus (NU Drone Club)",
    position: "VP of Technology & Co-Founder",
    duration: "Feb 2025 – Present",
    year: 2025,
    description: [
      "Co-founded Aeronexus, a drone club aimed at familiarizing students with drone technology, computer vision, and related fields.",
      "Contributing to research projects like wildlife deterrence using drones and the development of a visual assistant for the blind using drone-based cameras.",
      "Organized workshops, hands-on sessions, and live demonstrations to engage the community and build expertise in drone tech and AI.",
      "Focused on enhancing computer vision algorithms to improve autonomous drone navigation and real-time object detection.",
    ],
    skills: [
      { name: "Computer Vision", icon: TbDeviceVisionPro },
      { name: "Robotics", icon: TbRobotFace },
      { name: "Drone Technology", icon: PiDroneBold },
      { name: "Leadership", icon: FaBriefcase },
      { name: "Research", icon: GiArchiveResearch },
    ],
    logo: "/logos/NEU.png", // Add the path to the Concordia University logo
  },
  {
    company: "Dcrypt",
    position: "Founder & Director",
    duration: "Jan 2023 – Dec 2024",
    year: 2023,
    description: [
      "Founded an AI-powered coding education platform, integrating personalized learning models to enhance hands-on learning.",
      "Led a team of developers, overseeing product development, AI implementations, and cloud infrastructure.",
      "Built containerized coding environments to simulate real-world coding scenarios, improving learning efficiency.",
    ],
    skills: [
      { name: "Software Development", icon: FaReact },
      { name: "Cloud Computing", icon: FaCloud },
      { name: "AI/ML", icon: FaBrain },
      { name: "Leadership", icon: FaBriefcase },
      { name: "Product Management", icon: FaChartBar },
    ],
    logo: "/logos/dcrypt-logo.png",
  },
  {
    company: "Codrel Community",
    position: "Founder & President",
    duration: "Jan 2023 – Dec 2024",
    year: 2023,
    description: [
      "Established a free coding community dedicated to mentoring over 600+ individuals in software development, AI, and data science.",
      "Led technical workshops and coding bootcamps, fostering a strong peer-learning culture.",
      "Managed a team of mentors, ensuring high-quality learning resources and community engagement.",
    ],
    skills: [
      { name: "Software Development", icon: FaReact },
      { name: "Community Engagement", icon: FaChartBar },
      { name: "Leadership", icon: FaBriefcase },
      { name: "Public Speaking", icon: GiPublicSpeaker },
      { name: "Mentorship", icon: SiCodementor },
    ],
    logo: "/logos/codrel-logo.png",
  },
  {
    company: "Glittle Software Solutions",
    position: "Co-Founder",
    duration: "2022 – Present",
    year: 2022,
    description: [
      "Provided end-to-end software solutions for startups, from MVP development to scalable AI-powered platforms..",
      "Built custom SaaS products, optimizing workflows for clients across various industries.",
      "Consulted on business strategy, product scaling, and AI integration for emerging tech startups.",
    ],
    skills: [
      { name: "Software Development", icon: FaReact },
      { name: "Business Strategy", icon: FaChartBar },
      { name: "Client Relations", icon: FaBriefcase },
      { name: "AI/ML", icon: FaBrain },
    ],
    logo: "/logos/glittle-logo.png",
  },
];
