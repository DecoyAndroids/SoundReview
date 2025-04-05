import { PlaylistsContentHolder } from "~/components/playlistsContentHolder/PlaylistsContentHolder";

export default function AlbumPage() {
  return (
    <div className="flex grow mr-[15px] ml-[15px] mt-[15px] mb-[15px] font-ubuntu flex-col items-center justify-center text-white">
        <PlaylistsContentHolder/>
    </div>
  );
}