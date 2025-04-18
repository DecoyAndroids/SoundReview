import Image from "next/image"
import { useRef, useState } from "react"
import { Separator } from "~/components/ui/separator"
import ArrowDownSrc from '~/public/generalIcons/ChatGPT Image 12 апр. 2025 г., 11_55_43.png'
import LikeSrc from "~/public/generalIcons/Like.png"
import CommentSrc from "~/public/generalIcons/comment.png"
import { useAlbumPostLike } from "~/hooks/AlbumHooks/useAlbumPostLike"
import { useAlbumCountLikes } from "~/hooks/AlbumHooks/useAlbumCountLikes"
import { useParams } from "next/navigation"
import { useAuthStore } from "~/store/authStore"
import { useAlbumUserLike } from "~/hooks/AlbumHooks/useAlbumUserLike"
import { useAlbumUpdateUserLike } from "~/hooks/AlbumHooks/useAlbumUpdateUserLike"
import { useQueryClient } from '@tanstack/react-query';


export const AlbumDataMiniBlock:React.FC = () => {
    const [dataWindowState, setDataWindowState] = useState(false)
    
    const postLike = useAlbumPostLike()
    const updateLike = useAlbumUpdateUserLike()
    const queryClient = useQueryClient();
    const { id } = useParams();

    const user = useAuthStore((state) => state.user);

    const albumId = Array.isArray(id) ? id[0] : id ?? '';
    const albumIdSafe = albumId ?? '';
    const userIdSafe = user?.id ?? '';

    const LikeCount = useAlbumCountLikes(albumIdSafe)
    const userLikeQuery = useAlbumUserLike(albumIdSafe, userIdSafe, {enabled: !!albumIdSafe && !!userIdSafe,}); 


    const HandleClickChangeState = ()=>{
        setDataWindowState(!dataWindowState)
    }

    const HandleClickPostLike = async () => {
        try {
            if (userLikeQuery.data?.LikeRow === true) {
                await updateLike.mutateAsync({ albumId: albumIdSafe, userId: userIdSafe, isLiked: !userLikeQuery.data?.isLiked,})
                queryClient.invalidateQueries({queryKey: ['albumCountLikes', albumId],});
                queryClient.invalidateQueries({queryKey: ['albumUserLike', albumId],});
            } else {
                await postLike.mutateAsync({ albumId: albumIdSafe, userId: userIdSafe, isLiked: true,})
                queryClient.invalidateQueries({queryKey: ['albumCountLikes', albumId],});
                queryClient.invalidateQueries({queryKey: ['albumUserLike', albumId],});
            }
        } catch (error) {
            console.error('Ошибка при лайке:', error)
        }
      }
      
    return(
        <div className="bg-[rgb(var(--gray))] rounded-b-lg p-1 h-fit">
            {!dataWindowState ? 
            <div className="mr-0 ml-auto w-fit" >
                <button className="m-1 mx-2" onClick={HandleClickChangeState}>
                    <Image src={ArrowDownSrc} alt='arrow down' width={16}  className=""/>
                </button>
            </div>
            :
            <div>
                <Separator className="bg-[rgb(var(--sub))] m-auto mb-[0.3rem]"/>

                <div className="flex h-fit gap-3">
                    {!LikeCount.isLoading ? 
                    <div className="flex gap-1 mb-[-0.6rem] ml-[0.3rem]" >
                        <button className="mt-[-0.5rem]" onClick={HandleClickPostLike}>
                            <Image src={LikeSrc} 
                                alt='arrow down' 
                                width={20} 
                                height={20}  
                                className=" h-fit" 
                                style={userLikeQuery.data?.isLiked
                                    ? { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' }
                                    : {}}/>
                        </button>
                        <p className="text-[1.2rem] ">{LikeCount.data?.totalLikes! ?? 0}</p>
                    </div>
                    :
                    <div>

                    </div>}
                    <div className="flex gap-1 mb-[-0.6rem] ml-[0.3rem]" >
                        <button className="mt-[-0.5rem]">
                            <Image src={CommentSrc} alt='arrow down' width={20} height={20}  className=" h-fit"/>
                        </button>
                        <p className="text-[1.2rem] ">3</p>
                    </div>

                    <div className="mr-0 ml-auto w-fit" >
                        <button className="m-1 mx-2" onClick={HandleClickChangeState}>
                            <Image src={ArrowDownSrc} alt='arrow down' width={16}  className="rotate-180"/>
                        </button>
                    </div>
                </div>

            </div>}
        </div>
    )
} 