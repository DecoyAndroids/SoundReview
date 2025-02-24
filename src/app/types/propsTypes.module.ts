import type { StaticImageData } from "next/image"

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

export type newsBlockProps = {
    newsBlockData: Array<newsBlockData>,
}

export type newsBlockData = {
    articleCover: StaticImageData,
    title: string,
    author: string,
} 

export type PopularReviewProps = {
    PopularReviewData: PopularReviewData;
}

export type PopularReviewData = {
    bandName: string;
    albumName: string;
    albumCover: StaticImageData;
    author: string;
    authorAvatar: StaticImageData;
    authorScore: number;
    reviewText: string;
    likeCount: number;
    commentCount: number;
}

export type PopularReviewsProps = {
    PopularReviewsData: Array<PopularReviewData>;
}export  type PopularPlaylistsProps = {
    PopularPlaylistsData : Array<PopularPlaylistData>
}

export type PopularPlaylistData = {
    CoverSrc : StaticImageData,
    NamePlaylist : string,
    GenresPlaylist: Array<string>,
    LikeCount : number,
}

export type PopularPlaylistProps = {
    PopularPlaylistData : PopularPlaylistData
}
