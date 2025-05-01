'use client'
import Image from "next/image";
import LikeSrc from "~/public/generalIcons/Like.png"
import FillLikeSrc from "~/public/generalIcons/LikeFill.png"
import ArrowSrc from '~/public/generalIcons/ChatGPT Image 12 апр. 2025 г., 11_55_43.png'
import Link from "next/link";
import { useParams } from "next/navigation";
import { useToast } from "~/hooks/Shadcn/use-toast";
import { useAlbumGetAllUserLike } from "~/hooks/AlbumHooks/useAlbumGetAllUserLike";
import { useAlbumUpdateUserLike } from "~/hooks/AlbumHooks/useAlbumUpdateUserLike";
import { useAuthStore } from "~/store/authStore";


export const FavAlbumsList:React.FC = ()=>{
    const { id } = useParams();
    const { toast } = useToast()
    const updateLike = useAlbumUpdateUserLike()


    const user = useAuthStore((state) => state.user);
    const userData = useAuthStore((state)=>state.userData)
    
    const isUserAcc = user?.id == id ? true : false
    const userId = Array.isArray(id) ? id[0] : id ?? '';
    const userIdSafe = userId ?? '';
    
    const LikedAlbums = useAlbumGetAllUserLike(userIdSafe, {enabled: !!userIdSafe,})

    const handleClick = async(albumId : string, likeStatus:boolean) => {
        try{
            await updateLike.mutateAsync({albumId:albumId, userId:userIdSafe, isLiked: likeStatus, updateTime:false})               
            const index = LikedAlbums.data?.findIndex(t => t.album_id === albumId)
            if (typeof index == 'number'){
                LikedAlbums.data![index]!.is_liked = !LikedAlbums.data![index]!.is_liked    
            }
        }catch(error){
            console.error('Ошибка при лайке:', error)
        }
    }

    return(
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded-[9px] relative overflow-visible p-3 pt-0">
            <div className="flex ml-12 gap-2 mb-3">
                <Link href={`/profile/${userIdSafe}`} className="rotate-90 mt-5 h-fit mr-[0.3rem] my-auto transition-transform duration-300 hover:-translate-x-2">
                        <Image src={ArrowSrc} alt="link to list favorite tracks" width={32} height={32} />
                </Link>
                <h2 className='font-bold w-fit text-32 hover:underline mt-3'>Любимые альбомы:</h2>
            </div>
            {!LikedAlbums.isFetching ? 
                <div>
                    {LikedAlbums.data?.length! > 0 ? 
                        <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-10  gap-3 gap-y-5">
                            {LikedAlbums.data?.map((album, i)=>(
                                <div key={album.album_id} className="m-auto">
                                    <div className="relative">
                                        <Image src={album.album_cover_url} priority={true} width={200} height={200} quality={90} placeholder="blur" blurDataURL='/api/placeholder' alt='ALBUM COVER' className="w-[15rem] h-fit rounded-sm "/>
                                            <Link href={`/album/${album.album_id}`}>
                                                <div className="absolute bottom-0 right-0 z-10 w-full h-full bg-[rgb(var(--blackbrown))] opacity-0 hover:opacity-60 duration-300" >                                                
                                                    {isUserAcc &&
                                                        <button className=" h-fit w-fit" onClick={(e)=>{
                                                            handleClick(album.album_id, !album.is_liked)
                                                            let letter = `Альбом "${album.album_name}"  ${!album.is_liked ? 'добавлен в любимые' : 'убран из любимых'}`
                                                            toast({description: letter})
                                                            e.preventDefault()
                                                            e.stopPropagation()}}>
                                                            <div className="absolute hover:scale-105 transition-transform duration-300 bg-[rgb(var(--codgray))] hover:bg-[rgb(var(--black))] right-0 bottom-0 p-3 rounded-full w-[2.5rem] h-[2.5rem] mr-2 mb-2">
                                                                <Image src={!album.is_liked ? LikeSrc : FillLikeSrc} alt='arrow down' width={20} height={20} className="w-[1.2rem] aspect-square" />
                                                            </div>
                                                        </button>
                                                    }                                                
                                                </div>
                                            </Link>                                        
                                       </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[1.1rem] h-fit">{album.album_name}</p>
                                        <p className="text-[1rem] text-[rgb(var(--sub))] h-fit mt-[-0.3rem]">{album.authors}</p>
                                    </div>
                                </div>                                
                            ))}
                        </div>
                    : 
                        <div>
                            Вы не добавили в любымые еще не один альбом, хотите это исправить?
                            
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