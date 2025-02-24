'use client'
import { Separator } from "axios/components/ui/separator"
import { NewReleaseBlock } from "./newReleaseBlock/NewReleaseBlock"
import type {NewReleaseBlockData, NewReleasesBlockProps} from '../../.././app/types/propsTypes.module'
import styles from './NewReleasesBlock.module.scss'
import { useEffect, useState } from "react"

export const NewReleasesBlock:React.FC<NewReleasesBlockProps> = (props) => {
    const {NewReleaseBlockData} = {...props}
    const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<NewReleaseBlockData[]>([])
    const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<NewReleaseBlockData[]>([])
    const handleChangeDiscoverState = () => {
        setDiscoverFull(!discoverFull)
    }
    useEffect(()=>{
        setDiscoveredAlbumsFirstPart(NewReleaseBlockData.slice(0,5))
        setDiscoveredAlbumsSecondPart(NewReleaseBlockData.slice(5,10))
    },[])
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px]">
            <div className="flex justify-between items-center">
                <p className={`text-[16pt]`}>НОВЫЕ РЕЛИЗЫ</p>
                <button className={`text-[16pt] ${styles.MoreButton}`} onClick={handleChangeDiscoverState}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsFirstPart].map((NewReleaseBlockData,i) => {
                    return(
                        <NewReleaseBlock NewReleaseBlockData={NewReleaseBlockData} key={i}/>
                    )
                })}
            </div>
            {discoverFull ? <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsSecondPart].map((NewReleaseBlockData,i) => {
                    return(
                        <NewReleaseBlock NewReleaseBlockData={NewReleaseBlockData} key={i}/>
                    )
                })}
            </div> : <></>}
        </div>
    )
}