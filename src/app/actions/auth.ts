'use server';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.supabaseUrl! , process.env.supabaseKey!)

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;
  return {data , error};
}

export async function signInWithPassword(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function updateUser(newName: string) { //email: string, password: string, 
const { data, error } = await supabase.auth.updateUser({data:{display_name: newName}}) //email,password,
if (error) {
  console.error("Ошибка обновления:", error.message);
} else {
  console.log("Обновленный пользователь:", data);
} 
}



// export async function signInWithGoogle() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: { redirectTo: 'http://localhost:3000/dashboard' }
//     });
  
//     if (error) throw error;
//     return data;
//   }