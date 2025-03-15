import type { StaticImageData } from "next/image"

export type NewReleaseBlockProps = {
    NewReleaseBlockData : NewReleaseBlockData
}

export type NewReleaseBlockData = {
    id: number;
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
    id: number;
    articleCover: StaticImageData,
    title: string,
    author: string,
} 

export type PopularReviewProps = {
    PopularReviewData: PopularReviewData;
}

export type PopularReviewData = {
    id: number;
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
    PopularReviewsData: PopularReviewData[];
}
export  type PopularPlaylistsProps = {
    PopularPlaylistsData : PopularPlaylistData[]
}

export type PopularPlaylistData = {
    id: number;
    CoverSrc : StaticImageData,
    NamePlaylist : string,
    GenresPlaylist: Array<string>,
    LikeCount : number,
}

export type PopularPlaylistProps = {
    PopularPlaylistData : PopularPlaylistData
}

export type ProfileInfoData = {
    id: number;
    ProfileSrc : StaticImageData,
    ProfileName : string,
    ProfileRegDate : string,
    ProfileSubscribers: number;
    ProfileSubscriptions: number;
    ProfilePosts: Array<string>,
}

export type ProfileInfoProps = {
    ProfileInfoData : ProfileInfoData
}
