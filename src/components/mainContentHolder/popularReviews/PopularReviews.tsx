"use client"
import { Separator } from "~/components/ui/separator"
import styles from './PopularReviews.module.scss'
import { PopularReview } from "./popularReview/PopularReview"
import type { PopularReviewData, PopularReviewsProps } from "~/app/types/propsTypes.module"
import { useEffect, useState } from "react"

export const PopularReviews:React.FC<PopularReviewsProps> = (props) => {
    const {PopularReviewsData} = {...props}
    const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<PopularReviewData[]>([])
    const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<PopularReviewData[]>([])
    const handleChangeDiscoverState = () => {
        setDiscoverFull(!discoverFull)
    }
    useEffect(()=>{
        setDiscoveredAlbumsFirstPart(PopularReviewsData.slice(0,3))
        setDiscoveredAlbumsSecondPart(PopularReviewsData.slice(3,6))
    },[])
    return(
        <div className="ml-[30px] mr-[30px] mt-[45px]">
            <div className="flex justify-between items-center">
                <p className={`text-[16pt]`}>ПОПУЛЯРНЫЕ РЕЦЕНЗИИ  ПОЛЬЗОВАТЕЛЕЙ</p>
                <button className={`text-[16pt] ${styles.MoreButton}`} onClick={handleChangeDiscoverState}>БОЛЬШЕ</button>
            </div>
            <Separator/>
            <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsFirstPart].map((PopularReviewData) => {
                    return(
                        <PopularReview PopularReviewData={PopularReviewData} key={PopularReviewData.id}/>
                    )
                })}
            </div>
            {discoverFull ? <div className={`ml-[64px] mr-[64px] flex mt-[30px] justify-between`}>
                {[...discoveredAlbumsSecondPart].map((PopularReviewData) => {
                    return(
                        <PopularReview PopularReviewData={PopularReviewData} key={PopularReviewData.id}/>
                    )
                })}
            </div> : <></>}
        </div>
    )
}