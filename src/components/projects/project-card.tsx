import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "../ui/badge";
import { getPublicImageUrl } from "@/lib/supabase-image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div key={project.id} variants={cardVariants}>
      <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={getPublicImageUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              asChild
            >
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            {project.github_url && (
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full"
                asChild
              >
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <CardContent className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
