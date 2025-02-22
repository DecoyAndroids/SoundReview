import { StaticImageData } from "next/image";

export type newsBlockProps = {
    newsBlockData: Array<newsBlockData>,
}

export type newsBlockData = {
    articleCover: StaticImageData,
    title: String,
    author: String,
} 