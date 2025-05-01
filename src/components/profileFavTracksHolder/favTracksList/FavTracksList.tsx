'use client'
import Image from "next/image";
import LikeSrc from "~/public/generalIcons/Like.png"
import FillLikeSrc from "~/public/generalIcons/LikeFill.png"
import ArrowSrc from '~/public/generalIcons/ChatGPT Image 12 апр. 2025 г., 11_55_43.png'
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTrackInAlbumGetAllUserLike } from "~/hooks/TrackHooks/useTrackInAlbumGetAllUserLike";
import { useTrackInAlbumUpdateUserLike } from "~/hooks/TrackHooks/useTrackInAlbumUpdateUserLike";
import { useToast } from "~/hooks/Shadcn/use-toast";


export const FavTracksList:React.FC = ()=>{
    const { id } = useParams();
    const { toast } = useToast()
    const updateLike = useTrackInAlbumUpdateUserLike()
    
    const userId = Array.isArray(id) ? id[0] : id ?? '';
    const userIdSafe = userId ?? '';
    
    const LikedTracks = useTrackInAlbumGetAllUserLike(userIdSafe, {enabled: !!userIdSafe,})

    const handleClick = async(albumId : string, trackId: string, likeStatus:boolean) => {
        try{
            await updateLike.mutateAsync({albumId:albumId, trackId: trackId, userId:userIdSafe, isLiked: !likeStatus, updateTime:false})           
                const index = LikedTracks.data?.findIndex(t => t.track_id === trackId)
                if (typeof index == 'number'){
                    LikedTracks.data![index]!.is_liked = !LikedTracks.data![index]!.is_liked    
                }
        }catch(error){
            console.error('Ошибка при лайке:', error)
        }
    }

    return(
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded-[9px] relative overflow-visible p-3 pt-0">
            <div className="flex ml-12 gap-2 ">
                <Link href={`/profile/${userIdSafe}`} className="rotate-90 mt-5 h-fit mr-[0.3rem] my-auto transition-transform duration-300 hover:-translate-x-2">
                        <Image src={ArrowSrc} alt="link to list favorite tracks" width={32} height={32} />
                </Link>
                <h2 className='font-bold w-fit text-32 hover:underline mt-3'>Любимые песни:</h2>
            </div>
            {!LikedTracks.isFetching ? 
                <div>
                    {LikedTracks.data?.length! > 0 ? 
                        <div className="flex flex-col mx-10  gap-3 gap-y-0 ">
                            {LikedTracks.data?.map((track, i)=>(
                                <Link href={`/album/${track.album_id}`} key={track.track_id}>
                                    <div  className="flex gap-4 hover:bg-[rgb(var(--blackamber))] p-2 rounded-lg w-full transition-colors duration-300 delay-50">
                                        <Image src={track.album_cover_url} priority={true} width={20} height={20} placeholder="blur" blurDataURL='/api/placeholder' alt='ALBUM COVER' className="w-[3rem] h-[3rem] rounded-sm"/>
                                        <div className="h-fit">
                                            <p className="mt-[-0.3rem] h-fit">{track.track_name}</p>
                                            <p className="mt-[-0.5rem] text-[rgb(var(--sub))] h-fit font-[300]">{track.authors}</p>
                                        </div>
                                        <button 
                                            className="ml-auto my-auto h-fit mr-[1rem]" 
                                            onClick={(e)=>{
                                                handleClick(track.album_id,track.track_id, track.is_liked)
                                                let letter = `Трек ${track.track_name.length > 15 ? track.track_name.slice(0,15)+'...' : track.track_name} ${LikedTracks.data?.some(like => like.track_id == track.track_id) ? (!LikedTracks.data?.find(item => item.track_id === track.track_id)?.is_liked ? 'добавлен в любимые' : 'удален из либимого') : 'добавлен в любимые'}`
                                                toast({
                                                    description: letter
                                                })
                                                e.preventDefault()
                                                e.stopPropagation()
                                                }}>
                                            <Image src={track.is_liked ? FillLikeSrc : LikeSrc} alt='ALBUM COVER' />
                                        </button>
                                        <p className="my-auto text-[rgb(var(--sub))] h-fit font-[400] text-[1.4rem]">{Math.floor(track.duration_ms / 60000)}:{Math.floor((track.duration_ms % 60000) / 1000).toString().padStart(2, "0")}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    : 
                        <div>
                            Вы не добавили в любымые еще не один трек, хотите это исправить?
                            
                        </div>
                    }
                </div>
            :
                <div className="mx-10">
                    Данные загружаются
                </div>
            }
        </div>
    )
}