import type {NewReleaseBlockData} from '../types/propsTypes.module'
import DDTAlbumCover from '~/public/newReleasesCover/DDT_cover_album.png'
import RaioHeadAlbumCover from '~/public/newReleasesCover/RadioHead.png'
import RedHotChilliPeppersAlbumCover from '~/public/newReleasesCover/RedHotChilliPeppers.png'
import SplinAlbumCover from '~/public/newReleasesCover/Splin.png'
import Bi_2AlbumCover from '~/public/newReleasesCover/Bi-2.png'
import TheBeatlesAlbumCover from '~/public/newReleasesCover/theBeatles.jpg'
import TheClashAlbumCover from '~/public/newReleasesCover/the_clash.jpg'
import MichaelJacksonAlbumCover from '~/public/newReleasesCover/michelJackson.jpg'
import DuftPankAlbumCover from '~/public/newReleasesCover/DuftPank.jpg'
import MetallicaAlbumCover from '~/public/newReleasesCover/metalica.jpg'

export const Data:NewReleaseBlockData[] = [
    {
        id: 1,
        coverSrc : DDTAlbumCover,
        BandName : "ДДТ",
        AlbumName : "Плывут по небу облака",
        CriticScore: 34,
        UserScore: 78
    },
    {
        id: 2,
        coverSrc : RaioHeadAlbumCover,
        BandName : "Radiohead",
        AlbumName : "Pablo Honey",
        CriticScore: 78,
        UserScore: 87
    },
    {
        id: 3,
        coverSrc : RedHotChilliPeppersAlbumCover,
        BandName : "Red Hot Chilli Peppers",
        AlbumName : "Californication",
        CriticScore: 87,
        UserScore: 96
    },
    {
        id: 4,
        coverSrc : SplinAlbumCover,
        BandName : "Сплин",
        AlbumName : "Гранатовый альбом",
        CriticScore: 87,
        UserScore: 54
    },
    {
        id: 5,
        coverSrc : Bi_2AlbumCover,
        BandName : "Би-2",
        AlbumName : "...И плывет корабль",
        CriticScore: 54,
        UserScore: 73
    },
    {
        id: 6,
        coverSrc : TheBeatlesAlbumCover,
        BandName : "The Beatles",
        AlbumName : "Revolver",
        CriticScore: 45,
        UserScore: 65
    },
    {
        id: 7,
        coverSrc : TheClashAlbumCover,
        BandName : "The Clash",
        AlbumName : "London Calling",
        CriticScore: 12,
        UserScore: 34
    },
    {
        id: 8,
        coverSrc : MichaelJacksonAlbumCover,
        BandName : "Michael Jackson",
        AlbumName : "Thriller",
        CriticScore: 87,
        UserScore: 96
    },
    {
        id: 9,
        coverSrc : DuftPankAlbumCover,
        BandName : "Daft Punk",
        AlbumName : "Discovery",
        CriticScore: 87,
        UserScore: 54
    },
    {
        id: 10,
        coverSrc : MetallicaAlbumCover,
        BandName : "Metallica",
        AlbumName : "Master of Puppets",
        CriticScore: 54,
        UserScore: 73
    },

]