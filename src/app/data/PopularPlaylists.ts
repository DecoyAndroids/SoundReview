import type { PopularPlaylistData } from "../types/propsTypes.module";
import KukriniksSRC from '~/public/popularPlaylistssCover/kukrinicks.png'
import PhonkSRC from '~/public/popularPlaylistssCover/phonk.png'
import NirvanaSRC from '~/public/popularPlaylistssCover/nirvana.png'
import DialoiSRC from '~/public/popularPlaylistssCover/dialogiTetATet.png'
import MacanSRC from '~/public/popularPlaylistssCover/macan.png'
import ChiefKeefSRC from '~/public/popularPlaylistssCover/chiefKeef.png'
import CityPopSRC from '~/public/popularPlaylistssCover/cityPop.jpg'
import KaplanSRC from '~/public/popularPlaylistssCover/kaplan.png'
import PunkSRC from '~/public/popularPlaylistssCover/punk.png'
import KizyakaSRC from '~/public/popularPlaylistssCover/kizyaka.jpg'
import LanaSRC from '~/public/popularPlaylistssCover/ana_Del_ReySRC.jpg'
import AnimeSRC from '~/public/popularPlaylistssCover/AnimeSRC.jpg'
import ArcticSRC from '~/public/popularPlaylistssCover/ArcticSRC.jpg'
import BluesSRC from '~/public/popularPlaylistssCover/BluesSRC.jpg'
import BollywoodSRC from '~/public/popularPlaylistssCover/BollywoodSRC.jpg'
import BritneySRC from '~/public/popularPlaylistssCover/britney_spears.jpg'
import DaftSRC from '~/public/popularPlaylistssCover/DaftSRC.jpg'
import EminemSRC from '~/public/popularPlaylistssCover/EminemSRC.jpg'
import FolkSRC from '~/public/popularPlaylistssCover/FolkSRC.jpg'
import IndieSRC from '~/public/popularPlaylistssCover/IndieSRC.jpg'
import JazzSRC from '~/public/popularPlaylistssCover/JazzSRC.jpg'
import LoFiSRC from '~/public/popularPlaylistssCover/LoFiSRC.jpg'
import OperaSRC from '~/public/popularPlaylistssCover/OperaSRC.jpg'
import QueenSRC from '~/public/popularPlaylistssCover/QueenSRC.jpg'
import RammsteinSRC from '~/public/popularPlaylistssCover/RammsteinSRC.jpg'
import RussianRapSRC from '~/public/popularPlaylistssCover/RussianRapSRC.jpg'
import SovietSRC from '~/public/popularPlaylistssCover/SovietSRC.jpg'
import SynthSRC from '~/public/popularPlaylistssCover/SynthSRC.jpg'
import TravisSRC from '~/public/popularPlaylistssCover/TravisSRC.jpg'
import WeekendSRC from '~/public/popularPlaylistssCover/WeekendSRC.jpg'



export const PopularPlaylistBlockData : PopularPlaylistData[] = [
    {
        id: 1,
        CoverSrc : KukriniksSRC,
        NamePlaylist : 'Сборник всех песен кукрыниксов',
        GenresPlaylist: ['Русский рок, ',"Рок "],
        LikeCount : 3456,
    },
    {
        id: 2,
        CoverSrc : PhonkSRC,
        NamePlaylist : 'Бразильский фонк для зала',
        GenresPlaylist: ['Бразильский фонк, ',"Фонк "], //Фонк, бразильский фонк
        LikeCount : 4534,
    },
    {
        id: 3,
        CoverSrc : NirvanaSRC,
        NamePlaylist : 'Nirvana Greatest Hits',
        GenresPlaylist: ['Американский рок, ',"Рок "],//Американский рок, рок
        LikeCount : 3673,
    },
    {
        id: 4,
        CoverSrc : DialoiSRC,
        NamePlaylist : 'Самое Зажигательное для дачи',
        GenresPlaylist: ['Поп '],
        LikeCount : 2134,
    },
    {
        id: 5,
        CoverSrc : MacanSRC,
        NamePlaylist : 'ТОП крутых песен для машины',
        GenresPlaylist: ['Поп, ',"Хип-хоп, ","Рэп "], //Поп, хип-хоп, рэп
        LikeCount : 5623,
    },
    {
        id: 6,
        CoverSrc : ChiefKeefSRC,
        NamePlaylist : 'Чиф киф лучшее за всю карьеру',
        GenresPlaylist: ["Хип-хоп, ","Рэп "],
        LikeCount : 3245,
    },
    {
        id: 7,
        CoverSrc : CityPopSRC,
        NamePlaylist : 'Японский CityPop 80-х',
        GenresPlaylist: ['CityPop, ',"Поп "], //Фонк, бразильский фонк
        LikeCount : 4653,
    },
    {
        id: 8,
        CoverSrc : KaplanSRC,
        NamePlaylist : 'Все песни Стрыкало',
        GenresPlaylist: ['Русский рок, ',"Рок "],//Американский рок, рок
        LikeCount : 1233,
    },
    {
        id: 9,
        CoverSrc : PunkSRC,
        NamePlaylist : 'ПАНКРОК на все времена',
        GenresPlaylist: ['Панк, '],
        LikeCount : 4144,
    },
    {
        id: 10,
        CoverSrc : KizyakaSRC,
        NamePlaylist : 'ТОП крутых песен для машины',
        GenresPlaylist: ['Поп, ',"Хип-хоп, ","Рэп "], //Поп, хип-хоп, рэп
        LikeCount : 2135,
    },
    {
        id: 11,
        CoverSrc: WeekendSRC,
        NamePlaylist: 'The Weeknd - Лучшее',
        GenresPlaylist: ['R&B, ', 'Поп '],
        LikeCount: 5982,
    },
    {
        id: 12,
        CoverSrc: ArcticSRC,
        NamePlaylist: 'Арктические хиты (Arctic Monkeys)',
        GenresPlaylist: ['Инди-рок, ', 'Альтернативный рок '],
        LikeCount: 4871,
    },
    {
        id: 13,
        CoverSrc: TravisSRC,
        NamePlaylist: 'Travis Scott Vibes',
        GenresPlaylist: ['Трэп, ', 'Хип-хоп '],
        LikeCount: 6523,
    },
    {
        id: 14,
        CoverSrc: LanaSRC,
        NamePlaylist: 'Lana Del Rey Sadcore',
        GenresPlaylist: ['Инди, ', 'Дрим-поп '],
        LikeCount: 4784,
    },
    {
        id: 15,
        CoverSrc: RammsteinSRC,
        NamePlaylist: 'Rammstein: Индастриал Жара',
        GenresPlaylist: ['Индастриал, ', 'Метал '],
        LikeCount: 5944,
    },
    {
        id: 16,
        CoverSrc: QueenSRC,
        NamePlaylist: 'Queen - Вечная классика',
        GenresPlaylist: ['Классический рок, ', 'Рок '],
        LikeCount: 7345,
    },
    {
        id: 17,
        CoverSrc: BritneySRC,
        NamePlaylist: 'Y2K поп хиты',
        GenresPlaylist: ['Поп, ', 'Дэнс-поп '],
        LikeCount: 4021,
    },
    {
        id: 18,
        CoverSrc: AnimeSRC,
        NamePlaylist: 'Аниме опенинги 2000-х',
        GenresPlaylist: ['J-Pop, ', 'Аниме '],
        LikeCount: 3201,
    },
    {
        id: 19,
        CoverSrc: JazzSRC,
        NamePlaylist: 'Джазовые вечера',
        GenresPlaylist: ['Джаз '],
        LikeCount: 2894,
    },
    {
        id: 20,
        CoverSrc: LoFiSRC,
        NamePlaylist: 'Lo-fi для учебы и сна',
        GenresPlaylist: ['Lo-fi, ', 'Инструментал '],
        LikeCount: 6123,
    },
    {
        id: 21,
        CoverSrc: DaftSRC,
        NamePlaylist: 'Daft Punk навсегда',
        GenresPlaylist: ['Электроника, ', 'Хаус '],
        LikeCount: 5032,
    },
    {
        id: 22,
        CoverSrc: EminemSRC,
        NamePlaylist: 'Eminem - The Real Slim Shady',
        GenresPlaylist: ['Хип-хоп, ', 'Рэп '],
        LikeCount: 8201,
    },
    {
        id: 23,
        CoverSrc: SovietSRC,
        NamePlaylist: 'Советская эстрада',
        GenresPlaylist: ['Ретро, ', 'Поп '],
        LikeCount: 2902,
    },
    {
        id: 24,
        CoverSrc: FolkSRC,
        NamePlaylist: 'Фолк для душевных вечеров',
        GenresPlaylist: ['Фолк, ', 'Акустика '],
        LikeCount: 1945,
    },
    {
        id: 25,
        CoverSrc: SynthSRC,
        NamePlaylist: 'Синтвейв 80-х',
        GenresPlaylist: ['Синтвейв, ', 'Электроника '],
        LikeCount: 3983,
    },
    {
        id: 26,
        CoverSrc: RussianRapSRC,
        NamePlaylist: 'Новый русский рэп',
        GenresPlaylist: ['Рэп, ', 'Хип-хоп '],
        LikeCount: 5200,
    },
    {
        id: 27,
        CoverSrc: BluesSRC,
        NamePlaylist: 'Блюз для души',
        GenresPlaylist: ['Блюз '],
        LikeCount: 2711,
    },
    {
        id: 28,
        CoverSrc: IndieSRC,
        NamePlaylist: 'Инди хиты 2020-х',
        GenresPlaylist: ['Инди, ', 'Поп '],
        LikeCount: 3545,
    },
    {
        id: 29,
        CoverSrc: BollywoodSRC,
        NamePlaylist: 'Индийские танцы',
        GenresPlaylist: ['Болливуд, ', 'Поп '],
        LikeCount: 4633,
    },
    {
        id: 30,
        CoverSrc: OperaSRC,
        NamePlaylist: 'Лучшее из оперы',
        GenresPlaylist: ['Опера, ', 'Классика '],
        LikeCount: 1422,
    },
]

