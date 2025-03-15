import type { StaticImageData } from "next/image"

export type NewReleaseBlockProps = {
    NewReleaseBlockData : NewReleaseBlockData
}

export type NewReleaseBlockData = {
    album_type : string
    artists : Array<{
        external_urls : object
        href : string 
        id : string 
        name : string
        type : string 
        uri : string
    }>
    avaliable_markets : Array<string>
    external_urls : object
    href : string
    id : string
    images : Array<{
        height : number
        url : string
        width : number 
    }>
    name : string 
    release_date : string 
    release_data_precesion : string 
    total_tracks : number 
    type: string
    uri : string 
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
    PopularReviewsData: Array<PopularReviewData>;
}
export  type PopularPlaylistsProps = {
    PopularPlaylistsData : Array<PopularPlaylistData>
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
