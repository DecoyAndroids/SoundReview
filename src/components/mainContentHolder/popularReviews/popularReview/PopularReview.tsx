"use client"
import styles from "./PopularReviews.module.scss";
import Like from "~/public/popularReviews/Like.png";
import Comment from "~/public/popularReviews/comment.png";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import type { PopularReviewProps } from "~/app/types/propsTypes.module";
import Link from "next/link";

export const PopularReview: React.FC<PopularReviewProps> = (props) => {
    const { PopularReviewData: PopularReviewData } = { ...props };
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(PopularReviewData.likeCount);
    const LikeIcon: StaticImageData = Like;
    const CommentIcon: StaticImageData = Comment;

    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
    };

    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked_${PopularReviewData.albumName}`);
        if (likedStatus === "true") {
            setIsLiked(true);
        }
    }, [PopularReviewData.albumName]);
    
    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked_${PopularReviewData.albumName}`);
        if (likedStatus === "true") {
            setIsLiked(true);
        }
        if (localStorage.getItem(`likeCount_${PopularReviewData.albumName}`) !== null){
            setLikeCount(Number(localStorage.getItem(`likeCount_${PopularReviewData.albumName}`)))
        }
    }, []);

    const handleLikeClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        const newLikeCount = newLikeStatus ? likeCount + 1 : likeCount - 1;
        setLikeCount(newLikeCount);
        localStorage.setItem(`liked_${PopularReviewData.albumName}`, newLikeStatus.toString());
        localStorage.setItem(`likeCount_${PopularReviewData.albumName}`, newLikeCount.toString());
    };

    const likeIconStyle = isLiked ? { filter: "invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)" } : {};

    return (
        <div className="w-[25vw] h-fit">
            <div className="flex-col p-4 rounded-xl text-white overflow-hidden">
                <div className="flex items-start">
                    <Link href="/ablum" style={{ aspectRatio: 1 }} className={`object-cover mb-[9px] w-[128px] h-[128px] ${styles.albumCover}`}>
                        <Image priority={true} placeholder="blur" alt="album cover" src={PopularReviewData.albumCover} className="w-[128px] h-[128px]" width={128} height={128} />
                    </Link>
                    <div className="ml-4 w-full">
                        <p className="text-[20px] mt-[-6px] mb-[-10px]">{PopularReviewData.bandName}</p>
                        <p className="text-[20px] mb-[3px]">{PopularReviewData.albumName}</p>
                        <Link href="/profile" className="flex items-center">
                            <Image priority={true} placeholder="blur" alt="author avatar" src={PopularReviewData.authorAvatar} className="object-cover rounded-full" width={64} height={64} />
                            <div className="ml-3">
                                <div className="flex items-center">
                                    <p className="text-[20px] font-semibold mt-[-7px] mb-[-7px]">{PopularReviewData.author}</p>
                                </div>
                                <div>
                                    <p className="text-[20px] mb-[10px]">{PopularReviewData.authorScore}</p>
                                    <div className={`h-[4px] w-[40px] mt-[-18px] overflow-hidden rounded-full`} style={{ backgroundColor: 'rgb(var(--text))' }}>
                                        <div className="h-full transition-all" style={{ width: `${PopularReviewData.authorScore}%`, backgroundColor: getColor(PopularReviewData.authorScore) }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link href="/article" className="h-fit text-[14px]">
                    <div>
                        {PopularReviewData.reviewText}
                        ... <span className="hover:underline cursor-pointer text-gray-400">читать далее</span>
                    </div>
                </Link>
                <div className="flex items-center mt-3 text-gray-400 text-sm">
                    <p className="flex items-center mr-4">
                        <span onClick={handleLikeClick} className="mr-1 cursor-pointer transition-transform duration-200 transform hover:scale-110">
                            <Image alt="like icon" src={LikeIcon} width={20} height={20} style={likeIconStyle}/>
                        </span>
                        {likeCount}
                    </p>
                    <p className="flex items-center">
                        <span className="mr-1"><Image alt="comment icon" src={CommentIcon} width={18} height={18} /></span> {PopularReviewData.commentCount}
                    </p>
                </div>
            </div>
        </div>
    );
};
