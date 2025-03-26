import { BestArticlesBlock } from "./bestArticles/BestArticles"
import { IntArticlesBlock } from "./interestingArticles/intArticles"
import { NewArticlesBlock } from "./newArticles/NewArticles"
import { PopularArticles } from "./popularArticles/PopularArticles"

export const ArticlesContent:React.FC = () => {
    return (
        <div>
            <PopularArticles/>
            <NewArticlesBlock/>
            <BestArticlesBlock/>
            <IntArticlesBlock/>
        </div>
    )
}