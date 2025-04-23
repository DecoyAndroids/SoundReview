import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useAlbumPostRating() {
  return useMutation({
    mutationFn: async ({ albumId, userId, rating }: { albumId: string; userId: string; rating: number }) => {
      const { data, error } = await supabase
        .from('Album_ratings')
        .insert([
            {album_id : albumId, user_id: userId, ratings : rating}
        ]).select()

      if (error) throw error
      return {
        data
      }
    },
  })
}
