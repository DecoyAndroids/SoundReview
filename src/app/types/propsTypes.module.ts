import { StaticImageData } from "next/image"

export type NewReleaseBlockProps = {
    NewReleaseBlockData : NewReleaseBlockData
}

export type NewReleaseBlockData = {
    coverSrc : StaticImageData,
    BandName : string,
    AlbumName : string,
    CriticScore: number,
    UserScore: number,
}

export type NewReleasesBlockProps = {
    NewReleaseBlockData : Array<NewReleaseBlockData>
}