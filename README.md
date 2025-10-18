# Portfolio Website

A modern, interactive portfolio website built with Next.js featuring an AI-powered chat interface, project showcase, and contact functionality.

## ✨ Features

- **AI Chat Interface** - Interactive chat with AI-powered project assistance
- **Project Showcase** - Dynamic projects gallery with Supabase integration
- **Contact Form** - Email integration for visitor inquiries
- **Responsive Design** - Modern UI with shadcn/ui components
- **Dark Mode Support** - Theme provider with system preference detection
- **Page Transitions** - Smooth animations between pages
- **Background Animations** - Eye-catching visual effects

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Database:** [Supabase](https://supabase.com)
- **Package Manager:** [pnpm](https://pnpm.io)

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── about/             # About page
│   │   ├── api/chat/          # Chat API route
│   │   ├── chat/              # Chat interface
│   │   ├── contact/           # Contact page
│   │   └── projects/          # Projects showcase
│   ├── components/            # React components
│   │   ├── ai-elements/       # AI chat UI components
│   │   ├── chat/              # Chat functionality
│   │   ├── contact/           # Contact form components
│   │   ├── layout/            # Layout components
│   │   ├── projects/          # Project display components
│   │   └── ui/                # shadcn/ui components
│   ├── actions/               # Server actions
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── tools/                 # AI chat tools
│   └── types/                 # TypeScript type definitions
├── supabase/
│   ├── migrations/            # Database migrations
│   └── seed.sql              # Seed data
└── public/                    # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Supabase account (for database features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Email (for contact form)
   EMAIL_SERVICE_KEY=your_email_service_key

   # AI Chat (if applicable)
   AI_API_KEY=your_ai_api_key
   ```

4. **Set up Supabase**

   Run the migrations to set up your database:

   ```bash
   # Using Supabase CLI
   supabase db push

   # Or manually run migrations in your Supabase dashboard
   ```

5. **Seed the database (optional)**
   ```bash
   supabase db seed
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
pnpm build
```

Run the production server:

```bash
pnpm start
```

## 📄 Pages

- **/** - Home page with introduction and hero section
- **/about** - About page with personal information
- **/projects** - Portfolio projects showcase
- **/contact** - Contact form for inquiries
- **/chat** - AI-powered chat interface

## 🗄️ Database Schema

### Projects Table

Stores portfolio projects with metadata, descriptions, and image URLs.

### Contact Messages Table

Stores messages submitted through the contact form.

See `supabase/migrations/` for detailed schema definitions.

## 🎨 Customization

### Theme

The theme provider supports light, dark, and system modes. Customize colors in `src/app/globals.css`.

### Components

UI components from shadcn/ui can be customized in `src/components/ui/`.

### Content

- Update projects data in Supabase
- Modify page content in respective files under `src/app/`
- Update AI chat prompts in `src/app/api/chat/prompt.md`

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `@supabase/supabase-js` - Supabase client
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `react-hook-form` - Form handling
- `zod` - Schema validation

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- AWS
- Digital Ocean
- Self-hosted

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Akbar**

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
