'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Like from '~/public/popularReviews/Like.png';
import avatar from '~/public/popularArticles/avatar1.jpg';
import Avatar2 from '~/public/userAvatar.jpg';
import { useAuthStore } from '~/store/authStore';
import { useParams } from 'next/navigation';
import { NewArticlesData } from '~/app/data/newArticleData';

export const Article: React.FC = () => {
    const user = useAuthStore(state => state.user);
    const { id } = useParams();
    const Id = Number(id) - 1;

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(NewArticlesData[Id]!.LikeCount);
    const [commentForm, setCommentForm] = useState({
        textComment: '',
        actualComments: ['Это было круто и неожиданно'],
    });

    const handleLikeClick = () => {
        const newLikeStatus = !isLiked;
        setIsLiked(newLikeStatus);
        setLikeCount(prev => newLikeStatus ? prev + 1 : prev - 1);
        localStorage.setItem(`liked_PopularArticles`, newLikeStatus.toString());
        localStorage.setItem(`likeCount_PopularArticles`, likeCount.toString());
    };

    const likeIconStyle = isLiked
        ? { filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(-40deg)' }
        : {};

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCommentForm({ ...commentForm, [name]: value });
    };

    const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (commentForm.textComment) {
            setCommentForm(prev => ({
                actualComments: [...prev.actualComments, prev.textComment],
                textComment: '',
            }));
        }
    };

    const inAcc = !!user?.id;

    return (
        <div className="flex flex-col items-center px-4 py-6">
            <div className="w-full max-w-[100%] h-fit rounded-xl bg-[rgb(var(--gray))] p-6 shadow-xl">
                <div className="flex flex-col h-fit md:flex-row gap-6">
                    <div className="w-full md:w-[450px] aspect-[3/2] overflow-hidden rounded-lg">
                        <Image
                            src={NewArticlesData[Id]!.articleCover}
                            alt="Обложка статьи"
                            width={450}
                            height={300}
                            quality={90}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-between w-full">
                        <div>
                            <h1 className="text-[3rem] h-fit font-semibold text-white font-600">
                                {NewArticlesData[Id]?.title}
                            </h1>
                            <div className="flex items-center gap-3 text-gray-400 mb-4 mt-2">
                                <Link href='/profile' className='flex '>
                                <Image
                                    src={NewArticlesData[Id]!.authorCover}
                                    alt="Автор"
                                    width={48}
                                    height={48}
                                    quality={90}
                                    className="rounded-full"
                                />
                                <span className="text-[1.5rem] p-2 hover:underline">{NewArticlesData[Id]?.author}</span>
                                </Link>
                            </div>
                            <p className="text-[1.5rem] text-white whitespace-pre-line h-fit ">
                                {NewArticlesData[Id]?.ArticleText}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center gap-3 text-white text-lg">
                            <span onClick={handleLikeClick} className="cursor-pointer transition-transform hover:scale-110">
                                <Image
                                    src={Like}
                                    alt="Like"
                                    width={32}
                                    height={32}
                                    quality={100}
                                    style={likeIconStyle}
                                />
                            </span>
                            <span className='text-[1.2rem]'>{likeCount}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Комментарии */}
            <div className="mt-6 w-full max-w-[100%]">
                <form onSubmit={OnSubmit} className="flex items-center gap-2 mb-4">
                    <input
                        type="text"
                        name="textComment"
                        placeholder="Оставь комментарий"
                        value={commentForm.textComment}
                        onChange={onChange}
                        className="w-full bg-[rgb(var(--gray))] text-white rounded-md p-2 outline-none border transition duration-300 border-[rgb(var(--gray))] hover:border-[rgba(var(--white),0.8)] focus:border-[rgba(var(--white),0.8)]"
                    />
                    <button
                        type="submit"
                        disabled={!inAcc}
                        className="bg-[rgb(var(--blackamber))] hover:bg-[rgb(var(--cursedblack))] text-white px-4 py-2 rounded-md transition duration-300"
                    >
                        Отправить
                    </button>
                </form>

                {commentForm.actualComments.map((comment, i) => (
                    <div key={i} className="mb-3 rounded-lg bg-[rgb(var(--gray))] p-4">
                        <div className="flex items-center gap-3 mb-1">
                            <Image
                                src={i === 0 ? avatar : Avatar2}
                                alt="Аватар"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <span className="text-white font-medium">
                                {i === 0 ? 'Евгений Горошин' : user?.email?.split('@')[0]}
                            </span>
                        </div>
                        <p className="text-white">{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
