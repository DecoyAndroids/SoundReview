import type {PopularReviewData} from "../types/propsTypes.module"
import NWA from "~/public/popularReviews/NWA.jpg"
import Jonatan from "~/public/popularReviews/Jonatan.jpg"
import ACDC from "~/public/popularReviews/ACDC.jpg"
import NIRVANA from "~/public/popularReviews/NIRVANA.jpg"
import ava1 from "~/public/popularReviews/ava1.jpg"
import ava2 from "~/public/popularReviews/ava2.jpg"
import ava3 from "~/public/popularReviews/ava3.jpg"
import ava4 from "~/public/popularReviews/ava4.jpg"
import ava5 from "~/public/popularReviews/ava5.jpg"
import Noize from "~/public/popularReviews/Noize.jpg"
import Kishlak from "~/public/popularReviews/Kishlak.jpg"
import MacksKorzj from "~/public/popularReviews/MacksKorzj.jpg"

export const PopularReviewsBlockData:PopularReviewData[] = [
{
    id: 1,
    bandName: "N.W.A",
    albumName: "Greatest hits",
    albumCover: NWA,
    author: "Тимур",
    authorAvatar: Jonatan,
    authorScore: 85,
    reviewText: "Этот альбом воплощает желание и стремление к свободе, а главное к славе. Тексты N.W.A. безжалостно и откровенно рассказывают о жестоких реалиях в неблагополучных районах, о социальной несправедливости и личной борьбе. Эти песни не просто музыка, а протест, который не потерял своей значимости и сегодня. Интересно, что альбом включает как сольные работы участников, так и коллективные хиты. В частности, присутствуют треки, на которых можно услышать рэперов, ставших потом мегазвездами, таких как Ice Cube и Dr. Dre",
    likeCount: 522,
    commentCount: 42,
},
{
    id: 2,
    bandName: "AC/DC",
    albumName: "Hidhway To Hell",
    albumCover: ACDC,
    author: "Matvei",
    authorAvatar: ava1,
    authorScore: 81,
    reviewText: "Этот альбом воплощает желание и стремление к свободе, а главное к славе. Тексты AC/DC. безжалостно и откровенно рассказывают о жестоких реалиях жизни в неблагополучных районах, о социальной несправедливости и личной борьбе. Эти песни не просто музыка, а протест, который не потерял своей значимости и сегодня. Интересно, что альбом включает как сольные работы участников, так и коллективные хиты. В частности, присутствуют треки, на которых можно услышать рэперов, ставших потом мегазвездами, таких как Ice Cube и Dr. Dre",
    likeCount: 444,
    commentCount: 23,
},
{
    id: 3,
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
{
    id: 4,
    bandName: "Noize MC",
    albumName: "Новый альбом",
    albumCover: Noize,
    author: "Draashkaa",
    authorAvatar: ava3,
    authorScore: 68,
    reviewText: "Этот альбом отражает стремление к переменам и борьбе за справедливость, а также к личной самореализации. Тексты Noize MC честно и откровенно рассказывают о современных проблемах, таких как политическая репрессия, социальное неравенство и внутренние переживания. Эти композиции — не просто песни, а высказывания, которые остаются актуальными и по сей день. Интересно, что альбом включает как сольные работы артиста, так и совместные треки с другими исполнителями. В частности, можно услышать элементы, которые позже стали визитной карточкой стиля самого Noize MC.",
    likeCount: 232,
    commentCount: 12,
},
{
    id: 5,
    bandName: "Кишлак",
    albumName: "Эскапист",
    albumCover: Kishlak,
    author: "dasmbasad",
    authorAvatar: ava4,
    authorScore: 88,
    reviewText: "Этот альбом выражает тоску по свободе и независимости, а также желание убежать от повседневных проблем и ограничений. Тексты Кишлак Эскапист искренне и ярко изображают внутреннюю борьбу, одиночество и стремление к личной трансформации. Эти композиции — не просто музыка, а своеобразный манифест, который заставляет задуматься о жизни и мире вокруг. Интересно, что альбом включает как сольные работы участников, так и совместные треки с другими артистами. Особенно выделяются моменты, когда можно услышать неожиданные музыкальные эксперименты, которые добавляют глубины и уникальности общему звучанию.",
    likeCount: 77,
    commentCount: 14,
},
{
    id: 6,
    bandName: "Макс Корж",
    albumName: "Малый повзрослел, Ч. 2",
    albumCover: MacksKorzj,
    author: "Verrorstage",
    authorAvatar: ava5,
    authorScore: 63,
    reviewText: "Этот альбом отражает процесс взросления и осознания важности личных ценностей и целей. Тексты Макса Коржа откровенно и сдержанно рассказывают о жизненных трудностях, взаимоотношениях и поиске смысла. Эти песни не просто музыка, а своеобразный разговор с самим собой и окружающим миром. Интересно, что альбом включает как сольные работы артиста, так и совместные треки с другими исполнителями. Особенно выделяются моменты, когда можно услышать новые музыкальные влияния, которые придают альбому свежесть и глубину.",
    likeCount: 200,
    commentCount: 15,
},
]