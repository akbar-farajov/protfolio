import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactDetails = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akbarfarajovdev@gmail.com",
      href: "mailto:akbarfarajovdev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+994 77 550 69 31",
      href: "tel:+994775506931",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Baku, Azerbaijan",
      href: null,
    },
  ];
  return (
    <Card className="border-2">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactInfo.map((info) => (
            <motion.div
              key={info.label}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
