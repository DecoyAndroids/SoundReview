import { useMutation } from '@tanstack/react-query'
import { supabase } from '~/lib/supabaseClient';


export function useProfileUpdateProfileData() {
  return useMutation({
    mutationFn: async ({userId, newName, newBanner, newAvatar, updateName, updateBanner, updateAvatar, oldBannerExtension, oldAvatarExtension}: 
      {
        userId: string; 
        newName?:string | null, 
        newBanner?:File | null, 
        newAvatar?:File | null, 
        updateName:boolean, 
        updateBanner:boolean, 
        updateAvatar:boolean,
        oldBannerExtension?:string | null,
        oldAvatarExtension?:string | null,
      }) => {
      
        if (updateName && newName){
          const { data, error } = await supabase
            .from('Users')
            .update([
              {display_name : newName}
            ])
            .eq('UID', userId)
            .select()
          if (error) throw error
        } 
      
        if (updateBanner && newBanner){
          const extension = newBanner.name.split('.').pop()?.toLowerCase() ?? 'jpg';
          const newFileName = `public/${userId}.${extension}`;
          const oldFileName = `public/${userId}.${oldBannerExtension}`
          if (oldBannerExtension !== extension){
            const { data : removeData } = await supabase.storage
              .from('profile.banner.pic')
              .remove([oldFileName])
          }
          const { error: uploadError } = await supabase.storage
            .from('profile.banner.pic')
            .upload(newFileName, newBanner,{upsert: true});    
          const { data, error } = await supabase
            .from('Users')
            .update([
              {banner_file_extension : extension}
            ])
            .eq('UID', userId)
            .select()
          if (uploadError) throw uploadError;
      }

      if (updateAvatar && newAvatar){
          const extension = newAvatar.name.split('.').pop()?.toLowerCase() ?? 'jpg';
          const newFileName = `public/${userId}.${extension}`;
          const oldFileName = `public/${userId}.${oldAvatarExtension}`
          if (oldAvatarExtension !== extension){
            const { data : removeData } = await supabase.storage
              .from('profile.avatar.pic')
              .remove([oldFileName])
          }
          const { error: uploadError } = await supabase.storage
            .from('profile.avatar.pic')
            .upload(newFileName, newAvatar,{upsert: true});    
          const { data, error } = await supabase
            .from('Users')
            .update([
              {avatar_file_extension : extension}
            ])
            .eq('UID', userId)
            .select()
          if (uploadError) throw uploadError;
      }
    },
  })
}
