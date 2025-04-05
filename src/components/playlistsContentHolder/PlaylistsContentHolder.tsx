import { InterestingPlaylistsBlock } from "./playlistsContent/interestingPlaylistConteiner/InterestingPlaylistsBlock";
import { NewPlaylistsBlock } from "./playlistsContent/newPlaylistConteiner/NewPlaylistsBlock";
import { PopularPlaylistsBlock } from "./playlistsContent/popularPlaylistConteiner/PopularPlaylistsBlock"
import { PopularPlaylistBlockData } from "~/app/data/PopularPlaylists";


export const PlaylistsContentHolder: React.FC = () => {
    return (
        <div className={`grow w-[100%] bg-[rgb(var(--blackbrown))] rounded-[9px]`}>
            <PopularPlaylistsBlock PopularPlaylistsData={PopularPlaylistBlockData}/>
            <NewPlaylistsBlock PopularPlaylistsData={PopularPlaylistBlockData}/>
            <InterestingPlaylistsBlock PopularPlaylistsData={PopularPlaylistBlockData}/>
        </div>
    );
  };