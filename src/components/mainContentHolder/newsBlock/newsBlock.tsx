'use client' 
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import type { newsBlockProps } from "~/app/types/propsTypes.module";
import Image from "next/image";

export const NewsBlock: React.FC<newsBlockProps> = ({ newsBlockData = [] }) => {
    return (
        <div className="ml-[1.8vw] mr-[1.5vw] flex relative max-w-[80vw]">
            <Carousel 
                opts={{
                    align: "start",
                    loop: false,
                }}
                className="w-full"
            >
                <CarouselContent className="gap-[1.5vw] ml-[1vw]">
                    {newsBlockData.length > 0 ? (
                        newsBlockData.map((news) => (
                            <Link key={news.id} href="/article" className="block">
                                <CarouselItem
                                    className="min-w-[25.3vw] max-w-[26vw] h-[20rem] text-white flex flex-col text-lg rounded-2xl overflow-hidden p-0 bg-[rgb(var(--blackamber))]" 
                                    style={{ scrollSnapAlign: "start" }}
                                >
                                    <div className="relative w-full h-[85%]">
                                        <Image
                                            placeholder="blur"
                                            priority={true}
                                            alt="news cover" 
                                            src={news.articleCover} 
                                            className="w-full h-full object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute h-fit w-full bottom-0 left-0 w-full bg-black/60 p-2">
                                            <p className="text-white h-fit text-sm font-medium text-16" >{news.title}</p>
                                        </div>
                                    </div>
                                    <p className="text-white h-fit text-sm ml-2 mt-2 text-18 w-full rounded-b-2xl bg-[rgb(var(--blackamber))]" >{news.author}</p>
                                </CarouselItem>
                            </Link>
                        ))
                    ) : ( 
                        <p className="text-gray-400">Новостей пока нет</p>
                    )}
                </CarouselContent>
                <CarouselPrevious className="ml-[1vw]" />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
