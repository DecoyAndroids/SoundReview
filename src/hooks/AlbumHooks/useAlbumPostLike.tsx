import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useAlbumPostLike() {
  return useMutation({
    mutationFn: async ({ albumId, userId, isLiked, albumName, albumCoverUrl, authors}: { albumId: string; userId: string; isLiked: boolean, albumName:string, albumCoverUrl:string, authors:string[]}) => {
      const { data, error } = await supabase
        .from('Album_likes')
        .insert([
            {album_id : albumId, user_id: userId, is_liked : isLiked, album_name : albumName, album_cover_url : albumCoverUrl, authors: authors}
        ]).select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
