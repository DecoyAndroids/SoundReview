'use client'
import  dynamic  from "next/dynamic";
import '~/../src/styles/globals.scss';

const Editor = dynamic(() => import('~/components/createArticleHolder/CreateArticleHolder'), { ssr: false });

export default function HomePage() {
  return (
    <main className="flex bg-[rgb(var(--grey))] grow mr-[15px] ml-[15px] mt-[15px] mb-[15px] gap-3 h-fit font-ubuntu flex-col items-center justify-center text-white">
      <Editor/>
    </main>
  );
}
