// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xfphizjyzgemgtkaeygp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcGhpemp5emdlbWd0a2FleWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4OTY4ODksImV4cCI6MjA1MzQ3Mjg4OX0.U_ZvDdY43HWAQegdWjbX3-9kJl1wVnsofyBXLoBMqZ4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);