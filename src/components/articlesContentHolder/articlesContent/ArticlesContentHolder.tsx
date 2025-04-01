import { ArticlesContent } from "./ArticlesContent"

export const ArticlesContentHolder:React.FC = ()=> {
    return(
        <div className="grow w-[100%] bg-[rgb(var(--blackbrown))] rounded-[9px] p-4">  
            <ArticlesContent/>
        </div>
    )
}