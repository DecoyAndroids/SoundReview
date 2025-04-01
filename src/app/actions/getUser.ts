'use server';
import { createClient,type User } from '@supabase/supabase-js';

const supabase = createClient(process.env.supabaseUrl!, process.env.supabaseKey!);

export interface UserData {
  UID: string;  
  display_name: string;  
  email: string;
  subscriptions: string[];
  subscriptions_count: number;
  subscribers: string[];
  subscribers_count: number;
  articles: string[];
  reviews: string[];
  playlists: string[];
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
