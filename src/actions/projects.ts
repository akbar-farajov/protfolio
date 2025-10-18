"use server";
import { createClient } from "@/lib/supabase/server";

export const getProjects = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(error);
  }
  return data;
};
