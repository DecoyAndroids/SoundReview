import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { getUserDataByUID, UserData } from "~/app/actions/getUser";

const supabase = createClient(process.env.supabaseUrl!, process.env.supabaseKey!);


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

  checkAuth: async () => {
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id; 
    if (!userId) {
      throw new Error("User ID is undefined");
    }
    const userData: UserData | null = (await getUserDataByUID(userId)) ?? null;
    set({
      user: data.session?.user ?? null, 
      session: data.session ?? null, 
      userData: userData ?? null,
    });


    supabase.auth.onAuthStateChange((_event, session) => {
      set({
        user: session?.user ?? null, 
        session: session ?? null, 
        userData: userData ?? null,
      });
    });

    
    
  },

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
