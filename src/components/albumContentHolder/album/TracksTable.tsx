import { TracksTableProps } from "~/app/types/propsTypes.module"
import Image from "next/image"
import LikeSrc from "~/public/generalIcons/Like.png"
import { useTrackInAlbumPostLike } from "~/hooks/TrackHooks/useTrackInAlbumPostUserLike"
import { useAuthStore } from "~/store/authStore"
import { useParams } from "next/navigation"
import { useTrackInAlbumUserLike } from "~/hooks/TrackHooks/useTrackInAlbumUserLike"
import { useQueryClient } from "@tanstack/react-query"
import { useTrackInAlbumUpdateUserLike } from "~/hooks/TrackHooks/useTrackInAlbumUpdateUserLike"

export const TracksTable:React.FC<TracksTableProps> = (props)=>{
    const {AlbumData} = {...props}
    const postLike = useTrackInAlbumPostLike()
    const updateLike = useTrackInAlbumUpdateUserLike()
    const queryClient = useQueryClient();
    const { id } = useParams();
    
    const user = useAuthStore((state) => state.user);
    
    const albumId = Array.isArray(id) ? id[0] : id ?? '';
    const albumIdSafe = albumId ?? '';
    const userIdSafe = user?.id ?? '';

    const LikedTracks = useTrackInAlbumUserLike(albumIdSafe, userIdSafe, {enabled: !!albumIdSafe && !!userIdSafe,})

    const HandlePostLike = async (trackId : string) =>{
        try {
            if(LikedTracks.data?.some(like => like.track_id == trackId)){
                const likedTrack = LikedTracks.data?.find(item => item.track_id === trackId)
                await updateLike.mutateAsync({albumId:albumIdSafe, trackId: trackId, userId:userIdSafe, isLiked: !likedTrack?.is_liked})
                queryClient.invalidateQueries({queryKey: ['TrackInAlbumUserLike', albumId],});
            }else{
                await postLike.mutateAsync({albumId:albumIdSafe, trackId: trackId, userId:userIdSafe, isLiked: true})
                queryClient.invalidateQueries({queryKey: ['TrackInAlbumUserLike', albumId],});
            }
        }catch (error) {
            console.error('Ошибка при лайке:', error)
        }
        
    }

    // const HandleClickPostLike = async () => {
    //     try {
    //         if (userLikeQuery.data?.LikeRow === true) {
    //             await updateLike.mutateAsync({ albumId: albumIdSafe, userId: userIdSafe, isLiked: !userLikeQuery.data?.isLiked,})
    //             queryClient.invalidateQueries({queryKey: ['albumCountLikes', albumId],});
    //             queryClient.invalidateQueries({queryKey: ['albumUserLike', albumId],});
    //         } else {
    //             await postLike.mutateAsync({ albumId: albumIdSafe, userId: userIdSafe, isLiked: true,})
    //             queryClient.invalidateQueries({queryKey: ['albumCountLikes', albumId],});
    //             queryClient.invalidateQueries({queryKey: ['albumUserLike', albumId],});
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при лайке:', error)
    //     }
    //   }

    return(
        <div className="max-h-[25rem] mb-[2rem] scroll-smooth overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[rgb(var(--sub))] scrollbar-track-[rgb(var(--blackbrown))]">
                <table className="border-collapse">
                    <thead className="sticky top-0 z-10 bg-[rgb(var(--blackbrown))] border-b border-[rgb(var(--sub))]">
                        <tr className=" ">
                            <th className="p-2 pb-0 font-[300]  text-[rgb(var(--sub))]">#</th>
                            <th className="w-full text-left font-[300] "><p className="ml-[0.3rem] mb-[-0.5rem] text-[0.9rem] h-fit">Название</p></th>
                            <th className="font-[300] text-[rgb(var(--sub))] "><p className="ml-[0.3rem] mb-[-0.5rem] text-[0.9rem] h-fit">длительность</p></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {AlbumData?.tracks.items.map((track, i )=>{
                            return(
                                <tr key={track.id}>
                                    <th className="font-[300] p-1 text-[rgb(var(--sub))] text-[1.2rem] ">{i+1}</th>
                                    <th className="text-left font-[400]">
                                        <div className="my-[0.3rem] ml-[0.3rem] flex">
                                            <div>
                                                <p className="h-fit text-[1.1rem] mb-[-0.2rem]">{track.name}</p>
                                                <div className="flex">
                                                    {track.explicit ? 
                                                    <p className="font-[500] text-[0.7rem] bg-[rgb(var(--sub))] text-[rgb(var(--cursedblack))] rounded-sm h-fit px-[0.3rem] mr-[0.2rem] ">E</p>
                                                    :<></>}
                                                    <p className="h-fit font-[300] text-[0.9rem] mt-[-0.2rem] text-[rgb(var(--sub))]">{track.artists[0]?.name}</p>
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="mt-[0.7rem]" >
                                                    <button className="" onClick={()=>(HandlePostLike(track.id))}>
                                                        <Image src={LikeSrc} 
                                                            alt='arrow down' 
                                                            width={20} 
                                                            height={20}  
                                                            className=" h-fit"
                                                            style={
                                                                Array.isArray(LikedTracks.data) &&
                                                                LikedTracks.data?.some(
                                                                    like => like.track_id == track.id && like.is_liked == true
                                                                ) ? 
                                                                { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' }
                                                                : 
                                                                {}
                                                                } 
                                                            />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </th>
                                    <th className="font-[300] text-[rgb(var(--sub))]">{Math.floor(track.duration_ms / 60000)}:{Math.floor((track.duration_ms % 60000) / 1000).toString().padStart(2, "0")} </th> 
                                </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
    )
}