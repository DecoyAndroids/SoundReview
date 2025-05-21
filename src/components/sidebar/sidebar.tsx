'use client'
import Link from "next/link"
import styles from "./sidebar.module.scss"
import { Separator } from "../ui/separator"
import Image from "next/image"
import DefaultAvatar from '~/public/generalIcons/default_avatar.jpg'
import { useAuthStore } from "~/store/authStore"
import { useProfileGetProfileAvatar } from "~/hooks/ProfileHooks/useProfileGetProfileAvatar"
import { useQueryClient } from '@tanstack/react-query';
import { useState } from "react"


export const  Sidebar = () => {
    const queryClient = useQueryClient();
    const user = useAuthStore((state) => state.user);
    const userData = useAuthStore((state)=>state.userData)
    const userIdSafe = userData?.UID ?? ""
    const userAvatarUrl = useProfileGetProfileAvatar(userIdSafe, userData?.avatar_file_extension ?? '', {enabled: !!userIdSafe && !!userData?.avatar_file_extension})

    const [userAvatarState, setUserAvatarState] = useState<{avatarUrlTime: number}>({
        avatarUrlTime: Date.now()
    })
    return(
        <div className={`flex flex-col ${styles.Sidebar}`}> 
  
                <Link href='/' className="rounded-[9px] min-w-fit ">
                    <div className="rounded-[9px]">
                        <h3 className="text-[30px]">ПРОСТО УСЛЫШЬ</h3>
                    </div>
                </Link>
                <div className={`mt-[15px] ${styles.HrefContainer}`}>
                        <Link href='/' className="pt-[12px] pb-[6px] ">
                            <h4 className="text-[2rem] transition-all duration-400 hover:text-[2.2rem]">Главная</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/articles' className="pt-[15px] pb-[15px] ">
                            <h4 className="text-[2rem] transition-all duration-400 hover:text-[2.2rem]">Статьи</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/ratings' className="pt-[15px] pb-[15px] ">
                            <h4 className="text-[2rem] transition-all duration-400 hover:text-[2.2rem]">Лучшее</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/playlists' className="pt-[15px] pb-[20px]">
                            <h4 className="text-[2rem] transition-all duration-400 hover:text-[2.2rem]">Подборки</h4>
                        </Link>
                </div>
                
        {user != null ?
        <Link href={`/profile/${user.id}`} className={`flex mt-auto p-2 ${styles.ProfileContainer}`}>
            <Image src={(userData?.avatar_file_extension != null && userAvatarUrl.data?.publicUrl != undefined) ? `${userAvatarUrl.data?.publicUrl}?${userAvatarState.avatarUrlTime}` : DefaultAvatar} width={200} height={200} alt='Avatar' className={`${styles.Avatar}`} />
            <h4 className={`${styles.UserName} grow text-[1.3vw]`}>{userData?.display_name != undefined ? userData?.display_name : user?.email!.split("@")[0]}</h4>   
        </Link> 
        : 
        <Link href='/login' className={`flex mt-auto ${styles.ProfileContainer}`}>
            <p className="m-auto">Войти</p>
        </Link>
        }
        </div>
    )
}