import { Separator } from "axios/components/ui/separator"
import { NewReleaseBlock } from "./newReleaseBlock/NewReleaseBlock"
import type {NewReleasesBlockProps} from '../../.././app/types/propsTypes.module'
import styles from './NewReleasesBlock.module.scss'

export const NewReleasesBlock:React.FC<NewReleasesBlockProps> = (props) => {
    const {NewReleaseBlockData} = {...props}
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