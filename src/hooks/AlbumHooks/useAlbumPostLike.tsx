import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useAlbumPostLike() {
  return useMutation({
    mutationFn: async ({ albumId, userId, isLiked}: { albumId: string; userId: string; isLiked: boolean}) => {
      const { data, error } = await supabase
        .from('Album_likes')
        .insert([
            {album_id : albumId, user_id: userId, is_liked : isLiked}
        ]).select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
