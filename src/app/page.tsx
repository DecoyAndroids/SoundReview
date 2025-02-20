import { SearchInput } from "axios/components/ui/SearchInput/searchInput";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="flex grow gap-3 mt-[15px] mr-[15px] ml-[15px] mr-[0px] font-ubuntu flex-col items-center text-white">
      
      <SearchInput/>
      <button>Кнопка</button>
      <div className="h-[110vh]">f,fj,f</div>
    </main>
  );
}
