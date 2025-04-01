'use client';

import { useState } from 'react';
import type { PopularPlaylistsProps } from '~/app/types/propsTypes.module';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import styles from './profilePlaylists.module.scss'
import { useAuthStore } from '~/store/authStore';

export const ProfilePlaylists: React.FC<PopularPlaylistsProps> = props => {
    const { PopularPlaylistsData } = { ...props };
    const [showAll, setShowAll] = useState(false);
    const displayedPosts = showAll ? PopularPlaylistsData : PopularPlaylistsData.slice(0, 5);

 
    return (
        <div className='space-y-6'>
            {PopularPlaylistsData.length > 0 && (
                <div className='mb-[2em] mr-[4em] rounded-lg bg-[rgb(var(--blackbrown))] text-white'>
                    <h2 className='font-bold w-20 text-32 hover:underline'>Плейлисты:</h2>
                    <Separator className={`mb-5 ml-0 w-[calc(100%)]`} />
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5'>
                    {displayedPosts.map((post) => (
                    <div key={post.id}>
                        <Link href='/playlist'>
                            <Image
                                alt='Cover of playlist'
                                src={post.CoverSrc}
                                priority
                                placeholder='blur'
                                width={256}
                                style={{ width: '13vw', aspectRatio: '1/1', flexWrap: 'wrap' }}
                                className={`rounded-[9px] ${styles.PopularPlaylistCard}`}
                            />
                            <p className='mb-[-12px] text-[16px] leading-[24px] hover:underline'>
                                {post.NamePlaylist}
                            </p>
                            <p className='mb-[-20px] text-[14px] leading-[16px]' style={{ color: 'rgb(var(--sub))' }}>
                                {post.GenresPlaylist}
                            </p>
                        </Link>
                    </div>
                    ))}
                </div>

                    {PopularPlaylistsData.length > 5 && (
                        <div className='mt-4 flex justify-center'>
                            <Button
                                onClick={() => setShowAll(prev => !prev)}
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
