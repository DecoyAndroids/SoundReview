'use client'
import { Separator } from '~/components/ui/separator';
import { NewArticle } from './newArticle/NewArticle';
import { NewArticlesData } from '~/app/data/newArticleData';
import { useEffect, useState } from 'react';
import { NewArticleData } from '~/app/types/propsTypes.module';

export const NewArticlesBlock: React.FC = () => {
    const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<NewArticleData[]>([])
    const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<NewArticleData[]>([])
    const handleChangeDiscoverState = () => {
        setDiscoverFull(!discoverFull)
    }
    useEffect(()=>{
        setDiscoveredAlbumsFirstPart(NewArticlesData.slice(0,4))
        setDiscoveredAlbumsSecondPart(NewArticlesData.slice(4,8))
    },[])
    return (
        <div className='ml-[30px] mr-[30px]'>
            <div className='flex items-center justify-between pt-[1.5em]'>
                <p className='text-[16pt]'>Новое</p>
            </div>
            <Separator className='mb-[1.5em] ' />
            <div className='flex mt-[30px] justify-between'>
                {NewArticlesData.slice(0, 4).map((article) => (
                    <NewArticle NewArticleData={article} key={article.id} />
                ))}
            </div>
        </div>
    );
};
