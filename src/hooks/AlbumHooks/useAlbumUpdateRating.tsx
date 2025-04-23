import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useAlbumUpdateRating() {
  return useMutation({
    mutationFn: async ({ albumId, userId, rating }: { albumId: string; userId: string; rating: number }) => {
      const { data, error } = await supabase
        .from('Album_ratings')
        .update([{ratings : rating}])
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
