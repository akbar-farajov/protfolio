"use client";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";

import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";
import { SocialLinks } from "@/components/contact/social-links";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto">
          <Header
            title="Get In Touch"
            description="Have a project in mind or just want to chat? Feel free to reach out!"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <ContactDetails />
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
