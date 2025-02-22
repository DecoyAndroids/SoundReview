'use client'
import styles from "./newsBlock.module.scss"
import Link from "next/link";
import ArrowSrc from 'public/Arrow.svg'
import { useRef } from "react";
import { newsBlockProps } from "axios/app/types/propsTypes.module";
import Image from "next/image";

export const NewsBlock: React.FC<newsBlockProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {newsBlockData} = {...props}
    console.log(newsBlockData)

    const scroll = (direction: "left" | "right") => {
      if (containerRef.current) {
        const scrollAmount = 300;
        containerRef.current.scrollBy({
          left: direction === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    return (
    <div className="ml-[30px] mr-[30px] flex relative max-w-[calc((100vw-105px-12.2vw))]">
        <button onClick={() => scroll("left")}>
          <Image src={ArrowSrc} alt="left arrow from news block" width={60}/>
        </button>
        <div 
          ref={containerRef}
          className="grow flex overflow-x-auto gap-[30px] scroll-smooth no-scrollbar" 
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {newsBlockData?.length ? (newsBlockData.map((_, i) => (
            <Link key={i} href="/article" className="block">
              <div className={`min-w-[calc((100vw-239px-12.2vw)/3)] h-[320px] text-white flex flex-col text-lg rounded-xl shadow-lg bg-blue-600 ${styles.newsBlock}`} 
                style={{ scrollSnapAlign: "start" }}
              >
                <div className={styles.newsBlockImageContainer}>
                <Image alt="" src={newsBlockData[i]!.articleCover} className={`w-full h-full object-cover ${styles.newsBlockImage}`}/>
                  <p className={styles.topNewsBlockText}>{newsBlockData[i]?.title}</p>
                </div>
                <p className={styles.downNewsBlockText}>{newsBlockData[i]?.author}</p>
              </div>
            </Link>
        ))
        ) : ( 
        <p className="text-gray-400">Новостей пока нет</p>
        )}
        </div>
        <button onClick={() => scroll("right")}>
          <Image src={ArrowSrc} alt="right arrow from news block" width={60} className={styles.rightArrow}/>
        </button>
    </div>
    );
};
