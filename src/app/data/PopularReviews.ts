import type {PopularReviewsData} from "../types/propsTypes.module"
import NWA from "../../../public/popularReviews/NWA.jpg"
import Jonatan from "../../../public/popularReviews/Jonatan.jpg"
import ACDC from "../../../public/popularReviews/ACDC.jpg"
import NIRVANA from "../../../public/popularReviews/NIRVANA.jpg"
import ava1 from "../../../public/popularReviews/ava1.jpg"
import ava2 from "../../../public/popularReviews/ava2.jpg"

export const PopularReviewsBlockData:Array<PopularReviewsData> = [
{
    bandName: "N.W.A",
    albumName: "Greatest hits",
    albumCover: NWA,
    author: "Данилов Тимур",
    authorAvatar: Jonatan,
    authorScore: 85,
    reviewText: "Этот альбом воплощает желание и стремление к свободе, а главное к славе. Тексты N.W.A. безжалостно и откровенно рассказывают о жестоких реалиях в неблагополучных районах, о социальной несправедливости и личной борьбе. Эти песни не просто музыка, а протест, который не потерял своей значимости и сегодня. Интересно, что альбом включает как сольные работы участников, так и коллективные хиты. В частности, присутствуют треки, на которых можно услышать рэперов, ставших потом мегазвездами, таких как Ice Cube и Dr. Dre",
    likeCount: 522,
    commentCount: 42,
},
{
    bandName: "AC/DC",
    albumName: "Hidhway To Hell",
    albumCover: ACDC,
    author: "Горбунов Матвей",
    authorAvatar: ava1,
    authorScore: 81,
    reviewText: "Этот альбом воплощает желание и стремление к свободе, а главное к славе. Тексты AC/DC. безжалостно и откровенно рассказывают о жестоких реалиях жизни в неблагополучных районах, о социальной несправедливости и личной борьбе. Эти песни не просто музыка, а протест, который не потерял своей значимости и сегодня. Интересно, что альбом включает как сольные работы участников, так и коллективные хиты. В частности, присутствуют треки, на которых можно услышать рэперов, ставших потом мегазвездами, таких как Ice Cube и Dr. Dre",
    likeCount: 444,
    commentCount: 23,
},
{
    bandName: "NIRVANA",
    albumName: "In Utero",
    albumCover: NIRVANA,
    author: "dyrachyo",
    authorAvatar: ava2,
    authorScore: 99,
    reviewText: "Этот альбом воплощает желание и стремление к свободе, а главное к славе. Тексты NIRVANA. безжалостно и откровенно рассказывают о жестоких реалиях жизни в неблагополучных районах, о социальной несправедливости и личной борьбе. Эти песни не просто музыка, а протест, который не потерял своей значимости и сегодня. Интересно, что альбом включает как сольные работы участников, так и коллективные хиты. В частности, присутствуют треки, на которых можно услышать рэперов, ставших потом мегазвездами, таких как Ice Cube и Dr. Dre",
    likeCount: 1088,
    commentCount: 322,
},
]