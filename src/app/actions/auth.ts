'use server';
import { supabase } from '~/lib/supabaseClient';

interface User {
  UID: string;
  email: string;
}



export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (!data.user) {
    throw new Error("User data is missing");
  }
  await postInUsers(data.user.id, data.user.email!);
  return { data, error };
}

async function postInUsers(UID: string, email: string): Promise<User[]> {
  const { data, error } = await supabase
    .from('Users')
    .insert([{ UID, email }])
    .select();

  if (error) throw error;
  if (!data) throw new Error("No data returned from insert.");
  return data as User[];
}

export async function signInWithPassword(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function updateUser(updateColumn: string, updateValue: string, email: string) {
  const { data, error } = await supabase
    .from('Users')
    .update({ [updateColumn]: updateValue })
    .eq('email', email)
    .select();

  if (error) {
    console.error("Ошибка обновления:", error.message);
  } else {
    console.log("Обновленный пользователь:", data);
  }
}
