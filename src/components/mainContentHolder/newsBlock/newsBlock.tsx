'use client';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import type { newsBlockProps } from '~/app/types/propsTypes.module';
import Image from 'next/image';
import styles from './newsBlock.module.scss';

export const NewsBlock: React.FC<newsBlockProps> = ({ newsBlockData = [] }) => {
    return (
        <div className='relative ml-[1.8vw] mr-[1.5vw] flex max-w-[80vw]'>
            <Carousel
                opts={{
                    align: 'start',
                    loop: false,
                }}
                className='w-full'
            >
                <CarouselContent className='ml-[1vw] gap-[1.5vw]'>
                    {newsBlockData.length > 0 ? (
                        newsBlockData.map(news => (
                            <Link key={news.id} href='/article' className='block'>
                                <CarouselItem
                                    className='text-lg flex h-[20rem] min-w-[25.3vw] max-w-[26vw] flex-col overflow-hidden rounded-2xl bg-[rgb(var(--blackamber))] p-0 text-white'
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div className='group relative h-[85%] w-full overflow-hidden rounded-t-2xl'>
                                        <Image
                                            placeholder='blur'
                                            priority={true}
                                            alt='news cover'
                                            src={news.articleCover}
                                            className='h-full w-full rounded-t-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
                                        />
                                        <div className='absolute bottom-0 left-0 h-fit w-full bg-black/60 p-2'>
                                            <p className='text-sm font-medium h-fit text-16 text-white'>{news.title}</p>
                                        </div>
                                    </div>
                                    <p className='text-sm ml-2 mt-2 h-fit w-full rounded-b-2xl bg-[rgb(var(--blackamber))] text-18 text-white'>
                                        {news.author}
                                    </p>
                                </CarouselItem>
                            </Link>
                        ))
                    ) : (
                        <p className='text-gray-400'>Новостей пока нет</p>
                    )}
                </CarouselContent>
                <CarouselPrevious className='ml-[1vw] bg-[rgb(var(--blackamber))] hover:bg-[rgb(var(--blackamber))]' />
                <CarouselNext className='bg-[rgb(var(--blackamber))] hover:bg-[rgb(var(--blackamber))]' />
            </Carousel>
        </div>
    );
};
