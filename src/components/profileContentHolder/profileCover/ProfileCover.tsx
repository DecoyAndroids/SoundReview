'use client';

import Image from 'next/image';
import { useAuthStore } from '~/store/authStore';
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { getUserDataByUID, UserData } from '~/app/actions/getUser';

import Avatar from '~/public/userAvatar.jpg';
import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';
import settings from '~/public/generalIcons/settings.png';
import { useState, useRef, useEffect } from 'react';
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

    const [coverImage, setCoverImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { id } = useParams();
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);
    const userData = useAuthStore((state)=>state.userData)

    const isUserAcc = user?.id == id ? true : false
    const [userDataByUID, setUserDataByUID] = useState<UserData | null>(null)

    useEffect(()=>{
        const fetchUserData = async ()=>{
            try{
                const userDataByUID = await getUserDataByUID(String(id))
                console.log(userDataByUID)
                setUserDataByUID(userDataByUID)
            }catch(error){
                console.error(error)
            }
        }

        fetchUserData()

    },[isUserAcc])
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

    // function post() {                    заготовка под 404 , если пользователь не найден
    // async() => {await fetch(`https://localhost:3000/profile/${id}`).then(res => res.json());}
    // }
    // post()
    // if (!post){ 
    //     console.log('123')           
    //     return notFound();
    // }
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
                
                {!coverImage && isUserAcc && (
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
                    {isUserAcc &&
                    <div className='ml-auto mt-[6vw] flex gap-3'>
                        <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md hover:bg-[rgb(var(--red))]  transition duration-300" onClick={handleLogout}>
                            ВЫЙТИ
                        </Button>
                        <Button className="bg-[rgb(var(--cursedblack))] aspect-square w-[2.5rem] p-1 text-white mr-[3em]  rounded-md">
                            <Image src={settings} alt='settings' className='aspect-square'/>
                        </Button>
                    </div>
                    }
                </div>
            </div>
            
            <div className='flex-col pt-[0.5em] pl-[4em]'>
                <div className='flex'>
                    <p className='text-[2rem] mb-[0.3em]'>{isUserAcc? (userData?.display_name != undefined ? userData?.display_name : user?.email!.split("@")[0]) : (userDataByUID?.display_name != undefined ? userDataByUID?.display_name : userDataByUID?.email!.split("@")[0])}</p>
                </div>
                <p className='text-[1.2rem] opacity-50'>c {ProfileInfoData.ProfileRegDate}</p>
                <div className='flex'>
                    <Link href={'/ProfileSubscribers'}>
                        <p className='text-[1.5rem] hover:underline'>{userData?.subscribers_count} подписчиков</p>
                    </Link>
                    <Link href={'/ProfileSubscriptions'}>
                        <p className='text-[1.5rem] ml-[0.8em] hover:underline mb-5'>{userData?.subscriptions_count} подписок</p>
                    </Link>
                </div>
                <ProfilePosts newsBlockData={NewsBlockData.newsBlocksData}/>
                <ProfileReviews PopularReviewsData={PopularReviewsBlockData}/>
                <ProfilePlaylists PopularPlaylistsData = {PopularPlaylistBlockData}/>
            </div>
        </div>
    );
};
