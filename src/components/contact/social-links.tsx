import { Github, Linkedin } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/akbar-farajov",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akbarfarajov",
    },
  ];
  return (
    <Card className="border-2">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Follow me on social media to stay updated with my latest projects and
          insights.
        </p>
      </CardContent>
    </Card>
  );
};
