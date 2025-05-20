import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';



export function useTrackInAlbumPostLike() {
  return useMutation({
    mutationFn: async ({ albumId, trackId,  userId, isLiked, trackName, authors, duration_ms, albumCoverSrc}: { albumId: string; trackId:string; userId: string; isLiked: boolean; trackName: string; authors:string[]; duration_ms:number; albumCoverSrc:string}) => {
      const { data, error } = await supabase
        .from('Track_likes')
        .insert([
            {album_id : albumId, user_id: userId, is_liked : isLiked, track_id : trackId, track_name:trackName, authors:authors, duration_ms:duration_ms, album_cover_url : albumCoverSrc}
        ]).select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
