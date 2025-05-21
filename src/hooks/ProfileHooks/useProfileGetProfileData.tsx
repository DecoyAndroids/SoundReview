import { useQuery } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';

interface ProfileData{
    UID:string;  
    display_name:string|null;
    email:string;
    created_at:string;
    banner_file_extension: string|null;
    avatar_file_extension: string|null;

}

export function useProfileGetProfileData(userId:string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['ProfileGetProfileData', userId],
    queryFn: async () => {
        const { data, error } = await supabase
            .from('Users')
            .select('UID, display_name, email, created_at, banner_file_extension, avatar_file_extension')
            .eq('UID', userId)
            .single()
        if (error) throw error
        return data as ProfileData
    },
    enabled: options?.enabled ?? true,
  })
}
