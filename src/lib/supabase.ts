import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://clebudtcvyfjsblgewfw.supabase.co";
const supabaseAnonKey = "sb_publishable_CipG5IR7yl7a3JIZd_Wn7A_PjmCRpKd";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);