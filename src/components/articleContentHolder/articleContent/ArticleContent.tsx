'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Like from '~/public/popularReviews/Like.png';
import Comment from '~/public/popularReviews/comment.png';
import articleCover from "~/public/popularArticles/Lamar.jpg"
import avatar from "~/public/popularArticles/avatar1.jpg"
import { useAuthStore } from '~/store/authStore';
import Avatar2 from '~/public/userAvatar.jpg';

export const Article: React.FC = () => {
    const user = useAuthStore((state) => state.user);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(999);
    const [commentWindow, setCommentWindow] = useState(false)
    const [commentForm, setCommentForm] = useState({
        textComment : '',
        actualComments: ['Это было круто и неожиданно']
    })

    const handleLikeClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        const newLikeCount = newLikeStatus ? likeCount + 1 : likeCount - 1;
        setLikeCount(newLikeCount);
        localStorage.setItem(`liked_PopularArticles`, newLikeStatus.toString());
        localStorage.setItem(`likeCount_PopularArticles`, newLikeCount.toString());
    };
    const likeIconStyle = isLiked ? { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' } : {};

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setCommentForm({...commentForm, [name]:value})
    }

    const OnSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const comments = commentForm.actualComments
        if (commentForm.textComment){
        comments.push(commentForm.textComment)
        }

        setCommentForm({
            actualComments : comments, 
            textComment : ''
        })
        console.log(commentForm.actualComments)
     }
    const inAcc = user?.id ? true : false 
    return (
        <div className="mx-10 grow">
            <Image src={articleCover} alt='articleCover' className="w-full m-auto mt-2 h-[20rem] brightness-60 rounded-lg object-cover"/>
            <div className=''>
                <h3 className='mb-2 text-[3rem] w-fit font-500'>Как черная музыка изменила мир?</h3>
                <Link href={'/userProfile'} className=' mt-5 flex items-center gap-3'>
                            <Image src={avatar} alt='Author' width={48} height={48} className='rounded-full' />
                            <span className='text-[1.4rem] font-[300] p-1.5 pl-0 hover:underline'>Евгений Горошин</span>
                </Link>
            </div>
            <div className="w-full">
                <p className='h-fit w-[90%] m-auto text-[2rem] font-400'>
                        Чёрная музыка – это не просто набор жанров и стилей, а мощный культурный феномен, который
                        кардинально изменил мир. Её влияние выходит далеко за рамки музыкальной индустрии, затрагивая
                        общество, политику, искусство, моду и даже технологии. От духовных песнопений африканских рабов
                        в Америке до всемирного господства хип-хопа и R&B – чёрная музыка прошла долгий путь, став
                        символом борьбы за права
                    </p>
            </div>
            <div className='text-sm ml-auto w-[90%] m-auto mt-1 flex items-center gap-2 text-gray-400'>
                <span
                    onClick={handleLikeClick}
                    className='transform cursor-pointer transition-transform duration-200 hover:scale-110'
                >
                    <Image alt='like icon' src={Like} width={20} height={20} style={likeIconStyle} />
                </span>
                    {likeCount}

                <span className='transform cursor-pointer transition-transform duration-200 hover:scale-110' onClick={()=>{setCommentWindow(!commentWindow)}}>
                        <Image alt='comment icon' src={Comment} width={18} height={18} />
                </span>
                    {23}
                    <span className='text-sm p-1.5 pr-0'>1 февраля</span>
                </div>
                {commentWindow ? 
                <div className="w-[90%] m-auto">
                    <form className="flex gap-1" onSubmit={OnSubmit}>
                    <input placeholder="Напишите свой комментарий" className=' bg-[rgb(var(--anthracitegrey))] p-1 pl-2 outline-none rounded-lg w-full' onChange={onChange} name='textComment' value={commentForm.textComment}/>
                    <button className='m-0 bg-[rgb(var(--anthracitegrey))] p-1 pl-2 pr-2 outline-none rounded-lg w-fit transition-transform duration-300 hover:bg-[rgb(var(--gray))]' disabled={!inAcc}>Отправить</button>
                    </form>
                    {commentForm.actualComments.length > 0 ? 
                <div className="mt-1 m-auto flex flex-col gap-3 mb-3">
                    {commentForm.actualComments.map((comment,i)=>(
                        
                        <div key={i} className=" bg-[rgb(var(--anthracitegrey))]  rounded-lg p-1 h-fit ">
                            {i == 0 ? 
                            <div>
                                <Link href={'/userProfile'} className=' ml-3 flex items-center gap-3'>
                                    <Image src={avatar} alt='Author' width={24} height={24} className='rounded-full' />
                                    <span className='text-[1.1rem] font-[300] p-1.5 pl-0 hover:underline'>Евгений Горошин</span>
                                </Link>
                                <p className=" ml-3">{comment}</p>
                            </div>
                            :
                            <div>
                                <Link href={'/userProfile'} className=' ml-3 flex items-center gap-3'>
                                    <Image src={Avatar2} alt='Author' width={24} height={24} className='rounded-full' />
                                    <span className='text-[1.1rem] font-[300] p-1.5 pl-0 hover:underline'>{user?.email!.split("@")[0]}</span>
                                </Link>
                            <p className=" ml-3">{comment}</p>
                            </div>}
                        </div>
                    ))}
                </div>
                :<></>}
                </div>
                :<></>}
                
        </div>
    )
}