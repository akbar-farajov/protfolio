-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  image TEXT NOT NULL,
  live_url TEXT NOT NULL,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on id for faster lookups
CREATE INDEX IF NOT EXISTS projects_id_idx ON public.projects(id);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read projects
CREATE POLICY "Allow public read access to projects"
  ON public.projects
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert projects (optional, adjust as needed)
CREATE POLICY "Allow authenticated users to insert projects"
  ON public.projects
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update projects (optional, adjust as needed)
CREATE POLICY "Allow authenticated users to update projects"
  ON public.projects
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete projects (optional, adjust as needed)
CREATE POLICY "Allow authenticated users to delete projects"
  ON public.projects
  FOR DELETE
  USING (auth.role() = 'authenticated');

