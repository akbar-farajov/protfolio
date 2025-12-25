import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akbar",
  lastName: "Farajov",
  name: "Akbar Farajov",
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "akbarfarajovdev@gmail.com",
  location: "Asia/Baku",
  locationLabel: "Baku, Azerbaijan",
  languages: ["Turkish (fluent)", "English (pre-intermediate)"],
};

const locationLabel = person.locationLabel ?? person.location;

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe for updates</>,
  description: <>Occasional notes on frontend engineering, performance, and UI architecture.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/akbar-farajov",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akbar-farajov/",
    essential: true,
  },
    {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/akbar_farajov/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Akbar, a frontend developer focused on Next.js and TypeScript. I build fast, accessible
      web experiences with clean UI architecture.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${locationLabel}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profile",
    description: (
      <>
        Mid-level frontend developer with 2+ years of experience delivering production-ready
        Next.js and TypeScript applications. Focused on performance, SEO, and accessible UI
        architecture, with an emphasis on clean, scalable frontend systems. Uses AI-assisted
        tools to speed delivery and improve code quality.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Experience",
    experiences: [
      {
        company: "Fintlabs",
        timeframe: "Baku | Sep 2023 - Present",
        role: "Frontend Developer",
        achievements: [
          "Build and maintain production Next.js and TypeScript web applications.",
          "Apply SSR, ISR, and SSG to improve performance, SEO, and scalability.",
          "Develop responsive, accessible UI components with Tailwind CSS.",
          "Integrate Supabase for authentication, data, and backend services.",
          "Use AI-assisted tools (Cursor, Windsurf, Codex) to speed prototyping and refactoring.",
          "Collaborate in Agile and Scrum workflows (Jira) with cross-functional teams.",
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "M.S. in Computer Science",
        description: <>Baku Engineering University | Sep 2025 - Present</>,
      },
      {
        name: "B.S. in Mathematics and Computer Science",
        description: <>Baku Engineering University | Sep 2019 - Jun 2024</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Frontend Engineering",
        description: (
          <>
            Next.js, React, TypeScript, JavaScript, HTML, and CSS with a focus on SSR, ISR, and SSG.
          </>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
          },
          {
            name: "TypeScript",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
          },
          {
            name: "CSS",
          },
        ],
      },
      {
        title: "UI, State, and Tooling",
        description: (
          <>
            Tailwind CSS, accessible components, Zustand for state management, and Git workflows.
          </>
        ),
        tags: [
          {
            name: "Tailwind CSS",
          },
          {
            name: "Zustand",
          },
          {
            name: "Git",
          },
          {
            name: "Accessibility",
          },
        ],
      },
      {
        title: "Platforms and Delivery",
        description: (
          <>
            Supabase for auth and data, Vercel deployments, Vercel AI SDK, and Jira for Agile
            delivery.
          </>
        ),
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Vercel",
          },
          {
            name: "Vercel AI SDK",
          },
          {
            name: "Jira",
          },
        ],
      },
      {
        title: "Mobile",
        description: <>React Native (Expo) for cross-platform prototypes and apps.</>,
        tags: [
          {
            name: "React Native (Expo)",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
