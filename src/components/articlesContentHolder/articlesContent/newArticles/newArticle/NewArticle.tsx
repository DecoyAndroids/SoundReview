'use client'

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Like from "~/public/generalIcons/Like.svg";
import CommentIcon from "~/public/generalIcons/comment.svg";
import Avatar from "~/public/newsBlockCover/eminem.jpg";
import { useState } from "react";
import { NewArticleProps } from "~/app/types/propsTypes.module";


export const NewArticle: React.FC<NewArticleProps> = (props) => {
    const { NewArticleData } = { ...props };
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(NewArticleData.LikeCount);
    const LikeIcon: StaticImageData = Like;

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
                    src={NewArticleData.articleCover} 
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
                    <Image src={NewArticleData.authorCover} alt="Author" width={24} height={24} className="rounded-full aspect-square" />
                    <Link href="/profile">
                    <span className="text-sm text-gray-300">{NewArticleData.author}</span>
                    </Link>
                </div>
                <Link href="/article">
                    <h3 className="text-white text-lg font-semibold mt-2 hover:underline">
                    {NewArticleData.title}
                    </h3>
                </Link>
                
                <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
                    <span>{NewArticleData.data}</span>
                    <div className="flex items-center gap-3">
                            <span
                                onClick={handleLikeClick}
                                className='transform cursor-pointer mr-[-0.5rem] transition-transform duration-200 hover:scale-110'
                            >
                                <Image alt='like icon' src={LikeIcon} width={18} height={18} style={likeIconStyle}/>
                            </span>
                            {likeCount}
                        <div className="flex items-center gap-1 mr-[-0.5rem] transform cursor-pointer transition-transform duration-200 hover:scale-110">
                            <Image src={CommentIcon} alt="Comments" width={18} height={18} /> 
                        </div>
                        {NewArticleData.CommentCount}
                    </div>
                </div>
            </div>
        </div>
    );
};
