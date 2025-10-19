"use server";
import { createClient } from "@/lib/supabase/server";

export const getProjects = async () => {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error(error);
      return [];
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get projects");
  }
};
