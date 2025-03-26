'use server';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.supabaseUrl! , process.env.supabaseKey!)

export interface UserData {
  UID : string ;  
  display_name: string;  
  email: string;
  subscriptions: string[];
  subscriptions_count: number;
  subscribers : string[];
  subscribers_count : number;
  articles : string[];
  reviews: string[];
  playlists : string[]
}



export async function getUserDataByUID(UID:string): Promise<UserData | null> {  
  const { data: Users, error } = await supabase.from('Users').select("*").eq('UID', UID).single()      
  if (error) {
    console.error("Ошибка запроса:", error.message);
    return null;
  }
  return Users as UserData
}
export async function getUser() {
  const { data } = await supabase.auth.getUser()
  return data;
}