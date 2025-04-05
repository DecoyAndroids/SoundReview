'use client'
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {useEffect, useState } from "react"
import { Separator } from "~/components/ui/separator"
import { useAuthStore } from '~/store/authStore';
import albumPlaceholderCover from '~/public/newReleasesCover/album_placeholder.jpg'
import { Slider } from "axios/components/ui/slider"
import { useAlbumPostRating} from "~/hooks/useAlbumPostRating"
import { useAlbumAverageRating } from "~/hooks/useAlbumAverageRating"
import { useAlbumUserRating } from "~/hooks/useAlbumUserRating"

interface AlbumDataResponse {
    album_type : string;
    total_tracks: number;
    available_markets : Array<string>
    external_urls: {
        spotify:string;
    };
    href : string;
    id: string;
    images : {
        url:string;
        height: string;
        width : string;
    }[];
    name: string;
    release_date : string;
    release_date_precision : string;
    restrictions: {
        reason : string;
    };
    type: string;
    uri : string;
    artists : {
        external_urls: {
            spotify:string;
        };
        href : string;
        id : string;
        name : string ;
        type : string ;
        uri : string ;
    }[];
    tracks:{
        href : string;
        limit : number;
        next : string | null;
        offset: number;
        previos : string | null;
        total: number;
        items: {
            artists : {
                external_urls: {
                    spotify:string;
                };
                href : string;
                id : string;
                name : string ;
                type : string ;
                uri : string ;
            }[];   
            available_markets:string[];
            disc_number: number;
            duration_ms: number;
            explicit:boolean;
            external_urls: {
                spotify:string;
            };
            href:string;
            id : string;
            is_playable : boolean;
            linked_from: {
                external_urls: {
                    spotify:string;
                };
                href:string;
                id : string; 
                type:string;
                uri:string;   
            };
            restrictions: {
                reason:string;
            };
            name:string;
            preview_url : string | null;
            track_number: number;
            type : string;
            uri: string;
            is_local: boolean;
        }[];
    };
    copyrights: {
        text:string;
        type:string;
    }[];
    external_ids:{
        isrc: string;
        ean : string;
        upc : string;
    };
    genres: string[];
    label: string;
    popularity: number;
  }


export const Album:React.FC = ()=> {
    //const [isLoading, setIsloading] = useState(true)
    const [AlbumData, SetAlbumData] = useState<AlbumDataResponse>()
    const [rateWindowState, setRateWindowState] = useState({
        isRateWindow : false,
        inAccNotice: false,
        actualRate : [50],
    })
    const { id } = useParams();
    const user = useAuthStore((state) => state.user);
    const albumId = Array.isArray(id) ? id[0] : id ?? '';
    const { data, isLoading } = useAlbumAverageRating(albumId!) 
    const inAcc = user?.id ? true : false
        useEffect(()=>{
            const fetchData = async ()=>{
                try{
                //setIsloading(true)
                const res:Response = await fetch(`/api/getAlbumData/${albumId}`)
                if (!res.ok) {
                    throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
                }
                const data = (await res.json()) as AlbumDataResponse;  
                SetAlbumData(data)
                }catch(error){
                    console.log(error)
                }finally{
                    //setIsloading(false)
                }
            }
            void fetchData()
        },[albumId])
    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
      };
    const { mutate: postRating, isPending } = useAlbumPostRating()
    const changeRateWindowState = () => {
        if (inAcc){
            setRateWindowState({...rateWindowState, isRateWindow:!rateWindowState.isRateWindow})
        }else{
            setRateWindowState({...rateWindowState, inAccNotice:true})
        }
    }

    const SliderOnChange = (val:number[])=>{
        setRateWindowState({...rateWindowState, 'actualRate':val})
    }
    


//     const handlePostRating = () => {
//         postRating({
//             albumId: albumId!,
//             userId: user?.id!,
//             rating: rateWindowState.actualRate[0]!,
//         })
// }
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px] h-fit"> 
            <p className="text-[2rem] mt-[-1.5rem] font-[300] h-fit">{AlbumData?.artists[0]?.name}</p>
            <p className="text-[2.5rem] mt-[-1rem] mb-[0.2rem] font-[500] h-fit">{AlbumData?.name}</p>
            <div className="flex flex-col md:flex-row gap-10 ">
                {AlbumData?.images[0]?.url ?
                <Image src={AlbumData?.images[0]?.url} priority={true} placeholder="blur" blurDataURL='/api/placeholder' alt='album cover' width={130} height={130} className="w-[18vw] h-fit"/>
                : 
                <Image src={albumPlaceholderCover} width={130} height={130} alt='album cover' className="w-[18vw] h-fit"/>}    
                <div className="flex grow flex-col gap-3">
                    <div className="bg-[rgb(var(--gray))] p-3 py-4 justify-around rounded-lg flex w-full gap-4 h-fit w-fit">
                        {/* <div className="flex flex-col 2xl:flex-row ">
                            <div>
                            <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка критиков</p>
                            <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> 84</p>                          
                            <div className={`h-[0.3rem] w-[10rem] m-auto mb-[1rem] overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                <div className={`h-full transition-all`} 
                                    style={{width:67+'%', backgroundColor:getColor(84)}}> 
                                </div>
                            </div>
                            </div>
                            <p className="my-auto font-[300] text-[rgb(var(--sub))] text-[1rem]">на основе <b>1700</b> оценок</p>    
                        </div> */}
                        <div className="flex flex-col 2xl:flex-row">
                            <div>
                            <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка критиков</p>
                            <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> NR</p>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="bg-[rgb(var(--blackbrown))]"/>
                        {!isLoading ?    
                        <div className="gap-2 flex flex-col 2xl:flex-row ">
                            
                            <div>
                                <p className="text-[1.2rem] mb-[-0.8rem]  h-fit">оценка слушателей</p>
                                <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> {data!.average}</p>                          
                                <div className={`h-[0.3rem] w-[10rem] m-auto mb-[1rem] overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                    <div className={`h-full transition-all`} 
                                        style={{width:data!.average+'%', backgroundColor:getColor(data!.average)}}> 
                                    </div>
                                </div>
                            </div>
                            <p className="my-auto font-[300] text-[rgb(var(--sub))] text-[1rem]">на основе <b>{data!.totalVotes}</b> оценок</p> 
                            
                        </div>
                        :<></>}
                    </div>
                    <div>
                        <Link className="bg-[rgb(var(--gray))] p-2 rounded-lg hover:bg-[rgb(var(--spotify))] transform duration-300" href={AlbumData?.external_urls.spotify ?? ''}>Spotify</Link>
                    </div>
                    {/* {!rateWindowState.isRateWindow ? 
                    <button className="bg-[rgb(var(--gray))] text-[1.2rem] p-3"  onClick={changeRateWindowState}> Поставить оценку</button>
                    : 
                    <div className="h-fit bg-[rgb(var(--gray))] relative rounded-lg flex flex-col gap-1" >
                            <div className="h-fit bg-[rgb(var(--cursedblack))] w-[80%] m-auto flex flex-col mt-3 mb-3">
                                <div className="h-1 rounded-lg mb-[-0.1rem]" style={{width:rateWindowState.actualRate+'%', backgroundColor:getColor(rateWindowState.actualRate[0] ?? 50)}}/>
                                <Slider defaultValue={[50]} max={100} step={1} onValueChange={SliderOnChange}  className="bg-black rounded-lg " name='actualRate' />   
                                
                                
                            </div>
                            <button className="absolute top-0 right-0 hover:bg-[rgb(var(--sub))] p-1 m-1 mt-0" onClick={changeRateWindowState}>свернуть</button> 
                            <button className=" bg-[rgb(var(--gray))] w-full text-[1.2rem] hover:bg-[rgb(var(--sub))] p-6" onClick={handlePostRating} > Поставить оценку {rateWindowState.actualRate}</button>    
                            
                    </div>} */}
                </div>

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
            <table className="">
                <tr className="border-2 border-[rgb(var(--blackbrown))] border-b-[rgb(var(--gray))]">
                    <th className="p-2 pb-0 font-[300] text-[rgb(var(--sub))]">#</th>
                    <th className="w-full text-left font-[300]"><p className="ml-[0.3rem] mb-[-0.5rem] text-[0.9rem] h-fit">Название</p></th>
                    <th className="font-[300] text-[rgb(var(--sub))]"><p className="ml-[0.3rem] mb-[-0.5rem] text-[0.9rem] h-fit">длительность</p></th>
                </tr>
                {AlbumData?.tracks.items.map((track, i )=>{
                    return(
                        <tr key={track.id}>
                            <th className="font-[300] p-1 text-[rgb(var(--sub))] text-[1.2rem] ">{i+1}</th>
                            <th className="text-left font-[400]">
                                <div className="my-[0.3rem] ml-[0.3rem]">
                                    <p className="h-fit text-[1.1rem] mb-[-0.2rem]">{track.name}</p>
                                    <div className="flex">
                                        {track.explicit ? 
                                        <p className="font-[500] text-[0.7rem] bg-[rgb(var(--sub))] text-[rgb(var(--cursedblack))] rounded-sm h-fit px-[0.3rem] mr-[0.2rem] ">E</p>
                                        :<></>}
                                        <p className="h-fit font-[300] text-[0.9rem] mt-[-0.2rem] text-[rgb(var(--sub))]">{track.artists[0]?.name}</p>
                                    </div>
                                </div>
                                </th>
                            <th className="font-[300] text-[rgb(var(--sub))]">{Math.floor(track.duration_ms / 60000)}:{Math.floor((track.duration_ms % 60000) / 1000).toString().padStart(2, "0")} </th> 
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
