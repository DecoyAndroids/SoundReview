import type { StaticImageData } from "next/image"
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS } from "react"

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
    PopularReviewsData: PopularReviewData[];
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

export  type PopularPlaylistsProps = {
    PopularPlaylistsData : PopularPlaylistData[]
}

export type PopularPlaylistData = {
    id: number;
    AuthorName: string;
    CoverSrc : StaticImageData,
    NamePlaylist : string,
    GenresPlaylist: Array<string>,
    LikeCount : number,
}

export type PopularPlaylistProps = {
    PopularPlaylistData : PopularPlaylistData
}

export type NewArticlesProps = {
    NewArticlesData : NewArticleData[]
}

export type NewArticleProps = {
    NewArticleData: NewArticleData,
}

export type NewArticleData = {
    id: number;
    articleCover: StaticImageData,
    authorCover: StaticImageData,
    title: string,
    author: string,
    data: string;
    LikeCount: number;
    CommentCount: number;
    ArticleText: string;
} 

export type RatingsDataType = {
    id: number;
    albumCover: StaticImageData | string,  
    bandName:string;
    albumName: string
    releaseDate: string
    reelaseYear: number
    reviewCount : number 
    reviewAvgScore: number
    genre: string[]
}

export type AlbumCardProps = {
    data : RatingsDataType
    i : number
}

export type RateWindowProps = {
    SpotiHref : string
}

export type AlbumDataResponse = {
    album_type : string;
    total_tracks: number;
    available_markets : Array<string>
    external_urls: {
        spotify:string;
    };
    href : string;
    id: string;
    images : {
        url:string;
        height: string;
        width : string;
    }[];
    name: string;
    release_date : string;
    release_date_precision : string;
    restrictions: {
        reason : string;
    };
    type: string;
    uri : string;
    artists : {
        external_urls: {
            spotify:string;
        };
        href : string;
        id : string;
        name : string ;
        type : string ;
        uri : string ;
    }[];
    tracks:{
        href : string;
        limit : number;
        next : string | null;
        offset: number;
        previos : string | null;
        total: number;
        items: {
            artists : {
                external_urls: {
                    spotify:string;
                };
                href : string;
                id : string;
                name : string ;
                type : string ;
                uri : string ;
            }[];   
            available_markets:string[];
            disc_number: number;
            duration_ms: number;
            explicit:boolean;
            external_urls: {
                spotify:string;
            };
            href:string;
            id : string;
            is_playable : boolean;
            linked_from: {
                external_urls: {
                    spotify:string;
                };
                href:string;
                id : string; 
                type:string;
                uri:string;   
            };
            restrictions: {
                reason:string;
            };
            name:string;
            preview_url : string | null;
            track_number: number;
            type : string;
            uri: string;
            is_local: boolean;
        }[];
    };
    copyrights: {
        text:string;
        type:string;
    }[];
    external_ids:{
        isrc: string;
        ean : string;
        upc : string;
    };
    genres: string[];
    label: string;
    popularity: number;
  }

export type TracksTableProps= {
    AlbumData : AlbumDataResponse
}

export type CreateArticleDataResponse = {
    id: string;
    user_id: string;
    article_name: string;
    article_text: string;
  };