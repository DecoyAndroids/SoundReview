'use client'
import Image from "next/image"
import { useParams } from "next/navigation"
import {useEffect, useState } from "react"
import { Separator } from "~/components/ui/separator"
import albumPlaceholderCover from '~/public/newReleasesCover/album_placeholder.jpg'
import { AlbumDataResponse } from "~/app/types/propsTypes.module"
import { RateWindow } from "./RateWindow"
import { TracksTable } from "./TracksTable"



export const Album:React.FC = ()=> {
    const [AlbumData, SetAlbumData] = useState<AlbumDataResponse>()
    const { id } = useParams();
    const albumId = Array.isArray(id) ? id[0] : id ?? '';
        useEffect(()=>{
            const fetchData = async ()=>{
                try{
                const res:Response = await fetch(`/api/getAlbumData/${albumId}`)
                if (!res.ok) {
                    throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
                }
                const data = (await res.json()) as AlbumDataResponse;  
                SetAlbumData(data)
                }catch(error){
                    console.log(error)
                }finally{
                }
            }
            void fetchData()
        },[albumId])
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px] h-fit"> 
            <p className="text-[2rem] mt-[-1.5rem] font-[300] h-fit">{AlbumData?.artists[0]?.name}</p>
            <p className="text-[2.5rem] mt-[-1rem] mb-[0.2rem] font-[500] h-fit">{AlbumData?.name}</p>
            <div className="flex flex-col md:flex-row gap-10 mb-[15px] ">
                {AlbumData?.images[0]?.url ?
                <Image src={AlbumData?.images[0]?.url} priority={true} placeholder="blur" blurDataURL='/api/placeholder' alt='album cover' width={130} height={130} className="w-[18vw] h-fit"/>
                : 
                <Image src={albumPlaceholderCover} width={130} height={130} alt='album cover' className="w-[18vw] h-fit"/>}    
                <RateWindow SpotiHref={AlbumData?.external_urls.spotify ?? ''}/>
                
                <div className="flex flex-col border border-[rgb(var(--gray))] ml-auto gap-1 h-fit rounded-lg p-3">
                    <div>
                        <p className="h-fit text-[1.2rem] font-[300]">Детали релиза</p>
                        <Separator/>
                    </div>
                    <div className="flex h-fit mb-[-0.8rem]" >
                        <p className=" h-fit text-[1.1rem] font-[300]">{AlbumData?.release_date} &nbsp; </p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ дата выхода</p>
                    </div>
                    <div className="flex mb-[-0.8rem]">
                        <p className="h-fit text-[1.1rem] font-[300]">{AlbumData?.album_type} &nbsp;</p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ тип релиза</p>
                    </div>
                    <div className="flex mb-[-0.8rem]">
                        <p className="h-fit text-[1.1rem] font-[300]"> {AlbumData?.total_tracks}  &nbsp;</p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ количество треков</p>
                    </div>
                    <div className="flex mb-[-0.8rem]">
                        <p className="h-fit text-[1.1rem] font-[300]">{AlbumData?.popularity}/100  &nbsp;</p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ популярность</p>
                    </div>
                    <div className="flex mb-[-0.8rem]">
                        <p className="h-fit text-[1.1rem] font-[300]">spotify  &nbsp;</p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ где можно послушать</p>
                    </div>
                    <div className="flex mb-[-0.8rem]">
                        <p className="h-fit text-[1.1rem] font-[300] break-words ">{AlbumData?.label.split(' ')[0]}...  &nbsp;</p><p className="text-[rgb(var(--sub))] text-[1.1rem] font-[300]">/ лейбл релиза</p>
                    </div>
                </div>
            </div>
            <TracksTable AlbumData={AlbumData!}/>
        </div>
    )
}
