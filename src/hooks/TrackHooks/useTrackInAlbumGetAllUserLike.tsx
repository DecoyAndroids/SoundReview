import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';

interface TracksData{
  track_id: string;
  is_liked: boolean;
  album_id: string;
  track_name: string;
  authors: string[];
  duration_ms: number;
  album_cover_url: string;
}

export function useTrackInAlbumGetAllUserLike(userId:string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['TrackInAlbumGetAllUserLike', userId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Track_likes')
            .select('track_id, is_liked, album_id, track_name, authors, duration_ms, album_cover_url')
            .eq('user_id', userId)
            .eq('is_liked', true)
            .order("updated_at", { ascending: false })
        if (error) throw error
        return data as TracksData[]
    },
    enabled: options?.enabled ?? true,
  })
}
