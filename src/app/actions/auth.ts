'use server';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.supabaseUrl! , process.env.supabaseKey!)

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  await postInUsers(data.user?.id!, data.user?.email!)
  return {data , error};
}

async function postInUsers(UID:string,email:string) {
  const { data, error } = await supabase.from('Users').insert([{ UID: UID, email: email },]).select()
  if (error) throw error;
  return data
}

export async function signInWithPassword(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function updateUser(updateColumn:string, updateValue:string, email:string) { //email: string, password: string, 
  const { data, error } = await supabase.from('Users').update({ updateColumn: updateValue}).eq('email', email).select()
           //email,password,
if (error) {
  console.error("Ошибка обновления:", error.message);
} else {
  console.log("Обновленный пользователь:", data);
} 
}

