'use client'

import Image from "next/image";
import Link from "next/link";
import Like from "~/public/generalIcons/Like.png";
import CommentIcon from "~/public/generalIcons/comment.png";
import { useState } from "react";
import { type BestArticleProps } from "~/app/types/propsTypes.module";


export const BestArticle: React.FC<BestArticleProps> = (props) => {
    const { BestArticleData } = { ...props };
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(BestArticleData.LikeCount);

    const handleLikeClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        const newLikeCount = newLikeStatus ? likeCount + 1 : likeCount - 1;
        setLikeCount(newLikeCount);
        localStorage.setItem(`liked_PopularArticles`, newLikeStatus.toString());
        localStorage.setItem(`likeCount_PopularArticles`, newLikeCount.toString());
    };

    const likeIconStyle = isLiked ? { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' } : {};

    return (
        <div className="w-[330px] bg-[rgb(var(--gray))] rounded-t-lg overflow-hidden shadow-lg">
            <Link href="/article">
            <div className="relative w-full h-[200px] overflow-hidden group">
                <Image 
                    src={BestArticleData.articleCover} 
                    alt="Article cover" 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-sm p-2 flex items-center gap-2">
                    <span className="text-lg">☰</span> Статья
                </div>
            </div>
            </Link>

            <div className="p-4">
                <div className="flex items-center gap-2">
                    <Image src={BestArticleData.authorCover} alt="Author" width={24} height={24} className="rounded-full aspect-square" />
                    <Link href="/profile">
                    <span className="text-sm text-gray-300">{BestArticleData.author}</span>
                    </Link>
                </div>
                <Link href="/article">
                    <h3 className="text-white text-lg font-semibold mt-2 hover:underline">
                    {BestArticleData.title}
                    </h3>
                </Link>
                
                <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
                    <span>{BestArticleData.data}</span>
                    <div className="flex items-center gap-3">
                            <span
                                onClick={handleLikeClick}
                                className='transform cursor-pointer mr-[-0.5rem] transition-transform duration-200 hover:scale-110'
                            >
                                <Image alt='like icon' src={Like} width={18} height={18} style={likeIconStyle}/>
                            </span>
                            {likeCount}
                        <div className="flex items-center gap-1 mr-[-0.5rem] transform cursor-pointer transition-transform duration-200 hover:scale-110">
                            <Image src={CommentIcon} alt="Comments" width={18} height={18} /> 
                        </div>
                        {BestArticleData.CommentCount}
                    </div>
                </div>
            </div>
        </div>
    );
};
