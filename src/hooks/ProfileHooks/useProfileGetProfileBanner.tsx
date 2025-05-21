import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';

export function useProfileGetProfileBanner(userId:string, banner_file_extension: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['ProfileGetProfileBanner', userId],
    queryFn: async () => {
        const { data } = supabase
            .storage
            .from('profile.banner.pic')
            .getPublicUrl(`public/${userId}.${banner_file_extension}`)
        return data
    },
    enabled: options?.enabled ?? true,
  })
}
