import type { NewArticleData } from "../types/propsTypes.module";
import Macan from "~/public/newArticles/macan.png"
import Avatar1 from "~/public/newArticles/Avatar1.jpg"
import Avatar2 from "~/public/newArticles/Avatar2.jpg"
import Avatar3 from "~/public/newArticles/Avatar3.jpg"
import Avatar4 from "~/public/newArticles/Avatar4.jpg"
import zemf from "~/public/newArticles/zemf.jpg"
import kukr from "~/public/newArticles/kukr.jpg"
import rem from "~/public/newArticles/rem.jpg"

export const NewArticlesData:NewArticleData[] = [
{
    id: 1,
    articleCover: Macan,
    authorCover: Avatar1,
    title: "Как Макан съел целый жанр музыки в СНГ?",
    author: 'Иван Лихачев',
    data: '1 февраля',
    LikeCount: 234,
    CommentCount: 21,
},
{
    id: 2,
    articleCover: kukr,
    authorCover: Avatar2,
    title: "Феномен Кукрыниксов",
    author: 'Лина KOV',
    data: '2 февраля',
    LikeCount: 422,
    CommentCount: 11,
},
{
    id: 3,
    articleCover: zemf,
    authorCover: Avatar3,
    title: "Почему русская музыка грустная?",
    author: 'ADATS',
    data: '19 января',
    LikeCount: 504,
    CommentCount: 33,
},
{
    id: 4,
    articleCover: rem,
    authorCover: Avatar4,
    title: "10 лучших Каверов: R.E.M. - Losing My Religion",
    author: 'ctom',
    data: '13 марта',
    LikeCount: 334,
    CommentCount: 11,
},
]