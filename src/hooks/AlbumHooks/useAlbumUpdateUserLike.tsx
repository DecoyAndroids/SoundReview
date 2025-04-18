import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useAlbumUpdateUserLike() {
  return useMutation({
    mutationFn: async ({ albumId, userId, isLiked }: { albumId: string; userId: string ; isLiked: boolean}) => {
      const { data, error } = await supabase
        .from('Album_likes')
        .update([{is_liked : isLiked}])
        .eq('album_id', albumId)
        .eq('user_id', userId)
        .select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
