'use client';

import { useState } from "react";
import type { newsBlockProps } from "~/app/types/propsTypes.module";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export const ProfilePosts: React.FC<newsBlockProps> = ({ newsBlockData = [] }) => {
    const [showAll, setShowAll] = useState(false);
    const displayedPosts = showAll ? newsBlockData : newsBlockData.slice(0, 8);
    return (
        <div className="space-y-6">
            {newsBlockData.length > 0 && (
                <div className="rounded-lg bg-[rgb(var(--blackbrown))] text-white mr-[4em] mb-[2em]">
                    <h2 className="w-20 font-bold hover:underline text-32">Посты:</h2>
                    <Separator className= {`w-[calc(100%)] mb-5 ml-0`}/>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {displayedPosts.map(post => (
                            <Link key={post.id} href="/article" className="block">
                                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-700 group">
                                    <Image
                                        src={post.articleCover}
                                        alt="news cover"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2">
                                        <h3 className="font-semibold text-white">{post.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {newsBlockData.length > 8 && (
                        <div className="flex justify-center mt-4">
                            <Button
                                onClick={() => setShowAll((prev) => !prev)}
                                className='rounded-lg bg-[rgb(var(--blackamber))] text-white'
                            >
                                {showAll ? 'Свернуть' : 'Показать больше'}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
