'use server';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.supabaseUrl! , process.env.supabaseKey!)

export async function getUser() {
  const { data } = await supabase.auth.getUser()
  return data;
}
