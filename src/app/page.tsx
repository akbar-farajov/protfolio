"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import Link from "next/link";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-block text-6xl mb-4"
            >
              👋
            </motion.div>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-light">
              Hi, I'm
            </h2>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text hero-glow"
          >
            Akbar Farajov
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive web applications with{" "}
            <span className="text-primary font-medium">Next.js</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span>, and
            modern web technologies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/projects">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="https://github.com/akbar-farajov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/akbarfarajov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:akbarfarajovdev@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 mx-auto border-2 border-primary rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
