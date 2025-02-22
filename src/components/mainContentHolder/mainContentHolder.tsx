import { NewsBlock } from "./newsBlock/newsBlock";
import styles from "./mainContentHolder.module.scss"
import { SearchInput } from "../ui/SearchInput/searchInput";
import * as Data from "../../app/data/newsBlockData"


export const MainContentHolder: React.FC = () => {
    return (
        <div className={`grow w-[100%] ${styles.MainContentHolder}`}>
        <SearchInput/>
        <NewsBlock newsBlockData={Data.newsBlockData}/>
        </div>
    );
  };