import { PopularPlaylistData } from "../types/propsTypes.module";
import KukriniksSRC from '../../../public/popularPlaylistssCover/kukrinicks.png'
import PhonkSRC from '../../../public/popularPlaylistssCover/phonk.png'
import NirvanaSRC from '../../../public/popularPlaylistssCover/nirvana.png'
import DialoiSRC from '../../../public/popularPlaylistssCover/dialogiTetATet.png'
import MacanSRC from '../../../public/popularPlaylistssCover/macan.png'
import ChiefKeefSRC from '../../../public/popularPlaylistssCover/chiefKeef.png'
import CityPopSRC from '../../../public/popularPlaylistssCover/cityPop.jpg'
import KaplanSRC from '../../../public/popularPlaylistssCover/kaplan.png'
import PunkSRC from '../../../public/popularPlaylistssCover/punk.png'
import KizyakaSRC from '../../../public/popularPlaylistssCover/kizyaka.jpg'



export const PopularPlaylistBlockData : PopularPlaylistData[] = [
    {
        CoverSrc : KukriniksSRC,
        NamePlaylist : 'Сборник всех песен кукрыниксов',
        GenresPlaylist: ['Русский рок, ',"Рок "],
        LikeCount : 3456,
    },
    {
        CoverSrc : PhonkSRC,
        NamePlaylist : 'Бразильский фонк для зала',
        GenresPlaylist: ['Бразильский фонк, ',"Фонк "], //Фонк, бразильский фонк
        LikeCount : 4534,
    },
    {
        CoverSrc : NirvanaSRC,
        NamePlaylist : 'Nirvana Greatest Hits',
        GenresPlaylist: ['Американский рок, ',"Рок "],//Американский рок, рок
        LikeCount : 3673,
    },
    {
        CoverSrc : DialoiSRC,
        NamePlaylist : 'Самое Зажигательное для дачи',
        GenresPlaylist: ['Поп '],
        LikeCount : 2134,
    },
    {
        CoverSrc : MacanSRC,
        NamePlaylist : 'ТОП крутых песен для машины',
        GenresPlaylist: ['Поп, ',"Хип-хоп, ","Рэп "], //Поп, хип-хоп, рэп
        LikeCount : 5623,
    },
    {
        CoverSrc : ChiefKeefSRC,
        NamePlaylist : 'Чиф киф лучшее за всю карьеру',
        GenresPlaylist: ["Хип-хоп, ","Рэп "],
        LikeCount : 3245,
    },
    {
        CoverSrc : CityPopSRC,
        NamePlaylist : 'Японский CityPop 80-х',
        GenresPlaylist: ['CityPop, ',"Поп "], //Фонк, бразильский фонк
        LikeCount : 4653,
    },
    {
        CoverSrc : KaplanSRC,
        NamePlaylist : 'Все песни Стрыкало',
        GenresPlaylist: ['Русский рок, ',"Рок "],//Американский рок, рок
        LikeCount : 1233,
    },
    {
        CoverSrc : PunkSRC,
        NamePlaylist : 'ПАНКРОК на все времена',
        GenresPlaylist: ['Панк, '],
        LikeCount : 4144,
    },
    {
        CoverSrc : KizyakaSRC,
        NamePlaylist : 'ТОП крутых песен для машины',
        GenresPlaylist: ['Поп, ',"Хип-хоп, ","Рэп "], //Поп, хип-хоп, рэп
        LikeCount : 2135,
    },
]

