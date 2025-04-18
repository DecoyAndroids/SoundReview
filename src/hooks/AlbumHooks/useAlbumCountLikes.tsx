import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useAlbumCountLikes(albumId: string) {
  return useQuery({
    queryKey: ['albumCountLikes', albumId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_likes')
            .select('is_liked')
            .eq('album_id', albumId)
            .eq('is_liked', true)
        if (error) throw error
        
        const Likes:Array<number> = data.map((l) => Number(l.is_liked))
        return {
            totalLikes: Likes.length,
        }
    },
  })
}
