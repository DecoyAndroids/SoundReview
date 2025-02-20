'use client'
import styles from "./newsBlock.module.scss"
import Image from 'next/image'
import Link from "next/link";
import ArrowSrc from 'public/Arrow.svg'
import { useRef } from "react";

export const NewsBlock: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="ml-[30px] mr-[30px] flex relative max-w-[calc((100vw-105px-15.2vw))]">
        <button onClick={() => scroll("left")}>
          <Image src={ArrowSrc} alt="left arrow from news block" width={60}/>
        </button>
        <div 
          ref={containerRef}
          className="grow flex overflow-x-auto gap-[30px] scroll-smooth no-scrollbar" 
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {[...Array(9)].map((_, i) => (
            <Link key={i} href="/article" className="block">
              <div className={`min-w-[calc((100vw-239px-15.2vw)/3)] h-[320px] text-white flex flex-col text-lg rounded-xl shadow-lg bg-blue-600 ${styles.newsBlock}`} 
                style={{ scrollSnapAlign: "start" }}
              >
                <div className={`w-full h-[280px] text-white text-lg rounded-xl shadow-lg bg-blue-600 ${styles.newsBlockImage}`}>
                  <h4 className={styles.topNewsBlockText}>Название новости {i + 1}</h4>
                </div>
                <p className={styles.downNewsBlockText}>Автор {i + 1}:</p>
              </div>
            </Link>
          ))}
        </div>
        <button onClick={() => scroll("right")}>
          <Image src={ArrowSrc} alt="right arrow from news block" width={60} className={styles.rightArrow}/>
        </button>
    </div>
    );
};
