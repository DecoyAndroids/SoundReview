import { Article } from "./articleContent/ArticleContent"

export const ArticleContentHolder: React.FC = () => {
    return (
        <div className='grow w-full h-full bg-[rgb(var(--blackbrown))] grow rounded-lg h-fit'>
            <Article/>
        </div>
    )
}