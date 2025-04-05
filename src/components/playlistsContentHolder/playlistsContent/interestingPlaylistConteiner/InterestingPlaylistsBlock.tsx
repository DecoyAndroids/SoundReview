'use client'
import styles from "./PopularPlaylistsBlock.module.scss"
import { Separator } from "~/components/ui/separator"
import { PopularPlaylistBlock } from "./popularPlaylistBlock/PopularPlaylist"
import { useEffect, useState } from "react"
import type { PopularPlaylistData, PopularPlaylistsProps } from "~/app/types/propsTypes.module"

export const InterestingPlaylistsBlock : React.FC<PopularPlaylistsProps> = (props) => {
        const {PopularPlaylistsData} = {...props}
        const [discoverFull, setDiscoverFull] = useState<boolean>(false)
        const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<PopularPlaylistData[]>([])
        const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<PopularPlaylistData[]>([])
        const handleChangeDiscoverState = () => {
            setDiscoverFull(!discoverFull)
        }
        useEffect(()=>{
            setDiscoveredAlbumsFirstPart(PopularPlaylistsData.slice(20,25))
            setDiscoveredAlbumsSecondPart(PopularPlaylistsData.slice(25,30))
        },[])
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px] mb-[30px]">
            <div className="flex justify-between items-center">
                <p className={`text-[18pt]`}>Интересно пользователям</p>
                <button className={`text-[16pt] p-0 px-[15px] ${styles.MoreButton}`} onClick={handleChangeDiscoverState}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                            {[...discoveredAlbumsFirstPart].map((PopularplaylistBlockData) => {
                                return(
                                    <PopularPlaylistBlock PopularPlaylistData={PopularplaylistBlockData} key={PopularplaylistBlockData.id}/>
                                )
                            })}
                        </div>
                        {discoverFull ? <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                            {[...discoveredAlbumsSecondPart].map((PopularplaylistBlockData) => {
                                return(
                                    <PopularPlaylistBlock PopularPlaylistData={PopularplaylistBlockData} key={PopularplaylistBlockData.id}/>
                                )
                            })}
                        </div> : <></>}
        </div>
    )
}