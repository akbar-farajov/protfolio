-- Seed data for projects table
-- Clear existing data (optional, remove if you want to keep existing data)
TRUNCATE public.projects RESTART IDENTITY CASCADE;

-- Insert projects
INSERT INTO public.projects (title, description, tags, image, live_url, github_url) VALUES
(
  'Turbotable AI',
  'A no-code / low-code automation platform that helps convert documents (PDFs, forms, contracts, receipts, even handwriting) into structured data.It can also act as an AI assistant for analyzing data, building automations, creating charts, etc.',
  ARRAY['Next.js', 'TypeScript', 'Supabase', 'Vercel AI SDK'],
  '/images/turbotable.png',
  'https://turbotable.ai/',
  NULL
),
(
  'Azeristudent',
  'AzeriStudent is an educational consulting / counselling agency based in Baku, Azerbaijan. Their focus is helping students who want to study abroad—undergraduate, graduate, language schools, etc.',
  ARRAY['Next.js', 'TypeScript', 'Strapi CMS', 'Tailwind CSS', 'Vercel AI SDK'],
  '/images/azeristudent.png',
  'https://azeristudent.az/',
  NULL
),
(
  'DigSME',
  'DigSME is a platform aimed at helping micro, small, and medium-sized enterprises (SMEs) assess their digital maturity — i.e. how well they''re using digital tools, processes, and technologies.',
  ARRAY['Next.js', 'TypeScript', 'Supabase', 'Zustand', 'Tailwind CSS'],
  '/images/digsme.png',
  'https://digsme.org.ua/',
  NULL
),
(
  'TagMe',
  'TagMe is a modern social media platform inspired by Instagram, allowing users to share photos, interact, and connect with others.',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Shadcn UI'],
  '/images/tagme.png',
  'https://tagme.vercel.app',
  'https://github.com/akbar-farajov/tagme'
),
(
  'Ecommerce Store',
  'A modern ecommerce store built with Next.js, TypeScript, and Tailwind CSS, featuring a sleek UI and smooth user experience.',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Wix API', 'Zustand'],
  '/images/ecommerce-app.png',
  'https://ecommerce-smoky-eta-57.vercel.app/',
  'https://github.com/akbar-farajov/ecommerce'
);

