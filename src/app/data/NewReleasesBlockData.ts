import type {NewReleaseBlockData} from '../types/propsTypes.module'
import DDTAlbumCover from '../../../public/DDT_cover_album.png'
import RaioHeadAlbumCover from '../../../public/RadioHead.png'
import RedHotChilliPeppersAlbumCover from '../../../public/RedHotChilliPeppers.png'
import SplinAlbumCover from '../../../public/Splin.png'
import Bi_2AlbumCover from '../../../public/Bi-2.png'


export const Data:NewReleaseBlockData[] = [
    {
        coverSrc : DDTAlbumCover,
        BandName : "ДДТ",
        AlbumName : "Плывут по небу облака",
        CriticScore: 45,
        UserScore: 65
    },
    {
        coverSrc : RaioHeadAlbumCover,
        BandName : "Radiohead",
        AlbumName : "Pablo Honey",
        CriticScore: 12,
        UserScore: 34
    },
    {
        coverSrc : RedHotChilliPeppersAlbumCover,
        BandName : "Red Hot Chilli Peppers",
        AlbumName : "Californication",
        CriticScore: 87,
        UserScore: 96
    },
    {
        coverSrc : SplinAlbumCover,
        BandName : "Сплин",
        AlbumName : "Гранатовый альбом",
        CriticScore: 87,
        UserScore: 54
    },
    {
        coverSrc : Bi_2AlbumCover,
        BandName : "Би-2",
        AlbumName : "...И плывет корабль",
        CriticScore: 54,
        UserScore: 73
    },

]