import { useQuery } from '@tanstack/react-query'

import { supabase } from '~/lib/supabaseClient';


export function useAlbumAverageRating(albumId: string) {
  return useQuery({
    queryKey: ['albumAvgRating', albumId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Album_ratings')
            .select('ratings')
            .eq('album_id', albumId)
        if (error) throw error
        
        const ratings:Array<number> = data.map((r) => Number(r.ratings))
        const avg:number =
            ratings.length > 0
            ? ratings.reduce((a, b) => a + b, 0) / ratings.length
            : 0

        return {
            average: Number(avg.toFixed(0)),
            totalVotes: ratings.length,
        }
    },
  })
}
