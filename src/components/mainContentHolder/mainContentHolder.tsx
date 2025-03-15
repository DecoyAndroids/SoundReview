import { NewsBlock } from "./newsBlock/newsBlock";
import styles from "./mainContentHolder.module.scss"
import { SearchInput } from "../ui/SearchInput/searchInput";
import * as NewsBlockData from "../../app/data/newsBlockData"
import { NewReleasesBlock } from "./newReleasesBlock/NewReleasesBlock";
import { PopularReviews } from "./popularReviews/PopularReviews";
import { PopularReviewsBlockData } from "~/app/data/PopularReviews"

import { PopularPlaylistsBlock } from "./popularPlaylistsBlock/PopularPlaylistsBlock"
import { PopularPlaylistBlockData } from "~/app/data/PopularPlaylists";

export const MainContentHolder: React.FC = () => {
    return (
        <div className={`grow w-[100%] ${styles.MainContentHolder}`}>
        <SearchInput/>
        <NewsBlock newsBlockData={NewsBlockData.newsBlocksData}/>
        <NewReleasesBlock/>
        <PopularReviews PopularReviewsData={PopularReviewsBlockData}/>
        <PopularPlaylistsBlock PopularPlaylistsData={ PopularPlaylistBlockData}/>
        </div>
    );
  };