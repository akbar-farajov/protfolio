import { Body, Html } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Body>
        <h1>New message from contact form</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Message:{message}</p>
      </Body>
    </Html>
  );
};
