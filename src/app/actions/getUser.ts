'use server';
import {type User } from '@supabase/supabase-js';

import { supabase } from '~/lib/supabaseClient';

export interface UserData {
  UID: string;  
  display_name: string;  
  email: string;
  created_at:string;
  banner_file_extension: string|null;
  avatar_file_extension: string|null;
}

export async function getUserDataByUID(UID: string): Promise<UserData | null> {  
  const { data: user, error } = await supabase
    .from('Users')
    .select("*")
    .eq('UID', UID)
    .single<UserData>(); 
  if (error) {
    console.error("Ошибка запроса:", error.message);
    return null;
  }
  return user; 
}

export async function getUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    console.error("Failed to get user:", error?.message);
    return null;
  }
  return data.user;
}
