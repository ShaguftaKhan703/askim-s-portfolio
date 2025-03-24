"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from "../Styledpic";
import {
  FaLightbulb,
  FaCode,
  FaChess,
  FaBookReader,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BiFootball } from "react-icons/bi";
import { useScrollSection } from "@/hooks/use-scroll-section";
import { CardSpotlight } from "../ui/card-spotlight";

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div
      id="about"
      className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20"
      ref={ref}
    >
      <motion.div
        className="w-full sm:w-[30%] flex justify-center items-center sm:hidden mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <StyledPic />
        </div>
      </motion.div>
      <motion.div
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hey there! I&apos;m Abdullah, a tech entrepreneur, AI
              enthusiast, and software engineer passionate about building
              AI-powered solutions that tackle real-world challenges.
            </p>
            <p>
              <FaCode className="inline-block mr-2" />
              My journey into AI and software innovation began with leading
              Dcrypt, an AI-driven coding education platform, and researching
              self-optimizing resource allocation in cloud computing. Along the
              way, I’ve built scalable AI-driven products, mentored aspiring
              developers, and even contributed to research on AI-powered drone
              technology for wildlife deterrence.
            </p>
            <p>
              When I&apos;m not deep in AI, coding, or scaling startups, you
              might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <FaChess className="inline-block mr-2" /> Engaging in a
                strategic battle over a game of chess (peak rating: 1600)
              </li>
              <li>
                <BiFootball className="inline-block mr-2" /> Playing football to
                unwind and stay competitive
              </li>
              <li>
                <FaBookReader className="inline-block mr-2" /> Absorbing
                insights from non-fiction books mainly business and psychology.
              </li>
            </ul>
            <p>
              Currently, I&apos;m immersed in building AI-driven products while
              exploring the intersection of machine learning, cloud computing,
              and full-stack development. Having founded three startups, I
              thrive on the challenge of turning ideas into impactful solutions.
              I believe in lifelong learning, innovation, and pushing boundaries
              to create the next big thing. Let’s connect if you’re into AI,
              startups, or a good chess match! 🚀
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-full sm:w-[30%] justify-center items-center hidden sm:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <StyledPic />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
