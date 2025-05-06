'use client';

import Avatar from '~/public/userAvatar.jpg';
import { useState } from 'react';
import type { PopularReviewsProps } from "~/app/types/propsTypes.module";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { useAuthStore } from "~/store/authStore";

export const ProfileReviews: React.FC<PopularReviewsProps> = (props) => {
    const user = useAuthStore((state) => state.user);
    const { PopularReviewsData } = props;
    const [showAll, setShowAll] = useState(false);
    const displayedPosts = showAll ? PopularReviewsData : PopularReviewsData.slice(0, 4);

    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
    };

    return (
        <div className='space-y-6'>
            {PopularReviewsData.length > 0 && (
                <div className='mb-[2em] mr-[4em] rounded-lg bg-[rgb(var(--blackbrown))] text-white'>
                    <h2 className='font-bold w-20 text-32 hover:underline'>Рецензии:</h2>
                    <Separator className={`mb-5 ml-0 w-[calc(100%)]`} />

                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
                        {displayedPosts.map((post) => (
                            <div key={post.albumName} className='h-fit w-[37vw]'>
                                <div className='flex-col overflow-hidden rounded-xl p-4 text-white'>
                                    <div className='flex items-start'>
                                        <Link href='/album' className={`mb-[9px] object-cover`}>
                                            <Image
                                                priority={true}
                                                placeholder='blur'
                                                alt='album cover'
                                                src={post.albumCover}
                                                className='aspect-square h-[128px] w-[128px] transition-transform duration-300 ease-in-out hover:scale-105'
                                                width={128}
                                                height={128}
                                            />
                                        </Link>
                                        <div className='ml-4 grow'>
                                            <p className='mb-[-10px] mt-[-6px] text-[20px]'>{post.bandName}</p>
                                            <p className='mb-[3px] text-[20px]'>{post.albumName}</p>
                                            <Link href='/profile' className='flex items-center'>
                                                <Image
                                                    priority={true}
                                                    placeholder='blur'
                                                    alt='author avatar'
                                                    src={Avatar}
                                                    className='rounded-full object-cover'
                                                    width={64}
                                                    height={64}
                                                />
                                                <div className='ml-3'>
                                                    <p className='font-semibold mb-[-7px] mt-[-7px] text-[20px]'>
                                                        {user?.email!.split("@")[0]}
                                                    </p>
                                                    <p className='mb-[10px] text-[20px]'>{post.authorScore}</p>
                                                    <div
                                                        className='mt-[-18px] h-[4px] w-[40px] overflow-hidden rounded-full'
                                                        style={{ backgroundColor: 'rgb(var(--text))' }}
                                                    >
                                                        <div
                                                            className='h-full transition-all'
                                                            style={{
                                                                width: `${post.authorScore}%`,
                                                                backgroundColor: getColor(post.authorScore),
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <Link href='/article' className='h-fit text-[14px]'>
                                        <div>
                                            {post.reviewText}...{' '}
                                            <span className='cursor-pointer text-gray-400 hover:underline'>
                                                читать далее
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {PopularReviewsData.length > 4 && (
                        <div className='mt-4 flex justify-center'>
                            <Button
                                onClick={() => setShowAll((prev) => !prev)}
                                className='rounded-lg bg-[rgb(var(--blackamber))] text-white'
                            >
                                {showAll ? 'Свернуть' : 'Показать больше'}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
