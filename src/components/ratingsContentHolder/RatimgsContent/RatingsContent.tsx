'use client'
import React, { useState, useEffect } from "react";
import { RatingsData } from "~/app/data/ratingsData_high_scores";
import type { RatingsDataType } from "~/app/types/propsTypes.module";
import { AlbumCard } from "./AlbumCard";
import { Separator } from "~/components/ui/separator";

type Album = typeof RatingsData[number];

export const RaitingsContent = () => {
    const [year, setYear] = useState<number | null>(null);
    const [genre, setGenre] = useState<string>("");
    const [minReviews, setMinReviews] = useState<number>(5);
    const [filtered, setFiltered] = useState<Album[]>(RatingsData);
      useEffect(() => {
        let filteredAlbums = RatingsData;
        if (year) {
          filteredAlbums = filteredAlbums.filter((a) => a.reelaseYear === year);
        }
        if (genre) {
          filteredAlbums = filteredAlbums.filter((a) => a.genre.includes(genre));
        }
        if (minReviews) {
          filteredAlbums = filteredAlbums.filter((a) => a.reviewCount >= minReviews);
        }
        setFiltered(filteredAlbums);
        console.log(filteredAlbums, year)
      }, [year, genre, minReviews]); 
    
      
    return(
        <div className="mx-3 grow flex flex-col gap-3">
            <h3 className=" text-[2rem] font-[500]">Самые оцененые альбомы 2025 года</h3>    
            <div className="flex gap-2">
                <div>
                    <label>Год </label>
                    <select className="bg-[rgb(var(--cursedblack))] p-1 rounded-lg" onChange={(e) => setYear(parseInt(e.target.value))} defaultValue="">
                        <option value={2025}>2025-ый</option>
                        <option value={2024}>2024-ый</option>
                        <option value={2023}>2023-ый</option>
                        <option value={2022}>2022-ый</option>
                        <option value={2021}>2021-ый</option>
                        <option value={2020}>2020-ый</option>
                    </select>
                </div>   
                <div>
                    <label>Жанр </label>
                    <select className="bg-[rgb(var(--cursedblack))] p-1 rounded-lg" onChange={(e) => setGenre(e.target.value)} defaultValue="">
                        <option value=''>Все</option>
                        <option value='Альтернативный Рок'>Альтернативный Рок</option>
                        <option value='Арт Поп'>Арт Поп</option>
                        <option value='Black Metal'>Black Metal</option>
                        <option value='Фолк'>Фолк</option>
                        <option value='Кантри'>Кантри</option>
                        <option value='Death Metal'>Death Metal</option>
                        <option value='Панк'>Панк</option>
                        <option value='Хип-хоп'>Хип-хоп</option>
                        <option value='Рок'>Рок</option>
                        <option value='R&B'>R&B</option>
                    </select>
                </div> 
                <div>
                    <label>Мин. Рецензий </label>
                    <select className="bg-[rgb(var(--cursedblack))] p-1 rounded-lg" onChange={(e) => setMinReviews(parseInt(e.target.value))} defaultValue={5}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                </div>  

            </div>
            <Separator className="bg-[rgb(var(--sub))] h-[0.1rem] rounded-lg"/>
            {filtered.slice(0,50).map((album, i )=>(
                <AlbumCard data={album} i={i} key={album.id}/>
            ))}
        </div>
    )
}