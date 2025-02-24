import { Separator } from "axios/components/ui/separator"
import styles from './PopularReviews.module.scss'
import { PopularReview } from "./popularReview/PopularReview"
import { PopularReviewsBlockData } from "axios/app/data/PopularReviews"
import { PopularReviewsData } from "axios/app/types/propsTypes.module"

export const PopularReviews:React.FC = (props) => {
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px]">
            <div className="flex justify-between items-center">
                <p className={`text-[16pt]`}>ПОПУЛЯРНЫЕ РЕЦЕНЗИИ  ПОЛЬЗОВАТЕЛЕЙ</p>
                <button className={`text-[16pt] ${styles.MoreButton}`}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            <div className="ml-[64px] mr-[64px] flex mt-[30px] justify-between">
                    {PopularReviewsBlockData.length>0 ? PopularReviewsBlockData.map((PopularReviewsData, i) => {
                        return (
                            <PopularReview key={i} PopularReviewsData={PopularReviewsData}/>
                        )
                    }): <></>}
            </div>
        </div>
    )
}