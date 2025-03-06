import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from './PopularPlaylist.module.scss'
import LikeIcon from "../../../../../public/generalIcons/Like.png"; 
import type { PopularPlaylistProps } from "axios/app/types/propsTypes.module";
import Link from "next/link";
import { useEffect, useState } from "react";

export const PopularPlaylistBlock: React.FC<PopularPlaylistProps> = (props) => {
    const { PopularPlaylistData } = { ...props };
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(PopularPlaylistData.LikeCount);

    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked_${PopularPlaylistData.NamePlaylist}`);
        if (likedStatus === "true") {
            setIsLiked(true);
        }
    }, [PopularPlaylistData.NamePlaylist]);

    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked_${PopularPlaylistData.NamePlaylist}`);
        if (likedStatus === "true") {
            setIsLiked(true);
        }
        if (localStorage.getItem(`likeCount_${PopularPlaylistData.NamePlaylist}`) !== null) {
            setLikeCount(Number(localStorage.getItem(`likeCount_${PopularPlaylistData.NamePlaylist}`)));
        }
    }, []);

    const handleLikeClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        const newLikeCount = newLikeStatus ? likeCount + 1 : likeCount - 1;
        setLikeCount(newLikeCount);
        localStorage.setItem(`liked_${PopularPlaylistData.NamePlaylist}`, newLikeStatus.toString());
        localStorage.setItem(`likeCount_${PopularPlaylistData.NamePlaylist}`, newLikeCount.toString());
    };

    const likeIconStyle = isLiked ? { filter: "invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)" } : {};

    return (
        <div>
            <Link href="/playlist">
                <Image
                    alt="Cover of playlist"
                    src={PopularPlaylistData.CoverSrc}
                    priority
                    placeholder="blur"
                    width={256}
                    style={{ width: "13vw", aspectRatio: "1/1", flexWrap: "wrap" }}
                    className={`rounded-[9px] ${styles.PopularPlaylistCard}`}
                />
                <p className="text-[16px] leading-[24px] mb-[-12px] hover:underline">
                    {PopularPlaylistData.NamePlaylist}
                </p>
                <p className="text-[14px] leading-[16px] mb-[-20px]" style={{ color: "rgb(var(--sub))" }}>
                    {PopularPlaylistData.GenresPlaylist}
                </p>
            </Link>
            <div className="flex mt-[0px]">
                <button className={`p-0 m-0 ${styles.LikeButton}`} onClick={handleLikeClick}>
                    <Image alt="Like icon" style={likeIconStyle} src={LikeIcon} />
                </button>
                <p className="text-[14px] pl-[6px] pt-[7px]">{likeCount}</p>
            </div>
        </div>
    );
};
