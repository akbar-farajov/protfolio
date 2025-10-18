"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { sendEmail } from "@/actions/send-email";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full group" disabled={pending}>
      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
};

export const ContactForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success("Message sent successfully! I'll get back to you soon.");
    } else {
      toast.error(result.error || "Failed to send message. Please try again.");
    }

    const form = document.querySelector("form") as HTMLFormElement;
    form?.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-2 h-full flex flex-col">
        <CardContent className="p-8 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          <form action={handleSubmit} className="flex-1 flex flex-col gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2 flex-1 flex flex-col">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="flex-1 resize-none"
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
