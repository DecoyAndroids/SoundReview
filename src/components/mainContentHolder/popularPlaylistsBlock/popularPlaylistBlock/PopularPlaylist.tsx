import Image from "next/image"
import styles from './PopularPlaylist.module.scss'
import Like from "../../../../../public/generalIcons/Like.svg"
import type { PopularPlaylistProps } from "axios/app/types/propsTypes.module"
import Link from "next/link"

export const PopularPlaylistBlock:React.FC<PopularPlaylistProps> = (props)=>{
    const {PopularPlaylistData} = {...props}
    return(
        <div>
            <Link href='/playlist'>
                <Image alt='Cover of playlist'src={PopularPlaylistData.CoverSrc} width={256} style={{width:`13vw` , aspectRatio : 1/1, flexWrap: `wrap`}} className={`rounded-[9px] ${styles.PopularPlaylistCard}`}/>
                <p className="text-[16px] leading-[24px] mb-[-12px] hover:underline">{PopularPlaylistData.NamePlaylist}</p>
                <p className="text-[14px] leading-[16px] mb-[-20px]" style={{color:`rgb(var(--sub))`}}>{PopularPlaylistData.GenresPlaylist}</p>
            </Link>
            <div className="flex mt-[0px]">
                <button className={`p-0 m-0 ${styles.LikeButton}`}><Image alt='Like icon' src={Like}/></button>
                <p className="text-[14px] pl-[6px] pt-[7px]">{PopularPlaylistData.LikeCount}</p>
            </div>
        </div>
    )
}