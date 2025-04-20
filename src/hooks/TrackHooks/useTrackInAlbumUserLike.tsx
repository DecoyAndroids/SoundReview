import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useTrackInAlbumUserLike(albumId: string,userId:string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['TrackInAlbumUserLike', albumId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Track_likes')
            .select('track_id, is_liked')
            .eq('album_id', albumId)
            .eq('user_id', userId)
        if (error) throw error
        return data
    },
    enabled: options?.enabled ?? true,
  })
}
