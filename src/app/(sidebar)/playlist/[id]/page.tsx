'use client'
import { useParams } from "next/navigation";
import { PlaylistContentHolder } from "~/components/playlistContentHolder/PlaylistContenHolder";



export default function AlbumPage() {
  const {id} = useParams()
  const playlistId = Array.isArray(id) ? id[0] : id ?? '';
  return (
    <div className="flex grow mr-[15px] ml-[15px] mt-[15px] mb-[15px] text-white bg-[rgb(var(--blackbrown))] rounded-[9px]">
      <PlaylistContentHolder playlistId={parseInt(playlistId!)} />
    </div>
  );
}