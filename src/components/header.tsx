import { motion } from "framer-motion";
import { FC } from "react";

type HeaderProps = {
  title: string;
  description: string;
};

export const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};
