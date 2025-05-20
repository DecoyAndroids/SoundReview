'use client'

import { Separator } from '~/components/ui/separator';
import { IntArticle } from './intArticle/IntArticle';
import { NewArticlesData } from '~/app/data/newArticleData';


export const IntArticlesBlock: React.FC = () => {
    return (
        <div className='ml-[30px] mr-[30px] mb-[30px]'>
            <div className='flex items-center justify-between pt-[1.5em]'>
                <p className='text-[16pt]'>Интересно читателям</p>
            </div>
            <Separator className='mb-[1.5em] ' />
            <div className='flex mt-[30px] justify-between'>
                {NewArticlesData.slice(8, 12).map((article) => (
                    <IntArticle NewArticleData={article} key={article.id} />
                ))}
            </div>
        </div>
    );
};
