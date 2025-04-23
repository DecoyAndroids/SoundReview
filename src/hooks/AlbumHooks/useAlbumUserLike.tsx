import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useAlbumUserLike(albumId: string,userId:string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['albumUserLike', albumId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_likes')
            .select('is_liked')
            .eq('album_id', albumId)
            .eq('user_id', userId)
        if (error) throw error
        if (data.length !== 0){
          if(data[0]?.is_liked == true){
            return{
              isLiked : true,
              LikeRow : true,
            } 
          }       
          return{
            isLiked : false,
            LikeRow : true,
          } 
        }
        return {
            isLiked : false,
            LikeRow : false,
        }
    },
    enabled: options?.enabled ?? true,
  })
}
