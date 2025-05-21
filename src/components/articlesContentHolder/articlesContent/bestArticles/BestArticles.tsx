'use client'
import { Separator } from '~/components/ui/separator';
import { BestArticle } from './BestArticle/BestArticle';
import { NewArticlesData } from '~/app/data/newArticleData';

export const BestArticlesBlock: React.FC = () => {

    return (
        <div className='ml-[30px] mr-[30px]'>
            <div className='flex items-center justify-between pt-[1.5em]'>
                <p className='text-[16pt]'>Популярное</p>
            </div>
            <Separator className='mb-[1.5em] ' />
            <div className='flex mt-[30px] justify-between'>
                {NewArticlesData.slice(4, 8).map((article) => (
                <BestArticle NewArticleData={article} key={article.id} />
                ))}
            </div>
        </div>
    );
};
