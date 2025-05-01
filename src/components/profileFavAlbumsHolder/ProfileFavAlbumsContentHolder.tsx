import { FavAlbumsList } from "./favAlbumsList/FavAlbumsList";

export const ProfileFavAlbumsContentHolder: React.FC = () => {
    return (
        <div className="grow w-full h-full rounded-[9px]">
            <FavAlbumsList/>
        </div>
    );
};
