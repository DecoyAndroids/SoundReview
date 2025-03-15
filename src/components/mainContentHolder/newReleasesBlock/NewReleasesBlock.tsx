'use client'
import { Separator } from "~/components/ui/separator"
import type {NewReleaseBlockData} from '../../.././app/types/propsTypes.module'
import styles from './NewReleasesBlock.module.scss'
import { useEffect, useState } from "react"
import { NewReleaseBlock } from "./newReleaseBlock/NewReleaseBlock"

interface NewReleasesResponse {
    albums: {
        href : string ; 
        items: NewReleaseBlockData[];
        limit: number ;
        next : string; 
        offset : number ;
        previos : string;
        total : number
    };
  }

export const NewReleasesBlock:React.FC = () => {
    const [isLoading, setIsloading] = useState(true)
    const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<NewReleaseBlockData[]>([])
    const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<NewReleaseBlockData[]>([])
    const handleChangeDiscoverState = () => {
        setDiscoverFull(!discoverFull)
    }
    const fetchData = async ()=>{
        try{
        setIsloading(true)
        const res:Response = await fetch('/api/getNewReleases')
        if (!res.ok) {
            throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
        }
        const data = (await res.json()) as NewReleasesResponse;   
        setDiscoveredAlbumsFirstPart(data.albums.items.slice(0,6))
        setDiscoveredAlbumsSecondPart(data.albums.items.slice(6,12)) 
        }catch(error){
            console.log(error)
        }finally{
            setIsloading(false)
        }
    }
    useEffect(()=>{
        void fetchData()
    },[])
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px]">
            <div className="flex justify-between items-center">
                <p className={`text-[16pt]`}>НОВЫЕ РЕЛИЗЫ</p>
                <button className={`text-[16pt] p-0 px-[15px] ${styles.MoreButton}`} onClick={handleChangeDiscoverState}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            {!isLoading ? <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsFirstPart].map((NewReleaseBlockData) => {

                    return(
                        <NewReleaseBlock NewReleaseBlockData={NewReleaseBlockData} key={NewReleaseBlockData.id}/>
                    )
                })}
            </div> : <p>Данные загружаются</p>}
            {discoverFull ? <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsSecondPart].map((NewReleaseBlockData) => {
                    return(
                        <NewReleaseBlock NewReleaseBlockData={NewReleaseBlockData} key={NewReleaseBlockData.id}/>
                    )
                })}
            </div> : <></>}
        </div>
    )
}