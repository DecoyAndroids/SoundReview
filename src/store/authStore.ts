import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { getUserDataByUID, UserData } from "~/app/actions/getUser";

const supabase = createClient(process.env.supabaseUrl!, process.env.supabaseKey!);


// Типизация Zustand-стейта
interface AuthState {
  user: User | null;
  session: Session | null;
  userData : UserData | null
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setUserData: (userData: UserData | null) => void;
  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
}

// Zustand Store
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  userData: null,

  setUser: (user) => set({ user }),
  setSession: (session) => set({ session }),
  setUserData : (userData) => set({userData}),

  // Проверяем авторизацию при старте
  checkAuth: async () => {
    const { data } = await supabase.auth.getSession();
    const userData: UserData | null = (await getUserDataByUID(data.session?.user.id!)) ?? null;
    set({
      user: data.session?.user ?? null, // ✅ Используем ?? вместо ||
      session: data.session ?? null, // ✅ Используем ?? вместо ||
      userData: userData ?? null,
    });

    // Подписка на изменения авторизации
    supabase.auth.onAuthStateChange((_event, session) => {
      set({
        user: session?.user ?? null, // ✅ Используем ?? вместо ||
        session: session ?? null, // ✅ Используем ?? вместо ||
        userData: userData ?? null,
      });
    });

    
    
  },

  // Логин с email и password
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return { error: error.message };

    set({
      user: data.user,
      session: data.session,
    });

    return {};
  },
  // Выход из аккаунта
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
}));
