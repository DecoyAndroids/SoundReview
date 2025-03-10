'use client'
import Link from "next/link"
import styles from "./sidebar.module.scss"
import { Separator } from "../ui/separator"
import Image from "next/image"
import userAvatarSrc from '../../../public/userAvatar.jpg'
import { useAuthStore } from "~/store/authStore"


export const  Sidebar = () => {
    const user = useAuthStore((state) => state.user);
    return(
        <div className={`flex flex-col  ${styles.Sidebar}`}> 
  
                <Link href='/' className="rounded-[9px] min-w-fit">
                    <div className="rounded-[9px]">
                        <h3 className="text-[30px]">ПРОСТО УСЛЫШЬ</h3>
                    </div>
                </Link>
                <div className={`mt-[15px] ${styles.HrefContainer}`}>
                        <Link href='/' className="pt-[12px] pb-[6px]">
                        <h4 className="hover:text-28">Главная</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/articles' className="pt-[15px] pb-[15px] hover:text-36">
                        <h4 className="hover:text-28">Статьи</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/ratings' className="pt-[15px] pb-[15px] hover:text-36">
                            <h4 className="hover:text-28">Лучшее</h4>
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/playlists' className="pt-[15px] pb-[20px]">
                        <h4 className="hover:text-28 ">Подборки</h4>
                        </Link>
                </div>
                
        {user != null ?
        <Link href='/profile' className={`flex mt-auto p-2 ${styles.ProfileContainer}`}>
            <Image src={userAvatarSrc} alt='Avatar' className={`${styles.Avatar}`} />
            <h4 className={`${styles.UserName} grow text-[2rem]`}>{user.email!.split("@")[0]}</h4>   
        </Link> 
        : 
        <Link href='/login' className={`flex mt-auto ${styles.ProfileContainer}`}>
            <p className="m-auto">Войти</p>
        </Link>
        }
        </div>
    )
}