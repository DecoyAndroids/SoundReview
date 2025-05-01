import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useTrackInAlbumUpdateUserLike() {
  return useMutation({
    mutationFn: async ({ albumId, trackId, userId, isLiked, updateTime }: { albumId: string; trackId: string; userId: string ; isLiked: boolean, updateTime : boolean}) => {
      const { data, error } = await supabase
        .from('Track_likes')
        .update([
          {is_liked : isLiked, should_update_timestamp: updateTime}
        ])
        .eq('album_id', albumId)
        .eq('user_id', userId)
        .eq('track_id',trackId)
        .select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
