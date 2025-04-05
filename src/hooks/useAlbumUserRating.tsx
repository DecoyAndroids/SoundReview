import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useAlbumUserRating(albumId: string, user_id:string) {
  return useQuery({
    queryKey: ['albumAvgRating', albumId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_ratings')
            .select('ratings')
            .eq('album_id', albumId)
            .eq('user_id', user_id)
        if (error) throw error
        
        return {
            data
        }
    },
  })
}
