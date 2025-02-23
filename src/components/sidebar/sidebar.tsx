import Link from "next/link"
import styles from "./sidebar.module.scss"
import { Separator } from "../ui/separator"
import Image from "next/image"
import userAvatarSrc from '../../../public/userAvatar.jpg'


export const Sidebar = () => {
    return(
        <div className={`flex flex-col h-screen ${styles.Sidebar}`}> 
                <Link href='/' className="rounded-[9px] min-w-fit">
                    <div className="rounded-[9px]">
                        <h3 className="text-[30px]">ПРОСТО УСЛЫШЬ</h3>
                    </div>
                </Link>
                <div className={`mt-[15px] ${styles.HrefContainer}`}>
                        <Link href='/' className="pt-[22px] pb-[18px]">
                            Главная
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/articles' className="pt-[15px] pb-[15px]">
                            Статьи
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/ratings' className="pt-[15px] pb-[15px]">
                            Лучшее
                        </Link>
                    <Separator className= {`w-[calc(100%-40px)] m-auto`}/>
                        <Link href='/playlists' className="pt-[15px] pb-[15px]">
                            Подборки
                        </Link>
                </div>

                <Link href='/profile' className="flex mt-auto rounded-[9px] min-w-fit">                   
                        <Image src={userAvatarSrc} alt='Avatar' className={`mt-[6px] mb-[7px] ml-[9px]  ${styles.Avatar}`}/>
                        <p className="m-auto mt-[2px] text-[1.2vw] font-medium">Станислав</p>
                </Link>
        </div>
    )
}