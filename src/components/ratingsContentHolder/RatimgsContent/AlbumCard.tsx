import Image from 'next/image'
import albumSrc from '~/public/newReleasesCover/album_placeholder.jpg'
import styles from './AlbumCard.module.scss'
import { AlbumCardProps } from '~/app/types/propsTypes.module';
export const AlbumCard:React.FC<AlbumCardProps> = (props)=>{
    const {data,i} = {...props}
    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
      };
    return(
        <div className="bg-[rgb(var(--anthracitegrey))] rounded-lg flex gap-3">
            <Image
                    alt="Cover of playlist"
                    src={albumSrc}
                    priority
                    placeholder="blur"
                    width={300}
                    style={{ aspectRatio: "1/1", flexWrap: "wrap" }}
                    className={`rounded-[9px] ${styles.PopularPlaylistCard}`}
                />
            <div className='flex flex-col gap-2'>
                <h3 className='h-fit text-[2.3rem] font-[500] mb-[-1rem]'>{i+1}. {data.albumName}</h3>
                <h3 className='h-fit text-[2rem]'>{data.bandName}</h3>
                <div className="flex flex-col 2xl:flex-row bg-[rgb(var(--gray))] p-1 px-3 rounded-lg ">
                    <div>
                        <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка критиков</p>
                        <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> {data.reviewAvgScore}</p>                          
                        <div className={`h-[0.3rem] w-[10rem] m-auto mb-[1rem] overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                            <div className={`h-full transition-all`} style={{width:data.reviewAvgScore+'%', backgroundColor:getColor(data.reviewAvgScore)}}/> 
                        </div>
                    </div>
                    <p className="my-auto font-[300] text-[rgb(var(--sub))] text-[1rem]">на основе <b>{data.reviewCount}</b> оценок</p>    
                </div>
                <div>
                    <p className='text-[1rem] h-fit text-[rgb(var(--sub))] font-[300]'>{data.genre}</p>
                    <p className='text-[1rem] h-fit text-[rgb(var(--sub))] font-[300]'>Выпущен {data.releaseDate}</p>
                </div>
            </div>
        </div>
    )
}