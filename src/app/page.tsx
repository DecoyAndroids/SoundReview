import { SearchInput } from "axios/components/ui/SearchInput/searchInput";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="flex gap-3 min-h-screen font-ubuntu flex-col items-center justify-center text-white">
      
      <SearchInput/>
      <button>Кнопка</button>
    </main>
  );
}
