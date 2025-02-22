import Link from "next/link"
import styles from "./sidebar.module.scss"
import { Separator } from "../ui/separator"
import Image from "next/image"
import userAvatarSrc from '../../../public/userAvatar.jpg'


export const Sidebar = () => {
    return(
        <div className={`flex flex-col h-screen ${styles.Sidebar}`}> 
                <Link href='/' className="rounded-[9px]">
                    <div className="rounded-[9px]">
                        <h3>ПРОСТО УСЛЫШЬ</h3>
                    </div>
                </Link>
                <div className={`mt-[15px] ${styles.HrefContainer}`}>
                        <Link href='/' className="pt-[22px] pb-[18px]">
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
                        <Link href='/playlists' className="pt-[15px] pb-[15px]">
                        <h4 className="hover:text-28">Подборки</h4>
                        </Link>
                </div>

        <Link href='/profile' className={`flex mt-auto ${styles.ProfileContainer}`}>
            <div className={styles.ProfileBlock}>
                <Image src={userAvatarSrc} alt='Avatar' className={styles.Avatar} />
                    <h4 className={styles.UserName}>Станислав</h4>
            </div>
        </Link>
        </div>
    )
}