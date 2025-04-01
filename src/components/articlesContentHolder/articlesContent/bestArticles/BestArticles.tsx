'use client'
import { Separator } from '~/components/ui/separator';
import { BestArticle } from './BestArticle/BestArticle';
import { BestArticlesData } from '~/app/data/bestArticlesData';
//import { useState } from 'react'; //useEffect, 
// import { BestArticleData } from '~/app/types/propsTypes.module';

export const BestArticlesBlock: React.FC = () => {
    //const [discoverFull, setDiscoverFull] = useState<boolean>(false)
    //const [discoveredAlbumsFirstPart, setDiscoveredAlbumsFirstPart] = useState<BestArticleData[]>([])
    //const [discoveredAlbumsSecondPart, setDiscoveredAlbumsSecondPart] = useState<BestArticleData[]>([])
    // const handleChangeDiscoverState = () => {
    //     setDiscoverFull(!discoverFull)
    // }
    // useEffect(()=>{
    //     //setDiscoveredAlbumsFirstPart(BestArticlesData.slice(0,4))
    //     //setDiscoveredAlbumsSecondPart(BestArticlesData.slice(4,8))
    // },[])
    return (
        <div className='ml-[30px] mr-[30px]'>
            <div className='flex items-center justify-between pt-[1.5em]'>
                <p className='text-[16pt]'>Популярное</p>
            </div>
            <Separator className='mb-[1.5em] ' />
            <div className='flex mt-[30px] justify-between'>
                {BestArticlesData.slice(0, 4).map((article) => (
                    <BestArticle BestArticleData={article} key={article.id} />
                ))}
            </div>
        </div>
    );
};
