import type {newsBlockData} from "../types/propsTypes.module"
import Metallica from "~/public/newsBlockCover/Metallica.jpg"
import MOREGENSHTERN from "~/public/newsBlockCover/MORGENSHTERN.jpg"
import noizeMC from "~/public/newsBlockCover/noizeMC.jpg"
import Choi from "~/public/newsBlockCover/Choi.jpg"
import KULICK from "~/public/newsBlockCover/KULICK.jpg"
import MOS from "~/public/newsBlockCover/Mos.jpg"
import Drake from "~/public/newsBlockCover/Drake.jpg"
import eminem from "~/public/newsBlockCover/eminem.jpg"
import radiohead from "~/public/newsBlockCover/radiohead.jpg"

export const newsBlocksData:newsBlockData[] = [
{
    id: 1,
    articleCover: Metallica,
    title: "Metallica анонсировала новый альбом и мировой тур!",
    author: "ivan",
},
{
    id: 2,
    articleCover: MOREGENSHTERN,
    title: "MORGENSHTERN выпустил новый альбом!",
    author: "Decoy",
},
{
    id: 3,
    articleCover: noizeMC,
    title: "Noize MC выпустил вторую часть альбома «Выход в город»",
    author: "Draashkaa",
},
{
    id: 4,
    articleCover: Choi,
    title: "Рукописи Виктора Цоя выставили на аукцион за ₽1,5 млн",
    author: "kostyanstonkovich",
},
{
    id: 5,
    articleCover: KULICK,
    title: "Экс-гитарист KISS Брюс Кулик планирует написать автобиографию",
    author: "justi500",
},
{
    id: 6,
    articleCover: MOS,
    title: "Mos Def и The Alchemist объединились в группу Forensics",
    author: "eiphsiteaimph",
},
{
    id: 7,
    articleCover: Drake,
    title: "Дрейк заявил, что рэп-музыка никогда не умрет",
    author: "y0zva",
},
{
    id: 8,
    articleCover: eminem,
    title: "Рэпер 50 Cent намекает на коллаборацию с Эминемом",
    author: "Gizmo21",
},
{
    id: 9,
    articleCover: radiohead,
    title: "Джуд Лоу хочет поработать с группой Radiohead",
    author: "VsevolodL",
},] 
