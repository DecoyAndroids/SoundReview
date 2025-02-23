import { NewsBlock } from "./newsBlock/newsBlock";
import styles from "./mainContentHolder.module.scss"
import { SearchInput } from "../ui/SearchInput/searchInput";
import { NewReleasesBlock } from "./newReleasesBlock/NewReleasesBlock";
import {Data} from '../.././app/data/NewReleasesBlockData'

export const MainContentHolder: React.FC = () => {
    return (
        <div className={`grow w-[100%] ${styles.MainContentHolder}`}>
        <SearchInput/>
        <NewsBlock/>
        <NewReleasesBlock  NewReleaseBlockData={Data}/>
        </div>
    );
  };