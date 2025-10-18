-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  CONSTRAINT valid_status CHECK (status IN ('new', 'read', 'archived'))
);

-- Create index on id for faster lookups
CREATE INDEX IF NOT EXISTS contact_messages_id_idx ON public.contact_messages(id);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON public.contact_messages(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON public.contact_messages(created_at DESC);

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact messages (for the contact form)
CREATE POLICY "Allow public to insert contact messages"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read contact messages (admin access)
CREATE POLICY "Allow authenticated users to read contact messages"
  ON public.contact_messages
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update contact messages (admin access)
CREATE POLICY "Allow authenticated users to update contact messages"
  ON public.contact_messages
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete contact messages (admin access)
CREATE POLICY "Allow authenticated users to delete contact messages"
  ON public.contact_messages
  FOR DELETE
  USING (auth.role() = 'authenticated');

