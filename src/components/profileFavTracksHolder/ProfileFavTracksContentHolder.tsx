import { FavTracksList } from "./favTracksList/FavTracksList";

export const ProfileFavTracksContentHolder: React.FC = () => {
    return (
        <div className="grow w-full h-full rounded-[9px]">
            <FavTracksList/>
        </div>
    );
};
