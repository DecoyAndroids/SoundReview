'use client';

import Image from 'next/image';
import { Button } from '~/components/ui/button';

export const ProfileCover: React.FC = () => {
    return (
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded-[9px]">
                <div className="h-[20rem] bg-[rgb(var(--gray))] rounded-tl-[9px] rounded-tr-[9px] overflow-hidden flex items-center justify-center">
                    <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md">Добавить обложку</Button>
                </div>
        </div>
    );
};
