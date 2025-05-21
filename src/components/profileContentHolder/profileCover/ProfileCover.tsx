'use client';

import Image from 'next/image';
import { useAuthStore } from '~/store/authStore';
import { useParams } from "next/navigation";

import DefaultAvatar from '~/public/generalIcons/default_avatar.jpg';
import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';
import settings from '~/public/generalIcons/settings.png';
import { useState, useRef, useEffect } from 'react';
import { ProfileInfoProps } from '~/app/types/propsTypes.module';
import { ProfilePosts } from './profilePosts/ProfilePosts';
import * as NewsBlockData from "~/app/data/newsBlockData"
import { ProfileReviews } from './profileReviews/ProfileReviews';
import { PopularReviewsBlockData } from '~/app/data/PopularReviews';
import { PopularPlaylistBlockData } from '~/app/data/PopularPlaylists'
import { ProfilePlaylists } from './profilePlaylists/ProfilePlaylists';

import { useQueryClient } from '@tanstack/react-query';
import { ProfileFavoriteTracks } from './profileFavoriteTracks/ProfileFavoriteTracks';
import { ProfileFavoriteAlbums } from './profileFavoriteAlbums/ProfileFavoriteAlbums';
import { useProfileGetProfileData } from '~/hooks/ProfileHooks/useProfileGetProfileData';
import { useProfileUpdateProfileData } from '~/hooks/ProfileHooks/useProfileUpdateProfileData';
import { Loader2 } from 'lucide-react';
import { useProfileGetProfileBanner } from '~/hooks/ProfileHooks/useProfileGetProfileBanner';
import pencil_white from '~/public/generalIcons/pencil_white.png'
import { useProfileGetProfileAvatar } from '~/hooks/ProfileHooks/useProfileGetProfileAvatar';

 function formatDate(isoString?:string) {
    if (isoString){
        const date = new Date(isoString);

        return new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date);
    }
}



export const ProfileCover: React.FC<ProfileInfoProps> = (props) => {
    const { ProfileInfoData } = { ...props };

    const [BannerState, setBannerState] = useState<{bannerImage: File | null; previewBannerUrl: string; bannerUrlTime:number}>({
        bannerImage : null,
        previewBannerUrl : '',
        bannerUrlTime: Date.now()

    })

    const [AvatarState, setAvatarState] = useState<{avatarImage: File | null; previewAvatarUrl: string; avatarUrlTime:number}>({
        avatarImage : null,
        previewAvatarUrl : '',
        avatarUrlTime: Date.now()

    })

    const [settingsState, setSettingsState] = useState<boolean>(false);
    const BannerfileInputRef = useRef<HTMLInputElement>(null);
    const AvatarfileInputRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();

    const { id } = useParams();
    const userId = Array.isArray(id) ? id[0] : id ?? '';
    const userIdSafe = userId ?? ""

    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);
    const userDataByUID = useProfileGetProfileData(userIdSafe, {enabled: !!userIdSafe,});
    const userBannerUrl = useProfileGetProfileBanner(userIdSafe, userDataByUID.data?.banner_file_extension ?? '', {enabled: !!userIdSafe && !!userDataByUID.data?.banner_file_extension})
    const userAvatarUrl = useProfileGetProfileAvatar(userIdSafe, userDataByUID.data?.avatar_file_extension ?? '', {enabled: !!userIdSafe && !!userDataByUID.data?.avatar_file_extension})
    
    const updateProfileData = useProfileUpdateProfileData()

    const isUserAcc = user?.id == id ? true : false

    const [settingsFormState, setSettingsFormState] = useState({
        userName : (userDataByUID.data?.display_name != null ? userDataByUID.data?.display_name : userDataByUID.data?.email!.split("@")[0]),
        updateName : false,
        updateBanner : false,
        updateAvatar : false,
    })

    const handleSaveSettings = async () => {
        try {
            setSettingsFormState({...settingsFormState, updateName: settingsFormState.userName != (userDataByUID.data?.display_name != null ? userDataByUID.data?.display_name : userDataByUID.data?.email!.split("@")[0])})
            await updateProfileData.mutateAsync({ 
                userId: userIdSafe, 
                newName: settingsFormState.userName ?? '', 
                newBanner: BannerState.bannerImage,
                newAvatar: AvatarState.avatarImage,

                updateName: settingsFormState.updateName,
                updateBanner: settingsFormState.updateBanner,
                updateAvatar: settingsFormState.updateAvatar,
            
                oldBannerExtension: userDataByUID.data?.banner_file_extension,
                oldAvatarExtension: userDataByUID.data?.avatar_file_extension,
            }); 
            setSettingsState(!setSettingsState);
            void queryClient.invalidateQueries({ queryKey: ['ProfileGetProfileData'] });
            void queryClient.invalidateQueries({ queryKey: ['ProfileGetProfileBanner'] });
        } catch (err) {
            console.error('Ошибка обновления профиля:', err);
        }
    };

    const handleStateSettings = () => {
        setSettingsState(!settingsState)     
        setSettingsFormState({...settingsFormState , userName : (userDataByUID.data?.display_name != null ? userDataByUID.data?.display_name : userDataByUID.data?.email!.split("@")[0])})
    }

    const onChangeSettingsForm = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setSettingsFormState({...settingsFormState, [name]:value})
    }

    const bannerHandleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            console.log('Файл должен быть изображением (JPG, PNG и т.д.)');
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setBannerState(prev => ({ ...prev, previewBannerUrl:reader.result as string}))
            };
            reader.onloadend = () => {
                setSettingsFormState({...settingsFormState, updateBanner: true})
                setBannerState(prev => ({ ...prev,  bannerImage:file}))
            }
            reader.readAsDataURL(file);
        }  
    };

    const avatarHandleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            console.log('Файл должен быть изображением (JPG, PNG и т.д.)');
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarState(prev => ({ ...prev, previewAvatarUrl:(reader.result as string) }));
            };
            reader.onloadend = () =>{                
                setSettingsFormState({...settingsFormState, updateAvatar: true})
                setAvatarState(prev => ({ ...prev, avatarImage: file }));
            }
            reader.readAsDataURL(file);
        }
    };

    const bannerTriggerFileSelect = () => {
        BannerfileInputRef.current?.click();
    };

    const avatarTriggerFileSelect = () => {
        AvatarfileInputRef.current?.click();
    };

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded4m -[9px] relative overflow-visible">
            <div 
                className="h-[20rem] rounded-tl-[9px] rounded-tr-[9px] overflow-hidden flex items-center justify-center relative"
                style={{ background: userDataByUID.data?.banner_file_extension != null || settingsFormState.updateBanner ? (!settingsFormState.updateBanner ? `url(${userBannerUrl.data?.publicUrl}?${BannerState.bannerUrlTime}) center/cover no-repeat` : `url(${BannerState.previewBannerUrl}) center/cover no-repeat`): "rgb(var(--gray))" }}
            >
                <input type="file" accept="image/*" ref={BannerfileInputRef} className="hidden" onChange={bannerHandleCoverUpload} />     
                {isUserAcc && settingsState &&                        
                    <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md cursor-pointer" onClick={bannerTriggerFileSelect}>
                        {userDataByUID.data?.banner_file_extension == null ? 
                            'Добавить обложку'
                        :
                            'Обновить обложку'
                        }
                    </Button>                    
                }
            </div>
            
            <div className="relative flex justify-start pl-[3vw] -mt-[5vw]">
                <div className="flex grow border-[rgb(var(--blackbrown))]">
                    <div>
                        <Image 
                            src={(userDataByUID.data?.avatar_file_extension != null && userAvatarUrl.data != undefined) || settingsFormState.updateAvatar ? (!settingsFormState.updateAvatar ? `${userAvatarUrl.data?.publicUrl}?${AvatarState.avatarUrlTime}` : `${AvatarState.previewAvatarUrl}`): DefaultAvatar } 
                            width={200} 
                            height={200} 
                            alt={'User avatar'} 
                            className="w-[10vw] h-[10vw] rounded-full object-cover "
                            priority={true}              
                            quality={80}
                        />
                        {isUserAcc && settingsState &&
                            <div className='transition-all duration-300 opacity-0 hover:opacity-100 hover:cursor-pointer' onClick={avatarTriggerFileSelect}>
                                <input type="file" accept="image/*" ref={AvatarfileInputRef} className="hidden" onChange={avatarHandleCoverUpload} />
                                <Image src={pencil_white} width={200} height={200} alt='icon of changing avatar' className='absolute top-0 w-[10vw] h-[10vw] p-[3rem] transition-all duration-300' />
                                <div className='bg-[rgb(var(--cursedblack))] w-[10vw] h-[10vw] absolute top-0 rounded-full opacity-40 transition-all duration-300'/>
                                
                            </div>                      
                        }
                    </div>
                    {isUserAcc &&
                    <div className='ml-auto mt-[6vw] flex gap-3'>
                        {settingsState ? 
                        <Button className='bg-[rgb(var(--spotify))] hover:bg-[rgb(var(--spotifydark))]' onClick={handleSaveSettings} disabled={updateProfileData.isPending}>
                            {updateProfileData.isPending ? (
                                <div className='flex items-center gap-2'>
                                    <Loader2 className='h-4 w-4 animate-spin' />
                                        Сохраняем...
                                </div>
                            ) : (
                                'Сохранить'
                            )}
                        </Button>
                        :
                        <>
                        </>}
                        <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md hover:bg-[rgb(var(--red))]  transition duration-300" onClick={handleLogout}>
                            ВЫЙТИ
                        </Button>
                        <Button className="bg-[rgb(var(--cursedblack))] aspect-square w-[2.5rem] p-1 text-white mr-[3em]  rounded-md" onClick={handleStateSettings}>
                            <Image src={settings} alt='settings' className='aspect-square'/>
                        </Button>
                    </div>
                    }
                </div>
            </div>
            
            <div className='flex-col pt-[0.5em] pl-[4em]'>
                <div className='flex'>
                    {!settingsState ? 
                        <p className='text-[2rem] p-[0.1rem] ml-[1rem] mb-[0.44em]'>{(userDataByUID.data?.display_name != null ? userDataByUID.data?.display_name : userDataByUID.data?.email!.split("@")[0])}</p>
                    :
                        <input className='text-[2rem] px-[1rem] bg-[rgb(var(--blackbrown))] border-2 border-[rgb(var(--cursedblack))] ' onChange={onChangeSettingsForm} name='userName' value={settingsFormState.userName}/>
                    } 
                </div>
                <p className='text-[1.2rem] ml-[1.1rem] opacity-50'>c {formatDate(userDataByUID.data?.created_at ?? "")}</p>

                {/* <div className='flex'>
                    <Link href={'/ProfileSubscribers'}>
                        <p className='text-[1.5rem] hover:underline'>{userData?.subscribers_count} подписчиков</p>
                    </Link>
                    <Link href={'/ProfileSubscriptions'}>
                        <p className='text-[1.5rem] ml-[0.8em] hover:underline mb-5'>{userData?.subscriptions_count} подписок</p>
                    </Link>
                </div> до лучших времен, когда сделаем систему подписок*/} 

                <ProfileFavoriteTracks/>
                <ProfileFavoriteAlbums/>

                {/* <ProfilePosts newsBlockData={NewsBlockData.newsBlocksData}/>
                <ProfileReviews PopularReviewsData={PopularReviewsBlockData}/>
                <ProfilePlaylists PopularPlaylistsData = {PopularPlaylistBlockData}/> */}
            </div>
        </div>
    );
};
