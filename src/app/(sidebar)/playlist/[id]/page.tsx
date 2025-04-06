import { PlaylistContentHolder } from "~/components/playlistContentHolder/PlaylistContenHolder";

type Props = {
  params: {
    id: string;
  };
};

export default function AlbumPage({ params }: Props) {
  return (
    <div className="flex grow mr-[15px] ml-[15px] mt-[15px] mb-[15px] text-white bg-[rgb(var(--blackbrown))] rounded-[9px]">
      <PlaylistContentHolder playlistId={parseInt(params.id)} />
    </div>
  );
}