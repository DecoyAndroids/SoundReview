import { SearchInput } from "axios/components/ui/SearchInput/searchInput";
import Image from "next/image";
import {MainContentHolder} from "axios/components/mainContentHolder/mainContentHolder";


export default function HomePage() {
  return (
    <main className="flex grow mr-[15px] ml-[15px] mt-[15px] gap-3 min-h-screen font-ubuntu flex-col items-center justify-center text-white">
      <MainContentHolder/>
    </main>
  );
}
