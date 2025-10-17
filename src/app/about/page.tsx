"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/page-transition";
import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "Vercel AI SDK",
    "React Native (Expo)",
    "Zustand",
    "Git & GitHub",
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate about creating exceptional web experiences
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a{" "}
                  <strong className="text-foreground">
                    Frontend Developer
                  </strong>{" "}
                  at <strong className="text-foreground">Fintlabs</strong> in
                  Baku, Azerbaijan, with expertise in{" "}
                  <strong className="text-foreground">Next.js</strong> and{" "}
                  <strong className="text-foreground">TypeScript</strong>. I'm
                  dedicated to crafting clean, user-friendly interfaces and
                  solving complex problems while developing responsive web
                  applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Master's degree in{" "}
                  <strong className="text-foreground">Computer Science</strong>{" "}
                  at Baku Engineering University, I continuously strive to
                  expand my knowledge and stay updated with the latest web
                  development trends and technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines technical expertise with creative
                  problem-solving, always focusing on delivering high-quality
                  solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          >
            {highlights.map((highlight) => (
              <motion.div key={highlight.title} variants={itemVariants}>
                <Card className="border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{highlight.title}</h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
