import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';

interface AlbumData {
  is_liked: boolean;
  album_id: string;
  authors: string[];
  album_cover_url: string;
  album_name: string;
}

export function useAlbumGetAllUserLike(userId:string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['AlbumGetAllUserLike', userId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_likes')
            .select('is_liked, album_id, authors, album_cover_url, album_name')
            .eq('user_id', userId)
            .eq('is_liked', true)
            .order("updated_at", { ascending: false })
        if (error) throw error
        return data as AlbumData[]
    },
    enabled: options?.enabled ?? true,
  })
}
