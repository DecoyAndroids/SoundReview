
// import NWA from "../../../../../public/popularReviews/NWA.jpg";
// import JonatanAva from "../../../../../public/popularReviews/Jonatan.jpg";
import Like from "../../../../../public/popularReviews/like.svg";
import Comment from "../../../../../public/popularReviews/comment.svg";
import Image from "next/image";
import { PopularReviewsProps } from "axios/app/types/propsTypes.module";

export const PopularReview: React.FC<PopularReviewsProps> = (props) => {
    const {PopularReviewsData} = {...props}
    const rating = 79;

    const getColor = (value: number): string => {
        const clampedValue = Math.min(100, Math.max(0, value));
        const red = Math.round((100 - clampedValue) * 2.55);
        const green = Math.round(clampedValue * 2.55);
        return `rgb(${red}, ${green}, 0)`;
    };

    return (
        <div>
                <div className="flex-col p-4 rounded-xl text-white overflow-hidden">
                    <div className="flex items-start">
                        <Image alt="" src={PopularReviewsData.albumCover} className="object-cover mb-[9px]" width={128} height={128} />
                        <div className="ml-4 w-full">
                            <p className="text-[20px] mt-[-6px] mb-[-10px]">{PopularReviewsData.bandName}</p>
                            <p className="text-[20px] mb-[3px]">{PopularReviewsData.albumName}</p>
                            <div className="flex items-center">
                                <Image alt="" src={PopularReviewsData.authorAvatar} className="object-cover rounded-full" width={64} height={64} />
                                <div className="ml-3">
                                    <div className="flex items-center">
                                        <p className="text-[20px] font-semibold mt-[-7px] mb-[-7px]">{PopularReviewsData.author}</p>
                                    </div>
                                    <div>
                                        <p className='text-[20px] mb-[10px]'>{PopularReviewsData.authorScore}</p>
                                        <div className={`h-[4px] w-[40px] mt-[-18px] overflow-hidden rounded-full`} style={{backgroundColor:'rgb(var(--text))'}}>
                                            <div className="h-full transition-all" style={{ width: `${PopularReviewsData.authorScore}%`, backgroundColor: getColor(PopularReviewsData.authorScore) }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="h-fit text-[14px]">
                        {PopularReviewsData.reviewText}
                        ... <span className="hover:underline cursor-pointer text-gray-400">читать далее</span>
                    </p>
                    <div className="flex items-center mt-3 text-gray-400 text-sm">
                        <p className="flex items-center mr-4"><span className="mr-1"><Image alt="" src={Like} width={20} height={20} /></span> {PopularReviewsData.likeCount}</p>
                        <p className="flex items-center"><span className="mr-1"><Image alt="" src={Comment} width={18} height={18} /></span> {PopularReviewsData.commentCount}</p>
                    </div>
                </div>
        </div>
    );
};
