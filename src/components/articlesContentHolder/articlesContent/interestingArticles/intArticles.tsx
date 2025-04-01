'use client'

import { Separator } from '~/components/ui/separator';
import { IntArticle } from './intArticle/IntArticle';
import { IntArticlesData } from '~/app/data/intArticlesData';
// import { useEffect, useState } from 'react';
// import { IntArticleData } from '~/app/types/propsTypes.module';

export const IntArticlesBlock: React.FC = () => {
    // const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    // const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<IntArticleData[]>([])
    // const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<IntArticleData[]>([])
    // const handleChangeDiscoverState = () => {
    //     setDiscoverFull(!discoverFull)
    // }
    // useEffect(()=>{
    //     setDiscoveredAlbumsFirstPart(IntArticlesData.slice(0,4))
    //     setDiscoveredAlbumsSecondPart(IntArticlesData.slice(4,8))
    // },[])
    return (
        <div className='ml-[30px] mr-[30px] mb-[30px]'>
            <div className='flex items-center justify-between pt-[1.5em]'>
                <p className='text-[16pt]'>Интересно читателям</p>
            </div>
            <Separator className='mb-[1.5em] ' />
            <div className='flex mt-[30px] justify-between'>
                {IntArticlesData.slice(0, 4).map((article) => (
                    <IntArticle IntArticleData={article} key={article.id} />
                ))}
            </div>
        </div>
    );
};
