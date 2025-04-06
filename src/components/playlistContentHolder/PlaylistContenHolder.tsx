'use client';
import { useState } from 'react';
import { PopularPlaylistBlockData } from '~/app/data/PopularPlaylists';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import LikeIcon from '~/public/generalIcons/Like.png';

type Props = {
    playlistId: number;
};

export const PlaylistContentHolder = ({ playlistId }: Props) => {
    const playlist = PopularPlaylistBlockData.find(p => p.id === playlistId);

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(playlist?.LikeCount ?? 0);

    if (!playlist) {
        notFound();
    }

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => prev + (isLiked ? -1 : 1));
    };

    const likeIconStyle = isLiked ? { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' } : {};

    return (
        <div className='w-full space-y-6 p-4'>
            <div className='flex flex-col items-start gap-6 md:flex-row'>
                <div className='relative h-64 w-full overflow-hidden rounded-xl shadow-lg md:w-64'>
                    <Image src={playlist.CoverSrc} alt={playlist.NamePlaylist} fill className='object-cover' />
                </div>
                <div className='flex-1 space-y-3'>
                    <h1 className='text-3xl font-bold text-[2rem]'>{playlist.NamePlaylist}</h1>
                    <p className='font-bold text-[1.2rem]'>Автор: {playlist.AuthorName}</p>
                    <div className='flex flex-wrap gap-2 text-[1.2rem]'>
                        жанры:
                        {playlist.GenresPlaylist.map((genre, index) => (
                            <span key={index} className='rounded-full bg-white text-white'>
                                {genre.trim().replace(',', '')}
                            </span>
                        ))}
                    </div>
                    <div className='mt-2 flex items-center'>
                        <button
                            onClick={handleLike}
                            className='mr-[-0.5rem] transform cursor-pointer transition-transform duration-200 hover:scale-110'
                        >
                            <Image alt='Like icon' src={LikeIcon} width={24} height={24} style={likeIconStyle} />
                        </button>
                        <p className='pl-[16px] pt-[4px] text-[18px]'>{likeCount.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <table className=''>
                <tr className='border-2 border-[rgb(var(--blackbrown))] border-b-[rgb(var(--gray))]'>
                    <th className='p-2 pb-0 font-[300] text-[rgb(var(--sub))]'>#</th>
                    <th className='w-full text-left font-[300]'>
                        <p className='mb-[-0.5rem] ml-[0.3rem] h-fit text-[0.9rem]'>Название</p>
                    </th>
                    <th className='font-[300] text-[rgb(var(--sub))]'>
                        <p className='mb-[-0.5rem] ml-[0.3rem] h-fit text-[0.9rem]'>длительность</p>
                    </th>
                </tr>
            </table>
            <p className='text-[1rem]'>Данные загружаются...</p>
        </div>
    );
};
