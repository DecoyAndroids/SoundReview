import type { IntArticleData } from "../types/propsTypes.module";
import Avatar9 from "~/public/newArticles/Avatar9.jpg"
import Avatar10 from "~/public/newArticles/Avatar10.jpg"
import Avatar11 from "~/public/newArticles/Avatar11.jpg"
import Avatar12 from "~/public/newArticles/Avatar12.jpg"
import californication from "~/public/intArticles/californication.jpg"
import iceCube from "~/public/intArticles/iceCube.jpg"
import kon from "~/public/intArticles/k-on.jpg"
import vinil from "~/public/intArticles/vinil.jpg"



export const IntArticlesData:IntArticleData[] = [
{
    id: 1,
    articleCover: californication,
    authorCover: Avatar9,
    title: "Californication писали дольше, чем ты живешь",
    author: 'LeaveKidsAlone',
    data: '6 февраля',
    LikeCount: 264,
    CommentCount: 17,
},
{
    id: 2,
    articleCover: iceCube,
    authorCover: Avatar10,
    title: "Ice cube, как икона репа конца 90-х и начала 00-х",
    author: 'CookerOnABoard',
    data: '2 февраля',
    LikeCount: 147,
    CommentCount: 19,
},
{
    id: 3,
    articleCover: kon,
    authorCover: Avatar11,
    title: "K-on лучшее представление музыкальной группы тинейджеров",
    author: 'КупитеПокушать',
    data: '2 марта',
    LikeCount: 341,
    CommentCount: 13,
},
{
    id: 4,
    articleCover: vinil,
    authorCover: Avatar12,
    title: "Возвращение винила: Почему молодёжь снова слушает пластинки?",
    author: 'Evelone192',
    data: '6 августа',
    LikeCount: 736,
    CommentCount: 23,
},
]