import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useTrackInAlbumPostLike() {
  return useMutation({
    mutationFn: async ({ albumId, trackId,  userId, isLiked}: { albumId: string; trackId:string; userId: string; isLiked: boolean}) => {
      const { data, error } = await supabase
        .from('Track_likes')
        .insert([
            {album_id : albumId, user_id: userId, is_liked : isLiked, track_id : trackId}
        ]).select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
