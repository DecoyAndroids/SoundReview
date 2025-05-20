import styles from './NewReleaseBlock.module.scss'
import type { NewReleaseBlockProps } from "~/app/types/propsTypes.module"
import { Separator } from "~/components/ui/separator"
import Image from "next/image"
import Link from 'next/link'
import { useAlbumAverageRating } from '~/hooks/AlbumHooks/useAlbumAverageRating'





export const NewReleaseBlock:React.FC<NewReleaseBlockProps> = (props) => {
    const {NewReleaseBlockData} = {...props}
    const averageRatingQuery = useAlbumAverageRating(NewReleaseBlockData.id);
    const srcUrl = NewReleaseBlockData.images[2]?.url
    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
      };

    return (
        <div className={`${styles.NewReleaseCard} w-[15.9rem]`}>
            <Link href={`/album/${NewReleaseBlockData.id}`} className=''>
                {srcUrl ? 
                <Image src={srcUrl} priority={true} placeholder="blur" blurDataURL='/api/placeholder' width={130} height={130} className={`${styles.CoverAlbum}`} alt='cover of album' style={{width:`15.9rem` , aspectRatio : 1/1, flexWrap: `wrap`}}/>
                : <></>}
                </Link>
            <p className={`leading-[1.2rem] mt-[0.5em] font-[500] h-fit text-[1.2rem]`}>{NewReleaseBlockData.name}</p>
            <p className={`leading-[1.5rem] text-[1rem] mb-[-0.7em] font-[300] `}>{NewReleaseBlockData.artists[0]!.name}</p>
            
            <Separator className='mt-[-2px]'/>
            <div>
                {averageRatingQuery.isLoading ?
                    <></>
                :
                    <div className="flex">
                        {/* <div className="flex-col mt-[6px]">
                            <p className='m-2.5 my-0 pb-0 leading-[16px] text-[14pt]'>67</p> 
                            <div className={`h-[4px] w-[40px] mt-[-18px] rounded-full overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                    <div className={`h-full transition-all`} 
                                        style={{width:67+'%', backgroundColor:getColor(67)}}> 
                                    </div>
                            </div>
                        </div> */}
                        <p className='ml-[0.3rem]'>NR</p>
                        <p className=" ml-[5px] mt-[6px] font-light leading-none text-[14pt] " style={{fontWeight: 300}}>оценка критиков</p>
                    </div>
                }
                {averageRatingQuery.isLoading ?
                    <></>
                :
                    (averageRatingQuery.data?.totalVotes !== 0 ? 
                        <div className="flex mt-[-1rem]">
                            <div className="flex-col mt-[6px]">
                                <p className='m-2.5 my-0 pb-0 leading-none text-[14pt]'>{averageRatingQuery.data?.average}</p>
                                <div className={`h-[4px] w-[40px] mt-[-18px] overflow-hidden rounded-full `} style={{backgroundColor:'rgb(var(--text))'}}>
                                    <div className={`h-full transition-all`} style={{width:String(Number(averageRatingQuery.data?.average))+'%', backgroundColor:getColor(averageRatingQuery.data?.average ?? 0)}}/>
                                </div>
                            </div>
                            <p className=" ml-[5px] mt-[6px] font-light leading-none text-[14pt]" style={{fontWeight: 300}}>оценка пользователей</p>
                        </div>
                    :
                        <div className="flex mt-[-1rem]">
                            <p className='ml-[0.3rem]'>NR</p>
                            <p className=" ml-[5px] mt-[5px] font-light leading-none text-[14pt] " style={{fontWeight: 300}}>оценка пользователей</p>
                        </div>)}
            </div>
        </div>
    )
}