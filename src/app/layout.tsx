import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundAnimation } from "@/components/background-animation";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akbar Farajov - Frontend Developer",
  description:
    "Akbar Farajov is a frontend developer with a passion for building beautiful and functional web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="viewport-height-fix" strategy="beforeInteractive">
          {`
            (function() {
              function setVH() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }
              setVH();
              window.addEventListener('resize', setVH);
              window.addEventListener('orientationchange', setVH);
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-h-scren h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <BackgroundAnimation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
