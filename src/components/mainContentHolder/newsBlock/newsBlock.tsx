'use client'
import styles from "./newsBlock.module.scss"
import Link from "next/link";
import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "~/components/ui/carousel"
import type { newsBlockProps} from "~/app/types/propsTypes.module";
import Image from "next/image";


export const NewsBlock: React.FC<newsBlockProps> = ({ newsBlockData = [] }) => {
  

    return (
        <div className="ml-[30px] mr-[30px] flex relative max-w-[80.1vw]">
            <Carousel 
            opts={{
            align: "start",
            }}
            className="w-full">
            <CarouselContent>
                {newsBlockData.length > 0 ? (
                    newsBlockData.map((newsBlockData) => (
                        <Link key={newsBlockData.id} href="/article" className="block">
                            <CarouselItem
                                className={`md:basis-1/2 lg:basis-1/3 min-w-[25vw] ml-[2vw] h-[320px] text-white flex flex-col text-lg rounded-xl  ${styles.newsBlock}`} 
                                style={{ scrollSnapAlign: "start" }}
                            >
                                <div className={styles.newsBlockImageContainer}>
                                    <Image
                                        placeholder="blur"
                                        priority={true}
                                        alt="news cover" 
                                        src={newsBlockData.articleCover} 
                                        className={`w-full h-full object-cover ${styles.newsBlockImage}`}
                                    />
                                    <p className={styles.topNewsBlockText}>{newsBlockData.title}</p>
                                </div>
                                <p className={styles.downNewsBlockText}>{newsBlockData.author}</p>
                            </CarouselItem>
                        </Link>
                    ))
                ) : ( 
                    <p className="text-gray-400">Новостей пока нет</p>
                )}
            </CarouselContent>
            <CarouselPrevious className="ml-[1.5vw]"/>
            <CarouselNext/>
            </Carousel>
        </div>
    );
};
