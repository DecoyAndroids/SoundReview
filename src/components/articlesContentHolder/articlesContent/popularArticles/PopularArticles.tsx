'use client';

import Image, { StaticImageData } from 'next/image';
import { useAuthStore } from '~/store/authStore';
import Like from '~/public/popularReviews/Like.png';
import Comment from '~/public/popularReviews/comment.png';
import Lamar from '~/public/popularArticles/Lamar.jpg';
import Avatar1 from '~/public/popularArticles/avatar1.jpg';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '~/components/ui/button';

export const PopularArticles: React.FC = () => {
    const [isLiked, setIsLiked] = useState(false);
    const user = useAuthStore((state) => state.session);
    const [likeCount, setLikeCount] = useState(999);
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
        <div className='flex h-full flex-col ml-[30px] mr-[30px]'>
            <div className='flex grow'>
            <h1 className='text-[2rem] font-500'>Популярное</h1>
            {/* {user?.access_token ? 
            <Link href='createArticle' className='ml-auto'> <Button className='ml-auto w-fit mt-1.5 hover:bg-[rgb(var(--white))] hover:text-[rgb(var(--cursedblack))] transition duration-300'>Написать статью</Button></Link>
            : <></> } */}
            </div>
            <div className='flex h-[20rem] overflow-hidden rounded-l-lg bg-[rgb(var(--gray))]'>
                <div className='relative w-1/3 overflow-hidden'> 
                    <Link href={`/article/${13}`} className='block group'> 
                        <Image
                            src={Lamar}
                            alt='Article Image'
                            fill
                            className='rounded-l-lg object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                        />
                    </Link>
                </div>
                <div className='flex w-2/3 flex-col justify-between p-4'>
                    <h3 className='mb-2 text-[2rem] font-500'>Как черная музыка изменила мир?</h3>
                    <p className='m-4 ml-0 h-fit text-[1rem] font-300'>
                        Чёрная музыка – это не просто набор жанров и стилей, а мощный культурный феномен, который
                        кардинально изменил мир. Её влияние выходит далеко за рамки музыкальной индустрии, затрагивая
                        общество, политику, искусство, моду и даже технологии. От духовных песнопений африканских рабов
                        в Америке до всемирного господства хип-хопа и R&B – чёрная музыка прошла долгий путь, став
                        символом борьбы за права...
                    </p>
                    <div className='mt-auto flex items-center gap-3'>
                        <Link href={'/userProfile'} className='mt-auto flex items-center gap-3'>
                            <Image src={Avatar1} alt='Author' width={32} height={32} className='rounded-full' />
                            <span className='text-sm p-1.5 pl-0 hover:underline'>Евгений Горошин</span>
                        </Link>
                        <div className='text-sm ml-auto flex items-center gap-2 text-gray-400'>
                            <span
                                onClick={handleLikeClick}
                                className='transform cursor-pointer transition-transform duration-200 hover:scale-110'
                            >
                                <Image alt='like icon' src={LikeIcon} width={20} height={20} style={likeIconStyle} />
                            </span>
                            {likeCount}

                            <span className='transform cursor-pointer transition-transform duration-200 hover:scale-110'>
                                <Link href={`/article/${13}`} className='block'>
                                  <Image alt='comment icon' src={Comment} width={18} height={18} />
                                </Link>
                            </span>
                            {23}
                            <span className='text-sm p-1.5 pr-0'>1 февраля</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
