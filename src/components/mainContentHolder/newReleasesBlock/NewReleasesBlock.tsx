import { Separator } from "axios/components/ui/separator"
import { NewReleaseBlock } from "./newReleaseBlock/NewReleaseBlock"
import albumCover from '../../../../public/DDT_cover_album.png'
import * as types from '../../.././app/types/propsTypes.module'
import styles from './NewReleasesBlock.module.scss'

export const NewReleasesBlock:React.FC<types.NewReleasesBlockProps> = (props) => {
    const {NewReleaseBlockData} = {...props}
    const data :types.NewReleaseBlockData = {
        coverSrc: albumCover, 
        BandName:'ДДТ' ,
        AlbumName:'Плывут по нему облака', 
        CriticScore:87 ,
        UserScore: 78,
    }
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px]">
            <div className="flex justify-between items-center">
                <p className={`text-[16pt]`}>НОВЫЕ РЕЛИЗЫ</p>
                <button className={`text-[16pt] ${styles.MoreButton}`}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            <div className="ml-[64px] mr-[64px] flex mt-[30px] justify-between">
                {[...NewReleaseBlockData].map((NewReleaseBlockData,i) => {
                    return(
                        <NewReleaseBlock NewReleaseBlockData={NewReleaseBlockData} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}