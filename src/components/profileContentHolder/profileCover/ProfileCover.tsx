'use client';

import Image from 'next/image';
import { useAuthStore } from '~/store/authStore';
import { updateUser } from '~/app/actions/auth';

import Avatar from '~/public/userAvatar.jpg';
import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';
import settings from '~/public/generalIcons/settings.png';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { ProfileInfoProps } from '~/app/types/propsTypes.module';
import { ProfilePosts } from './profilePosts/ProfilePosts';
import * as NewsBlockData from "~/app/data/newsBlockData"
import { ProfileReviews } from './profileReviews/ProfileReviews';
import { PopularReviewsBlockData } from '~/app/data/PopularReviews';
import { PopularPlaylistBlockData } from '~/app/data/PopularPlaylists'
import { ProfilePlaylists } from './profilePlaylists/ProfilePlaylists';

export const ProfileCover: React.FC<ProfileInfoProps> = (props) => {
    const { ProfileInfoData } = { ...props };
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();
    const user = useAuthStore((state) => state.user);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setCoverImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };
    console.log(user)
    return (
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded-[9px] relative overflow-visible">
            <div 
                className="h-[20rem] rounded-tl-[9px] rounded-tr-[9px] overflow-hidden flex items-center justify-center relative"
                style={{ background: coverImage ? `url(${coverImage}) center/cover no-repeat` : "rgb(var(--gray))" }}
            >
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleCoverUpload}
                />
                
                {!coverImage && (
                    <Button 
                        className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md cursor-pointer"
                        onClick={triggerFileSelect}
                    >
                        Добавить обложку
                    </Button>
                )}
            </div>
            
            <div className="relative flex justify-start pl-[3vw] -mt-[5vw]">
                <div className="flex grow border-[rgb(var(--blackbrown))]">
                    <Image src={Avatar} alt={'User avatar'} className="w-[10vw] h-[10vw] aspect-square rounded-full"/>
                    
                    <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 ml-auto mr-[1.5em] mt-[6vw] rounded-md hover:bg-[rgb(var(--red))] transition duration-300" onClick={handleLogout}>
                        ВЫЙТИ
                    </Button>
                    <Button className="bg-[rgb(var(--cursedblack))] aspect-square w-[2.5rem] p-1 text-white mr-[3em] mt-[6vw] rounded-md">
                        <Image src={settings} alt='settings' className='aspect-square'/>
                    </Button>
                </div>
            </div>

            <div className='flex-col pt-[0.5em] pl-[4em]'>
                <div className='flex'>
                    <p className='text-[2rem] mb-[0.3em]'>{user?.email!.split("@")[0]}</p>
                    <button className='bg-[rgb(var(--cursedblack))]' onClick={async()=>{await updateUser('stasya')}}>updata name</button>
                </div>
                <p className='text-[1.2rem] opacity-50'>c {ProfileInfoData.ProfileRegDate}</p>
                <div className='flex'>
                    <Link href={'/ProfileSubscribers'}>
                        <p className='text-[1.5rem] hover:underline'>{ProfileInfoData.ProfileSubscribers} подписчиков</p>
                    </Link>
                    <Link href={'/ProfileSubscriptions'}>
                        <p className='text-[1.5rem] ml-[0.8em] hover:underline mb-5'>{ProfileInfoData.ProfileSubscriptions} подписок</p>
                    </Link>
                </div>
                <ProfilePosts newsBlockData={NewsBlockData.newsBlocksData}/>
                <ProfileReviews PopularReviewsData={PopularReviewsBlockData}/>
                <ProfilePlaylists PopularPlaylistsData = {PopularPlaylistBlockData}/>
            </div>
        </div>
    );
};
