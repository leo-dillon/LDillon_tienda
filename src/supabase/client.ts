import { createClient } from "@supabase/supabase-js"
import type { Database } from "./supabase"

const supabase_key = import.meta.env.VITE_SUPABASE_KEY
const supabase_url = import.meta.env.VITE_SUPABASE_URL

export const supabase = createClient<Database>(supabase_url, supabase_key)