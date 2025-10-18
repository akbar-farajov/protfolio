import { createClient } from "@/lib/supabase/server";
import React from "react";

const HelloPage = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(error);
  }

  console.log(data);
  return (
    <div className="text-2xl font-bold text-white mt-25">
      {data?.map((project) => project.title)}
    </div>
  );
};

export default HelloPage;
