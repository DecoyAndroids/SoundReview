import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';

export function useProfileGetProfileAvatar(userId:string, avatar_file_extension: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['ProfileGetProfileAvatar', userId],
    queryFn: async () => {
        const { data } = supabase
            .storage
            .from('profile.avatar.pic')
            .getPublicUrl(`public/${userId}.${avatar_file_extension}`)
        return data
    },
    enabled: options?.enabled ?? true,
  })
}
