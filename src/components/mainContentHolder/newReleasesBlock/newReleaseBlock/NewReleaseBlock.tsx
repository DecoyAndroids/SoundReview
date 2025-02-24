import styles from './NewReleaseBlock.module.scss'
import type { NewReleaseBlockProps } from "axios/app/types/propsTypes.module"
import { Separator } from "axios/components/ui/separator"
import { wrap } from 'module'
import Image from "next/image"
import Link from 'next/link'



export const NewReleaseBlock:React.FC<NewReleaseBlockProps> = (props) => {
    const {NewReleaseBlockData} = {...props}
    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
      
        return `rgb(${red}, ${green}, 0)`;
      };
    return (
        <div className={`${styles.NewReleaseCard}`}>
            <Link href='/ablum' className=''>
                <Image src={NewReleaseBlockData.coverSrc} priority={true} placeholder="blur" className={`${styles.CoverAlbum}`} alt='cover of album' style={{width:`13vw` , aspectRatio : 1/1, flexWrap: `wrap`}}/>
            </Link>
            <h3 className={`text-[24px] mt-[6px] mb-[0px] font-normal ${styles.NameBand}`}>{NewReleaseBlockData.BandName}</h3>
            <p className={`mt-[-6px] leading-[23px] font-light text-[20px]  ${styles.NameAlbum}`} style={{fontWeight: 300}}>{NewReleaseBlockData.AlbumName}</p>
            <Separator className='mt-[-2px]'/>
            <div>
                <div className="flex">
                        <div className="flex-col mt-[6px]">
                            <p className='m-2.5 my-0 pb-0 leading-[16px] text-[14pt]'>{NewReleaseBlockData.UserScore}</p>
                            <div className={`h-[4px] w-[40px] mt-[-18px] rounded-full overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                    <div className={`h-full transition-all`} 
                                        style={{width:NewReleaseBlockData.UserScore+'%', backgroundColor:getColor(NewReleaseBlockData.UserScore)}}>
                                    </div>
                            </div>
                        </div>
                        <p className=" ml-[5px] mt-[6px] font-light leading-none text-[14pt] " style={{fontWeight: 300}}>оценка критиков</p>
                </div>
                <div className="flex mt-[-12px]">
                        <div className="flex-col mt-[6px]">
                            <p className='m-2.5 my-0 pb-0 leading-none text-[14pt]'>{NewReleaseBlockData.CriticScore}</p>
                            <div className={`h-[4px] w-[40px] mt-[-18px] overflow-hidden rounded-full `} style={{backgroundColor:'rgb(var(--text))'}}>
                                    <div className={`h-full transition-all`} 
                                        style={{width:NewReleaseBlockData.CriticScore+'%', backgroundColor:getColor(NewReleaseBlockData.CriticScore)}}>
                                    </div>
                            </div>
                        </div>
                        <p className=" ml-[5px] mt-[6px] font-light leading-none text-[14pt]" style={{fontWeight: 300}}>оценка пользователей</p>
                </div>
            </div>
        </div>
    )
}