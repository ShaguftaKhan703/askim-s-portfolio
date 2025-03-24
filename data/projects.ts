// data/projects.ts
import { FaNodeJs, FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { PiDroneBold } from "react-icons/pi";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Self-Optimizing Cloud Resource Allocator",
    description:
      "Designed an AI-driven system to dynamically allocate cloud resources based on workload demands, optimizing cost and performance for cloud-based applications.",
    icon: IoIosCloudDone,
    technologies: [
      "Python",
      "TensorFlow",
      "Kubernetes",
      "AWS Lambda",
      "Terraform",
    ],
    githubLink: "",
    skills: [
      { name: "Frontend Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 2,
    title: "Wildlife Deterrence Using Drones & AI",
    description:
      "Developed an AI-powered system for autonomous drones to detect and deter wildlife from entering restricted zones, preventing human-wildlife conflicts efficiently.",
    icon: PiDroneBold,
    technologies: ["OpenCV", "YOLO", "ROS", "Python", "TensorFlow", "DJI SDK"],
    githubLink: "",
    skills: [
      { name: "Web Scraping" },
      { name: "Data Analysis" },
      { name: "Automation" },
      { name: "Machine Learning" },
      { name: "Document Generation" },
    ],
  },
  {
    id: 3,
    title: "Smart City – Crowd Monitoring System",
    description:
      "Built the backend API for a real-time crowd monitoring system, improving public safety and urban planning through AI-driven analytics.",
    icon: FaChartBar,
    technologies: ["Flask", "OpenCV", "AWS EC2", "MongoDB", "WebSockets"],
    githubLink: "",
    skills: [
      { name: "API Integration" },
      { name: "Asynchronous Programming" },
      { name: "Data Synchronization" },
      { name: "Python Development" },
      { name: "Task Automation" },
    ],
  },
];
