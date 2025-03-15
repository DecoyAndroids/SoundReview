'use client';

import Image from 'next/image';
import { useAuthStore } from '~/store/authStore';  
import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';

export const ProfileCover: React.FC = () => {
    const logout = useAuthStore((state) => state.logout)
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.push('/')
      };
    return (
        <div className="h-full bg-[rgb(var(--blackbrown))] rounded-[9px]">
            <div>
                  <div className="h-[20rem] bg-[rgb(var(--gray))] rounded-tl-[9px] rounded-tr-[9px] overflow-hidden flex items-center justify-center">
                      <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md">Добавить обложку</Button>
                 </div>
                 <div className='p-10'>
                        <Button className="bg-[rgb(var(--cursedblack))] text-white p-4 rounded-md" onClick={handleLogout}>ВЫЙТИ</Button>
                    </div>
            </div>
        </div>
    );
};
