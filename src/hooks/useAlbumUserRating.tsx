import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useAlbumUserRating(albumId: string, user_id:string,  options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['albumUserRating', albumId, user_id],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_ratings')
            .select('ratings')
            .eq('album_id', albumId)
            .eq('user_id', user_id)
        if (error) throw error
        if (data.length !== 0){
          const userRating = Number(data[0]?.ratings)
          return{
            isRated : true,
            userRate: userRating
          } 
        }
        return {
          isRated : false,
        }
    },
    enabled: options?.enabled ?? true,
  })
}
 