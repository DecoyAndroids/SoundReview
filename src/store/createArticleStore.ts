import { create } from "zustand";
import { supabase } from "~/lib/supabaseClient";

interface CreateArticleState {
    articleName: string | null;
    articleText: string | null;
    articleCover: File | null;
    setArticleName: (articleName: string | null) => void;
    setArticleText: (articleText: string | null) => void;
    setArticleCover: (articleCover: File | null) => void;
}

export const CreateArticleStore = create<CreateArticleState>((set) => ({
    articleName: '',
    articleText: '',
    articleCover: null,

    setArticleName: (articleName) => set({articleName}),
    setArticleText: (articleText) => set({articleText}),
    setArticleCover: (articleCover) => set({articleCover}),
}))
