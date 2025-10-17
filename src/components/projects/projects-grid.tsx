"use client";
import { motion } from "framer-motion";

import { Project } from "@/types/project";
import { ProjectCard } from "./project-card";

type ProjectsGridProps = {
  projects: Project[];
};

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};
