import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://edgcrtyvwazjvrlaghth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZ2NydHl2d2F6anZybGFnaHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NjIxMDgsImV4cCI6MjAxMTEzODEwOH0.BjHEL2MGnEOX_b8srW6HzgT6Ko-84yHz0vfIEDoJyM0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
