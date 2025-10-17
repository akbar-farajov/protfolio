"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";

const Projects = () => {
  const projects = [
    {
      id: 4,
      title: "Turbotable",
      description:
        "A no-code / low-code automation platform that helps convert documents (PDFs, forms, contracts, receipts, even handwriting) into structured data.",
      tags: ["Next.js", "TypeScript", "Supabase", "Vercel AI SDK"],
      image: "/images/turbotable.png",
      liveUrl: "https://turbotable.ai/",
    },
    {
      id: 1,
      title: "Azeristudent",
      description:
        "AzeriStudent is an educational consulting / counselling agency based in Baku, Azerbaijan. Their focus is helping students who want to study abroad—undergraduate, graduate, language schools, etc.",
      tags: [
        "Next.js",
        "TypeScript",
        "Strapi CMS",
        "Tailwind CSS",
        "Vercel AI SDK",
      ],
      image: "/images/azeristudent.png",
      liveUrl: "https://azeristudent.az/",
    },
    {
      id: 2,
      title: "DigSME",
      description:
        "DigSME is a platform aimed at helping micro, small, and medium-sized enterprises (SMEs) assess their digital maturity — i.e. how well they’re using digital tools, processes, and technologies.",
      tags: ["Next.js", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
      image: "/images/digsme.png",
      liveUrl: "https://digsme.org.ua/",
    },

    {
      id: 5,
      title: "TagMe",
      description:
        "TagMe is a modern social media platform inspired by Instagram, allowing users to share photos, interact, and connect with others.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
      image: "/images/tagme.png",
      liveUrl: "https://tagme.vercel.app",
      githubUrl: "https://github.com/akbar-farajov/tagme",
    },
    {
      id: 6,
      title: "Ecommerce Store",
      description:
        "A modern ecommerce store built with Next.js, TypeScript, and Tailwind CSS, featuring a sleek UI and smooth user experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Wix API", "Zustand"],
      image: "/images/ecommerce-app.png",
      liveUrl: "https://ecommerce-smoky-eta-57.vercel.app/",
      githubUrl: "https://github.com/akbar-farajov/ecommerce",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing modern web development
              with cutting-edge technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
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
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                      {project.githubUrl && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
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
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
