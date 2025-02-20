import { NewsBlock } from "./newsBlock/newsBlock";
import styles from "./mainContentHolder.module.scss"
import { SearchInput } from "../ui/SearchInput/searchInput";


export const MainContentHolder: React.FC = () => {
    return (
        <div className={`grow w-[100%] ${styles.MainContentHolder}`}>
        <SearchInput/>
        <NewsBlock/>
        <button>Кнопка</button>
        </div>
    );
  };